import axios from "axios";

export const baseURL = 'https://bank.gov.ua';
export const api = axios.create({baseURL});
