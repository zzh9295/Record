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

var num = 10; //数值类型
var str = "hello"; //字符串类型
console.log(num);
alert("我是弹出框")
document.write("我是页面输出")
console.log(typeof num); //typeof可以用来检测变量的数据类型  

运算符
typeof：返回数据类型（判断基本数据类型使用）
console.log(typeof 123); // number

自增或自减运算符相当于 当前值+1或-1
var a = 10;
console.log(++a); // 11
console.log(--a); // 10; 因为11-1

有两种写法  ++在前，先自增在运算  ++在后，先运算在自增
console.log(a++); // 10
console.log(a); // 11

var num1 = 10;
var num2 = "10";
console.log(num1 == num2); // ture
console.log(num1 === num2); // false
=== 严格比较：数值本身是否相同，类型本身是否相同

console.log(num1 != num2); // false
console.log(num1 !== num2); // true
!=  比较数值是否相同，类型可以不同
!== 比较数值和类型是否都相同

布尔运算符：&&、||、!
！：取反
&&：与，两边都为真才为真,只要有一边为假就为假
||：或，两边都为假才为假,只要有一边为真就为真
非布尔值取反：underfined、null、0、NaN、空字符串("")、false取反为true，其余为false

条件语句
if (条件) {
    // 条件为真执行
    console.log("条件为真执行");
}

if else
if (条件) {
    // 条件为真执行
    console.log("条件为真执行");
} else {
    // 条件为假执行
    console.log("条件为假执行");
}

if....else if..else
if (条件) {
    // 条件为真执行
    console.log("条件为真执行");
} else if (条件) {
    // 条件为真执行
    console.log("条件为真执行");
} else {
    // 条件为假执行
    console.log("条件为假执行");
}

嵌套if语句
if (条件) {
    if (条件) {
        // 条件为真执行
        console.log("条件为真执行");
    } else {
        // 条件为假执行
        console.log("条件为假执行");
    }
}else {
    // 条件为假执行
    console.log("条件为假执行");
}

switch条件语句
switch (表达式) {
    case 值1:
        // 执行语句
        break;
    case 值2:
        // 执行语句
        break;
    default:
        // 执行语句
}

三元运算符 可以视为if...else的简写形式
条件 ? 表达式1 : 表达式2
var num = 10;
num % 2 === 0 ? console.log("偶数") : console.log("奇数");
或者
var result = num % 2 === 0 ? "偶数" : "奇数";
console.log(result);

循环语句for
for (初始化表达式; 条件表达式; 更新表达式) {
    // 循环体
}
var x = 10;
for (var i = 0; i < x; i++) {
    console.log(i);
    // 0 1 2 3 4 5 6 7 8 9
}
*/
