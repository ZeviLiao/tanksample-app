import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MenuItem } from "../lib/api";

const fetchMenuClient = async (): Promise<MenuItem[]> => {
  const response = await axios.get("/api/menu");
  return response.data;
};

export const useMenu = () => {
  return useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenuClient,
  });
};