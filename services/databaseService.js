import { database } from "./appwrite";

const databaseService = {
    // List documents 
    async listDocuments(dbId, colId) {
        try {
            const response = await database.listDocuments(dbId, colId);
            return response.documents;
        } catch (error) {
            console.error("Error listing documents:", error.message);
            return { error: error.message }
        }
    },

    // Create documents
    async createDocument(dbId, colId, id, data) {
        try {
            return await database.createDocument(dbId, colId, id, data);
        } catch (error) {
            console.error("Error creating document:", error.message);
            return { 
                error: error.message,
            };
        }
    }
};

export default databaseService;