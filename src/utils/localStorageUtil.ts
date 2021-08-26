// 保存数据到浏览器的缓存中
export function saveArray(key: string, value: []) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function readArray(key: string) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

// 保存列表
export const $saveStorage = (key: string, value: []) => {
  saveArray(key,value)
};
// 获取列表
export const $getStorage = (key: string) => {
  return readArray(key)
};
