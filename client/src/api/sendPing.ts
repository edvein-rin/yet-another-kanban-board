import axios from "axios";

export const sendPing = async () => (await axios.get<string>("/ping")).data;
