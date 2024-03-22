import axios from 'axios';
import { ICardData } from '../types';
import { API_URL } from '../constants';

export const fetchCards = async (): Promise<ICardData[]> => {
  try {
    const response = await axios.get<ICardData[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch cards:', error);
    throw new Error('Failed to fetch cards');
  }
};
