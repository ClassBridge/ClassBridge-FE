"use client";

import { useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

import { alertState } from "@/state/alert";
import { cn, formatDate, formatPhoneNumber } from "@/lib/utils";
import { signUpInfoFormSchema } from "@/lib/formSchema";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Button from "../common/Button";
import ProfilePicture from "../common/ProfilePicture";

type SignUpInfoFormData = z.infer<typeof signUpInfoFormSchema>;

const signUpInfoFormField: {
  value:
    | "username"
    | "phoneNumber"
    | "profilePictureUrl"
    | "gender"
    | "birthDate"
    | "interests";
  label: string;
  required?: boolean;
}[] = [
  { value: "username", label: "유저이름", required: true },
  { value: "phoneNumber", label: "연락처", required: true },
  { value: "profilePictureUrl", label: "프로필 사진" },
  { value: "gender", label: "성별" },
  { value: "birthDate", label: "생년월일" },
  { value: "interests", label: "관심사" },
];

type Gender = "male" | "female";

const genders: { value: Gender; label: string }[] = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
];

type Interest =
  | "baking"
  | "cooking"
  | "candle"
  | "yoga"
  | "drawing"
  | "gardening";

const interests: { value: Interest; label: string }[] = [
  { value: "baking", label: "베이킹" },
  { value: "cooking", label: "요리" },
  { value: "candle", label: "피트니스" },
  { value: "yoga", label: "요가" },
  { value: "drawing", label: "드로잉" },
  { value: "gardening", label: "가드닝" },
  { value: "yoga", label: "요가" },
  { value: "drawing", label: "드로잉" },
  { value: "gardening", label: "가드닝" },
  { value: "drawing", label: "드로잉" },
  { value: "gardening", label: "가드닝" },
  { value: "yoga", label: "요가" },
  { value: "drawing", label: "드로잉" },
  { value: "gardening", label: "가드닝" },
  { value: "candle", label: "피트니스" },
];

interface Props {
  toSuccessPage: () => void;
}

