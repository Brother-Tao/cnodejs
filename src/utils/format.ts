import dayjs from 'dayjs'

// 格式化时间字符串"2024-09-02T02:00:57.682Z"
export const formatTimer = (time: string, format: string = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(time).format(format)
}
