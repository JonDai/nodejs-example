##Node.js开发框架Express4.x
> Nodejs是一个年轻的编程框架，充满了活力和无限激情，一直都在保持着快速更新。基于Nodejs的官方Web开发库Express也在同步发展着，每年升级一个大版本，甚至对框架底层都做了大手术。在Express4时，替换掉中件间库connect，而改用多个更细粒度的库来取代。带来的好处是明显地，这些中间件能更自由的更新和发布，不会受到Express发布周期的影响；但问题也是很的棘手，不兼容于之前的版本，升级就意味着要修改代码。

----------

### 安装Express库
我们使用命令的方式创建并安装我们的HelloWord。
* 首先，我们需要安装express库。在Express3.6.x之前的版本，Express需要全局安装的，项目构建器模块是合并在Express项目中的，后来这个构建器被拆分出来，独立成为了一个项目express-generator，现在我们只需要全局安装express-generator项目就行了。
* 全局安装express `npm install -g express-generator@4` 安装好之后就可以使用express命令。
* 使用`express -v` 检查是否安装成功
### 创建程序
* 使用命令`express -e 11_helloword` 生成express项目文件。
*  接着使用`npm install` 来安装项目的依赖包，很像Java中的Maven
*  安装完成之后，运行命令`npm start` 启动项目
![](http://7xsy85.com2.z0.glb.clouddn.com/node_11_1.png)如图表示已经启动成功。
* 浏览器中运行打开[localhost](http://127.0.0.1:4000)，便可以看到Express
### 解析代码
* **分析app.js**
	在Express3.7这些中间件是默认集成在Express中，而目前使用的版本单独把这些中间件拿出去，更加灵活方便。

* **分析bin/www**
	同样原来用于项目启动代码也被移到./bin/www的文件，www文件也是一个node的脚本，用于分离配置和启动程序。
> 具体的使用方法自行查看代码，已给出相应详细的注释

## 使用Bootstrap框架
> node支持`jade` 和`ejs`模板引擎，这里我们使用`ejs`

*  和常规的`html`引入方式一样，头部引入`css`,尾部引入`js`文件
* 可以加入一些`Bootstrap`的样式来查看效果，是否引入成功
* 分离代码
	* 我们把index.ejs页面切分成3个部分：header.ejs, index.ejs, footer.ejs，用于网站页面的模块化。
	* 使用`<% include header.ejs%>` 引入头部文件
	* 使用`<% include footer.ejs%>` 引入尾部文件



