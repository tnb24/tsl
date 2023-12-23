import axios from "axios";
import { getInfo } from "../../types/types";

export async function getInfo(params: getInfo) {
  try {
    const method = "user.getinfo";
    const data = await axios.get(params.API_LINK, {
      params: {
        method,
        username: params.username,
        api_key: params.KEY,
        format: "json",
      },
    });
    const ProfileInfo = await data.data.user;
    return ProfileInfo;
  } catch (error) {
    console.error(error);
  }
}
