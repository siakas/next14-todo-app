import { AddTodo } from '@/components/AddTodo'
import { TodoListTable } from '@/components/TodoListTable'
import prisma from '@/lib/prisma'

const Home = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <>
      <h1 className="text-2xl font-bold">Todo 一覧</h1>
      <AddTodo />
      <TodoListTable className="mt-4" todos={todos} />
    </>
  )
}

export default Home
