/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";

export const verifyIfDocumentAlreadyExists = async (document: string) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_SERVER}/studentDocument/${document}`);
    return { data: data, err: null };
  } catch (err) {
    return { data: null, err };
  }
}

export const verifyIfEmailAlreadyExists = async (email: string) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_SERVER}/studentEmail`, {headers: {email}});
    return { data: data, err: null };
  } catch (err) {
    return { data: null, err };
  }
}