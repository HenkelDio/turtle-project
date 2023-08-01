import HttpClient from './utils/HttpClient';

class UsersService {
	httpClient: HttpClient;
  constructor() {
    this.httpClient = new HttpClient('https://jsonplaceholder.typicode.com');
  }

  async postUser() {
    const response = this.httpClient.post(`/todos/1`, {"user":"exemplo"});
    return response;
  }
	
}

export default new UsersService();
