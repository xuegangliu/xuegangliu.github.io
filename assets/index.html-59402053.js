const e=JSON.parse('{"key":"v-ab1ca064","path":"/pages/4574fe/","title":"MongoDB 事务","lang":"zh-CN","frontmatter":{"title":"MongoDB 事务","date":"2020-09-20T23:12:17.000Z","order":4,"permalink":"/pages/4574fe/","category":["数据库","文档数据库","MongoDB"],"tag":["数据库","文档数据库","MongoDB","事务"],"description":"MongoDB 事务 writeConcern 可以决定写操作到达多少个节点才算成功。 默认：多节点复制集不做任何设定，所以是有可能丢失数据。 w: \\"majority\\"：大部分节点确认，就视为写成功 w: \\"all\\"：全部节点确认，才视为写成功 journal 则定义如何才算成功。取值包括： true：写操作落到 journal 文件中才算成功； false：写操作达到内存即算作成功。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/4574fe/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"MongoDB 事务"}],["meta",{"property":"og:description","content":"MongoDB 事务 writeConcern 可以决定写操作到达多少个节点才算成功。 默认：多节点复制集不做任何设定，所以是有可能丢失数据。 w: \\"majority\\"：大部分节点确认，就视为写成功 w: \\"all\\"：全部节点确认，才视为写成功 journal 则定义如何才算成功。取值包括： true：写操作落到 journal 文件中才算成功； false：写操作达到内存即算作成功。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"文档数据库"}],["meta",{"property":"article:tag","content":"MongoDB"}],["meta",{"property":"article:tag","content":"事务"}],["meta",{"property":"article:published_time","content":"2020-09-20T23:12:17.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB 事务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-20T23:12:17.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":0.7,"words":209},"filePathRelative":"12.数据库/04.文档数据库/01.MongoDB/04.MongoDB事务.md","localizedDate":"2020年9月20日","excerpt":"<h1> MongoDB 事务</h1>\\n<p>writeConcern 可以决定写操作到达多少个节点才算成功。</p>\\n<ul>\\n<li>默认：多节点复制集不做任何设定，所以是有可能丢失数据。</li>\\n<li><code>w: \\"majority\\"</code>：大部分节点确认，就视为写成功</li>\\n<li><code>w: \\"all\\"</code>：全部节点确认，才视为写成功</li>\\n</ul>\\n<p>journal 则定义如何才算成功。取值包括：</p>\\n<ul>\\n<li><code>true</code>：写操作落到 journal 文件中才算成功；</li>\\n<li><code>false</code>：写操作达到内存即算作成功。</li>\\n</ul>","autoDesc":true}');export{e as data};
