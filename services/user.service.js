import bcrypt from 'bcrypt';

import db from '../models/index.js'

const User = db.User;

export const createUser = async (inputData, next) => {
    const { username, email, password } = inputData;

    if (!username || !email || !password) {
        throw new Error('All fields are required');
    }

    try{
        const existingUser = await User.findOne({ where: { email } });
        if(existingUser){
            throw new Error('User already exist');
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        return await User.create({
            username,
            email,
            password:hashedPassword,
        });
    }
    catch(err){
        next(err);
    }
};
