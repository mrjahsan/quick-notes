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

export default databaseService;


    //    // Create document
//    async createDocument(dbId, colId, document) {
//     try {
//         const response = await database.createDocument(dbId, colId, document);
//     }
//    }
// }