const t=JSON.parse('{"key":"v-06c32b40","path":"/pages/128c54/","title":"Spring 之事务","lang":"zh-CN","frontmatter":{"title":"Spring 之事务","date":"2022-09-22T07:46:49.000Z","order":3,"permalink":"/pages/128c54/","category":["Java","框架","Spring","Spring数据"],"tag":["Java","框架","Spring","SpringBoot","事务"],"description":"Spring 之事务 Spring 针对 Java Transaction API (JTA)、JDBC、Hibernate 和 Java Persistence API(JPA) 等事务 API，实现了一致的编程模型，而 Spring 的声明式事务功能更是提供了极其方便的事务配置方式，配合 Spring Boot 的自动配置，大多数 Spring Boot 项目只需要在方法上标记 @Transactional 注解，即可一键开启方法的事务性配置。 理解事务 在软件开发领域，全有或全无的操作被称为事务（transaction）。事务允许你将几个操作组合成一个要么全部发生要么全部不发生的工作单元。传统上 Java EE 开发对事务管理有两种选择：全局事务或本地事务，两者都有很大的局限性。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/128c54/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"Spring 之事务"}],["meta",{"property":"og:description","content":"Spring 之事务 Spring 针对 Java Transaction API (JTA)、JDBC、Hibernate 和 Java Persistence API(JPA) 等事务 API，实现了一致的编程模型，而 Spring 的声明式事务功能更是提供了极其方便的事务配置方式，配合 Spring Boot 的自动配置，大多数 Spring Boot 项目只需要在方法上标记 @Transactional 注解，即可一键开启方法的事务性配置。 理解事务 在软件开发领域，全有或全无的操作被称为事务（transaction）。事务允许你将几个操作组合成一个要么全部发生要么全部不发生的工作单元。传统上 Java EE 开发对事务管理有两种选择：全局事务或本地事务，两者都有很大的局限性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"事务"}],["meta",{"property":"article:published_time","content":"2022-09-22T07:46:49.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 之事务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-22T07:46:49.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"理解事务","slug":"理解事务","link":"#理解事务","children":[{"level":3,"title":"事务的特性","slug":"事务的特性","link":"#事务的特性","children":[]},{"level":3,"title":"全局事务","slug":"全局事务","link":"#全局事务","children":[]},{"level":3,"title":"本地事务","slug":"本地事务","link":"#本地事务","children":[]},{"level":3,"title":"Spring 对事务的支持","slug":"spring-对事务的支持","link":"#spring-对事务的支持","children":[]},{"level":3,"title":"Spring 事务的优点","slug":"spring-事务的优点","link":"#spring-事务的优点","children":[]}]},{"level":2,"title":"核心 API","slug":"核心-api","link":"#核心-api","children":[{"level":3,"title":"TransactionManager","slug":"transactionmanager","link":"#transactionmanager","children":[]},{"level":3,"title":"TransactionDefinition","slug":"transactiondefinition","link":"#transactiondefinition","children":[]},{"level":3,"title":"TransactionStatus","slug":"transactionstatus","link":"#transactionstatus","children":[]},{"level":3,"title":"TransactionTemplate","slug":"transactiontemplate","link":"#transactiontemplate","children":[]}]},{"level":2,"title":"声明式事务管理","slug":"声明式事务管理","link":"#声明式事务管理","children":[{"level":3,"title":"Spring 声明式事务管理的实现","slug":"spring-声明式事务管理的实现","link":"#spring-声明式事务管理的实现","children":[]},{"level":3,"title":"声明式事务示例","slug":"声明式事务示例","link":"#声明式事务示例","children":[]},{"level":3,"title":"回滚一个声明性事务","slug":"回滚一个声明性事务","link":"#回滚一个声明性事务","children":[]},{"level":3,"title":"为不同的 Bean 配置不同的事务语义","slug":"为不同的-bean-配置不同的事务语义","link":"#为不同的-bean-配置不同的事务语义","children":[]},{"level":3,"title":"<tx:advice/> 配置","slug":"tx-advice-配置","link":"#tx-advice-配置","children":[]},{"level":3,"title":"使用 @Transactional 注解","slug":"使用-transactional-注解","link":"#使用-transactional-注解","children":[]}]},{"level":2,"title":"JDBC 异常抽象","slug":"jdbc-异常抽象","link":"#jdbc-异常抽象","children":[]},{"level":2,"title":"Spring 事务最佳实践","slug":"spring-事务最佳实践","link":"#spring-事务最佳实践","children":[{"level":3,"title":"Spring 事务未生效","slug":"spring-事务未生效","link":"#spring-事务未生效","children":[]},{"level":3,"title":"事务虽然生效但未回滚","slug":"事务虽然生效但未回滚","link":"#事务虽然生效但未回滚","children":[]},{"level":3,"title":"细化事务传播方式","slug":"细化事务传播方式","link":"#细化事务传播方式","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":43.32,"words":12995},"filePathRelative":"01.Java/13.框架/01.Spring/02.Spring数据/03.Spring之事务.md","localizedDate":"2022年9月22日","excerpt":"<h1> Spring 之事务</h1>\\n<p>Spring 针对 Java Transaction API (JTA)、JDBC、Hibernate 和 Java Persistence API(JPA) 等事务 API，实现了一致的编程模型，而 Spring 的声明式事务功能更是提供了极其方便的事务配置方式，配合 Spring Boot 的自动配置，大多数 Spring Boot 项目只需要在方法上标记 <code>@Transactional</code> 注解，即可一键开启方法的事务性配置。</p>\\n<h2> 理解事务</h2>\\n<p>在软件开发领域，全有或全无的操作被称为<strong>事务（transaction）</strong>。事务允许你将几个操作组合成一个要么全部发生要么全部不发生的工作单元。传统上 Java EE 开发对事务管理有两种选择：<strong>全局事务</strong>或<strong>本地事务</strong>，两者都有很大的局限性。</p>","autoDesc":true}');export{t as data};
