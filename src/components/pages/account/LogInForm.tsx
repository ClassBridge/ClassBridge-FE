"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { logInFormSchema } from "@/lib/formSchema";
// import { login } from "@/lib/supabase/actions/auth";
import { useAuthContext } from "@/state/auth";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/state/alert";
import { closeModal } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export type LogInFormData = z.infer<typeof logInFormSchema>;

const logInFormField: { name: "email" | "password"; label: string }[] = [
  { name: "email", label: "이메일" },
  { name: "password", label: "비밀번호" },
];

export default function LogInForm() {
  const { push } = useRouter();
  const authContext = useAuthContext();
  const setAlert = useSetRecoilState(alertState);

  const form = useForm<LogInFormData>({
    resolver: zodResolver(logInFormSchema),
  });

  const onSubmit = async (data: LogInFormData) => {
    const response = await fetch("/api/users/auth/signin", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const { status, accessToken } = await response.json();

    // -------- supabase -------- //
    // const result = await login(data);

    switch (status) {
      case 2:
        if (!authContext) {
          setAlert({
            content: "로그인 도중 오류가 발생했습니다. 다시 시도해 주세요.",
          });
          break;
        }

        authContext.login(accessToken);
        closeModal();
        break;
      case 4:
        setAlert({
          content: "잘못된 이메일 또는 비밀번호입니다. 다시 시도해 주세요.",
        });
        break;

      default:
        setAlert({
          content: "로그인 도중 오류가 발생했습니다. 다시 시도해 주세요.",
        });
        break;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {logInFormField.map((item) => (
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
