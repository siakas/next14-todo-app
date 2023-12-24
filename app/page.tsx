import prisma from '@/lib/prisma'
import { formatDate } from '@/utils/formatDate'

const Home = async () => {
  const todos = await prisma.todo.findMany()

  return (
    <div>
      <h1 className="text-2xl font-bold">Hello</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li className="flex flex-col" key={todo.id}>
            <span className="text-xs text-gray-400">{todo.id}</span>
            <span>{todo.title}</span>
            <span>
              {formatDate(todo.createdAt, 'YYYY-MM-DD HH:mm:ss')}
              {formatDate(todo.updatedAt, 'YYYY-MM-DD HH:mm:ss')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
