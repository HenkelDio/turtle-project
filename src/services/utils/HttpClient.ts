import axios from "axios";

class HttpClient {
	baseURL: string;
	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	async get(path: string) {
		const response = await axios.get(`${this.baseURL}${path}`);

		if (response.status === 200) {
			return response.data;
		}

		return false;
	}

	async post(path: string, payload: object) {
		const response = await axios.post(`${this.baseURL}${path}`, payload);

		if (response.status === 200) {
			return response.data;
		}

		return false;
	}
}

export default HttpClient;
