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

import { signUpInfoFormSchema } from "@/lib/formSchema";

type SignUpInfoFormData = z.infer<typeof signUpInfoFormSchema>;

const signUpInfoFormField: {
  name: "username" | "phone" | "picture" | "gender" | "birthdate" | "interest";
  label: string;
  required?: boolean;
}[] = [
  { name: "username", label: "유저이름", required: true },
  { name: "phone", label: "연락처", required: true },
  { name: "picture", label: "프로필 사진" },
  { name: "gender", label: "성별" },
  { name: "birthdate", label: "생년월일" },
  { name: "interest", label: "관심사" },
];

interface Props {
  toSuccessPage: () => void;
}

export default function SignUpInfoForm({ toSuccessPage }: Props) {
  const form = useForm<SignUpInfoFormData>({
    resolver: zodResolver(signUpInfoFormSchema),
  });

  const onSubmit = (data: SignUpInfoFormData) => {
    console.log(data);
    toSuccessPage();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {signUpInfoFormField.map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem className="text-black">
                <FormLabel>
                  {item.label}
                  {item.required && "(필수)"}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={item.label}
                    className="rounded border-gray-light placeholder:text-gray modal-input"
                    {...field}
                  />
                  {item.name === "username" && <Button>{"중복확인"}</Button>}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
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
