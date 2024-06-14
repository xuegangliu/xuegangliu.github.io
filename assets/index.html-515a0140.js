const e=JSON.parse('{"key":"v-79dce658","path":"/pages/36eab6/","title":"RocketMQ 基本原理","lang":"zh-CN","frontmatter":{"title":"RocketMQ 基本原理","date":"2022-07-08T19:02:04.000Z","order":2,"permalink":"/pages/36eab6/","category":["分布式","分布式通信","MQ","RocketMQ"],"tag":["Java","中间件","MQ","RocketMQ"],"description":"RocketMQ 基本原理 原理 分布式消息系统作为实现分布式系统可扩展、可伸缩性的关键组件，需要具有高吞吐量、高可用等特点。而谈到消息系统的设计，就回避不了两个问题： 消息的顺序问题 消息的重复问题 顺序消息 第一种模型 假如生产者产生了 2 条消息：M1、M2，要保证这两条消息的顺序，应该怎样做？你脑中想到的可能是这样：","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/36eab6/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"RocketMQ 基本原理"}],["meta",{"property":"og:description","content":"RocketMQ 基本原理 原理 分布式消息系统作为实现分布式系统可扩展、可伸缩性的关键组件，需要具有高吞吐量、高可用等特点。而谈到消息系统的设计，就回避不了两个问题： 消息的顺序问题 消息的重复问题 顺序消息 第一种模型 假如生产者产生了 2 条消息：M1、M2，要保证这两条消息的顺序，应该怎样做？你脑中想到的可能是这样："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2022-07-08T19:02:04.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ 基本原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-08T19:02:04.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[{"level":3,"title":"顺序消息","slug":"顺序消息","link":"#顺序消息","children":[]},{"level":3,"title":"消息重复","slug":"消息重复","link":"#消息重复","children":[]},{"level":3,"title":"事务消息","slug":"事务消息","link":"#事务消息","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":6.91,"words":2073},"filePathRelative":"15.分布式/21.分布式通信/02.MQ/02.RocketMQ/02.RocketMQ基本原理.md","localizedDate":"2022年7月8日","excerpt":"<h1> RocketMQ 基本原理</h1>\\n<h2> 原理</h2>\\n<p>分布式消息系统作为实现分布式系统可扩展、可伸缩性的关键组件，需要具有高吞吐量、高可用等特点。而谈到消息系统的设计，就回避不了两个问题：</p>\\n<ol>\\n<li>消息的顺序问题</li>\\n<li>消息的重复问题</li>\\n</ol>\\n<h3> 顺序消息</h3>\\n<h4> 第一种模型</h4>\\n<p>假如生产者产生了 2 条消息：M1、M2，要保证这两条消息的顺序，应该怎样做？你脑中想到的可能是这样：</p>\\n<div align=\\"center\\">\\n<img src=\\"http://upload-images.jianshu.io/upload_images/3101171-bb5ec534363e2fb4\\">\\n</div>","autoDesc":true}');export{e as data};
