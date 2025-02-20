import bcrypt from 'bcrypt';

import db from '../models/index.js'

const User = db.User;

export const createUser = async (inputData, next) => {
    const { username, email, password } = inputData;

    if (!username || !email || !password) {
        throw new Error('All fields are required');
    }

    if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
        const error = new Error('Invalid email format.');
        error.statusCode = 400;
        throw error;
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 400;
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        return await User.create({
            username,
            email,
            password: hashedPassword,
        });
    } catch (err) {
        next(err);
    }
};

