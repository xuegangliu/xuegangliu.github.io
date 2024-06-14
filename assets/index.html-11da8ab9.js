const e=JSON.parse('{"key":"v-09c9be44","path":"/pages/141b2e/","title":"Kafka 生产者","lang":"zh-CN","frontmatter":{"title":"Kafka 生产者","date":"2021-04-14T15:05:34.000Z","order":2,"permalink":"/pages/141b2e/","category":["分布式","分布式通信","MQ","Kafka"],"tag":["MQ","Kafka"],"description":"Kafka 生产者 生产者简介 不管是把 Kafka 作为消息队列系统、还是数据存储平台，总是需要一个可以向 Kafka 写入数据的生产者和一个可以从 Kafka 读取数据的消费者，或者是一个兼具两种角色的应用程序。 使用 Kafka 的场景很多，诉求也各有不同，主要有：是否允许丢失消息？是否接受重复消息？是否有严格的延迟和吞吐量要求？ 不同的场景对于 Kafka 生产者 API 的使用和配置会有直接的影响。 生产者传输实体 Kafka Producer 发送的数据对象叫做 ProducerRecord ，它有 4 个关键参数：","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/141b2e/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"Kafka 生产者"}],["meta",{"property":"og:description","content":"Kafka 生产者 生产者简介 不管是把 Kafka 作为消息队列系统、还是数据存储平台，总是需要一个可以向 Kafka 写入数据的生产者和一个可以从 Kafka 读取数据的消费者，或者是一个兼具两种角色的应用程序。 使用 Kafka 的场景很多，诉求也各有不同，主要有：是否允许丢失消息？是否接受重复消息？是否有严格的延迟和吞吐量要求？ 不同的场景对于 Kafka 生产者 API 的使用和配置会有直接的影响。 生产者传输实体 Kafka Producer 发送的数据对象叫做 ProducerRecord ，它有 4 个关键参数："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:tag","content":"Kafka"}],["meta",{"property":"article:published_time","content":"2021-04-14T15:05:34.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kafka 生产者\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-14T15:05:34.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"生产者简介","slug":"生产者简介","link":"#生产者简介","children":[{"level":3,"title":"生产者传输实体","slug":"生产者传输实体","link":"#生产者传输实体","children":[]},{"level":3,"title":"生产者发送流程","slug":"生产者发送流程","link":"#生产者发送流程","children":[]}]},{"level":2,"title":"生产者 API","slug":"生产者-api","link":"#生产者-api","children":[{"level":3,"title":"创建生产者","slug":"创建生产者","link":"#创建生产者","children":[]},{"level":3,"title":"异步发送","slug":"异步发送","link":"#异步发送","children":[]},{"level":3,"title":"同步发送","slug":"同步发送","link":"#同步发送","children":[]},{"level":3,"title":"异步响应发送","slug":"异步响应发送","link":"#异步响应发送","children":[]},{"level":3,"title":"关闭连接","slug":"关闭连接","link":"#关闭连接","children":[]}]},{"level":2,"title":"生产者的连接","slug":"生产者的连接","link":"#生产者的连接","children":[{"level":3,"title":"何时创建 TCP 连接","slug":"何时创建-tcp-连接","link":"#何时创建-tcp-连接","children":[]},{"level":3,"title":"何时关闭 TCP 连接","slug":"何时关闭-tcp-连接","link":"#何时关闭-tcp-连接","children":[]}]},{"level":2,"title":"序列化","slug":"序列化","link":"#序列化","children":[]},{"level":2,"title":"分区","slug":"分区","link":"#分区","children":[{"level":3,"title":"什么是分区","slug":"什么是分区","link":"#什么是分区","children":[]},{"level":3,"title":"为什么要分区","slug":"为什么要分区","link":"#为什么要分区","children":[]},{"level":3,"title":"分区策略","slug":"分区策略","link":"#分区策略","children":[]},{"level":3,"title":"自定义分区策略","slug":"自定义分区策略","link":"#自定义分区策略","children":[]}]},{"level":2,"title":"压缩","slug":"压缩","link":"#压缩","children":[{"level":3,"title":"Kafka 的消息格式","slug":"kafka-的消息格式","link":"#kafka-的消息格式","children":[]},{"level":3,"title":"Kafka 的压缩流程","slug":"kafka-的压缩流程","link":"#kafka-的压缩流程","children":[]},{"level":3,"title":"何时启用压缩","slug":"何时启用压缩","link":"#何时启用压缩","children":[]}]},{"level":2,"title":"幂等性","slug":"幂等性","link":"#幂等性","children":[{"level":3,"title":"什么是幂等性","slug":"什么是幂等性","link":"#什么是幂等性","children":[]},{"level":3,"title":"Kafka Producer 的幂等性","slug":"kafka-producer-的幂等性","link":"#kafka-producer-的幂等性","children":[]},{"level":3,"title":"PID 和 Sequence Number","slug":"pid-和-sequence-number","link":"#pid-和-sequence-number","children":[]},{"level":3,"title":"生成 PID 的流程","slug":"生成-pid-的流程","link":"#生成-pid-的流程","children":[]},{"level":3,"title":"幂等性的应用实例","slug":"幂等性的应用实例","link":"#幂等性的应用实例","children":[]}]},{"level":2,"title":"Kafka 事务","slug":"kafka-事务","link":"#kafka-事务","children":[{"level":3,"title":"事务","slug":"事务","link":"#事务","children":[]},{"level":3,"title":"事务型 Producer","slug":"事务型-producer","link":"#事务型-producer","children":[]},{"level":3,"title":"事务操作的 API","slug":"事务操作的-api","link":"#事务操作的-api","children":[]},{"level":3,"title":"Kafka 事务相关配置","slug":"kafka-事务相关配置","link":"#kafka-事务相关配置","children":[]},{"level":3,"title":"Kafka 事务应用示例","slug":"kafka-事务应用示例","link":"#kafka-事务应用示例","children":[]}]},{"level":2,"title":"生产者的配置","slug":"生产者的配置","link":"#生产者的配置","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":27.52,"words":8257},"filePathRelative":"15.分布式/21.分布式通信/02.MQ/01.Kafka/02.Kafka生产者.md","localizedDate":"2021年4月14日","excerpt":"<h1> Kafka 生产者</h1>\\n<h2> 生产者简介</h2>\\n<p>不管是把 Kafka 作为消息队列系统、还是数据存储平台，总是需要一个可以向 Kafka 写入数据的生产者和一个可以从 Kafka 读取数据的消费者，或者是一个兼具两种角色的应用程序。</p>\\n<p>使用 Kafka 的场景很多，诉求也各有不同，主要有：是否允许丢失消息？是否接受重复消息？是否有严格的延迟和吞吐量要求？</p>\\n<p>不同的场景对于 Kafka 生产者 API 的使用和配置会有直接的影响。</p>\\n<h3> 生产者传输实体</h3>\\n<p>Kafka Producer 发送的数据对象叫做 <code>ProducerRecord</code> ，它有 4 个关键参数：</p>","autoDesc":true}');export{e as data};
