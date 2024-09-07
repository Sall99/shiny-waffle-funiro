import { instance } from "@/config";
import { ContactMessageData } from "@/types";

export const contactAction = async (values: ContactMessageData) => {
  const { data } = await instance.post(`/contact-message`, values);

  return data;
};
