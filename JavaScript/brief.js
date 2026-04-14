/*
JavaScript是轻量级脚本语言，不具备开发操作系统的能力，
只能来编写控制其他大型应用程序的脚本
标识符数字不能开头

变量提升：JavaScript 引擎的工作方式是,先解析代码,获取所有被声明的变量,然后再一行一行地运行。
这造成的结果,就是所有的变量的声明语句,都会被提升到代码的头部,这就叫做变量提升(hoisting)。
例子：
var age
console.log(age)
age = 18
错误形式
console.log(age)
var age = 18

JavaScript常用引入方式：
1. 嵌入到HTML文件中 <script></script>
2. 引入本地独立JS文件 <script type="text/javascript" src="js文件路径"></script>
3. 引入网络来源JS文件 <script src="网络js文件路径"></script>

数据类型
原始类型（基础类型）：数值、布尔值、字符串
合成类型（复合类型）：对象 var obj = {name: '张三', age: 18}
特殊值：null一般代表对象为空、undefined一般代表数值为空

运算符
typeof：返回数据类型（判断基本数据类型使用）
console.log(typeof 123) // number
*/
