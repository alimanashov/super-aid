import axios from "axios";

export const cohereURL = "https://api.cohere.ai/v1";
const cohereAPIToken = "kwzSq4QLNBcFCA732RxXiUdSJdvp0fQsI4htQP2K";
export const serverURL = "";
export const api = axios.create({
    baseURL: serverURL,
});
export const cohere = axios.create({
    baseURL: cohereURL,
    headers: {
        Authorization: `Bearer ${cohereAPIToken}`,
    },
});