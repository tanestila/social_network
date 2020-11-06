const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    { id: 1, followed: false, fullname: "dima", status: "lalala", photoURL: '', location: { city: "Moscow", country: "Russia" } },
    { id: 2, followed: true, fullname: "sasha", status: "truw", photoURL: '', location: { city: "Tomsk", country: "Russia" } },
    { id: 3, followed: false, fullname: "olya", status: "lol", photoURL: '', location: { city: "NY", country: "USA" } }
  ],

}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed }
          }
          return u
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }


    default:
      return state;
  }
}

export const toggleFollowAC = (userId) => ({
  type: TOGGLE_FOLLOW,
  userId
})

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
})

export default usersReducer