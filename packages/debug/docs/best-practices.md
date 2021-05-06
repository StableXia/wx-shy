# Practice the demo

### apiHost.js

```js
import {
  setApiHost,
  getCurrrentApiHost,
  setDefaultApiHost,
} from "@wx-shy/debug";
import { getEnv, APP_ENV } from "@wx-shy/app-env";

/**
 * @description api 环境枚举
 * @property {string} test       - 测试环境
 * @property {string} production - 生产环境
 */
export const API_HOST_ENV = {
  test: "test",
  production: "production",
};

/**
 * test
 */
export const API_HOST_TEST = "http://test/";

/**
 * production
 */
export const API_HOST_PRODUCTION = "https://production/";

export const API_HOST_TEST_CONFIGS = {
  test: API_HOST_TEST,
};

export const API_HOST_PRODUCTION_CONFIGS = {
  prod: API_HOST_PRODUCTION,
};

export const API_HOST_ALL_CONFIGS = {
  [API_HOST_ENV.test]: API_HOST_TEST_CONFIGS,
  [API_HOST_ENV.production]: API_HOST_PRODUCTION_CONFIGS,
};

setDefaultApiHost(API_HOST_ENV.test);
setApiHost(API_HOST_ALL_CONFIGS);

function getApiHostConfigs() {
  const appEnv = getEnv();

  // 判断当前小程序环境是否非release
  if (appEnv !== APP_ENV.release) {
    return (
      API_HOST_ALL_CONFIGS[getCurrrentApiHost()] ||
      API_HOST_ALL_CONFIGS[API_HOST_ENV.test]
    );
  }

  return API_HOST_ALL_CONFIGS.prod;
}

export const API_HOST_CONFIGS = getApiHostConfigs();
```

### debug.js

```js
import { start } from "@wx-shy/debug";
import { getEnv, APP_ENV } from "@wx-shy/app-env";

export function debug() {
  const appEnv = getEnv();

  if (appEnv !== APP_ENV.release) {
    start();
  }
}
```

### app.json

```json
"usingComponents": {
    "w-debug": "@wx-shy/debug/ui/debug"
}
```

### wxml

```html
<w-debug></w-debug>
```

### app.js

```js
import { debug } from "./debug";

debug();
```
