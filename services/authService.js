import { account } from "./appwrite";
import { ID } from "react-native-appwrite";

const authService = {
    // Register a new user
    async register(email, password) {
        try {
            const response = await account.create(ID.unique(), email, password);
            return response; 
        }   catch (error) {
            return {
                error: error.message || "Registration failed, please try again!" 
            }
        }
    },
    async login(email, password) {
        try {
            const response = await account.createEmailPasswordSession(email, password);
            return response; 
        }   catch (error) {
            return {
                error: error.message || "Login Failed. Please check your credentials!" 
            }
        } 
    },
    // Get logged in user
    async getUser() {
        try {
            return await account.get();
        } catch (error) {
            return null;
        }
    },
    async logout() {
        try {
          await account.deleteSession("current");
          return { success: true };
        } catch (error) {
          return {
            error: error.message || "Logout Failed. Please try again!"
          };
        }
    }
};    

export default authService;
