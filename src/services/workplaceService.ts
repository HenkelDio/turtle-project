import axios from "axios";
import { IWorkplace } from "../types";

/* eslint-disable @typescript-eslint/restrict-template-expressions */
export const createCompany = async (body: IWorkplace) => {
	try {
		const { data } = await axios.post(
			`${import.meta.env.VITE_APP_SERVER}/createCompany`, body,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const getCompanies = async () => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/getStudents`
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};