export default function SignUpInfoForm({ toSuccessPage }: Props) {
  const [isUsernameChecked, setIsUsernameChecked] = useState<boolean>(false);
  const [isValidUsername, setIsValidUsername] = useState<boolean>(false);

  const [selectedGender, setSelectedGender] = useState<Gender>();
  const [selectedInterest, setSelectedInterest] = useState<Interest[]>([]);

  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const setAlert = useSetRecoilState(alertState);

  const form = useForm<SignUpInfoFormData>({
    resolver: zodResolver(signUpInfoFormSchema),
  });

  const handleUsernameCheck = () => {
    setIsUsernameChecked(true);
    if (isUsernameChecked) {
      setIsValidUsername(true);
    }
    // TODO check username validity API
  };

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: SignUpInfoFormData) => {
    if (!isUsernameChecked) {
      return setAlert("유저이름 중복확인을 완료해 주세요.");
    }
    if (!isValidUsername) {
      return setAlert(
        "이미 있는 유저이름입니다.<br />사용 가능한 이름을 입력해 주세요.",
      );
    }

    const formData = {
      ...data,
      gender: selectedGender,
      interests: selectedInterest,
      profilePictureUrl: preview,
    };
    console.log(formData);
    // TODO  send data to the page.tsx (setState)
    toSuccessPage();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          key={signUpInfoFormField[0].value}
          control={form.control}
          name={signUpInfoFormField[0].value}
          render={({ field }) => (
            <FormItem className="text-black">
              <FormLabel>
                <div className="flex justify-between">
                  <span>{`${signUpInfoFormField[0].label} (필수)`}</span>
                  {isUsernameChecked &&
                    (isValidUsername ? (
                      <span className="text-primary">
                        {"*사용 가능한 유저이름입니다."}
                      </span>
                    ) : (
                      <span className="text-point-like">
                        {"*이미 있는 유저이름입니다."}
                      </span>
                    ))}
                </div>
              </FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="off"
                    placeholder={signUpInfoFormField[0].label}
                    className="rounded border-gray-light placeholder:text-gray modal-input"
                    value={field.value as string}
                  />
                </FormControl>
                <Button
                  text="중복확인"
                  primary
                  type="sm"
                  onClick={handleUsernameCheck}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          key={signUpInfoFormField[1].value}
          control={form.control}
          name={signUpInfoFormField[1].value}
          render={({ field }) => (
            <FormItem className="text-black">
              <FormLabel>{`${signUpInfoFormField[1].label} (필수)`}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="off"
                  placeholder={signUpInfoFormField[1].label}
                  className="rounded border-gray-light placeholder:text-gray modal-input"
                  value={field.value as string}
                  onChange={(e) => {
                    const formattedValue = formatPhoneNumber(e);
                    field.onChange(formattedValue);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          key={signUpInfoFormField[2].value}
          control={form.control}
          name={signUpInfoFormField[2].value}
          render={() => (
            <FormItem className="text-black">
              <FormLabel>{signUpInfoFormField[2].label}</FormLabel>
              <div className="flex gap-10">
                <ProfilePicture src={preview} fallback="CB" />
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                  />
                </FormControl>
                <Button
                  text="사진 업로드"
                  primary
                  type="sm"
                  onClick={handleImageUpload}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <FormField
            key={signUpInfoFormField[3].value}
            control={form.control}
            name={signUpInfoFormField[3].value}
            render={({ field }) => (
              <FormItem className="text-black">
                <FormLabel>{signUpInfoFormField[3].label}</FormLabel>
                <div className="flex w-40 h-10 rounded border border-gray-light font-medium text-sm">
                  {genders.map((gender, i) => (
                    <button
                      key={gender.value}
                      value={gender.value}
                      type="button"
                      className={cn(
                        "w-20 h-full transition duration-300",
                        i === 0
                          ? "rounded-l border-r border-gray-light"
                          : "rounded-r",
                        selectedGender === gender.value && "bg-primary-blur",
                      )}
                      onClick={() => setSelectedGender(gender.value)}
                    >
                      {gender.label}
                    </button>
                  ))}
                  <FormControl>
                    <Input {...field} className="hidden" />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            key={signUpInfoFormField[4].value}
            control={form.control}
            name={signUpInfoFormField[4].value}
            render={({ field }) => (
              <FormItem className="w-full text-black">
                <FormLabel>{signUpInfoFormField[4].label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={signUpInfoFormField[4].label}
                    className="rounded border-gray-light placeholder:text-gray modal-input"
                    value={field.value as string}
                    onChange={(e) => {
                      const formattedValue = formatDate(e);
                      field.onChange(formattedValue);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          key={signUpInfoFormField[5].value}
          control={form.control}
          name={signUpInfoFormField[5].value}
          render={({ field }) => (
            <FormItem className="text-black">
              <FormLabel>{signUpInfoFormField[5].label}</FormLabel>
              <div className="grid grid-cols-5 gap-2 font-medium text-sm">
                {interests.map((interest, i) => (
                  <button
                    key={i}
                    value={interest.value}
                    type="button"
                    className={cn(
                      "h-14 rounded border border-gray-light transition duration-300",
                      selectedInterest.includes(interest.value) &&
                        "bg-primary-blur",
                    )}
                    onClick={() => {
                      if (selectedInterest.includes(interest.value)) {
                        const newInterests = selectedInterest.filter(
                          (e) => e !== interest.value,
                        );
                        setSelectedInterest(newInterests);
                      } else {
                        setSelectedInterest(
                          selectedInterest.concat(interest.value),
                        );
                      }
                    }}
                  >
                    {interest.label}
                  </button>
                ))}
                <FormControl>
                  <Input {...field} className="hidden" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-5 pt-5">
          <button
            type="submit"
            className="py-2.5 rounded font-medium text-base text-white bg-primary"
          >
            {"완료하기"}
          </button>
        </div>
      </form>
    </Form>
  );
}
