const e=JSON.parse('{"key":"v-59260e86","path":"/pages/03714e/","title":"分布式分区","lang":"zh-CN","frontmatter":{"title":"分布式分区","date":"2022-06-14T08:49:21.000Z","order":2,"permalink":"/pages/03714e/","category":["分布式","分布式协同","分布式协同综合"],"tag":["分布式","协同","分区","分区再均衡","路由"],"description":"分布式分区 什么是分区 分区通常是这样定义的，即每一条数据（或者每条记录，每行或每个文档）只属于某个特定分区。实际上，每个分区都可以视为一个完整的小型数据库，虽然数据库可能存在一些跨分区的操作。 在不同系统中，分区有着不同的称呼，例如它对应于 MongoDB, Elasticsearch 和 SolrCloud 中的 shard, HBase 的 region, Bigtable 中的 tablet, Cassandra 和 Riak 中的 vnode ，以及 Couch base 中的 vBucket。总体而言，分区是最普遍的术语。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/03714e/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"分布式分区"}],["meta",{"property":"og:description","content":"分布式分区 什么是分区 分区通常是这样定义的，即每一条数据（或者每条记录，每行或每个文档）只属于某个特定分区。实际上，每个分区都可以视为一个完整的小型数据库，虽然数据库可能存在一些跨分区的操作。 在不同系统中，分区有着不同的称呼，例如它对应于 MongoDB, Elasticsearch 和 SolrCloud 中的 shard, HBase 的 region, Bigtable 中的 tablet, Cassandra 和 Riak 中的 vnode ，以及 Couch base 中的 vBucket。总体而言，分区是最普遍的术语。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"协同"}],["meta",{"property":"article:tag","content":"分区"}],["meta",{"property":"article:tag","content":"分区再均衡"}],["meta",{"property":"article:tag","content":"路由"}],["meta",{"property":"article:published_time","content":"2022-06-14T08:49:21.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式分区\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-14T08:49:21.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"什么是分区","slug":"什么是分区","link":"#什么是分区","children":[]},{"level":2,"title":"为什么需要分区","slug":"为什么需要分区","link":"#为什么需要分区","children":[]},{"level":2,"title":"数据分区与数据复制","slug":"数据分区与数据复制","link":"#数据分区与数据复制","children":[]},{"level":2,"title":"键－值数据的分区","slug":"键-值数据的分区","link":"#键-值数据的分区","children":[{"level":3,"title":"基于关键字区间分区","slug":"基于关键字区间分区","link":"#基于关键字区间分区","children":[]},{"level":3,"title":"基于关键字晗希值分区","slug":"基于关键字晗希值分区","link":"#基于关键字晗希值分区","children":[]},{"level":3,"title":"负载倾斜与热点","slug":"负载倾斜与热点","link":"#负载倾斜与热点","children":[]}]},{"level":2,"title":"分区与二级索引","slug":"分区与二级索引","link":"#分区与二级索引","children":[{"level":3,"title":"基于文档分区的二级索引","slug":"基于文档分区的二级索引","link":"#基于文档分区的二级索引","children":[]},{"level":3,"title":"基于词条的二级索引分区","slug":"基于词条的二级索引分区","link":"#基于词条的二级索引分区","children":[]}]},{"level":2,"title":"分区再均衡","slug":"分区再均衡","link":"#分区再均衡","children":[{"level":3,"title":"动态再平衡的策略","slug":"动态再平衡的策略","link":"#动态再平衡的策略","children":[]},{"level":3,"title":"自动与手动再平衡操作","slug":"自动与手动再平衡操作","link":"#自动与手动再平衡操作","children":[]}]},{"level":2,"title":"请求路由","slug":"请求路由","link":"#请求路由","children":[]},{"level":2,"title":"并行查询执行","slug":"并行查询执行","link":"#并行查询执行","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":22.08,"words":6625},"filePathRelative":"15.分布式/11.分布式协同/01.分布式协同综合/02.分布式分区.md","localizedDate":"2022年6月14日","excerpt":"<h1> 分布式分区</h1>\\n<h2> 什么是分区</h2>\\n<p>分区通常是这样定义的，即每一条数据（或者每条记录，每行或每个文档）只属于某个特定分区。实际上，每个分区都可以视为一个完整的小型数据库，虽然数据库可能存在一些跨分区的操作。</p>\\n<p>在不同系统中，分区有着不同的称呼，例如它对应于 MongoDB, Elasticsearch 和 SolrCloud 中的 shard, HBase 的 region, Bigtable 中的 tablet, Cassandra 和 Riak 中的 vnode ，以及 Couch base 中的 vBucket。总体而言，分区是最普遍的术语。</p>","autoDesc":true}');export{e as data};
