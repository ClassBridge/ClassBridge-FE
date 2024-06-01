"use client";

import { useRouter } from "next/navigation";
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

import { logInFormSchema } from "@/lib/formSchema";
import { closeModal } from "@/lib/utils";

type LogInFormData = z.infer<typeof logInFormSchema>;

const loginFormField: { name: "email" | "password"; label: string }[] = [
  { name: "email", label: "이메일" },
  { name: "password", label: "비밀번호" },
];

export default function LogInForm() {
  const { push } = useRouter();

  const form = useForm<LogInFormData>({
    resolver: zodResolver(logInFormSchema),
  });

  const onSubmit = (data: LogInFormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {loginFormField.map((item) => (
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
                    {...field}
                    className="rounded border-gray-light placeholder:text-gray"
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
            {"로그인"}
          </button>
          <button
            type="button"
            className="py-[9px] rounded border border-primary font-medium text-base text-primary bg-white"
            onClick={() => {
              closeModal();
              push("/account/signup");
            }}
          >
            {"회원가입"}
          </button>
        </div>
      </form>
    </Form>
  );
}