import AuthAxios from "./auth-axios";

export default {
  getDocuments: () => AuthAxios.get("/documents/all"),

  getDocumentsTypes: () => AuthAxios.get("/documents/types"),

  getDocumentSubTypes: ({ typeId = null }) =>
    AuthAxios.get("/documents/subtypes", {
      params: {
        typeId,
      },
    }),
};
