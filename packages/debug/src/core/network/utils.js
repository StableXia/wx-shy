export function isObject(o) {
  return Object.prototype.toString.apply(o) === "[object Object]";
}
