const n=JSON.parse('{"key":"v-2c01549e","path":"/pages/b59ba2/","title":"HBase Java API 管理功能","lang":"zh-CN","frontmatter":{"title":"HBase Java API 管理功能","date":"2023-04-13T16:36:48.000Z","order":14,"permalink":"/pages/b59ba2/","category":["数据库","列式数据库","HBase"],"tag":["大数据","HBase","API"],"description":"HBase Java API 管理功能 初始化 Admin 实例 Configuration conf = HBaseConfiguration.create(); Connection connection = ConnectionFactory.createConnection(conf); Admin admin = connection.getAdmin();","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/b59ba2/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"HBase Java API 管理功能"}],["meta",{"property":"og:description","content":"HBase Java API 管理功能 初始化 Admin 实例 Configuration conf = HBaseConfiguration.create(); Connection connection = ConnectionFactory.createConnection(conf); Admin admin = connection.getAdmin();"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"HBase"}],["meta",{"property":"article:tag","content":"API"}],["meta",{"property":"article:published_time","content":"2023-04-13T16:36:48.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HBase Java API 管理功能\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-13T16:36:48.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"初始化 Admin 实例","slug":"初始化-admin-实例","link":"#初始化-admin-实例","children":[]},{"level":2,"title":"管理命名空间","slug":"管理命名空间","link":"#管理命名空间","children":[{"level":3,"title":"查看命名空间","slug":"查看命名空间","link":"#查看命名空间","children":[]},{"level":3,"title":"创建命名空间","slug":"创建命名空间","link":"#创建命名空间","children":[]},{"level":3,"title":"修改命名空间","slug":"修改命名空间","link":"#修改命名空间","children":[]},{"level":3,"title":"删除命名空间","slug":"删除命名空间","link":"#删除命名空间","children":[]}]},{"level":2,"title":"管理表","slug":"管理表","link":"#管理表","children":[{"level":3,"title":"创建表","slug":"创建表","link":"#创建表","children":[]},{"level":3,"title":"删除表","slug":"删除表","link":"#删除表","children":[]},{"level":3,"title":"修改表","slug":"修改表","link":"#修改表","children":[]},{"level":3,"title":"禁用表","slug":"禁用表","link":"#禁用表","children":[]},{"level":3,"title":"启用表","slug":"启用表","link":"#启用表","children":[]},{"level":3,"title":"查看表是否有效","slug":"查看表是否有效","link":"#查看表是否有效","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":1.05,"words":314},"filePathRelative":"12.数据库/06.列式数据库/01.HBase/14.HBaseJavaApi管理功能.md","localizedDate":"2023年4月13日","excerpt":"<h1> HBase Java API 管理功能</h1>\\n<h2> 初始化 Admin 实例</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">Configuration</span> conf <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">HBaseConfiguration</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">Connection</span> connection <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">ConnectionFactory</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createConnection</span><span class=\\"token punctuation\\">(</span>conf<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">Admin</span> admin <span class=\\"token operator\\">=</span> connection<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getAdmin</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
