import { thunk } from "easy-peasy";
import services from "../services";

const documentsModel = {
  getDocuments: thunk(async (_actions, payload = { onlyFiled: false }) => {
    const { onlyFiled = false } = payload;
    try {
      const documents = await services.documentsService.getDocuments({
        onlyFiled,
      });
      return documents.data;
    } catch (error) {
      throw new Error(error);
    }
  }),

  getUniqueDocument: thunk(async (_actions, { documentId }) => {
    try {
      const document = await services.documentsService.getUniqueDocument({
        documentId,
      });
      return document.data;
    } catch (error) {
      throw new Error(error);
    }
  }),

  getDocumentsTypes: thunk(async () => {
    try {
      const documentsTypes =
        await services.documentsService.getDocumentsTypes();
      return documentsTypes.data;
    } catch (error) {
      throw new Error(error);
    }
  }),

  getDocumentSubTypes: thunk(async (_actions, { typeId }) => {
    try {
      const documentsTypes =
        await services.documentsService.getDocumentSubTypes({
          typeId,
        });
      return documentsTypes.data;
    } catch (error) {
      throw new Error(error);
    }
  }),

  createDocument: thunk(async (_actions, { document }) => {
    try {
      const response = await services.documentsService.createDocument({
        document,
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }),

  updateDocument: thunk(async (_actions, { documentId, documentValues }) => {
    try {
      const response = await services.documentsService.updateDocument({
        documentId,
        documentValues,
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }),

  archiveDocument: thunk(async (_actions, { documentId }) => {
    try {
      const response = await services.documentsService.archiveDocument({
        documentId,
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }),

  unarchiveDocument: thunk(async (_actions, { documentId }) => {
    try {
      const response = await services.documentsService.unarchiveDocument({
        documentId,
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }),
};

export default documentsModel;
