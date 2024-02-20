/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";
import { ICheckEmail, ICreateRegister, ILogin, ILoginAdmin, IUpdateStudent, IUserAdmin } from "../types";

export const verifyIfDocumentAlreadyExists = async (document: string) => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/studentDocument/${document}`,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const verifyIfEmailAlreadyExists = async (email: string) => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/studentEmail`,
			{ headers: { email } },
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const getStudentByDocument = async (document: string | undefined) => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/getStudentByDocument?document=${document}`,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const getRegistersByStudent = async (document: string | undefined) => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/getRegistersByStudent?document=${document}`,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const getRegistersByEmail = async (email: string | undefined) => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/getRegistersByEmail`, {headers: {
				email
			}},
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const deleteStudent = async (document: string | undefined) => {
	try {
		const { data } = await axios.delete(
			`${import.meta.env.VITE_APP_SERVER}/deleteStudent?document=${document}`,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const updateStudent = async (document: string | undefined, body: IUpdateStudent | undefined) => {
	try {
    const { data } = await axios.put(
      `${import.meta.env.VITE_APP_SERVER}/updateStudent`,
      body,
      {
        params: { document } 
      }
    );
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const deleteRegister= async (registerId: number | undefined) => {
	try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_APP_SERVER}/deleteRegister?id=${registerId}`,
    );
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const createRegister= async (body: ICreateRegister) => {
	try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_SERVER}/createRegister`, body,
    );
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const verifyEmail = async (body: ICheckEmail) => {
	try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_SERVER}/emailUser`, body,
    );
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const createPassword = async (body: ILogin) => {
	try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_SERVER}/createPassStudent`, body,
    );
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const authLogin = async (body: ILogin) => {
	try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_SERVER}/authStudent`, body,
    );
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const authLoginAdmin = async (body: ILogin | ILoginAdmin) => {
	try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_SERVER}/authAdmin`, body,
    );
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const addAdminUser = async (body: IUserAdmin) => {
	try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_SERVER}/createAdmin`, body,
    );
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const listAdmins = async (page: number, pageSize: number) => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/getAdmins?page=${page}&pageSize=${pageSize}`,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};



