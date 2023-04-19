import express from 'express';
import { createTodo, getTodos } from '../services/todo';

const router = express.Router();

// GET /todos
router.get('/', async (req, res) => {
	try {
		const todos = await getTodos();
		res.json(todos);
	} catch (err) {
		res.status(500).json({ error: (err as Error).message });
	}
});

// POST /todos
router.post('/', async (req, res) => {
	try {
        const todo = await createTodo(req.body.title);
		res.json(todo);
	} catch (err) {
		res.status(500).json({ error: (err as Error).message });
	}
});

export default router;
