module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'camelcase': 'error', // 驼峰式命名规则
    'new-cap': ['error', {'capIsNew': false}], // 构造函数首字母大写
    'quotes': ['error', 'single'], // 用单引号
    'prefer-template': 'error', // 用模板字符串
    'semi': ['error', 'always'], // 强制分号

    'comma-style': 'error', // 始终将逗号置于行末
    'dot-location': ['error', 'property'], // 点号操作符须与属性需在同一行
    'no-array-constructor': 'error', // 数组字面量定义
    'no-const-assign': 'error', // const不重新赋值
    'no-dupe-keys': 'error', // 字面量中不定义重复的属性
    'no-duplicate-case': 'error', // switch 语句中不要定义重复的 case 分支
    'no-duplicate-imports': 'error', // 同一模块有多个导入时一次性写完
    'no-empty-pattern': 'error', // 不要解构空值
    'no-eval': 'error', // 不要使用eval
    'no-ex-assign': 'error', // catch 中不要对错误重新赋值
    'no-extend-native': 'error', // 不扩展原生对象
    'no-func-assign': 'error', // 避免对声明过的函数重新赋值
    'no-global-assign': 'error', // 不要对全局只读对象重新赋值
    'no-inner-declarations': 'error', // 嵌套的代码块中禁止再定义函数
    'no-invalid-regexp': 'error', // 不要向 RegExp 构造器传入非法的正则表达式
    'no-new-object': 'error', // 禁止使用 Object 构造器
    'no-new-wrappers': 'error', // 禁止使用原始包装器
    'no-redeclare': 'error', // 不要重复声明变量
    'no-shadow-restricted-names': 'error', // 不要随意更改关键字的值
    'no-this-before-super': 'error', // 使用 this 前请确保 super() 已调用
    'no-undef-init': 'error', // 不要使用 undefined 来初始化变量

    'no-loop-func': 'error', // 禁止在循环中出现 function 声明和表达式
    'no-dupe-class-members': 'error', //禁止类成员中出现重复的名称

    'brace-style': 'warn', // else 关键字要与花括号保持在同一行
    'keyword-spacing': 'warn', // 强制在关键字前后使用一致的空格
    'space-infix-ops': 'warn' // 字符串拼接操作符 (Infix operators) 之间要留空格
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'   
  }
};
