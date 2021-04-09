# @wx-shy/debug

微信小程序 debug

## 安装

```sh
npm install @wx-shy/debug
```

## 如何使用

1、app.json 中声明 w-debug 组件

```json
"usingComponents": {
    "w-debug": "@wx-shy/debug/ui/debug"
}
```

2、在页面中创建 w-debug 组件

```html
<w-debug></w-debug>
```

3、app.js 中启用 debug

```js
import { start } from "@wx-shy/debug";

start();
```
