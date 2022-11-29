import { action } from "easy-peasy";

const trilhasModel = {
  loading: false,
  registering: false,

  trilhas: [],

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
};

export default trilhasModel;
