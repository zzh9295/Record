/*
Java程序可分为Java应用程序(Application)和Java小应用程序(Applet)
特点：面向对象，解释型，跨平台性，可移植性，安全性，多线程，高性能，分布式

面向过程：以过程为中心，以算法为驱动，以数据结构为基础
面向对象：以对象为中心，以类为驱动，以消息为驱动

Java程序开发步骤
1. 编写源文件：文件名.java
2. 编译器(javac）：编译java代码
3. 得到字节码文件：文件名.class
4. 解释器：解释字节码文件

一个Java应用程序必须有一个类含有public static void main(String args[])方法，
称这个类是应用程序的主类
piblic是访问修饰符，表示该类可以被其他类访问
static表示该方法是静态方法，可以直接通过类名调用
void表示该方法没有返回值
main是方法名
String args[]是参数，表示该方法可以接受一个字符串数组作为参数

如果源文件中有多个类，那么只能有一个类是public类
如果有一个类是public类，那么源文件名必须和这个类的名字完全相同，扩展名是java
如果源文件没有public类，那么源文件的名字只要和某个类的名字相同，并且扩展名是java就可以了

标识符：由字母、数字、下划线、美元符号组成，不能以数字开头，区分大小写，长度没有限制
关键字：被Java语言赋予特定含义的单词，如public、class、void等

变量分为两种：基本类型和引用类型
基本数据类型：byte、short、int、long、float、double、boolean、char
引用类型：类、接口、数组

boolean类型只有两个取值：true和false
int类型常量表示方法：十进制、八进制、十六进制、二进制
long类型常量用后缀L来表示
float类型常量用后缀f或F来表示
double类型常量用后缀d或D来表示，允许省略后缀
char类型常量用单引号括起来，如'a'、'b'、'中'等
转义字符常量用反斜杠开头，如'\n'、'\t'等

字符串常量用双引号括起来，如"hello"、"world"等
length()方法可以用来获取字符串的长度
String b = "hello world";
System.out.println(b.length()); // 输出11

indexOf()方法可以用来查找字符或字符串在字符串中的位置

字符串和数值的转换
字符串转换为数值：Integer.parseInt("123");
数值转换为字符串：String.valueOf(123);
int x = Interger.parseInt("123");
String y = String.valueOf(456);

8bit = 1byte

java中数据的基本类型按精度从低到高排序：byte、short、char、int、long、float、double
把级别低的变量的值赋给级别高的变量时，系统自动进行类型转换，称为自动类型转换
例如 float x = 200;
把级别高的变量的值赋给级别低的变量时，必须进行强制类型转换，称为强制类型转换
例如 int x = (int) 3.14;

数据的的输入与输出
输入：Scanner类
Scanner reader = new Scanner(System.in);
输出：System.out.println();//输出并换行
System.out.print();//输出不换行

数组是一种数据结构，用来存储一系列同类型的数据
数组一旦被创建，其长度就不能被改变
数组元素可以通过索引来访问，索引从0开始
带初始值的一维数组声明
char boy[] = {'a', 'b', 'c'};
不带初始值的一维数组声明
char boy[] = new char[3];

带初始值的二维数组声明
char boy[][] = {{'a', 'b'}, {'c', 'd'}，{'e', 'f'}};
不带初始值的二维数组声明
char boy[][] = new char[3][2];//3行2列
System.out.println(boy[1][1]); //输出d,先输出行索引，再输出列索引

对于二维数组“数组名.Length”的值是他含有的一维数组的个数

数组属于引用型变量，两个相同类型的数组如果具有相同的引用，它们就有完全相同的元素
int a[] = {1, 2, 3};
int b[] = a;
System.out.println(b[0]); //输出1

运算符
算术运算符：+、-、*、/、%、++、--

混合运算精度
java在计算算术表达式的值时，遵循以下规则：
1. 如果运算符两侧都是整数，则结果也是整数
2. 如果运算符两侧都是浮点数，则结果也是浮点数
3. 如果运算符两侧一个是整数，一个是浮点数，则结果也是浮点数
例如 5/2 = 2，5.0/2 = 2.5

for循环
for(初始化表达式; 布尔表达式; 更新表达式){
    //循环体
}
例子：
public static void main(String[] args){
    int a[] = {1, 2, 3, 4, 5};
    for(int i = 0; i < 10; i++){
    System.out.println(a[i]);
    }
}
for(int i : a){  //遍历数组的简便方法
    System.out.println(i);
}

while循环
while(布尔表达式){
    //循环体
}

do-while循环
循环规则和while循环相同，区别在于do-while循环至少执行一次循环体
do{
    //循环体
} while(布尔表达式);
例子：
int a = 0;
do{
    a++
} while(a < 0);

类所声明的变量被称作对象，即类是用来创建对象的模板
写类的目的是为了描述这一类事务共有的属性与功能
*/