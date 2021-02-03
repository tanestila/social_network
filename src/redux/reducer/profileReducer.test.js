import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";

let state = {
  posts: [
    {
      message: "1",
      id: 1,
      likeCount: 0,
    },
  ],
  profile: null,
  status: "",
};

it("length posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(2);
});

it("message of added post should be it-kamasutra", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts[1].message).toBe("it-kamasutra");
});

it("length of posts should be decrement after deleting", () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(0);
});

it("length of posts shouldn`t be decrement after deleting", () => {
  // 1. test data
  let action = deletePost(100);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(1);
});
