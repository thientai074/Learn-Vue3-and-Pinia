import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    currentUser: [],
    isAuthenticated: false,
    message: "",
  }),
  getters: {
    getMessageAuth: (state) => state.message,
    authenticate: (state) => state.isAuthenticated,
  },
  actions: {
    async loginUser(loginForm: any) {
      const res = await axios.post(
        "http://localhost:4000/api/login",
        loginForm
      );
      if (res.data.success) {
        this.currentUser = res.data.data.userInfor;
        this.isAuthenticated = true;
        this.message = res.data.message;
        localStorage.setItem("todo", res.data.data.accessToken);
      } else if (!res.data.success) {
        (this.currentUser = []), (this.isAuthenticated = false);
        this.message = res.data.message;
      } else {
        this.message = "Internal Server error";
      }
    },

    async registerUser(registerForm: any) {
      const res = await axios.post(
        "http://localhost:4000/api/user",
        registerForm
      );
      this.currentUser = [];
      this.isAuthenticated = false;
      this.message = res.data.message;
    },
  },
});
