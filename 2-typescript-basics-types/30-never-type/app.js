function generateError(message, code) {
    throw { message: message, error: code };
}
generateError('An error occured!', 500);
