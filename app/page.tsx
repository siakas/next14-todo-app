import prisma from '@/lib/prisma'
import { formatDate } from '@/utils/formatDate'

const Home = async () => {
  const todos = await prisma.todo.findMany()

  return (
    <div>
      <h1 className="text-2xl font-bold">Hello</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {formatDate(todo.createdAt, 'YYYY-MM-DD HH:mm:ss')}{' '}
            {formatDate(todo.updatedAt, 'YYYY-MM-DD HH:mm:ss')}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
