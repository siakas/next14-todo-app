import { addTodo } from '@/lib/actions'
import { Button, Input } from '@nextui-org/react'

export const AddTodo = () => {
  return (
    <div className="mb-10 mt-8">
      <form action={addTodo}>
        <div>
          <Input
            isRequired
            label="タイトル"
            name="title"
            placeholder="Todo を入力してください"
            type="text"
          />
        </div>
        <div className="mt-4">
          {/* TODO: バリデーションで入力があるまでは disabled としたい */}
          {/* TODO: 追加後は input の内容をリセットしたい */}
          <Button color="primary" type="submit">
            追加
          </Button>
        </div>
      </form>
    </div>
  )
}
