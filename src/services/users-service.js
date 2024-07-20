import AuthAxios from "./auth-axios";

export default {
  createUser: (payload) =>
    AuthAxios.post("/users/new", {
      cpf: payload.cpf,
      email: payload.email,
      institution: payload.institution,
      name: payload.name,
      phone: payload.phone,
      roles: payload.roles,
    }),

  resendCredentials: (payload) =>
    AuthAxios.post(`/users/${payload.id}/resend-credentials`),

  updateUser: (payload) =>
    AuthAxios.put(`/profile/${payload.id}/update`, {
      name: payload.name,
      email: payload.email,
      cpf: payload.cpf,
      institution: payload.institution,
      phone: payload.phone,
    }),

  updateUserRoles: (payload) =>
    AuthAxios.patch(`/profile/${payload.id}/update-roles`, {
      roles: payload.roles,
    }),

  blockUser: (payload) => AuthAxios.patch(`/users/${payload.id}/block`),

  archiveUser: (payload) => AuthAxios.patch(`/users/${payload.id}/archive`),

  activeUser: (payload) => AuthAxios.patch(`/users/${payload.id}/active`),

  getUsers: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/users/all?search=${payload.query}&includeFiled=${payload.showFiled}`
    ),

  getUniqueUser: (payload) => AuthAxios.get(`/profile/${payload.id}`),

  signTerm: (payload) =>
    AuthAxios.patch(`/users/sign-term`, {
      userId: payload.userId,
    }),
};
