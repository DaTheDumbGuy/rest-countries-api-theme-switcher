// src/services/api.ts

import axios from "./axios";
import { Country } from "../types/types";

export async function getCountry(): Promise<Country[]> {
    try {
        const response = await axios.get<Country[]>('/data.json');
        return response.data; // Return only the data
    } catch (error) {
        throw error;
    }
}
