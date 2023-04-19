import prisma from '../prismaClient';

async function createTodo(title: string) {
  const newTodo = await prisma.todo.create({
    data: {
      title: title,
    },
  });

  return newTodo;
}

async function getTodos() {
    const todos = await prisma.todo.findMany();
    return todos;
}

export {
    createTodo,
    getTodos
}