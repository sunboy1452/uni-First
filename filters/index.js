// import parseTime, formatTime and set to filter
import Vue from 'vue'
import dayjs from 'dayjs'

export function dayjs1(value) {
  if (value) {
    return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
  } else {
    return ''
  }
}
export function dayjs2(value) {
  if (value) {
    return dayjs(value).format('YYYY-MM-DD')
  } else {
    return ''
  }
}
export function dayjs3(value) {
  if (value) {
    return dayjs(value).format('YYYY/MM/DD')
  } else {
    return ''
  }
}