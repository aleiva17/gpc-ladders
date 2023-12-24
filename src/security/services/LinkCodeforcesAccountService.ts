import axios from "axios";

const instance = axios.create({
  baseURL: "https://codeforces.com/api/",
  timeout: 6000
});

export const getUserInfoByHandle = (handle: string, signal?: AbortSignal) => {
  return instance.get(`/user.info?handles=${handle}`, signal ? { signal: signal } : {});
}