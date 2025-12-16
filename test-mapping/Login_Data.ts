import LoginData from '../data/Login.json';
import type {LoginForm} from '../types/Login.types';

export const validUserData: LoginForm = LoginData.validAccount;
export const invalidAccountData: LoginForm = LoginData.invalidAccount;
export const invalidUsernameData: LoginForm = LoginData.invalidUsername;
export const invalidPasswordData: LoginForm = LoginData.invalidPassword;
export const emptyAccountData: LoginForm = LoginData.emptyAccount;
export const emptyUsernameData: LoginForm = LoginData.emptyUsername;
export const emptyPasswordData: LoginForm = LoginData.emptyPassword;