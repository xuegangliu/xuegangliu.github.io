const e=JSON.parse('{"key":"v-1379ecc4","path":"/pages/18eb58/","title":"Hive 分区表和分桶表","lang":"zh-CN","frontmatter":{"title":"Hive 分区表和分桶表","date":"2020-02-24T21:14:47.000Z","order":2,"permalink":"/pages/18eb58/","category":["大数据","hive"],"tag":["大数据","Hive"],"description":"Hive 分区表和分桶表 分区表 概念 Hive 中的表对应为 HDFS 上的指定目录，在查询数据时候，默认会对全表进行扫描，这样时间和性能的消耗都非常大。 分区为 HDFS 上表目录的子目录，数据按照分区存储在子目录中。如果查询的 where 子句中包含分区条件，则直接从该分区去查找，而不是扫描整个表目录，合理的分区设计可以极大提高查询速度和性能。 这里说明一下分区表并非 Hive 独有的概念，实际上这个概念非常常见。比如在我们常用的 Oracle 数据库中，当表中的数据量不断增大，查询数据的速度就会下降，这时也可以对表进行分区。表进行分区后，逻辑上表仍然是一张完整的表，只是将表中的数据存放到多个表空间（物理文件上），这样查询数据时，就不必要每次都扫描整张表，从而提升查询性能。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/18eb58/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"Hive 分区表和分桶表"}],["meta",{"property":"og:description","content":"Hive 分区表和分桶表 分区表 概念 Hive 中的表对应为 HDFS 上的指定目录，在查询数据时候，默认会对全表进行扫描，这样时间和性能的消耗都非常大。 分区为 HDFS 上表目录的子目录，数据按照分区存储在子目录中。如果查询的 where 子句中包含分区条件，则直接从该分区去查找，而不是扫描整个表目录，合理的分区设计可以极大提高查询速度和性能。 这里说明一下分区表并非 Hive 独有的概念，实际上这个概念非常常见。比如在我们常用的 Oracle 数据库中，当表中的数据量不断增大，查询数据的速度就会下降，这时也可以对表进行分区。表进行分区后，逻辑上表仍然是一张完整的表，只是将表中的数据存放到多个表空间（物理文件上），这样查询数据时，就不必要每次都扫描整张表，从而提升查询性能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Hive"}],["meta",{"property":"article:published_time","content":"2020-02-24T21:14:47.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hive 分区表和分桶表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-24T21:14:47.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"分区表","slug":"分区表","link":"#分区表","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":3,"title":"创建分区表","slug":"创建分区表","link":"#创建分区表","children":[]},{"level":3,"title":"加载数据到分区表","slug":"加载数据到分区表","link":"#加载数据到分区表","children":[]},{"level":3,"title":"查看分区目录","slug":"查看分区目录","link":"#查看分区目录","children":[]}]},{"level":2,"title":"分桶表","slug":"分桶表","link":"#分桶表","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"理解分桶表","slug":"理解分桶表","link":"#理解分桶表","children":[]},{"level":3,"title":"创建分桶表","slug":"创建分桶表","link":"#创建分桶表","children":[]},{"level":3,"title":"加载数据到分桶表","slug":"加载数据到分桶表","link":"#加载数据到分桶表","children":[]},{"level":3,"title":"查看分桶文件","slug":"查看分桶文件","link":"#查看分桶文件","children":[]}]},{"level":2,"title":"分区表和分桶表结合使用","slug":"分区表和分桶表结合使用","link":"#分区表和分桶表结合使用","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":5.62,"words":1687},"filePathRelative":"16.大数据/02.hive/02.Hive表.md","localizedDate":"2020年2月24日","excerpt":"<h1> Hive 分区表和分桶表</h1>\\n<h2> 分区表</h2>\\n<h3> 概念</h3>\\n<p>Hive 中的表对应为 HDFS 上的指定目录，在查询数据时候，默认会对全表进行扫描，这样时间和性能的消耗都非常大。</p>\\n<p><strong>分区为 HDFS 上表目录的子目录</strong>，数据按照分区存储在子目录中。如果查询的 <code>where</code> 子句中包含分区条件，则直接从该分区去查找，而不是扫描整个表目录，合理的分区设计可以极大提高查询速度和性能。</p>\\n<blockquote>\\n<p>这里说明一下分区表并非 Hive 独有的概念，实际上这个概念非常常见。比如在我们常用的 Oracle 数据库中，当表中的数据量不断增大，查询数据的速度就会下降，这时也可以对表进行分区。表进行分区后，逻辑上表仍然是一张完整的表，只是将表中的数据存放到多个表空间（物理文件上），这样查询数据时，就不必要每次都扫描整张表，从而提升查询性能。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
