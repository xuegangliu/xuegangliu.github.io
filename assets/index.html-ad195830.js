const e=JSON.parse('{"key":"v-a15ee3d4","path":"/pages/481bdd/","title":"Kafka 可靠传输","lang":"zh-CN","frontmatter":{"title":"Kafka 可靠传输","date":"2021-04-14T15:05:34.000Z","order":5,"permalink":"/pages/481bdd/","category":["分布式","分布式通信","MQ","Kafka"],"tag":["MQ","Kafka"],"description":"Kafka 可靠传输 消息不丢失 如何保证消息的可靠性传输，或者说，如何保证消息不丢失？这对于任何 MQ 都是核心问题。 一条消息从生产到消费，可以划分三个阶段： img 生产阶段：Producer 创建消息，并通过网络发送给 Broker。 存储阶段：Broker 收到消息并存储，如果是集群，还要同步副本给其他 Broker。 消费阶段：Consumer 向 Broker 请求消息，Broker 通过网络传输给 Consumer。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/481bdd/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"Kafka 可靠传输"}],["meta",{"property":"og:description","content":"Kafka 可靠传输 消息不丢失 如何保证消息的可靠性传输，或者说，如何保证消息不丢失？这对于任何 MQ 都是核心问题。 一条消息从生产到消费，可以划分三个阶段： img 生产阶段：Producer 创建消息，并通过网络发送给 Broker。 存储阶段：Broker 收到消息并存储，如果是集群，还要同步副本给其他 Broker。 消费阶段：Consumer 向 Broker 请求消息，Broker 通过网络传输给 Consumer。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:tag","content":"Kafka"}],["meta",{"property":"article:published_time","content":"2021-04-14T15:05:34.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kafka 可靠传输\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-14T15:05:34.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"消息不丢失","slug":"消息不丢失","link":"#消息不丢失","children":[{"level":3,"title":"存储阶段","slug":"存储阶段","link":"#存储阶段","children":[]},{"level":3,"title":"生产阶段","slug":"生产阶段","link":"#生产阶段","children":[]},{"level":3,"title":"消费阶段","slug":"消费阶段","link":"#消费阶段","children":[]}]},{"level":2,"title":"重复消息","slug":"重复消息","link":"#重复消息","children":[{"level":3,"title":"利用数据库的唯一约束实现幂等","slug":"利用数据库的唯一约束实现幂等","link":"#利用数据库的唯一约束实现幂等","children":[]},{"level":3,"title":"为更新的数据设置前置条件","slug":"为更新的数据设置前置条件","link":"#为更新的数据设置前置条件","children":[]},{"level":3,"title":"记录并检查操作","slug":"记录并检查操作","link":"#记录并检查操作","children":[]}]},{"level":2,"title":"消息的有序性","slug":"消息的有序性","link":"#消息的有序性","children":[{"level":3,"title":"方案一、单 Partition","slug":"方案一、单-partition","link":"#方案一、单-partition","children":[]},{"level":3,"title":"方案二、同一个 key 的消息发送给指定 Partition","slug":"方案二、同一个-key-的消息发送给指定-partition","link":"#方案二、同一个-key-的消息发送给指定-partition","children":[]}]},{"level":2,"title":"消息积压","slug":"消息积压","link":"#消息积压","children":[]},{"level":2,"title":"验证系统可靠性","slug":"验证系统可靠性","link":"#验证系统可靠性","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":13.94,"words":4182},"filePathRelative":"15.分布式/21.分布式通信/02.MQ/01.Kafka/05.Kafka可靠传输.md","localizedDate":"2021年4月14日","excerpt":"<h1> Kafka 可靠传输</h1>\\n<h2> 消息不丢失</h2>\\n<p>如何保证消息的可靠性传输，或者说，如何保证消息不丢失？这对于任何 MQ 都是核心问题。</p>\\n<p>一条消息从生产到消费，可以划分三个阶段：</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20210422042613.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<ul>\\n<li><strong>生产阶段</strong>：Producer 创建消息，并通过网络发送给 Broker。</li>\\n<li><strong>存储阶段</strong>：Broker 收到消息并存储，如果是集群，还要同步副本给其他 Broker。</li>\\n<li><strong>消费阶段</strong>：Consumer 向 Broker 请求消息，Broker 通过网络传输给 Consumer。</li>\\n</ul>","autoDesc":true}');export{e as data};
