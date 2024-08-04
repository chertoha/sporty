import { object, string, number } from "yup";

const EMAIL_RULES = string().email("email must be valid").required();

export const subscriptionFormSchema = object({
  email: EMAIL_RULES,
});

export const ratingFormSchema = object({
  rating: number().min(0.1).required(),
  email: EMAIL_RULES,
  comment: string().min(10, "Comment have to be at least 10 symobls"),
});
