import axios from "axios";

const API_URL = 'http://localhost:5070/api';

export const authenticateUser = async (username: string, password: string): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}/utilisateur/login`,{username, password});
        return response;
    } catch (error) {
      console.error("Login failed. Please try again.", error);
      throw error;
    }
};