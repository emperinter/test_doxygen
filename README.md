# 说明
- 支持多种语言，公司内部主要是c++和python
- 支持读取类中的注释，并按照规则形成文档
- 支持读取markdown，所有文档会在相关页面（related pages）展示
- 支持指定readme.md为首页

# 安装【首次配置】

## 安装doxygen

> 这里以命令行为例，也有相关GUI程序

- mac

```shell
brew install doxygen
```

- windows

> 下载后安装即可: [https://github.com/doxygen/doxygen/releases](https://github.com/doxygen/doxygen/releases)

- linux

```sh
sudo apt-get install doxygen
```

## 配置plantuml
> 如需配置UML来画图，则需要配置plantuml

### 配置Java环境

> java 环境配置windows上主要是环境变量的配置，可以参考[https://www.runoob.com/java/java-environment-setup.html](https://www.runoob.com/java/java-environment-setup.html),mac和Linux直接用brew和apt等等工具配置就行了！

### 配置graphvize【可选】

> 可选的, 但是建议安装 (如果想绘制除 时序图和活动图以外的图, 就需要安装 Graphviz 软件)。

- ubuntu
```bash
sudo apt install graphviz
```

- windows

> 下载安装: [https://www.graphviz.org/download/](https://www.graphviz.org/download/)

- mac
```bash
brew install graphviz
```

### 配置plantuml
- 下载jar包: [http://sourceforge.net/projects/plantuml/files/plantuml.jar/download](http://sourceforge.net/projects/plantuml/files/plantuml.jar/download)

> 后续doxygen的配置需要配置这个jar文件路径,一般最好放到Doxygen同级目录，减少配置

----
# 配置项目中的Doxygen【项目首次配置即可】

> 首次需要操作这个步骤，后续项目和不同开发人员都只需要微调部分配置项【主要是版本号】就可以直接用了。

先说一下大体目录结构情况

```bash
|--html                : 文档生成的存储地方
|  |--1.0              : 不同版本以文件夹进行【doxygen自动生成】
|     |--index.html
|     |-- ....
|  |--2.0
|     |--index.html
|     |-- ....
|  |--version.js       : 用于跳转版本的js   【链接替换路径和版本号按需修改】
|  |--index.html       : 首页显示所有的版本号或者js直接跳转最新版本【修改版本号】
|
|--Doxyfile            : doxygen配置文件【第一次配置较多，后续按需修改】
|--header.html         : 自定义header【和版本号挂钩】
|--plantuml.jar        : plantuml jar文件
|--footer.html         : 自定义footer【不动】
|--customdoxygen.css   : 自定义css【不动】
```

- 进入项目路径

- 生成配置文件，最终会生成一个`Doxyfile`

```shell
doxygen -g  
```

- 生成自定义的header,footer和自定义css文件【版本控制的核心所在地】

> 这里主要是要修改header.html，用于版本控制。

```bash
doxygen -w html header.html footer.html customdoxygen.css
```

header.html 修改后的东西如下所示【**可以直接使用**】，与原有生成的不同是`<span id="projectnumber">$projectnumber</span>`是有字符串的，version.js是无法读取到正常的版本号，同时引入了`<script type="text/javascript" src="../version.js"></script>`用于生成一个可选择版本号的select下拉框。

```html
<!-- HTML header for doxygen 1.9.5-->  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
<html xmlns="http://www.w3.org/1999/xhtml" lang="$langISO">  
<head>  
<meta http-equiv="Content-Type" content="text/xhtml;charset=UTF-8"/>  
<meta http-equiv="X-UA-Compatible" content="IE=11"/>  
<meta name="generator" content="Doxygen $doxygenversion"/>  
<meta name="viewport" content="width=device-width, initial-scale=1"/>  
<!--BEGIN PROJECT_NAME--><title>$projectname: $title</title><!--END PROJECT_NAME-->  
<!--BEGIN !PROJECT_NAME--><title>$title</title><!--END !PROJECT_NAME-->  
<link href="$relpath^tabs.css" rel="stylesheet" type="text/css"/>  
<!--BEGIN DISABLE_INDEX-->  
  <!--BEGIN FULL_SIDEBAR--><script type="text/javascript">var page_layout=1;</script>  
  <!--END FULL_SIDEBAR-->  
<!--END DISABLE_INDEX-->  
<script type="text/javascript" src="$relpath^jquery.js"></script>  
<script type="text/javascript" src="$relpath^dynsections.js"></script>  
$treeview  
$search  
$mathjax  
$darkmode  
<link href="$relpath^$stylesheet" rel="stylesheet" type="text/css" />  
$extrastylesheet  
</head>  
<body>  
<!--BEGIN DISABLE_INDEX-->  
  <!--BEGIN FULL_SIDEBAR--><div id="side-nav" class="ui-resizable side-nav-resizable"><!-- do not remove this div, it is closed by doxygen! -->  
  <!--END FULL_SIDEBAR--><!--END DISABLE_INDEX-->  
  
<div id="top"><!-- do not remove this div, it is closed by doxygen! -->  
  
<!--BEGIN TITLEAREA-->  
<div id="titlearea">  
<table cellspacing="0" cellpadding="0">  
 <tbody> <tr id="projectrow">  
  <!--BEGIN PROJECT_LOGO-->  
  <td id="projectlogo"><img alt="Logo" src="$relpath^$projectlogo"/></td>  
  <!--END PROJECT_LOGO-->  
     <script type="text/javascript" src="../version.js"></script>  
  <!--BEGIN PROJECT_NAME-->  
  <td id="projectalign">  
   <div id="projectname">$projectname<!--BEGIN PROJECT_NUMBER-->  
        <span id="projectnumber">$projectnumber</span>  
   </div>   <!--BEGIN PROJECT_BRIEF--><div id="projectbrief">$projectbrief</div><!--END PROJECT_BRIEF-->  
  </td>  
  <!--END PROJECT_NAME-->  
  <!--BEGIN !PROJECT_NAME-->   <!--BEGIN PROJECT_BRIEF-->    <td>  
    <div id="projectbrief">$projectbrief</div>  
    </td>   <!--END PROJECT_BRIEF-->  
  <!--END !PROJECT_NAME-->  <!--BEGIN DISABLE_INDEX-->   <!--BEGIN SEARCHENGINE-->     <!--BEGIN !FULL_SIDEBAR-->    <td>$searchbox</td>  
     <!--END !FULL_SIDEBAR-->  
   <!--END SEARCHENGINE-->  <!--END DISABLE_INDEX--> </tr>  
  <!--BEGIN SEARCHENGINE-->  
   <!--BEGIN FULL_SIDEBAR-->   <tr><td colspan="2">$searchbox</td></tr>  
   <!--END FULL_SIDEBAR-->  
  <!--END SEARCHENGINE--> </tbody>  
</table>  
</div>  
<!--END TITLEAREA-->  
<!-- end header part -->
```

版本控制的`version.js`【需要按需修改部分配置】如下所示，主要是要注意按实际部署环境`修改链接替换中的 current_version 和new url路径`，同时需要配置`版本号 versions`去对应(最新的版本号在上面，低版本号在下面 和文件夹对应即可)。

```javascript
document.addEventListener("DOMContentLoaded", function() {  
  var versions = [  
      ['2.0', '/2.0'],  
      ['1.0', '/1.0']  
  ];  
  var current_ver = $("#projectnumber")[0].innerText || versions[0][0];  
  var h = '<select>';  
  for (i = 0; i < versions.length; i++) {  
      selected = ''  
      if(current_ver === versions[i][0])  
          selected = ' selected="selected"';  
      h += '<option value="' + versions[i][0] + '"' + selected + '>' + versions[i][0] + '</option>';  
  }  
  h += '</select>';  
  
  $("#projectnumber")[0].innerHTML = h;  
  
  $("#projectnumber select")[0].addEventListener('change', function() {  
      var v = $(this).children('option:selected').attr('value');  
      var path = undefined;  
      for (i = 0; i < versions.length; i++) {  
          if(v === versions[i][0]) {  
              path = versions[i][1];  
              break;          }  
      }  
  
      if (path) {  
          var location = window.location;  
          var url = location.href;  
          var urlParts = url.split("/");  
          // get version  
          // TODO: 具体情况需要按照url进行修改,目前测试是按照如下如来进行配置的  
          // http://localhost:63342/rs-bg/html/4.6.0/index.html  
          var current_version = urlParts[5];  
    
          // TODO: 如下的取代页需要按需进行配置  
          var new_url = url.replace(window.location.hostname + ':63342/UltraMCI/html/' + current_version,  
                                    window.location.hostname +':63342/UltraMCI/html' + path); 
          if (url == new_url) {  
              var current_version = /\/[^\/]+/.exec(location.pathname)  
              new_url = url.replace(window.location.hostname + current_version,  
                                    window.location.hostname + path);  
          }  
          if (url != new_url)  
              window.location.href = new_url; // navigate  
      }  
  });  
});
```

index.html【文档首页】用来选择版本号【注意其中的版本号修改】，这个只需要记得去配置跳转路径【可用js去自动跳转/也可类似菜单点击进入版本】就行了，极简版本如下所示。

```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>rs-bg Documention</title>  
    <script>window.location.href='4.7.0';</script>  
</head>  
<body>  
<!--  
    <div>        
	    <p align="center">           
		    <ul>                
			     <li><a href="4.4.0/index.html">4.4.0</a></li>
			     <li><a href="4.5.0/index.html">4.5.0</a></li>                
				 <li><a href="4.6.0/index.html">4.6.0</a></li>
				 <li><a href="4.7.0/index.html">4.7.0</a></li>            
			</ul>        
		</p>    
	</div> 
-->
</body>  
</html>
```

- 常见配置修改

> 大部分配置是第一个次配置好后就行了，后续只需要修改`PROJECT_NUMBER`和`HTML_OUTPUT`来更新版本即可【不同开发者需要配置一下自己的plantum路径】。同时应该注意所有版本除了这两个版本之间的配置应该保持一致，否则版本跳转时会出现因配置不同导致无法找到文件出现404的情况影响用户体验。

![[Pasted image 20230207103416.png]]

```txt
# 项目名称
PROJECT_NAME           = "rs-bg"


# html/latex输出路径
# 建议是版本号
# 这个会把生成的所有文档放到这个路径中
# 和PROJECT_NUMBER保持一致
HTML_OUTPUT            = 1.0

# 项目文档编号
# 这个应该和HTML_OUTPUT保持一致
# 这个和version.js等等版本控制息息相关
# header有个#projectnumber 会被这个进行替换
# 而版本管理跳转也需要读取这个值进行判断
PROJECT_NUMBER         = 1.0


# 项目简介
PROJECT_BRIEF          = 'test PROJECT_BRIEF '

# 输出文档语言
# 默认为英文
# 这里说的是原有的菜单等等，不是翻译文档转换成多国语言
OUTPUT_LANGUAGE        = Chinese

# 指定路径
# 特别是Python项目
# 最好一定要指定路径
# 否则可能读取到像cpp的include以及python 的venv这种不必要的路径
# 一般指定到README.md 相对路径即可
INPUT                  = 

# 指定要用作主页的markdown页
# 某个版本的首页内容会展示README的内容
USE_MDFILE_AS_MAINPAGE = README.md

# 输出路径
# 上面生产的文件会存在html文件中
# 生成的文件路径为 html/1.0
OUTPUT_DIRECTORY       = html

# 排除路径
# 注意把项目的依赖路径给去掉
# 一般cpp的include python的venv路径
EXCLUDE_PATTERNS       = */include/lib_json/* 

# 是否递归目录
# 多层级去查询需要生成的文件
RECURSIVE              = YES 

# 是否生成LATEX
# laatex主要用于生成PDF文档
GENERATE_LATEX         = NO

# 禁用Index
DISABLE_INDEX          = NO

# 左侧树状导航
# 建议是开启index/关闭左侧树状导航
# 树状导航对mardown文档层级的显示感觉有点乱
GENERATE_TREEVIEW      = NO

# 主题修改为白色
HTML_COLORSTYLE        = LIGHT

# 是否展示文件
SHOW_FILES             = YES

# 尽可以的从代码中提取信息,既是没有注释的情况
#【NO时，没有注释的不会提取出来】
EXTRACT_ALL            = NO

# 类的私有方法也进行提取
EXTRACT_PRIVATE        = NO

# plantuml配置路径
# uml 画图相关
PLANTUML_JAR_PATH      = plantuml.jar

# 自定义头文件
# 这个一定要配置
# 和版本挂钩息息相关
HTML_HEADER            = header.html
```

# 如何写注释和文档？

## 注释｜接口文档生成

> 注释同时支持解析markdow和uml(配置了的话)，如下是c++和python的注释规则和相关图片说明！

- `注释`会提取类中的公开方法/函数，且没有注释的方法/函数不会提取。如需强制提取可修改配置文件。
- 还可以提取c++中的结构体
- 类以外单独的函数无法提取。

### 代码注释说明

- 注释语法

|命令          |                                  字段名    |                                                         语法 |  
|---|--------------------------------------|-----------------------------------------------------------|  
|@file   |                                  文件名    |                                            file [< name >] |  
|@brief      |                                   简介    |                                brief { brief description } |  
|@author   |                                   作者  |                                 author { list of authors } |  
|@mainpage |                                 主页信息  |                                         mainpage [(title)] |  
|@date   |                                年-月-日    |                                  date { date description } |  
|@author   |                                  版本号  |                                 version { version number } |  
|@copyright    |                                   版权  |                        copyright { copyright description } |  
|@param      |                                   参数    |  param [(dir)] < parameter-name> { parameter description } |  
|@return   |                                   返回  |                 return { description of the return value } |  
|@retval   |                                  返回值  |                      retval <\return value> { description } |  
|@bug    |                                   漏洞    |                                    bug { bug description } |  
|@details  |                                   细节  |                           details { detailed description } |  
|@pre    |                                 前提条件    |                    pre { description of the precondition } |  
|@see    |                                   参考    |                                         see { references } |  
|@link   |    连接(与@see类库，{@link www.google.com}) |                                        link < link-object> |  
|@throw      |                                 异常描述    |        throw < exception-object> { exception description } |  
|@todo   |                                  待处理    |           todo { paragraph describing what is to be done } |  
|@warning  |                                 警告信息  |                                warning { warning message } |  
|@deprecated|                  弃用说明。可用于描述替代方案，预期寿命等    |                                 deprecated { description } |  
| @example  |                 弃用说明。可用于描述替代方案，预期寿命等     |                                 deprecated { description } |  

以上是写注释是可以加上的，但是实际操作中，并不需要这么多参数。核心一般是如下几个用来描述一个类及其方法

```python
class ToolKit(object):
	"""!
	@brief 项目工具包  
	@details 集成了一些项目中需要使用的tool
	"""
	def add(self, para1: int, para2: int):  
        '''!  
        @brief 加法  
        @param para1 参数1  
        @param para2 参数2  
        @return sum 计算结果  
        @retval 0 计算成功  
        @retval -1 计算失败 
        '''
        sum = para1 + para2
        return 0
```

- markdown语法

> 直接写markdown语法即可

```shell
# markdown test  
> echo hh
```

- uml支持，需要配置plantuml

```bash
@startuml  
Alice -> Bob: test  
@enduml
```

- 一个python的注释参考

```c++
class test_doxy_file_python(object):  
    '''!  
    @brief python中的类的brief  
    @details python中的类的详细描述details  
    '''    
    def __init__(self, doxy_file):  
        self.doxy_file = doxy_file  
  
    def add(self, para1: int, para2: int):  
        '''!  
        @brief 加法  
        @param para1 参数1  
        @param para2 参数2  
        @return para2+para2 计算结果  
        @retval 0 计算成功  
        @retval -1 计算失败 
         
		uml 测试【不同类型（@/uml/markdown）注释之间直接最好空一行】  
		@startuml  
		Alice -> Bob: test  
		@enduml  
		  
		markdown 测试  
		---  
		# markdown test  
		> echo hh  
		  
		- 1  
		1中的数据  
		- 2  
		2中的数据  
		    - 21    
			21中的数据  
		  
		- 3  
		'''
```
- 类描述示例
  ![[Pasted image 20230207143608.png]]
  ![[Pasted image 20230207142204.png]]
- 方法展示示例
  ![[Pasted image 20230207142550.png]]

![[Pasted image 20230207143046.png]]

### 注释例子
- c++

> 注意结构体是支持解析变量的

```c++
#ifndef AGX_DEMO_TEST_DOXYFILE_H  
#define AGX_DEMO_TEST_DOXYFILE_H  
  
namespace test_doxyfile_namspace {  
  
    /**  
     * @brief cpp中的结构体  
     * @details test_doxyfile结构体  
     */    
     typedef struct {  
        int a; /*!< 定义一个整型变量a */  
        int b; /**< 定义一个整型变量b */  
    } test_doxyfile_struct;  
  
    /**  
     * @brief cpp中的类  
     * @details test_doxyfile_cpp 类  
     */    
     class test_doxyfile_cpp {  
        int a; /*!< 定义一个整型变量a */  
        int b; /**< 定义一个整型变量b */   
    public:  
        test_doxyfile_cpp(int a, int b);  
  
        ~test_doxyfile_cpp();  
  
        /**  
         * @brief 加法【说明】  
         * @param a public中add函数的参数a  
         * @param b public中add函数的参数b【参数】  
         * @return 计算后得到a+b的值【返回值描述】  
         * @retval a+b【返回值】  
         *         
         *   uml 测试  
         *   @startuml        
         *   Alice -> Bob: test         
         *   @enduml         
         *         
         *   markdown 测试  
         *   ---         
         *   # markdown test         
         *   > echo hh        
         *        
         *   ```shell        
         *   find . -name "*.cpp"         
         *   ```         
         **/        
         int add(int a, int b);  
  
    private:  
        /**  
         * @brief        
         * 除法  
         * @param a private中add函数的参数a  
         * @param b private中add函数的参数b  
         * @return 返回a/b的值  
         */        
        int sub(int a, int b);  
  
    protected:  
        /**  
         * @brief         
         * 乘法  
         * @param a protected中add函数的参数a  
         * @param b protected中add函数的参数b  
         * @return 返回a*b的值  
         */        int mul(int a, int b);  
    };  
  
}  
#endif //AGX_DEMO_TEST_DOXYFILE_H
```

- python

> 注意注释开头的`"""`后面要接一个`!`

```shell  
class test_doxy_file_python(object):  
    '''!  
    @brief python中的类的brief  
    @details python中的类的详细描述details  
    '''    
    def __init__(self, doxy_file):  
        self.doxy_file = doxy_file  
  
    def add(self, para1: int, para2: int):  
        '''!  
        @brief 加法  
        @param para1 参数1  
        @param para2 参数2  
        @return para2+para2 计算结果  
        @retval 0 计算成功  
        @retval -1 计算失败  
  
        uml 测试【不同类型（@/uml/markdown）注释之间直接最好空一行】  
        @startuml        
        Alice -> Bob: test        
        @enduml  
        
        markdown 测试  
        ---        
        # markdown test        
        > echo hh  
        - 1        1中的数据  
        - 2        2中的数据  
            - 21            
	            - 21中的数据  
  
        - 3        
        '''        
        return para1 + para2
```


## markdown ｜ 文档生成

### 说明

> doxygen会自动去搜索项目路径下的所有markdon文件并解析出来【除了指定的首页，其它会以相关页面index中展示】，这里主要注意的两点是首页的配置以及markdown如何在页面中正确对应上去

- 建议除了README.md之外的文档放在一个单独的文件夹中，比如

```bash
|--Doxyfile
|--READMD.md
|--docs
|  |-- doxygen使用教程.md
|  |-- index测试.md
|  |-- 资料收集.md
|--html
|  |-- 1.0.0
|  |-- 2.0.0
|  |-- index.html
|  |-- version.js
```

### 解析规则

- 以`#`开头的markdown文件

> 文档中的第一个# 开头会被解析成相关页面展示的字符串以及开启了左侧Treeview的最顶层层级明，后续的# 才会被解析成标题, 【此时解析和文件名称无关】

![[Pasted image 20230207130101.png]]

```md
# doxygen使用教程     ---> 这里会被解析出来使用
  
# 说明               ---> 第一个标题

- 支持多种语言，公司内部主要是c++和python  
- 支持读取类中的注释，并按照规则形成文档  
- 支持读取markdown，所有文档会在相关页面（related pages）展示  
- 支持指定readme.md为首页  
  
# 安装
...
```

- 不是以`#` 开头的markdown文件就以文件名作为标题.比如文件为`不是#开头的.md`,内容如下:

![[Pasted image 20230207131348.png]]

```md
> 如果 Markdown 文件以一个 header 开头, 也就是本例中的 ## 软件使用手册, 则标题就是这个 header, 否则(以其他类型的文本开头), 就以文件名作为标题.
```

### 特殊用法【不建议使用这种方式】

> 一般修改配置文件可以指定首页内容为README.md,还有一种方法是在markdown标注`{#index}` 或`{#mainpage}`指定起为首页，最终生成`index.html`

- 测试这个会覆盖配置文件中指定的README.md,同时README不会出现在相关页面中。

![[Pasted image 20230207134414.png]]

```md
# index {#index}
```

# 发布

## githubpages

> 项目必须是public，否则无法访问！就算是自己的账号也无法访问。

- 同时建议公开的文档最好是和项目代码分开操作，外部最好是把生成的html文件复制到某个路径下单独去提交到某个分支，否则容易造成代码泄漏等等相关事故。

- 更改`version.js`中的路径以及版本号等等信息，一般如下【注意替换其中test_doxygen为自己的项目名称】

```javascript
var current_version = urlParts[4];  
// TODO: 如下的取代页需要按需进行配置  
var new_url = url.replace(window.location.hostname + '/test_doxygen/' + current_version,  
                          window.location.hostname +'/test_proxy' + path);
```

- 把项目中的html分享到github上，只提交docs中的文件【`高危操作：不要把源码泄漏出去了`】

> IDEA家的工具可以依此选择 VCS->Share Project on GITHUB

- 把html中的文件提交到gh-pages分支

> 后续变动先提交master再把变动进行迁移到gh-pages分支

```bash
git subtree push --prefix=html origin gh-pages
```

![[Pasted image 20230207145838.png]]


- 最中配置成果如下所示: [https://emperinter.github.io/test_doxygen/](https://emperinter.github.io/test_doxygen/)

![[Pasted image 20230207161002.png]]