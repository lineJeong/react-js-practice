import http from "./http";

export const getUserInfo = (id) => {
  return http.get(`/users/${id}`);
};

export const fetchUserInfo = (id, reqBody) => {
  return http.fetch(`/users/${id}`, reqBody);
};
