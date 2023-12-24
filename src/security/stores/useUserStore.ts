import {create} from "zustand";
import {persist} from "zustand/middleware";
import {User} from "@/security/domain/models/User.ts";

export type UserState = {
  user: User | null;
  setUser: (newUser: User) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserState>()(persist(((set) => ({
  user: null,
  setUser: (newUser: User) => set(() => ({
    user: { ...newUser }
  })),
  removeUser: () => set(() => ({
    user: null
  })),
})), {
  name: "user"
}))