/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";

export const createCourse = async (payload: object) => {
	try {
		const { data } = await axios.post(
			`${import.meta.env.VITE_APP_SERVER}/createCourse`,
			payload,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const getAdminCourses = async () => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/getAdminCourses`
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const deleteCourse = async (id: number) => {
	try {
		const { data } = await axios.delete(
			`${import.meta.env.VITE_APP_SERVER}/deleteCourse`,{headers: {id}}
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};