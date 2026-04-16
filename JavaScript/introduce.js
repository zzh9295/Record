/*
index.html是网站的默认首页文件，通常在用户访问域名时由服务器自动加载

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

//打印九九乘法表
var sum = 0;
for (var i = 1; i <= 9; i++) {
    document.write("<br>");
    for (var j = 1; j <= i; j++) {
        sum = i * j;
        document.write(j + " * " + i + " = " + sum + "  ");
    }
}

循环语句while
所有的for循环都可以改成while循环
while (条件) {
    // 循环体
}

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

break和continue
break：结束整个循环
continue：结束本次循环，继续下一次循环

字符串
单引号不能嵌套单引号，双引号不能嵌套双引号
如果要嵌套，可以在引号前面使用转义字符\
var str = "hello \"world\"";
字符串默认只能一行显示，如果需要换行，可以使用反斜杠\
var str = "hello \
world";

length：获取字符串的长度
var str = "hello world";
console.log(str.length); // 11

charAt：获取指定位置的字符
var str = "hello world";
console.log(str.charAt(0)); // h
或者
//打印最后一个字符
console.log(str.length); // 11
console.log(str.charAt(str.length - 1)); // d
超出范围会返回空字符串""

concat：拼接字符串
var str1 = "hello";
var str2 = "world";
var str3 = "!";
var result = str1.concat(str2, str3);
console.log(str1.concat(str2)); // helloworld
不改变原有字符串，而是返回一个新的字符串
可以连接多个字符串
console.log(result); // helloworld!
如果参数不是字符串，则将其转换为字符串再连接
+可以用来拼接字符串
concat不管什么类型直接合并成字符串
+遇到数字类型直接做运算，遇到字符串和字符串相连接

substring：截取字符串,不包含结束位置
var str = "hello world";
console.log(str.substring(0, 5)); // hello
第二个位置不写，默认截取到最后
console.log(str.substring(0)); // hello world

substr：截取字符串,包含结束位置
var str = "hello world";
console.log(str.substr(0, 5)); // hello

indexOf：查找字符串中指定字符的位置
用于确定一个字符串在另一个字符串中第一次出现的位置，并返回位置索引
如果返回-1，则表示字符串中不包含该字符
var str = "hello world";
console.log(str.indexOf("o")); // 4
可以接受第二个参数，表示从该位置开始向后查找
console.log(str.indexOf("o", 5)); // 7

trim：去除字符串两端的空格
var str = "  hello world  ";
console.log(str.trim()); // hello world
如果中间有空格，则不会去除

ES6扩展方法
trimStart：去除字符串开头的空格
trimEnd：去除字符串结尾的空格

spolt：将字符串分割成数组
var str = "hello|world";
console.log(str.split("|")); // ["hello", "world"]
如果分割符是空字符串，则将每个字符都分割成一个数组元素
console.log(str.split("")); // ["h", "e", "l", "l", "o", "|", "w", "o", "r", "l", "d"]
如果省略分割符，则将整个字符串作为一个数组元素
console.log(str.split()); // ["hello|world"]
方法还可以接受第二个参数，表示返回数组的最大长度
console.log(str.split("|", 1)); // ["hello"]

数组(array)是按次排序的一组值，每个值的位置都有编号(从0开始)，整个数组用[]表示
var arr = [1, 2, 3, 4, 5];
也可以先定义一个空数组，然后再添加元素
var arr = [];
arr[0] = 1;
arr[1] = 2;
任何类型的数据都可以放入数组
如果数组的元素是数组，则称这个数组为多维数组
数组越界：访问数组中不存在的索引，不会报错，而是返回undefined

数组的遍历
var arr = [1, 2, 3, 4, 5];
//for循环
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//while循环
var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

Array.isArray()：判断一个变量是否为数组
typeof不能判断数组
var arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr)); // true

push()：向数组的末尾添加一个或多个元素，并返回新的长度,会改变原有数组
var arr = [1, 2, 3, 4, 5];
console.log(arr.push(6)); // 6
console.log(arr); // [1, 2, 3, 4, 5, 6]

pop()：删除数组的最后一个元素，并返回该元素,会改变原有数组
var arr = [1, 2, 3, 4, 5];
console.log(arr.pop()); // 5
console.log(arr); // [1, 2, 3, 4]
*/
