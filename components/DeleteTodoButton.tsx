import { deleteTodo } from '@/lib/actions'

export const DeleteTodoButton = ({ id }: { id: string }) => {
  const deleteTodoWithId = deleteTodo.bind(null, id)

  return (
    <form action={deleteTodoWithId}>
      <button className="block w-full text-left">削除</button>
    </form>
  )
}
