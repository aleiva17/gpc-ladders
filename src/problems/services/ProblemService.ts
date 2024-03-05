import {ProblemGroup} from "@/problems/domain/model/ProblemGroup.ts";
import axios from "axios";
import {ProblemGroupDetail} from "@/problems/domain/model/ProblemGroupDetail.ts";
import {ProblemListDetail} from "@/problems/domain/model/ProblemListDetail.ts";
import {WebStorageCache} from "@/shared/models/WebStorageCache.ts";

const instance = axios.create({
  baseURL: "https://microhost.biz/gpc/",
  timeout: 10000
});

const webStorageCache = WebStorageCache.getInstance();

export const getAllProblemGroups = async (): Promise<Array<ProblemGroup>> => {
  const cachedData = webStorageCache.get("problem-groups");

  if (cachedData !== undefined) {
    return cachedData as ProblemGroup[];
  }

  const response = await instance.get("/problem-groups");

  if (response.status !== 200) {
    throw "Error while retrieving the problem groups";
  }

  webStorageCache.set("problem-groups", response.data);
  return response.data;
};

export const getProblemGroup = async (id: string): Promise<ProblemGroupDetail> => {
  const cachedData = webStorageCache.get(`problem-groups-${id}`);

  if (cachedData !== undefined) {
    return cachedData as ProblemGroupDetail;
  }

  const response = await instance.get(`/problem-groups/${id}`);

  if (response.status !== 200) {
    throw "There was an error retrieving problem group data";
  }

  webStorageCache.set(`problem-groups-${id}`, response.data);
  return response.data;
};

export const getProblemList = async (groupId: string, listId: string): Promise<ProblemListDetail> => {
  const cachedData = webStorageCache.get(`problem-groups-${groupId}-${listId}`);

  if (cachedData !== undefined) {
    return cachedData as ProblemListDetail;
  }

  const response = await instance.get(`/problem-lists/${groupId}/${listId}`);

  if (response.status !== 200) {
    throw "There was an error retrieving problem group data";
  }

  webStorageCache.set(`problem-groups-${groupId}-${listId}`, response.data);
  return response.data;
};