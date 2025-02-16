import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

import db from '../models/index.js';
import { createUser } from '../services/user.service.js';

const User = db.User;

const register = async (req, res, next) => {
    try {
        const userData = req.body;

        const newUser = await createUser(userData);
        const token = jwt.sign(
            { id: userData.id, username: userData.username }, config.jwtSecret, { expiresIn: '48h' }
        );
        res
            .status(201)
            .json({ message: 'User Created Successfully', user: newUser, token })
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User?.findOne({ where: { email } });
        if (!user) {
            const error = new Error('Invalid email id');
            error.statusCode = 400;
            throw error;
        }

        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch){
            const error = new Error('Invalid password');
            error.statusCode = 400;
            throw error;
        }

        const token = jwt.sign(
            {id:user.id, username:user.username}, config.jwtSecret, {expiresIn:'48h'}
        );

        res.status(200).json({message:'Login Successfull', token});
    } catch(err){
        next(err);
    }
}

export { register, login };