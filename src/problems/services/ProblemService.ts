import {ProblemGroup} from "@/problems/domain/model/ProblemGroup.ts";
import axios from "axios";

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