
# 结果页 Result

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

## 如何使用
```
import { Result } from 'tinper-libraui';

```

## 代码演示


## API


| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
imgUrl | 插图 url | string / Image Source(rn)  | -
img | 插图元素 (可以为`<img src="" />`/`<Icon type="" />`等), 会覆盖 imgUrl 设置  | ReactNode | -
title | title 文案 | ReactNode | -
message | message 文案 | ReactNode | -
buttonText | 按钮文案 | string | -
buttonType | 请参考 button 的配置 | string | -
onButtonClick | 按钮回调函数 | (e: Object): void | -


## 注意事项

暂无

## 更新日志
