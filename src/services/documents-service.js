import AuthAxios from "./auth-axios";

export default {
  getDocuments: ({ onlyFiled = true }) =>
    AuthAxios.get("/documents/all", {
      params: {
        onlyFiled,
      },
    }),

  getDocumentsTypes: () => AuthAxios.get("/documents/types"),

  getDocumentSubTypes: ({ typeId = null }) =>
    AuthAxios.get("/documents/subtypes", {
      params: {
        typeId,
      },
    }),

  getUniqueDocument: ({ documentId }) =>
    AuthAxios.get(`/documents/find/${documentId}`),

  createDocument: ({ document }) => AuthAxios.post("/documents/new", document),

  updateDocument: ({ documentId, documentValues }) =>
    AuthAxios.put(`/documents/update/${documentId}`, documentValues),

  archiveDocument: ({ documentId }) =>
    AuthAxios.patch(`/documents/archive/${documentId}`),

  unarchiveDocument: ({ documentId }) =>
    AuthAxios.patch(`/documents/unarchive/${documentId}`),
};
