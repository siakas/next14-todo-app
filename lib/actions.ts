'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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

export const updateTodo = async (id: string, data: FormData) => {
  const title = data.get('title') as string
  const content = data.get('content') as string
  const isCompleted = data.get('isCompleted') as string

  await prisma.todo.update({
    data: {
      content,
      isCompleted: isCompleted === 'true' ? true : false,
      title,
    },
    where: {
      id,
    },
  })

  revalidatePath('/')
  redirect('/')
}
