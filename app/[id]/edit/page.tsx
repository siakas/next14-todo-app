import prisma from '@/lib/prisma'
import { Input, Textarea } from '@nextui-org/react'

const EditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  })

  return (
    <>
      <h1 className="text-2xl font-bold">Todo を編集</h1>
      <div className="rounded p-8 shadow-lg">
        <form>
          <div>
            <Input
              defaultValue={todo?.title}
              isRequired
              label="タイトル"
              name="title"
              placeholder="Todo を入力してください"
              size="lg"
              type="text"
            />
          </div>

          {todo?.content !== null && (
            <div className="mt-8">
              <Textarea defaultValue={todo?.content} label="メモ" size="lg" />
            </div>
          )}
        </form>
      </div>
    </>
  )
}

export default EditPage
