import jwt from 'jsonwebtoken'

const SECRET_KEY="hfuhWEFHIWJFOEOIIFWQEUFIOjwofjwEFUWAHUFHUWAHEFUHAUWHFUHAHF"

const generateToken=(userId)=>{
    const token=jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

const getUserIdfromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

export default {generateToken,getUserIdfromToken}