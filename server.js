import cors from 'cors';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    try {
        // Check if email already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Email já está em uso.' });
        }

        const newUser = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            },
        });

        res.status(201).json(newUser);
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(400).json({ error: 'Email já está em uso.' });
        } else {
            res.status(500).json({ error: 'Erro ao criar o usuário.' });
        }
    }
});

app.get('/usuarios', async (req, res) => {
    let users = [];
    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age,
            },
        });
    } else {
        users = await prisma.user.findMany();
    }
    res.status(200).json(users);
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: req.params.id,
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            },
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o usuário.' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});