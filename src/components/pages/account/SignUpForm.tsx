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

import { signUpFormSchema } from "@/lib/formSchema";

export type SignUpFormData = z.infer<typeof signUpFormSchema>;

const signUpFormField: {
  name: "email" | "password" | "rePassword";
  label: string;
}[] = [
  { name: "email", label: "이메일" },
  { name: "password", label: "비밀번호" },
  { name: "rePassword", label: "비밀번호 재입력" },
];

interface Props {
  toNextPage: () => void;
  updateSignupData: (data: SignUpFormData) => void;
}

export default function SignUpForm({ toNextPage, updateSignupData }: Props) {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    updateSignupData(data);
    toNextPage();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {signUpFormField.map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem className="text-black">
                <FormLabel>{item.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={item.label}
                    type={field.name === "email" ? "email" : "password"}
                    autoComplete={
                      field.name === "email" ? "email" : "current-password"
                    }
                    className="rounded border-gray-light placeholder:text-gray modal-input"
                    {...field}
                  />
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
            {"계속하기"}
          </button>
        </div>
      </form>
    </Form>
  );
}