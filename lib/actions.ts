'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const addTodo = async (data: FormData) => {
  const title = data.get('title') as string
  await prisma.todo.create({
    data: {
      title,
    },
  })
  revalidatePath('/')
}

export const deleteTodo = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  })
  revalidatePath('/')
}
