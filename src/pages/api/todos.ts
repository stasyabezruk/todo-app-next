import axios, { AxiosResponse } from 'axios';
import { ITodo } from '../../features/todos/interface';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosApi = (): Promise<AxiosResponse<ITodo[]>> => axios.get(TODOS_URL);
export default getTodosApi;
