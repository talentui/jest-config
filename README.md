## 第一步， 创建文件，添加依赖
* 安装jest  enzyme ，react-addons-test-utils和@beisen/talent-ui-jest-utils 别忘了save dev
* 在package.json => scripts 添加 `jest --config jest.config.js`
* 在项目根目录下创建jest.config.js， 作为jest的配置文件
* 在项目根目录下创建tests目录用来放测试用例


## 第二步，自定义测试环境配置
在jest.config.js目录下添加：
```js
 const path = require("path");
const appRoot = path.resolve(__dirname);
module.exports = require('@beisen/talent-ui-jest-utils')({
    root: appRoot
});
```

## 第三步在tests目录下写测试用例
比如，创建tests/entry.test.js 测试src/entry.js 因为是在单独的目录下，<del>感觉没有必要再遵循entry.test.js的这样的规则了【待定】</del>

```js
import 'babel-polyfill'
import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme'

import Entry from '&/entry.js';
global.BSGlobal = {};

describe('Entry', () => {
    it('正常渲染', () => {
        const div = document.createElement('div');
        ReactDom.render(<Entry />, div)
    })

})
```

## 第四步：执行测试用例

`yarn test`