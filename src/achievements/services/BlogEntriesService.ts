import axios from "axios";
import {BlogPost} from "@/achievements/domain/model/BlogPost.ts";

const instance = axios.create({
  baseURL: "https://codeforces.com/api/",
  timeout: 6000
});


export const getAllBlogPosts = async (handle: string): Promise<Array<BlogPost>> => {
  const response = await instance.get(`/user.blogEntries?handle=${handle}`);
  const blogEntries = response.data;

  if (blogEntries.status !== "OK") {
    throw blogEntries["comment"];
  }

  return blogEntries.result;
}