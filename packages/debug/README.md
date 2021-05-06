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

## api

<table>
<thead>
    <th>名称</th>
    <th>类型</th>
    <th>说明</th>
    <th>默认值</th>
</thead>

<tbody>
    <tr>
        <td>start</td>
        <td>function</td>
        <td>开启debug</td>
        <td>-</td>
    </tr>
    <tr>
        <td>isStarted</td>
        <td>function</td>
        <td>debug是否开启</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setApiHost</td>
        <td>function</td>
        <td>设置所有环境api配置，用于动态切换api环境</td>
        <td>-</td>
    </tr>
    <tr>
        <td>getApiHost</td>
        <td>function</td>
        <td>获取所有环境api配置</td>
        <td>-</td>
    </tr>
        <tr>
        <td>setDefaultApiHost</td>
        <td>function</td>
        <td>设置默认的api环境</td>
        <td>-</td>
    </tr>
    <tr>
        <td>getDefaultApiHost</td>
        <td>function</td>
        <td>获取默认的api环境</td>
        <td>-</td>
    </tr>
        <tr>
        <td>setCurrrentApiHost</td>
        <td>function</td>
        <td>设置当前api环境</td>
        <td>-</td>
    </tr>
    <tr>
        <td>getCurrrentApiHost</td>
        <td>function</td>
        <td>获取当前api环境</td>
        <td>-</td>
    </tr>
</tbody>
</table>
