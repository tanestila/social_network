const { default: Axios } = require("axios")

const instance = Axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "7e693363-1a82-4ed7-ba46-077794baea90" }
});


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  }
}