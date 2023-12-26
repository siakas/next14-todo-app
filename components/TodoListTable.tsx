'use client' // NextUI の Table コンポーネントは Client Component でないとエラーが出る

import { DeleteTodoButton } from '@/components/DeleteTodoButton'
import { formatDate } from '@/utils/formatDate'
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'
import { Todo } from '@prisma/client'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import Link from 'next/link'

type Props = {
  className?: string
  todos: Todo[]
}

export const TodoListTable = ({ className, todos }: Props) => {
  return (
    <Table aria-label="Todo一覧" className={clsx(className)}>
      <TableHeader>
        <TableColumn>タイトル</TableColumn>
        <TableColumn>作成日時</TableColumn>
        <TableColumn>更新日時</TableColumn>
        <TableColumn>ステータス</TableColumn>
        <TableColumn>&nbsp;</TableColumn>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow
            className={clsx(todo.isCompleted && 'bg-gray-200 text-gray-400')}
            key={todo.id}
          >
            <TableCell>
              <Link className="hover:underline" href={`/${todo.id}`}>
                {todo.title}
              </Link>
            </TableCell>
            <TableCell>
              {formatDate(todo.createdAt, 'YYYY/MM/DD HH:mm')}
            </TableCell>
            <TableCell>
              {formatDate(todo.updatedAt, 'YYYY/MM/DD HH:mm')}
            </TableCell>
            <TableCell>
              <Checkbox defaultSelected={todo.isCompleted} />
            </TableCell>
            <TableCell>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="h-8 w-8 min-w-0 p-0"
                    radius="sm"
                    variant="light"
                  >
                    <DotsHorizontalIcon className="h-4 w-4" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key="view">
                    <Link className="block" href={`/${todo.id}`}>
                      詳細を見る
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="edit">
                    <Link className="block" href={`/${todo.id}/edit`}>
                      編集
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    className="text-danger"
                    color="danger"
                    key="delete"
                  >
                    {/* <form>
                      <button
                        className="block w-full text-left"
                        formAction={deleteTodo}
                      >
                        削除
                      </button>
                    </form> */}
                    <DeleteTodoButton id={todo.id} />
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
