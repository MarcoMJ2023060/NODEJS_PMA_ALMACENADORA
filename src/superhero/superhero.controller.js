import axios from "axios";
import https from "https";

const agent = new https.Agent({ rejectUnauthorized: false });
const axiosInstance = axios.create({ httpsAgent: agent });

export const obtenerLosSuperheroes = async (req, res) => {
    try {
      const API_URL = 'https://akabab.github.io/superhero-api/api/all.json';


      const response = await axiosInstance.get(API_URL);
      const superhero = response.data;
  
      res.status(200).json({
        success: true,
        count: superhero.length,
        data: superhero,
      });
    } catch (error) {
      console.error('Error al obtener superhéroes:', error.message);
      res.status(500).json({
        success: false,
        message: 'Error al obtener los superhéroes',
        error: error.message,
      });
    }
};