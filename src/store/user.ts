import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
    message: "",
  }),
  getters: {
    allUsers: (state) => state.users,
  },
  actions: {
    async getAllUsers() {
      const token = localStorage.getItem("todo");
      if (token) {
        const res = await axios.get("http://localhost:4000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        if (res.data.success) {
          this.users = res.data.data;
          this.message = res.data.message;
        } else {
          this.users = [];
          this.message = res.data.message;
        }
      }
    },
    async deleteUser(userId: string) {
      try {
        const token = localStorage.getItem("todo");
        if (token) {
          const res = await axios.delete(
            `http://localhost:4000/api/user/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(res.data);
          if (res.data.success) {
            this.users = this.users.filter((user: any) => user._id !== userId);
            this.message = res.data.message;
            console.log("Thanh cong")
            console.log("nanana", this.users)
            // } else {
            //   this.users = [];
            //   this.message = res.data.message;
            // }
          } else {
            console.log("That bai")
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
