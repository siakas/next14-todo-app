import { AddTodo } from '@/components/AddTodo'
import { TodoListTable } from '@/components/TodoListTable'
import prisma from '@/lib/prisma'

const Home = async () => {
  const todos = await prisma.todo.findMany()

  return (
    <div>
      <h1 className="text-2xl font-bold">Todo 一覧</h1>
      <AddTodo />
      <TodoListTable className="mt-4" todos={todos} />
    </div>
  )
}

export default Home
