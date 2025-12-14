import LoginData from '../data/Login.json';
import type {LoginForm} from '../types/Login.types';

export const userData: LoginForm = {
    username: LoginData.validAccount.username,
    password: LoginData.validAccount.password
}