const e=JSON.parse('{"key":"v-789fe442","path":"/pages/e175ce/","title":"JavaWeb 面经","lang":"zh-CN","frontmatter":{"title":"JavaWeb 面经","date":"2020-02-07T23:04:47.000Z","order":99,"permalink":"/pages/e175ce/","category":["Java","JavaEE","JavaWeb"],"tag":["Java","JavaWeb","Servlet"],"description":"JavaWeb 面经 Servlet 什么是 Servlet Servlet（Server Applet），即小服务程序或服务连接器。Servlet 是 Java 编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态 Web 内容。 狭义的 Servlet 是指 Java 实现的一个接口。 广义的 Servlet 是指任何实现了这个 Servlet 接口的类。 Servlet 运行于支持 Java 的应用服务器中。从原理上讲，Servlet 可以响应任何类型的请求，但绝大多数情况下 Servlet 只用来扩展基于 HTTP 协议的 Web 服务器。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/e175ce/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"JavaWeb 面经"}],["meta",{"property":"og:description","content":"JavaWeb 面经 Servlet 什么是 Servlet Servlet（Server Applet），即小服务程序或服务连接器。Servlet 是 Java 编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态 Web 内容。 狭义的 Servlet 是指 Java 实现的一个接口。 广义的 Servlet 是指任何实现了这个 Servlet 接口的类。 Servlet 运行于支持 Java 的应用服务器中。从原理上讲，Servlet 可以响应任何类型的请求，但绝大多数情况下 Servlet 只用来扩展基于 HTTP 协议的 Web 服务器。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaWeb"}],["meta",{"property":"article:tag","content":"Servlet"}],["meta",{"property":"article:published_time","content":"2020-02-07T23:04:47.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaWeb 面经\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-07T23:04:47.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Servlet","slug":"servlet","link":"#servlet","children":[{"level":3,"title":"什么是 Servlet","slug":"什么是-servlet","link":"#什么是-servlet","children":[]},{"level":3,"title":"Servlet 和 CGI 的区别","slug":"servlet-和-cgi-的区别","link":"#servlet-和-cgi-的区别","children":[]},{"level":3,"title":"Servlet 版本以及主要特性","slug":"servlet-版本以及主要特性","link":"#servlet-版本以及主要特性","children":[]},{"level":3,"title":"Servlet 和 JSP 的区别","slug":"servlet-和-jsp-的区别","link":"#servlet-和-jsp-的区别","children":[]},{"level":3,"title":"简述 Servlet 生命周期","slug":"简述-servlet-生命周期","link":"#简述-servlet-生命周期","children":[]},{"level":3,"title":"如何现实 servlet 的单线程模式","slug":"如何现实-servlet-的单线程模式","link":"#如何现实-servlet-的单线程模式","children":[]},{"level":3,"title":"Servlet 中如何获取用户提交的查询参数或者表单数据","slug":"servlet-中如何获取用户提交的查询参数或者表单数据","link":"#servlet-中如何获取用户提交的查询参数或者表单数据","children":[]},{"level":3,"title":"request 的主要方法","slug":"request-的主要方法","link":"#request-的主要方法","children":[]}]},{"level":2,"title":"JSP","slug":"jsp","link":"#jsp","children":[{"level":3,"title":"JSP 的内置对象","slug":"jsp-的内置对象","link":"#jsp-的内置对象","children":[]},{"level":3,"title":"JSP 的作用域","slug":"jsp-的作用域","link":"#jsp-的作用域","children":[]},{"level":3,"title":"JSP 中 7 个动作指令和作用","slug":"jsp-中-7-个动作指令和作用","link":"#jsp-中-7-个动作指令和作用","children":[]},{"level":3,"title":"JSP 中动态 INCLUDE 和静态 INCLUDE 有什么区别","slug":"jsp-中动态-include-和静态-include-有什么区别","link":"#jsp-中动态-include-和静态-include-有什么区别","children":[]}]},{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[{"level":3,"title":"请求转发(forward)和重定向(redirect)的区别","slug":"请求转发-forward-和重定向-redirect-的区别","link":"#请求转发-forward-和重定向-redirect-的区别","children":[]},{"level":3,"title":"get 请求和 post 请求的区别","slug":"get-请求和-post-请求的区别","link":"#get-请求和-post-请求的区别","children":[]},{"level":3,"title":"用户在浏览器中输入 URL 之后，发什么了什么？写出请求和响应的流程","slug":"用户在浏览器中输入-url-之后-发什么了什么-写出请求和响应的流程","link":"#用户在浏览器中输入-url-之后-发什么了什么-写出请求和响应的流程","children":[]},{"level":3,"title":"什么是 Web Service?","slug":"什么是-web-service","link":"#什么是-web-service","children":[]},{"level":3,"title":"会话跟踪技术有哪些?","slug":"会话跟踪技术有哪些","link":"#会话跟踪技术有哪些","children":[]},{"level":3,"title":"响应结果状态码有哪些，并给出中文含义？","slug":"响应结果状态码有哪些-并给出中文含义","link":"#响应结果状态码有哪些-并给出中文含义","children":[]},{"level":3,"title":"XML 文档定义有几种形式？它们之间有何本质区别？解析 XML 文档有哪几种方式？","slug":"xml-文档定义有几种形式-它们之间有何本质区别-解析-xml-文档有哪几种方式","link":"#xml-文档定义有几种形式-它们之间有何本质区别-解析-xml-文档有哪几种方式","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":11.34,"words":3402},"filePathRelative":"01.Java/02.JavaEE/01.JavaWeb/99.JavaWeb面经.md","localizedDate":"2020年2月7日","excerpt":"<h1> JavaWeb 面经</h1>\\n<h2> Servlet</h2>\\n<h3> 什么是 Servlet</h3>\\n<p>Servlet（Server Applet），即小服务程序或服务连接器。Servlet 是 Java 编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态 Web 内容。</p>\\n<ul>\\n<li>狭义的 Servlet 是指 Java 实现的一个接口。</li>\\n<li>广义的 Servlet 是指任何实现了这个 Servlet 接口的类。</li>\\n</ul>\\n<p>Servlet 运行于支持 Java 的应用服务器中。从原理上讲，Servlet 可以响应任何类型的请求，但绝大多数情况下 Servlet 只用来扩展基于 HTTP 协议的 Web 服务器。</p>","autoDesc":true}');export{e as data};
