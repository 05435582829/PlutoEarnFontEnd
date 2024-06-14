import axios from "axios";

export const SignupLogin = async ({ userId, chatId }) => {
  try {
    const res = await axios.get(
      `https://plutoearn.egoras.com/pub/user/register/login/${userId}/${chatId}`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
