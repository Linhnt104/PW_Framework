import LoginData from '../data/Login.json';
import type {LoginForm} from '../types/Login.types';

export const validUserData: LoginForm = LoginData.validAccount;
export const invalidAccountData: LoginForm = LoginData.invalidAccount;
// export const emptyAccountData: LoginForm = LoginData.emptyAccount;