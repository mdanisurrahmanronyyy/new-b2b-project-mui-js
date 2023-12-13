import axios from "axios";
import { CustomToast } from "../../components/common/customToast";

export const userSignin = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER}/api/user/b2blogin`,
      { email, password }
    );
    if (response?.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response?.data?.message);
    }
  } catch (error) {
    throw new Error(error);
  }
};


export const userSignup = async (payload) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER}/api/user/b2bregister`,
      payload
    );

    if (response) {
      return response;
    } else {
      CustomToast("id-error-response", "error", "Error");
    }
  } catch (error) {
    CustomToast("id-error-connection6", "error", "Connection error");
  }
};

export const recoverPasswordRequest = async (payload) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER}/api/PasswordRecovery/SendResetLink`,
      payload
    );
    if (response) {
      return response;
    } else {
      CustomToast("id-error-password6", "error", "Error");
    }
  } catch (error) {
    CustomToast("id-error-connection", "error", "Connection error");
  }
};

export const resetPasswordRequest = async (payload) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER}/api/PasswordRecovery/changePassword`,
      payload
    );
    if (response) {
      return response;
    } else {
      CustomToast("id-error-response7", "error", "Error");
    }
  } catch (error) {
    CustomToast("id-error-response8", "error", "Connection error");
  }
};

export const promotionalBeforeLog = async () => {
  const response = await axios.get(`${process.env.SERVER}/api/PopUpMassage/1`);
  return response;
};

export const promotionalAfterLog = async () => {
  const response = await axios.get(`${process.env.SERVER}/api/PopUpMassage/2`);

  return response;
};
