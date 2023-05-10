# chrome-extension-vite

> 使用 Vite 构建 Chrome 扩展

## 特性

+ 支持Manifest V3
+ Vue3+element-plus+less
+ Live Reload
+ 上手简单

## 用法

### 运行

```bash
# install
npm install
# development
npm run dev 
# production
npm run build
```

### element-icons使用方式

```vue
<!-- i-ep-{icon名称} -->
<i-ep-search />
```

## 注意事项

+ 启动项目后，第一次需要手动刷新页面，这样客户端和服务端便建立了websocket连接。

## todo

- [ ] 引入axios
- [ ] 设置chrome extension storage
- [ ] background监听请求并回传content
- [ ] 动态修改 `version`
