import appConfig from '../../app.config'

export const logoutUrl = `${appConfig.apiBaseUrl}/logout`;
export const registerUrl = `${appConfig.apiBaseUrl}/register`;
export const loginUrl = `${appConfig.apiBaseUrl}/login`;

export const headerWithCredienials = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
}