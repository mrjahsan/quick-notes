import { ID } from "react-native-appwrite";
import databaseService from "./databaseService";

// Appwrite Database and Collection IDs
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
    // Create a new note
    async getNotes() {
        const response = await databaseService.listDocuments(dbId, colId);
        if (response.error) {
            return { error: response.error };
        }

        return { data: response };
    },

    // Add a new note
    async addNote(note) {
        if (!note) {
            return { error: "Note text is required" };
        }
        const data = {
            text: note,
            createdAt: new Date().toISOString(),
        }

        const response = await databaseService.createDocument(
            dbId,
            colId,
            ID.unique(),
            data,
        );

        // USING OPTIONAL CHAINING
        if (response?.error) {
            return { error: response.error };
        }

        return { data: response };
    },

    // Update a note
    async updateNote(id, note) {
        const response = await databaseService.updateDocument(dbId, colId, id, {
            text: note,
        });
        if (response?.error) {
            return { error: response.error };
        }
        
        return { data: response };
    },

    // Delete a note
    async deleteNote(id) {
        const response = await databaseService.deleteDocument(dbId, colId, id);
        if (response?.error) {
            return { error: response.error };
        }

        return { success: true };
    },
};

export default noteService;