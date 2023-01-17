/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataType } from "../types/DataType";
import { CreateType } from "../types/DataType";
import { UpdateType } from "../types/DataType";
import { basicApi } from "../lib/basicApi";
import config from "../lib/config";

export const handleSignIn = async (userInfo: DataType) => {
  const result = await basicApi.post(config.postLogInInfo, userInfo);
  localStorage.setItem("token", result.data.token);
};

export const handleSignUp = async (userInfo: DataType) => {
  const result = await basicApi.post(config.postSignUpInfo, userInfo);
  localStorage.setItem("token", result.data.token);
};

export const createTodo = async (createInfo: CreateType) => {
  await basicApi.post(config.postCreateTodo, createInfo);
};

export const getTodos = async () => {
  const result = await basicApi.get(config.getTodos);
  return result.data?.data;
};

export const getTodoById = async (id: string | undefined) => {
  const result = await basicApi.get(config.getTodoById);
  return result.data?.data;
};

export const deleteTodo = async (id: string | undefined) => {
  await basicApi.delete(config.deleteTodo);
};

export const updateTodo = async ({ id, title, content }: UpdateType) => {
  const result = await basicApi.put(config.putUpdateTodo, {
    title,
    content,
  });
  return result.data?.data;
};
