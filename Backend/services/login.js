
export async function loginService(credentials){
    if (!username || !password || typeof username !== 'string' || typeof password !== 'string'){
        return {
            error: 'Argumentos no válidos.'
        };
    }
    if (username !== 'admin'){
        return {
            error: 'Credenciales inválidas.',
        };
    }
    
    if (password !== '1234'){
        return {
            error: 'Credenciales inválidas.'
        };
    }

    return {
        token: 'Token de acceso'
    };
}