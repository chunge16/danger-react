import { DefaultTheme } from 'styled-components';
const base: DefaultTheme = {

}

const light: DefaultTheme = {
  // 背景
  'color-bg-1':'#fff', // 整体背景
  'color-bg-2': '#fff', // 一级容器背景
  'color-bg-3': '#fff',  // 二级容器背景
  'color-bg-4': '#fff',  // 三级容器背景
  'color-bg-5': '#fff',  // 下拉弹出框、Tooltip 背景颜色
  // 文字
  'color-text-1': '#1d2129', // 标题
  'color-text-2': '#4e5969', // 语句
  'color-text-3': '#86909c', // 次要信息
  'color-text-4': '#c9cdd4', // 禁用状态文字

}

const dark: DefaultTheme = {
  // 背景
  'color-bg-1':'#17171A', // 整体背景
  'color-bg-2': '#232324', // 一级容器背景
  'color-bg-3': '#2a2a2b',  // 二级容器背景
  'color-bg-4': '#313132',  // 三级容器背景
  'color-bg-5': '#373739',  // 下拉弹出框、Tooltip 背景颜色
  // 文字
  'color-text-1': 'rgba(255, 255, 255, 0.9)', // 标题
  'color-text-2': 'rgba(255, 255, 255, 0.7)', // 语句
  'color-text-3': 'rgba(255, 255, 255, 0.5)', // 次要信息
  'color-text-4': 'rgba(255, 255, 255, 0.3)', // 禁用状态文字
}

export default {
  base,
  light,
  dark,
}
