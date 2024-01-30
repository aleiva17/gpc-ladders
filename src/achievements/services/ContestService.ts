import axios from "axios";
import {RatingChange} from "@/achievements/domain/model/RatingChange.ts";

const instance = axios.create({
  baseURL: "https://codeforces.com/api/",
  timeout: 6000
});

export const getAllContestByHandle = async (handle: string): Promise<Array<RatingChange>> => {
  const response = await instance.get(`/user.rating?handle=${handle}`);
  const contests = response.data;

  if (contests.status !== "OK") {
    throw contests["comment"];
  }

  return contests.result;
}