import express from 'express';
import { Todo } from '../models/Todo';

const router = express.Router();

// GET /todos
router.get('/', async (req, res) => {
	try {
		const todos = await Todo.findAll();
		res.json(todos);
	} catch (err) {
		res.status(500).json({ error: (err as Error).message });
	}
});

// POST /todos
router.post('/', async (req, res) => {
	try {
		const todo = await Todo.create(req.body);
		res.json(todo);
	} catch (err) {
		res.status(500).json({ error: (err as Error).message });
	}
});

export default router;
