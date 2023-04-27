import $api from "../http";
import {AxiosResponse} from 'axios';
import { IUser } from "../models/IUser";
export default class AddService {
    static async add(description: string, value: string, bool: boolean): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>('/add', {description, value, bool});
    }

    static async delete(item_id: number): Promise<void> {
        return $api.post('/delete', {item_id});
    }

    static async generate_list() {
        return $api.get('/generate-list');
    }
}