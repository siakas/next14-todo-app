import { updateTodo } from '@/lib/actions'
import prisma from '@/lib/prisma'
import { Button, Input, Switch, Textarea } from '@nextui-org/react'

const EditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  })
  const updateTodoWithId = updateTodo.bind(null, id)

  return (
    <>
      <h1 className="text-2xl font-bold">Todo を編集</h1>
      <div className="rounded p-8 shadow-lg">
        <form action={updateTodoWithId}>
          <div>
            <h2 className="mb-2 text-lg font-bold">タイトル</h2>
            <Input
              defaultValue={todo?.title}
              isRequired
              name="title"
              placeholder="Todo を入力してください"
              size="lg"
              type="text"
            />
          </div>

          <div className="mt-10">
            <h2 className="mb-2 text-lg font-bold">ステータス</h2>
            <Switch
              defaultSelected={todo?.isCompleted}
              name="isCompleted"
              value="true"
            />
          </div>

          {todo?.content !== null && (
            <div className="mt-10">
              <h2 className="mb-2 text-lg font-bold">メモ</h2>
              <Textarea defaultValue={todo?.content} name="content" size="lg" />
            </div>
          )}

          <div className="mt-16 flex justify-center gap-4">
            <Button color="primary" type="submit">
              更新する
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditPage
