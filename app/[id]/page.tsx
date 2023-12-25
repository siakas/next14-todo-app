import prisma from '@/lib/prisma'
import { formatDate } from '@/utils/formatDate'
import { Button, Chip, Link } from '@nextui-org/react'
import { UpdateIcon } from '@radix-ui/react-icons'

const TodoPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  })

  const createdAt = formatDate(todo?.createdAt, 'YYYY/MM/DD')
  const updatedAt = formatDate(todo?.updatedAt, 'YYYY/MM/DD')

  return (
    <>
      <div className="rounded p-8 shadow-lg">
        {todo && (
          <>
            <h1 className="text-3xl font-semibold">{todo.title}</h1>

            <div className="mt-4 flex items-center justify-between">
              <div>
                {todo.isCompleted ? (
                  <Chip className="bg-primary-100" radius="sm">
                    完了
                  </Chip>
                ) : (
                  <Chip className="bg-danger-100" radius="sm">
                    未完了
                  </Chip>
                )}
              </div>

              <div className="flex gap-6">
                <span>{createdAt}に追加</span>

                {/* 作成日時と更新日時が異なる場合に、更新日時を表示 */}
                {createdAt !== updatedAt && (
                  <span className="flex items-center gap-1">
                    <UpdateIcon className="h-4 w-4" />
                    {updatedAt}
                  </span>
                )}
              </div>
            </div>

            {todo.content && (
              <p className="my-8 leading-relaxed">{todo.content}</p>
            )}

            <div className="mt-16 flex justify-center gap-4">
              <Button as={Link} href="/">
                一覧に戻る
              </Button>
              <Button as={Link} color="primary" href={`/${id}/edit`}>
                編集する
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default TodoPage
