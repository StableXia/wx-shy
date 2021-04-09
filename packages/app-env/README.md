# @wx-shy/app-env

微信小程序发布环境获取方案

## 安装

```sh
npm install @wx-shy/app-env
```

## 如何使用

```js
import { getEnv } from "@wx-shy/app-env";

// 获取小程序当前发布环境：develop、staging、release, 默认 release
const appEnv = getEnv();
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
        <td>getEnv</td>
        <td>function</td>
        <td>获取小程序当前发布环境：develop、staging、release, 默认 release</td>
        <td>-</td>
    </tr>
    <tr>
        <td>APP_ENV</td>
        <td>object</td>
        <td>对应小程序环境 envVersion 的值</td>
        <td>-</td>
    </tr>
</tbody>
</table>
