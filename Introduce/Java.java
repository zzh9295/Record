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

类方法和this关键字
类方法：在类中定义的方法，称为类方法
this关键字：在类方法中，this关键字代表当前对象

用关键字static给予修饰的变量，称为类变量，否则称作实例变量
区别：
不同对象的实例变量互不相同
所有对象共享类变量
通过类名直接访问类变量

方法重载是指在一个类中定义多个方法，它们具有相同的名字，但参数的数量或类型不同
例如：

包package是用于组织代码文件的目录结构
import语句用于导入包中的类

访问权限修饰符：public、private、protected、默认（不加修饰符）

使用extends来定义一个类的子类
子类会继承父类中不是private的成员变量和方法作为自己的成员变量和方法，并保持访问权限不变
对于子类可以从父类继承的成员变量，只要子类中声明的成员变量和父类中的成员变量同名时i，子类就隐藏了继承的成员变量
super()用于调用父类的构造方法
super.变量名用于访问隐藏的成员变量

方法重写是指：子类中定义的一个方法，这个方法和父类的方法一致，且这个方法的名字、参数个数、参数的类型和父类的方法完全相同.
子类通过方法的重写可以把父类的状态和行为改变为自身的状态和行为。
子类创建的一个对象，如果子类重写了父类的方法，则运行时系统调用的是子类重写的方法;
子类创建的一个对象，如果子类未重写父类的方法，则运行时系统调用的是子类继承的方法;

final关键字，可以使用final将类声明为final类，final类不能被继承，即final类不能有子类
如：final class A{}
如果用final修饰父类中的一个方法，那么这个方法不允许子类重写

abstract类和方法
·和普通的类相比，abstract类里可以有abstract方法。也可以没有。
对于abstract方法，只允许声明，不允许实现，而且不允许使用final修饰abstract方法。
·对于abstract类，不能使用new运算符创建该类的对象，只能产生其子类，由子类创建对象。
·如果一个类是abstract类的子类，它必须具体实现父类的所有的abstract方法。
抽象类抽象出重要的行为标准，该行为标准用抽象方法来表示。即抽象类封装了子类必需要有的行为标准。

接口interface
接口的特点：1.只能包含抽象方法
2.不能实例化，不能创建对象
3.不能有构造方法
4.一个类可以实现多个接口(类只能继承一个)

List是一个有序的集合，允许元素重复，并且可以通过索引访问元素。
常见的List实现类有ArrayList、 LinkedList和Vector。
·ArrayList：基于动态数组实现，查询速度较快，插入和删除相对较慢，尤其是在中间插入或删除元素时。
·LinkedList：基于双向链表实现，插入和删除速度较快，查询速度较慢。
定义一个List:List<String>list=new ArrayList<>();

Set是一个不允许重复元素的集合。
常见的实现类有：HashSet、LinkedHashSet、TreeSet
·HashSet：元素无顺序，不保证元素的插入顺序。
·LinkedHashSet：元素按插入顺序保存。
·TreeSet：元素按自然顺序（或构造时提供的比较器）排序。
定义一个Set:Set<String>set=new HashSet<>();

Map是一个键值对映射的集合，键是唯一的，值可以重复。
常见的实现类有：HashMap、LinkedHashMap、 TreeMap、 Hashtable
·HashMap：无序存储，不保证元素的顺序。
·LinkedHashMap：保存元素的插入顺序。
·TreeMap：根据键的自然顺序或比较器对元素进行排序。
·Hashtable:线程安全的实现类，已不推荐使用，通常使用ConcurrentHashMap代替。
定义一个Map:Map<String,Integer>map=new HashMap<>();

异常处理：try-catch-finally
*/