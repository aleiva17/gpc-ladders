import {ProblemGroup} from "@/problems/domain/model/ProblemGroup.ts";
import axios from "axios";
import {ProblemGroupDetail} from "@/problems/domain/model/ProblemGroupDetail.ts";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000
});


export const getAllProblemGroups = async (): Promise<Array<ProblemGroup>> => {
  const response = await instance.get("/problem-groups");

  if (response.status !== 200) {
    throw "Error while retrieving the problem groups";
  }

  return response.data;
};

export const getProblemGroup = async (id: string): Promise<ProblemGroupDetail> => {
  const response = await instance.get(`/problem-groups/${id}`);

  if (response.status !== 200) {
    throw "There was an error retrieving problem group data";
  }

  return response.data;
};