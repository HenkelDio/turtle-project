import axios from "axios";

export const createCourse = async (payload: object) => {
	try {
		const { data } = await axios.post(
			`http://localhost:3001/createCourse`,
			payload,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};
