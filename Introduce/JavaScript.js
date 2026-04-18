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

shift()：删除数组的第一个元素，并返回该元素,会改变原有数组
unshift()：向数组的开头添加一个或多个元素，并返回新的长度,会改变原有数组

join()：以指定参数作为分隔符，将数组的所有元素放入一个字符串返回，如果不提供参数，默认用逗号分隔,不会改变原有数组
var arr = [1, 2, 3, 4, 5];
console.log(arr.join()); // 1,2,3,4,5
console.log(arr.join("-")); // 1-2-3-4-5
console.log(arr.join("")); // 12345
如果数组成员是undefined或null，会被转换为空字符串
join和split互为逆运算

concat()：用于合并两个或多个数组，并返回一个新的数组，不会改变原有数组
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]

reverse()：用于颠倒数组中元素的顺序，并返回颠倒后的数组，会改变原有数组
var arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // [5, 4, 3, 2, 1]

indexOf()：返回某个指定的字符串值在字符串中首次出现的位置，如果没有找到匹配的字符串则返回-1
var arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // 2
还接受第二个参数，表示从该位置开始向后查找

函数是一段可以重复执行的代码块
function 函数名(参数1, 参数2, ...) {
    // 函数体
}
例子
function sayHello() {
    console.log("Hello, world!");
}
sayHello();

函数名的提升：函数声明会被提升到作用域的顶部，可以在函数声明之前调用函数
sayHello(); // Hello, world!
function sayHello() {
    console.log("Hello, world!");
}

函数的参数：函数可以接受任意数量的参数，参数之间用逗号分隔
function add(a, b) {
    return a + b;
}
add(1, 2); // 3

函数的返回值：函数可以通过return语句返回一个值，如果没有return语句，函数默认返回undefined
function add(a, b) {
    return a + b;
}
return语句后面的代码不会被执行

对象：对象是JavaScript中的一种数据类型，用于存储键值对
var obj = {
    name: "张三",
    age: 18,
}
对象调用：通过对象的属性名来访问对象的属性值
console.log(obj.name); // 张三
链式调用：通过对象的属性名来访问对象的属性值，如果属性值是一个对象，则可以继续访问该对象的属性值
var obj = {
    name: "张三",
    age: 18,
    address: {
        city: "北京",
        street: "长安街"
    }
}
console.log(obj.address.city); // 北京

Math对象：Math对象提供了一些数学常量和数学方法
Math.abs()：返回一个数的绝对值
var num = -10;
console.log(Math.abs(num)); // 10

Math.floor():方法返回小于参数值的最大整数
Math.ceil():方法返回大于参数值的最小整数
Math.random():方法返回一个0到1之间的随机数
任意范围的随机数
function getRandom(min, max) {
    return Math.random()*(max-min)+min
}
getRandom(1, 10); // 1到10之间的随机数

Date.now():方法返回当前时间的时间戳
Date对象：Date对象用于表示日期和时间
var date = new Date(); 
console.log(date); // 当前时间
date.getFullYear():方法返回当前年份
date.getMonth():方法返回当前月份（0-11）
date.getDate():方法返回当前日期（1-31）
date.getDay():方法返回当前星期几（0-6） 

DOM：（Document Object Model）是文档对象模型，将网页转为一个JavaScript对象，从而可以用脚本进行各种操作
节点：DOM的最小组成单位叫做节点（node）

DOM树：DOM树由节点组成，每个节点都是一个对象，节点之间有父子关系，形成一棵树状结构

DOM操作：通过JavaScript操作DOM，可以改变网页的内容、结构和样式
获取元素：通过document对象的方法获取DOM元素

document对象_方法/获取元素
document.getElementByTTagName()：通过标签名获取元素
<div>Hello</div>
<div>World</div>
<script>
    var div1 = document.getElementByTTagName("div")[0];
    console.log(div1); // <div>Hello</div>
</script>

document.getElementById()：通过id属性获取元素
<div id="myDiv">Hello</div>
<script>
    var myDiv = document.getElementById("myDiv");
    console.log(myDiv); // <div id="myDiv">Hello</div>
</script>

document对象_方法/创建元素
document.createElement()：创建一个元素节点
var newDiv = document.createElement("div");
newDiv.innerHTML = "Hello, world!";

Element对象_属性
innerHTML：获取或设置元素的内容

Elenment获取元素位置
console.log(div1.offsetTop); // 获取元素距离顶部的距离
console.log(div1.offsetLeft); // 获取元素距离左侧的距离
console.log(div1.offsetWidth); // 获取元素自身的宽度
console.log(div1.offsetHeight); // 获取元素自身的高度
console.log(div1.clientWidth); // 获取元素可视区域的宽度
console.log(div1.clientHeight); // 获取元素可视区域的高度
console.log(div1.scrollWidth); // 获取元素内容的宽度
console.log(div1.scrollHeight); // 获取元素内容的高度

CSS操作
var div1 = document.getElementById("myDiv");
div1.style.color = "red"; // 设置字体颜色
div1.style.fontSize = "20px"; // 设置字体大小
div1.style.backgroundColor = "blue"; // 设置背景颜色    
div1.style.display = "none"; // 隐藏元素
div1.style.display = "block"; // 显示元素

事件：事件是用户与网页交互时发生的事情，例如点击按钮、滚动页面、输入文本等
HTML事件
<button onClick="clickHandler()">按钮</button>
<script>
    function clickHandler() {
        console.log("按钮被点击了");
    }
</script>
HTML优缺点：优点是简单易用，缺点是代码与HTML混在一起，不利于维护

DOM0级事件
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    console.log("按钮被点击了");
}
DOM0级事件只能添加一个事件处理程序，后添加的会覆盖先添加的

DOM2级事件
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
    console.log("按钮被点击了");
})
DOM2级事件可以添加多个事件处理程序，按添加顺序依次执行

Event事件对象
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function(event) {
    console.log("event");
})

Event.target
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function(event) {
    console.log(event.target); // 获取事件的目标元素
})

Event.preventDefault()
var link = document.getElementById("myLink");
link.addEventListener("click", function(event) {
    event.preventDefault(); // 阻止默认行为
})

Event.stopPropagation()
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function(event) {
    event.stopPropagation(); // 阻止事件冒泡
})

键盘事件：键盘事件是用户按下或释放键盘上的键时触发的事件
onkeydown：按下键盘时触发
onkeyup：松开键盘时触发
onkeypress：按下有值的键时触发，不识别功能键（Ctrl、Shift等）

鼠标事件：鼠标事件是用户与鼠标交互时触发的事件
onclick：单击鼠标左键时触发
ondblclick：双击鼠标左键时触发
onmousedown：按下鼠标按钮时触发
onmouseup：松开鼠标按钮时触发
onmousemove：鼠标移动时触发
onmouseover：鼠标移入元素时触发
onmouseout：鼠标移出元素时触发

表单事件
input事件：当输入框的值发生变化时触发
var username = document.getElementById("username");
username.oninput = function(e){
    console.log(e.target.value);//读取数据
}

定时器setTimeout()：在指定时间后执行一次函数
var timer = setTimeout(function() {
    console.log("Hello, world!");
}, 1000); // 1秒后执行函数
clearTimeout(timer)：清除定时器

定时器setInterval()：在指定时间间隔内重复执行函数
var timer = setInterval(function() {
    console.log("Hello, world!");
}, 1000); // 每秒执行一次函数
clearInterval(timer)：清除定时器

防抖：在指定时间内只执行一次函数，如果再次触发，则重新计时
节流：在指定时间内只执行一次函数，如果再次触发，则不执行
*/
