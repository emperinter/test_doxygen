# 首页

# 说明
- 支持多种语言，公司内部主要是c++和python
- 支持读取类中的注释，并按照规则形成文档
- 支持读取markdown，所有文档会在相关页面（related pages）展示
- 支持指定readme.md为首页

# 安装

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

> 后续doxygen的配置需要配置这个jar文件路径

----
# 配置项目中的Doxygen

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
|  |--index.html       : 首页显示所有的版本号【需要手动添加】
|
|--Doxyfile            : doxygen配置文件【第一次配置较多，后续按需修改】
|--header.html         : 自定义header【和版本号挂钩】
|--footer.html         : 自定义footer【不动】
|--customdoxygen.css   : 自定义css【不动】
```

- 进入项目路径

- 生成配置文件，最终会生成一个`Doxyfile`

> 一个项目初次配置后续则不用运行这一步骤了。

```shell
doxygen -g  
```

- 生成自定义的header,footer和自定义css文件【版本控制的核心所在地】

> 这里主要是要修改header.html，用于版本控制，同一个项目第一次配置后续则不用运行这一步了。

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

# html/latex输出路径
# 建议是版本号
# 这个会把生成的所有文档放到这个路径中
HTML_OUTPUT            = 1.0

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
PLANTUML_JAR_PATH      = /Users/emperinter/app/Python/rs-bg/plantuml.jar

# 自定义头文件
# 这个一定要配置
# 和版本挂钩息息相关
HTML_HEADER            = header.html
```

# 如何写注释和markdown文档？

## 注释规则｜接口

> 注释同时支持解析markdow和uml(配置了的话)，如下是c++和python的注释规则和相关图片说明！

- c++

```c++

```

- python

```shell

```

## markdown说明文档

> 项目路径配置INCLUDE下面的以md结尾的文档都会被以【相关页面展示出来】，没有路径关系，建议这类文档统一放在某个文件夹下以供索引生成

> markdown 索引方式是按照目录层次，然后按照标题级别进行展示的【和文件名称没有关系】

```目录结构示例
|-- README.md  
|-- hh.md      -- 示例中内容为 # hh.md文件中的一级标题
|-- Case
|   |-- s
|       |-- s.md
|       |-- sa.md
|   |-- index.md
```


# 参考
- [[docs/资料收集.md]]