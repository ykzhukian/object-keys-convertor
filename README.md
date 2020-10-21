#### key 格式转换

可以让接口返回数据的key格式统一（snake_case 或 camelCase）

Install
```
npm i object-keys-convertor
```

```js
import { toCamelcase, toSnakecase } from 'object-keys-convertor';

toCamelcase({
  a_b_c: {
    aB_C: true
  }
})

// output
{
  aBC: {
    aBC: true
  }
}
```

Development
```
npm run build 
npm test
```

