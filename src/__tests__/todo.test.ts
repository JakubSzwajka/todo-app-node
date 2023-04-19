import prisma from '../prismaClient';
import { createTodo } from '../services/todo';

describe('Todo app', () => {  
  test('Create a new Todo', async () => {
    const title = 'Test Todo';
    const newTodo = await createTodo(title);

    expect(newTodo.title).toBe(title);
    expect(newTodo.completed).toBe(false);

    // Clean up: delete the created Todo from the database
    await prisma.todo.delete({ where: { id: newTodo.id } });
  });
});
