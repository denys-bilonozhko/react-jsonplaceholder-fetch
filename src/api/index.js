import axios from 'axios';

export default class ApiRequest {
  static async getAll() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    return response;
  }
}
