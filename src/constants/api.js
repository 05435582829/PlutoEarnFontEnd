import axios from "axios";
import api from "../Utils/AxiosInstance";
import auth from "../Utils/AuthInstance";
import reward from "../Utils/RewardInstance";
import apple from "../Utils/WithdrawInstance";

export const SignupLogin = async (userId, chatId) => {
  try {
    const res = await auth.get(
      `/pub/user/register/login/${userId}/${chatId}/null`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const GetEarningBal = async () => {
  try {
    const res = await apple.get(`/portfolio/get/earnings/balance`);
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
    const res = await reward.get(`/reward/initialize`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const ClaimReward = async () => {
  try {
    const res = await reward.get(`/reward/claim/reward`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const WithdrawReward = async (payload) => {
  try {
    const res = await apple.post(`/api/withdrawal/external`, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const CompleteTask = async (task) => {
  try {
    const res = await reward.get(`/reward/complete/task/${task}`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
