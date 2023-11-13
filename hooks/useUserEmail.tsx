import { create } from "zustand"

interface UserEmailState {
  userEmail: string
  setUserEmail: (userEmail: string) => void
  checkForEmail: () => void
}

const useUserEmail = create<UserEmailState>(set => ({
  userEmail: "",
  checkForEmail: () => {
    if (localStorage) {
      const userEmail = localStorage.getItem("userEmail")
      console.log("TWTWTWTTWTWTWTTWTWTWTTWTWTWT", userEmail)
      if (userEmail) set({ userEmail })
    }
  },
  setUserEmail: (userEmail: string) => {
    if (localStorage) localStorage.setItem("userEmail", userEmail)
    set({ userEmail })
  },
}))

export default useUserEmail
