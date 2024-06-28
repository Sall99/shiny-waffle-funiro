import { instance } from "@/config";
import { createAccountFormValues } from "@/types";

export const resisterAction = async (values: createAccountFormValues) => {
  const { data } = await instance.post(`/auth/register`, values);

  return data;
};
