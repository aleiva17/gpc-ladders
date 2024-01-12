import {create} from "zustand";
import {persist} from "zustand/middleware";
import {User} from "@/security/domain/models/User.ts";

export type UserState = {
  user: User | null;
  setUser: (newUser: User) => void;
  removeUser: () => void;
  setPreferredHandle: (preferredHandle: string | undefined) => void;
  setPreferredProfilePicture: (preferredProfilePicture: string | undefined) => void;
}

export const useUserStore = create<UserState>()(persist(((set) => ({
  user: null,
  setUser: (newUser: User) => set(() => ({
    user: { ...newUser }
  })),
  removeUser: () => set(() => ({
    user: null
  })),
  setPreferredHandle: (preferredHandle: string | undefined) => set(({ user }) => ({
    user: {
      ...user!,
      preferredHandle: preferredHandle
    }
  })),
  setPreferredProfilePicture: (profilePicture: string | undefined) => set(({ user }) => ({
    user: {
      ...user!,
      preferredProfilePicture: profilePicture
    }
  }))
})), {
  name: "user"
}))