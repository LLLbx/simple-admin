import { get, post } from "@/axios/request";
import { CreateUserInfo } from "@/types";

const baseURL = '/user-service/'

const getTest = (id: string) => {
  return get(`${baseURL}123`);
};

const createUser = (params: CreateUserInfo) => {
    return post(`${baseURL}/create`, params)
}

export { getTest, createUser };
