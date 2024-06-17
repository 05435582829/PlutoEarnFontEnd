import axios from "axios";
import api from "../Utils/AxiosInstance";

export const SignupLogin = async (userId, chatId) => {
  try {
    const res = await axios.get(
      `https://plutoearn.egoras.com/pub/user/register/login/${userId}/${chatId}`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const GetEarningBal = async () => {
  try {
    const res = await api.get(`/portfolio/get/earnings/balance`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const GetTransactions = async () => {
  try {
    const res = await api.get(`/portfolio/get/transaction/history`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const GetRefs = async () => {
  try {
    const res = await api.get(`/referral/user/referral/count`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const InitializeEarning = async () => {
  try {
    const res = await api.get(`/reward/initialize`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const ClaimReward = async () => {
  try {
    const res = await api.get(`/reward/claim/reward`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const WithdrawReward = async (payload) => {
  try {
    const res = await api.post(`/api/withdrawal/external`, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
