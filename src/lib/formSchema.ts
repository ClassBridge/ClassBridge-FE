import { z } from "zod";

const MESSAGE = {
  required: "필수 입력 사항입니다.",
  invalidEmail: "유효한 이메일 형식이 아닙니다.",
  invalidPassword: "비밀번호는 6자 이상입니다.",
};

export const logInFormSchema = z.object({
  email: z
    .string({ required_error: MESSAGE.required })
    .email({ message: MESSAGE.invalidEmail }),
  password: z
    .string({ required_error: MESSAGE.required })
    .min(6, { message: MESSAGE.invalidPassword }),
});
