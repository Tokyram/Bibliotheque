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

export const getLivres = async (pageNumber: number, pageSize: number, recherche?: string): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/livre/livres`, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          pageNumber,
          pageSize,
          recherche
        }
      }
    );

    return response;

  } catch (error) {
    console.error('Erreur lors de la récupération des livres:', error);
    throw error;
  }
}

export const getCategories = async (): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/categorie/categories`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;

  } catch (e) {
    console.error('Erreur lors de la récupération des livres:', e);
    throw e;
  }
}

export const getDetailLivre = async (id: number): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/livre/detail/${id}`, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;

  } catch (error) {
    console.error('Erreur lors de la récupération des livres:', error);
    throw error;
  }
}

export const ajoutCommande = async (id: number): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/commande/addCommande`,{idLivre: id}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    console.error("Add commande failed. Please try again.", error);
    throw error;
  }
}

export const getCommandePanier = async (pageNumber: number, pageSize: number, recherche?: string): Promise<any> => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${API_URL}/commande/panier`, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          pageNumber,
          pageSize,
          recherche
        }
      }
    );

    return response;

  } catch (error) {
    console.error('Erreur lors de la récupération des livres:', error);
    throw error;
  }
}

export const getRegions = async (): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/region`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;

  } catch (e) {
    console.error('Erreur lors de la récupération des régions:', e);
    throw e;
  }
}

export const confirmCommande = async (params: any): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/paiement`,params, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    console.error("Login failed. Please try again.", error);
    throw error;
  }
}