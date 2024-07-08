import { thunk } from "easy-peasy";
import services from "../services";

const documentsModel = {
  getDocuments: thunk(async () => {
    try {
      const documents = await services.documentsService.getDocuments();
      return documents.data;
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
};

export default documentsModel;
