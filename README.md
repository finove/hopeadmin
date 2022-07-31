# hopeadmin
backend admin with hope-ui

# 自定义

## 路由
src/app.tsx

## 菜单
src/components/HeaderMenu.tsx
src/components/MainNavContent.tsx

## 顶栏
src/components/Header.tsx

# 参考

## mock

MockMethod

```json
{
// 请求地址
url: string;
// 请求方式
method?: MethodType;
// 设置超时时间
timeout?: number;
// 状态吗
statusCode?:number;
// 响应数据（JSON）
response?: ((opt: { [key: string]: string; body: Record<string,any>; query: Record<string,any>, headers: Record<string, any>; }) => any) | any;
// 响应（非JSON）
rawResponse?: (req: IncomingMessage, res: ServerResponse) => void;
}
```
