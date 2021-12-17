function generateError(message: string, code: number): never {
    throw {message, error: code};
}

generateError('An error occured!', 500);