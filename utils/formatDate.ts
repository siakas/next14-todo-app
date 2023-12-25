import dayjs from 'dayjs'

export const formatDate = (date: Date | undefined, format: string) => {
  if (!date) return
  return dayjs(date).format(format)
}
