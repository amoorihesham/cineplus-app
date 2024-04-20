const isDevelopment = true;

const appConfig = {
    apiBaseUrl: isDevelopment ? 'http://localhost:2024/api' : 'https://cinepluse-backend.onrender.com/api',
};

export default appConfig