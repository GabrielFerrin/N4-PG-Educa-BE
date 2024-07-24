import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JWT_SECRET } from '../config/config.js';


const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: '30d',
    });
};


export const registerUser = async (req, res) => {
    const { username, password } = req.body;

    // verificar si el usuario ya existe en la db
    const userExists = await User.findOne({ username });
    if (userExists) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        username,
        password: hashedPassword,
    });

    try {
        const nuevoUsuario = await user.save();
        res.status(201).json({
            _id: nuevoUsuario._id,
            username: nuevoUsuario.username,
            token: generateToken(nuevoUsuario._id),
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
};
