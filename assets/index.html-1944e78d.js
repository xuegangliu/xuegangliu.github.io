const t=JSON.parse('{"key":"v-68e29768","path":"/pages/3faf18/","title":"读写分离基本原理","lang":"zh-CN","frontmatter":{"title":"读写分离基本原理","date":"2022-04-14T11:36:23.000Z","order":2,"permalink":"/pages/3faf18/","category":["分布式","分布式存储"],"tag":["分布式","数据调度","读写分离"],"description":"读写分离基本原理 读写分离的基本原理是：主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作。 1. 为何要读写分离 有效减少锁竞争 - 主服务器只负责写，从服务器只负责读，能够有效的避免由数据更新导致的行锁竞争，使得整个系统的查询性能得到极大的改善。 提高查询吞吐量 - 通过一主多从的配置方式，可以将查询请求均匀的分散到多个数据副本，能够进一步的提升系统的处理能力。 提升数据库可用性 - 使用多主多从的方式，不但能够提升系统的吞吐量，还能够提升数据库的可用性，可以达到在任何一个数据库宕机，甚至磁盘物理损坏的情况下仍然不影响系统的正常运行。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/3faf18/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"读写分离基本原理"}],["meta",{"property":"og:description","content":"读写分离基本原理 读写分离的基本原理是：主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作。 1. 为何要读写分离 有效减少锁竞争 - 主服务器只负责写，从服务器只负责读，能够有效的避免由数据更新导致的行锁竞争，使得整个系统的查询性能得到极大的改善。 提高查询吞吐量 - 通过一主多从的配置方式，可以将查询请求均匀的分散到多个数据副本，能够进一步的提升系统的处理能力。 提升数据库可用性 - 使用多主多从的方式，不但能够提升系统的吞吐量，还能够提升数据库的可用性，可以达到在任何一个数据库宕机，甚至磁盘物理损坏的情况下仍然不影响系统的正常运行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"数据调度"}],["meta",{"property":"article:tag","content":"读写分离"}],["meta",{"property":"article:published_time","content":"2022-04-14T11:36:23.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"读写分离基本原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-14T11:36:23.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 为何要读写分离","slug":"_1-为何要读写分离","link":"#_1-为何要读写分离","children":[]},{"level":2,"title":"2. 读写分离的原理","slug":"_2-读写分离的原理","link":"#_2-读写分离的原理","children":[]},{"level":2,"title":"3. 读写分离的问题","slug":"_3-读写分离的问题","link":"#_3-读写分离的问题","children":[{"level":3,"title":"3.1. 数据一致性","slug":"_3-1-数据一致性","link":"#_3-1-数据一致性","children":[]},{"level":3,"title":"3.2. 分发机制","slug":"_3-2-分发机制","link":"#_3-2-分发机制","children":[]}]},{"level":2,"title":"4. 参考资料","slug":"_4-参考资料","link":"#_4-参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":2.94,"words":883},"filePathRelative":"15.分布式/22.分布式存储/02.读写分离.md","localizedDate":"2022年4月14日","excerpt":"<h1> 读写分离基本原理</h1>\\n<p><strong>读写分离的基本原理是：主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作</strong>。</p>\\n<h2> 1. 为何要读写分离</h2>\\n<ul>\\n<li><strong>有效减少锁竞争</strong> - 主服务器只负责写，从服务器只负责读，能够有效的避免由数据更新导致的行锁竞争，使得整个系统的查询性能得到极大的改善。</li>\\n<li><strong>提高查询吞吐量</strong> - 通过一主多从的配置方式，可以将查询请求均匀的分散到多个数据副本，能够进一步的提升系统的处理能力。</li>\\n<li><strong>提升数据库可用性</strong> - 使用多主多从的方式，不但能够提升系统的吞吐量，还能够提升数据库的可用性，可以达到在任何一个数据库宕机，甚至磁盘物理损坏的情况下仍然不影响系统的正常运行。</li>\\n</ul>","autoDesc":true}');export{t as data};
