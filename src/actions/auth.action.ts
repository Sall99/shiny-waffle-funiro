import { instance } from "@/config";
import {
  addressBookFormValues,
  createAccountFormValues,
  UserInformatioFormValues,
} from "@/types";

export const resisterAction = async (values: createAccountFormValues) => {
  const { data } = await instance.post(`/auth/register`, values);

  return data;
};

export const updateUserPersonal = async (values: UserInformatioFormValues) => {
  const { data } = await instance.post(`/auth/update-user-personal`, values);

  return data;
};

export const createAddressBook = async (values: addressBookFormValues) => {
  const { data } = await instance.post(`/auth/addressbook`, values);

  return data;
};

export const getAddressBook = async () => {
  const { data } = await instance.get(`/auth/get-address-book`);

  return data;
};

export const updateUserAddressBook = async (values: addressBookFormValues) => {
  const { data } = await instance.post(`/auth/update-user-addressbook`, values);

  return data;
};
