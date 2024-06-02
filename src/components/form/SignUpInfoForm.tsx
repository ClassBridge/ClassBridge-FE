"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
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

const genders = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
];

const interests = [
  { value: "cooking", label: "쿠킹" },
  { value: "handmade", label: "핸드메이드" },
  { value: "fitness", label: "피트니스" },
  { value: "drawing", label: "드로잉" },
  { value: "gardening", label: "가드닝" },
];

interface Props {
  toSuccessPage: () => void;
}

export default function SignUpInfoForm({ toSuccessPage }: Props) {
  const [isValidUsername, setIsValidUsername] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | null>(null);
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
        {signUpInfoFormField.map((item) => (
          <FormField
            key={item.value}
            control={form.control}
            name={item.value}
            render={({ field }) => (
              <FormItem className="text-black">
                <FormLabel>
                  {item.label}
                  {item.required && "(필수)"}
                </FormLabel>
                {item.value === "picture" ? (
                  <>
                    {preview && (
                      <Image
                        src={preview}
                        alt="Preview"
                        width={40}
                        height={40}
                        className="rounded-full mr-10"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    <button onClick={handleButtonClick}>{"사진 업로드"}</button>
                  </>
                ) : item.value === "gender" ? (
                  <ToggleGroup variant="outline" type="single">
                    {genders.map((gender) => (
                      <ToggleGroupItem key={gender.value} value={gender.value}>
                        {gender.label}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                ) : item.value === "interest" ? (
                  <ToggleGroup variant="outline" type="multiple">
                    {interests.map((interest) => (
                      <ToggleGroupItem
                        key={interest.value}
                        value={interest.value}
                      >
                        {interest.label}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                ) : (
                  <FormControl>
                    <>
                      <Input
                        placeholder={item.label}
                        className="rounded border-gray-light placeholder:text-gray modal-input"
                        value={field.value as string}
                      />
                      {item.value === "username" && (
                        <Button>{"중복확인"}</Button>
                      )}
                    </>
                  </FormControl>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
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
