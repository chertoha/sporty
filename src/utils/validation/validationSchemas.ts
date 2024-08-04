import { object, string, number } from "yup";
import { emailRegexp } from "./patterns";

const EMAIL_RULES = string()
  .matches(emailRegexp, {
    message: "Value must be valid email. No russian domains permit",
  })
  .required();

export const subscriptionFormSchema = object({
  email: EMAIL_RULES,
});

export const ratingFormSchema = object({
  rate: number().min(0.1).required(),
  email: EMAIL_RULES,
  review: string().min(10, "Comment have to be at least 10 symobls"),
});
