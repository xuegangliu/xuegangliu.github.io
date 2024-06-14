const e=JSON.parse('{"key":"v-2f267728","path":"/pages/5d002f/","title":"Spring Web 应用","lang":"zh-CN","frontmatter":{"title":"Spring Web 应用","date":"2023-02-14T19:21:22.000Z","permalink":"/pages/5d002f/","category":["Java","框架","Spring","SpringWeb"],"tag":["Java","框架","Spring","Web","Controller"],"description":"Spring Web 应用 Spring MVC 提供了一种基于注解的编程模型，@Controller 和 @RestController 组件使用注解来表达请求映射、请求输入、异常处理等。注解控制器具有灵活的方法签名，并且不必扩展基类或实现特定接口。以下示例显示了一个由注解定义的控制器： @Controller public class HelloController { @GetMapping(\\"/hello\\") public String handle(Model model) { model.addAttribute(\\"message\\", \\"Hello World!\\"); return \\"index\\"; } }","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/5d002f/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"Spring Web 应用"}],["meta",{"property":"og:description","content":"Spring Web 应用 Spring MVC 提供了一种基于注解的编程模型，@Controller 和 @RestController 组件使用注解来表达请求映射、请求输入、异常处理等。注解控制器具有灵活的方法签名，并且不必扩展基类或实现特定接口。以下示例显示了一个由注解定义的控制器： @Controller public class HelloController { @GetMapping(\\"/hello\\") public String handle(Model model) { model.addAttribute(\\"message\\", \\"Hello World!\\"); return \\"index\\"; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:tag","content":"Controller"}],["meta",{"property":"article:published_time","content":"2023-02-14T19:21:22.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Web 应用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-14T19:21:22.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]},{"level":2,"title":"Spring Web 组件","slug":"spring-web-组件","link":"#spring-web-组件","children":[{"level":3,"title":"组件扫描","slug":"组件扫描","link":"#组件扫描","children":[]},{"level":3,"title":"AOP 代理","slug":"aop-代理","link":"#aop-代理","children":[]},{"level":3,"title":"@Controller","slug":"controller","link":"#controller","children":[]},{"level":3,"title":"@RequestMapping","slug":"requestmapping","link":"#requestmapping","children":[]}]},{"level":2,"title":"处理方法","slug":"处理方法","link":"#处理方法","children":[{"level":3,"title":"请求数据","slug":"请求数据","link":"#请求数据","children":[]},{"level":3,"title":"响应数据","slug":"响应数据","link":"#响应数据","children":[]}]},{"level":2,"title":"@ModelAttribute","slug":"modelattribute","link":"#modelattribute","children":[]},{"level":2,"title":"@InitBinder","slug":"initbinder","link":"#initbinder","children":[]},{"level":2,"title":"表单处理","slug":"表单处理","link":"#表单处理","children":[{"level":3,"title":"创建处理表单的 Controller","slug":"创建处理表单的-controller","link":"#创建处理表单的-controller","children":[]},{"level":3,"title":"定义需要提交的表单实体","slug":"定义需要提交的表单实体","link":"#定义需要提交的表单实体","children":[]},{"level":3,"title":"提交表单前端代码","slug":"提交表单前端代码","link":"#提交表单前端代码","children":[]}]},{"level":2,"title":"文件上传","slug":"文件上传","link":"#文件上传","children":[{"level":3,"title":"创建文件上传处理 Controller","slug":"创建文件上传处理-controller","link":"#创建文件上传处理-controller","children":[]},{"level":3,"title":"定义存储文件的 Service","slug":"定义存储文件的-service","link":"#定义存储文件的-service","children":[]},{"level":3,"title":"创建文件上传表单","slug":"创建文件上传表单","link":"#创建文件上传表单","children":[]},{"level":3,"title":"文件上传限制","slug":"文件上传限制","link":"#文件上传限制","children":[]}]},{"level":2,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[{"level":3,"title":"@ExceptionHandler","slug":"exceptionhandler","link":"#exceptionhandler","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":23.03,"words":6909},"filePathRelative":"01.Java/13.框架/01.Spring/03.SpringWeb/02.SpringWeb应用.md","localizedDate":"2023年2月14日","excerpt":"<h1> Spring Web 应用</h1>\\n<p>Spring MVC 提供了一种基于注解的编程模型，<code>@Controller</code> 和 <code>@RestController</code> 组件使用注解来表达请求映射、请求输入、异常处理等。注解控制器具有灵活的方法签名，并且不必扩展基类或实现特定接口。以下示例显示了一个由注解定义的控制器：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Controller</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">HelloController</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token annotation punctuation\\">@GetMapping</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/hello\\"</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">handle</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Model</span> model<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        model<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addAttribute</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"message\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"Hello World!\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"index\\"</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
