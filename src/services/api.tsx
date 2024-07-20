// src/services/api.ts
import { Country } from "../types/types";
import instance from "./axios";

export async function getCountry(): Promise<Country[]> {
    try {
        const response = await instance.get<Country[]>('/data.json');
        return response.data; // Return only the data
    } catch (error) {
        throw error;
    }
}
