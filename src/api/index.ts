import axios from "axios";

export const cohereURL = "https://api.cohere.ai/v1";
const cohereAPIToken = "l9rqmbRq6ay5Tq5wkyxhQ6cN1HIvW798nUqBeO4i";
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