import { action, thunk } from "easy-peasy";
import services from "../services";

const usuariosModel = {
  loading: false,
  registering: false,
  users: [],

  getUsers: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      const { query = "", showFiled = false } = payload;
      actions.setLoading(true);
      return await services.usersService
        .getUsers({
          query: query.trim(),
          showFiled: showFiled,
        })
        .then((response) => {
          actions.setUsers(response.data);
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          actions.setLoading(false);
        });
    }
  ),

  getUniqueUser: thunk(async (actions, payload = { id: "" }) => {
    return await services.usersService
      .getUniqueUser({ id: payload.id })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }),

  registerNewUser: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { cpf, email, institution, name, phone, roles } = payload;
    return await services.usersService
      .createUser({
        cpf,
        email: email.trim(),
        institution: institution.trim(),
        name: name.trim(),
        phone,
        roles,
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  updateUser: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { id, name, email, cpf, institution, phone, roles } = payload;
    return await services.usersService
      .updateUser({
        id,
        name: name.trim(),
        email: email.trim(),
        cpf,
        institution: institution.trim(),
        phone,
      })
      .then(async () => {
        await services.usersService.updateUserRoles({
          id,
          roles,
        });
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  blockUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    return await services.usersService
      .blockUser({ id: payload.id })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  archiveUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    return await services.usersService
      .archiveUser({ id: payload.id })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  activeUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    return await services.usersService
      .activeUser({ id: payload.id })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  resendCredentials: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    return await services.usersService
      .resendCredentials({ id: payload.id })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setUsers: action((state, payload) => {
    state.users = payload;
  }),
};

export default usuariosModel;
