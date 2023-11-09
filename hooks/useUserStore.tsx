import supabase from "@/lib/supabase"
import { create } from "zustand"

interface User {
  id: string
  is_admin: boolean
  created_at: string
}

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
  signOut: () => void
}

const useUserStore = create<UserStore>(set => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
  signOut: () => {
    set({ user: null })
    supabase.auth.signOut()
  },
}))

export default useUserStore
