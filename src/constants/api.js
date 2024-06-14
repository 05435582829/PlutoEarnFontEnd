import axios from "axios";

export const SignupLogin = async () => {
  console.log(payload);
  try {
    const res = await axios.get(
      `https://plutoearn.egoras.com/pub/user/register/login/Ebrix/Ebri239`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
