"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { signUpInfoFormSchema } from "@/lib/formSchema";
import { useRef, useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import ProfilePicture from "../common/ProfilePicture";
import { cn } from "@/lib/utils";

type SignUpInfoFormData = z.infer<typeof signUpInfoFormSchema>;

const signUpInfoFormField: {
  value: "username" | "phone" | "picture" | "gender" | "birthdate" | "interest";
  label: string;
  required?: boolean;
}[] = [
  { value: "username", label: "유저이름", required: true },
  { value: "phone", label: "연락처", required: true },
  { value: "picture", label: "프로필 사진" },
  { value: "gender", label: "성별" },
  { value: "birthdate", label: "생년월일" },
  { value: "interest", label: "관심사" },
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
  const [isValidUsername, setIsValidUsername] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<Gender>();
  const [selectedInterest, setSelectedInterest] = useState<Interest[]>([]);
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<SignUpInfoFormData>({
    resolver: zodResolver(signUpInfoFormSchema),
  });

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    console.log(data);
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
              <FormLabel>{`${signUpInfoFormField[0].label} (필수)`}</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input
                    placeholder={signUpInfoFormField[0].label}
                    className="rounded border-gray-light placeholder:text-gray modal-input"
                    value={field.value as string}
                  />
                  <Button text="중복확인" primary type="sm" />
                </div>
              </FormControl>
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
                  placeholder={signUpInfoFormField[1].label}
                  className="rounded border-gray-light placeholder:text-gray modal-input"
                  value={field.value as string}
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
          render={({ field }) => (
            <FormItem className="text-black">
              <FormLabel>{signUpInfoFormField[2].label}</FormLabel>
              <div className="flex gap-10">
                <ProfilePicture src={preview} fallback="CB" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <Button
                  text="사진 업로드"
                  primary
                  type="sm"
                  onClick={handleButtonClick}
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
                      className={cn(
                        "w-20 h-full transition duration-300",
                        i === 0
                          ? "rounded-l border-r border-gray-light"
                          : "rounded-r",
                        selectedGender === gender.value && "bg-primary-blur"
                      )}
                      onClick={() => setSelectedGender(gender.value)}
                    >
                      {gender.label}
                    </button>
                  ))}
                  <input type="hidden" name="gender" value={selectedGender} />
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
                    placeholder={signUpInfoFormField[4].label}
                    className="rounded border-gray-light placeholder:text-gray modal-input"
                    value={field.value as string}
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
                {interests.map((interest) => (
                  <button
                    key={interest.value}
                    value={interest.value}
                    className={cn(
                      "h-14 rounded border border-gray-light transition duration-300",
                      selectedInterest.includes(interest.value) &&
                        "bg-primary-blur"
                    )}
                    onClick={() => {
                      if (selectedInterest.includes(interest.value)) {
                        const newInterests = selectedInterest.filter(
                          (e) => e !== interest.value
                        );
                        setSelectedInterest(newInterests);
                      } else {
                        setSelectedInterest(
                          selectedInterest.concat(interest.value)
                        );
                      }
                    }}
                  >
                    {interest.label}
                  </button>
                ))}
                <input type="hidden" name="interest" value={selectedInterest} />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-5 pt-5">
          <button
            type="submit"
            className="py-2.5 rounded font-medium text-base text-white bg-primary"
            onClick={toSuccessPage}
          >
            {"완료하기"}
          </button>
        </div>
      </form>
    </Form>
  );
}
