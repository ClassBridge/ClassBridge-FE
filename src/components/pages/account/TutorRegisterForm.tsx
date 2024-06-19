"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/state/auth";
import { registerTutor } from "@/lib/supabase/actions/tutor";
import { tutorRegisterFormSchema } from "@/lib/formSchema";

import Button from "@/components/common/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type TutorRegisterFormData = z.infer<typeof tutorRegisterFormSchema>;

const tutorRegisterFormField: {
  name: "bank" | "account" | "businessRegistrationNumber" | "introduction";
  label: string;
  required?: boolean;
}[] = [
  { name: "bank", label: "은행명", required: true },
  { name: "account", label: "계좌번호", required: true },
  { name: "businessRegistrationNumber", label: "사업자등록번호" },
  { name: "introduction", label: "강사 소개" },
];

const banks: Record<Bank, string> = {
  KB: "국민은행",
  SHINHAN: "신한은행",
  WOORI: "우리은행",
  HANA: "하나은행",
  NH: "농협은행",
  KAKAOBANK: "카카오뱅크",
};

type Bank = "KB" | "SHINHAN" | "WOORI" | "HANA" | "NH" | "KAKAOBANK";
const isBank = (bank: string): bank is Bank =>
  Object.keys(banks).includes(bank);

const bankList: { id: Bank; name: string }[] = Object.keys(banks).map(
  (bank) => {
    if (isBank(bank)) return { id: bank, name: banks[bank] };
  },
) as { id: Bank; name: string }[];

export default function TutorRegisterForm() {
  const { refresh } = useRouter();
  const authSession = useAuthContext();
  const [selectedBank, setSelectedBank] = useState<Bank>();
  const [businessNumber, setBusinessNumber] = useState<string>();
  const [isBusinessNumberChecked, setIsBusinessNumberChecked] = useState<
    false | { isValid: boolean }
  >(false);

  useEffect(() => {
    setIsBusinessNumberChecked(false);
  }, [businessNumber]);

  const form = useForm<TutorRegisterFormData>({
    resolver: zodResolver(tutorRegisterFormSchema),
  });

  const handleCheckBusinessNumber = () => {
    // TODO check api
    if (!businessNumber) {
      return;
    }

    if (businessNumber.length === 10) {
      setIsBusinessNumberChecked({ isValid: true });
    } else {
      setIsBusinessNumberChecked({ isValid: false });
    }
  };

  const onSubmit = async (data: TutorRegisterFormData) => {
    if (!authSession || !authSession.user.id) {
      return;
    }

    if (!selectedBank || !isBank(selectedBank)) {
      return;
    }

    const tutorData = {
      ...data,
      bank: selectedBank,
      business_registration_number: businessNumber,
    };

    const success = await registerTutor(authSession.user.id, tutorData);

    if (success) {
      refresh();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          key={tutorRegisterFormField[0].name}
          control={form.control}
          name={tutorRegisterFormField[0].name}
          render={({ field }) => (
            <FormItem className="text-black">
              <FormControl>
                <Input
                  {...field}
                  autoComplete="off"
                  placeholder={tutorRegisterFormField[0].label}
                  className="hidden"
                  value={selectedBank}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          key={tutorRegisterFormField[1].name}
          control={form.control}
          name={tutorRegisterFormField[1].name}
          render={({ field }) => (
            <FormItem className="text-black">
              <FormLabel>{"정산 받을 계좌번호 (필수)"}</FormLabel>
              <div className="flex gap-2">
                <Select
                  onValueChange={(value) => setSelectedBank(value as Bank)}
                >
                  <SelectTrigger className="min-w-28 w-28">
                    <SelectValue placeholder="은행 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {bankList.map((bank) => (
                        <SelectItem key={bank.id} value={bank.id}>
                          {bank.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="off"
                    placeholder={tutorRegisterFormField[1].label}
                    className="w-80 rounded border-gray-light placeholder:text-gray"
                    value={field.value as string}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          key={tutorRegisterFormField[2].name}
          control={form.control}
          name={tutorRegisterFormField[2].name}
          render={({ field }) => (
            <FormItem className="text-black">
              <FormLabel>
                <div className="flex justify-between w-96">
                  <span>{tutorRegisterFormField[2].label}</span>
                  {!isBusinessNumberChecked ? (
                    <span className="text-gray">
                      {"*조회 버튼으로 유효 여부를 확인해주세요."}
                    </span>
                  ) : isBusinessNumberChecked.isValid ? (
                    <span className="text-primary">
                      {"*유효한 사업자등록번호입니다."}
                    </span>
                  ) : (
                    <span className="text-point-like">
                      {"*유효하지 않은 사업자등록번호입니다."}
                    </span>
                  )}
                </div>
              </FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="off"
                    placeholder={tutorRegisterFormField[2].label}
                    className="w-80 rounded border-gray-light placeholder:text-gray"
                    value={businessNumber}
                    onChange={(e) => setBusinessNumber(e.target.value)}
                  />
                </FormControl>
                <Button
                  text="조회"
                  primary
                  type="sm"
                  onClick={handleCheckBusinessNumber}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          key={tutorRegisterFormField[3].name}
          control={form.control}
          name={tutorRegisterFormField[3].name}
          render={({ field }) => (
            <FormItem className="text-black">
              <FormLabel>{tutorRegisterFormField[3].label}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  autoComplete="off"
                  placeholder={`${tutorRegisterFormField[3].label}를 입력해 주세요.`}
                  className="w-[530px] rounded border-gray-light placeholder:text-gray"
                  value={field.value as string}
                />
              </FormControl>
              <FormDescription className="text-gray">
                {
                  "친절하고 자세한 설명은 예비 수강생님들께 신뢰감을 줄 수 있어요!"
                }
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-96 mx-auto pt-5">
          <button
            type="submit"
            className="w-full py-2.5 rounded font-medium text-base text-white bg-primary"
          >
            {"완료하기"}
          </button>
        </div>
      </form>
    </Form>
  );
}
