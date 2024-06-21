"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpFormSchema } from "@/lib/formSchema";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/state/alert";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
  sendSignupData: (data: SignUpFormData) => void;
}

export default function SignUpForm({ sendSignupData }: Props) {
  const { refresh } = useRouter();
  const setAlert = useSetRecoilState(alertState);

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    const response = await fetch(`/api/users/auth/check-email/${data.email}`);

    const result = await response.json();

    switch (result) {
      case 200:
        return sendSignupData(data);
      case 400:
        form.reset({ email: "", password: "", rePassword: "" });
        return setAlert({ content: "이미 등록된 이메일입니다." });
      case 500:
        refresh();
        return setAlert({
          content: "오류가 발생했습니다. 다시 시도해 주세요.",
        });
    }
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
                    className="rounded border-gray-light placeholder:text-gray"
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
