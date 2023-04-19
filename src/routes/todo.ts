import express from 'express';

const router = express.Router();


import prisma from '../prismaClient';

async function createTodo(title: string) {
  const newTodo = await prisma.todo.create({
    data: {
      title: title,
    },
  });

  return newTodo;
}


// GET /todos
router.get('/', async (req, res) => {
	try {
		const todos = await prisma.todo.findMany();
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
