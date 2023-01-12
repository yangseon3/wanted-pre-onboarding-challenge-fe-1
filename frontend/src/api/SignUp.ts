/* eslint-disable @typescript-eslint/no-explicit-any */
import { basicApi } from "../lib/config";
import API from "../lib/api";

export const SignUpController = async (data: any) => {
  try {
    const response = await basicApi.post(API.postSignUpInfo, data);

    if (response.status === 201) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e: any) {
    return [true, e.message];
  }
};
