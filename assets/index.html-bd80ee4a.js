const e=JSON.parse('{"key":"v-233b52ca","path":"/pages/b067d6/","title":"Java并发和容器","lang":"zh-CN","frontmatter":{"title":"Java并发和容器","date":"2020-02-02T17:54:36.000Z","order":6,"permalink":"/pages/b067d6/","category":["Java","JavaSE","并发"],"tag":["Java","JavaSE","并发","容器"],"description":"Java 并发和容器 同步容器 同步容器简介 在 Java 中，同步容器主要包括 2 类： Vector、Stack、Hashtable Vector - Vector 实现了 List 接口。Vector 实际上就是一个数组，和 ArrayList 类似。但是 Vector 中的方法都是 synchronized 方法，即进行了同步措施。 Stack - Stack 也是一个同步容器，它的方法也用 synchronized 进行了同步，它实际上是继承于 Vector 类。 Hashtable- Hashtable 实现了 Map 接口，它和 HashMap 很相似，但是 Hashtable 进行了同步处理，而 HashMap 没有。 Collections 类中提供的静态工厂方法创建的类（由 Collections.synchronizedXXX 等方法）","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/b067d6/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"Java并发和容器"}],["meta",{"property":"og:description","content":"Java 并发和容器 同步容器 同步容器简介 在 Java 中，同步容器主要包括 2 类： Vector、Stack、Hashtable Vector - Vector 实现了 List 接口。Vector 实际上就是一个数组，和 ArrayList 类似。但是 Vector 中的方法都是 synchronized 方法，即进行了同步措施。 Stack - Stack 也是一个同步容器，它的方法也用 synchronized 进行了同步，它实际上是继承于 Vector 类。 Hashtable- Hashtable 实现了 Map 接口，它和 HashMap 很相似，但是 Hashtable 进行了同步处理，而 HashMap 没有。 Collections 类中提供的静态工厂方法创建的类（由 Collections.synchronizedXXX 等方法）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"并发"}],["meta",{"property":"article:tag","content":"容器"}],["meta",{"property":"article:published_time","content":"2020-02-02T17:54:36.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java并发和容器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-02T17:54:36.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"同步容器","slug":"同步容器","link":"#同步容器","children":[{"level":3,"title":"同步容器简介","slug":"同步容器简介","link":"#同步容器简介","children":[]},{"level":3,"title":"同步容器的问题","slug":"同步容器的问题","link":"#同步容器的问题","children":[]}]},{"level":2,"title":"并发容器简介","slug":"并发容器简介","link":"#并发容器简介","children":[{"level":3,"title":"并发场景下的 Map","slug":"并发场景下的-map","link":"#并发场景下的-map","children":[]},{"level":3,"title":"并发场景下的 List","slug":"并发场景下的-list","link":"#并发场景下的-list","children":[]}]},{"level":2,"title":"Map","slug":"map","link":"#map","children":[{"level":3,"title":"ConcurrentHashMap","slug":"concurrenthashmap","link":"#concurrenthashmap","children":[]}]},{"level":2,"title":"List","slug":"list","link":"#list","children":[{"level":3,"title":"CopyOnWriteArrayList","slug":"copyonwritearraylist","link":"#copyonwritearraylist","children":[]}]},{"level":2,"title":"Set","slug":"set","link":"#set","children":[]},{"level":2,"title":"Queue","slug":"queue","link":"#queue","children":[{"level":3,"title":"BlockingQueue","slug":"blockingqueue","link":"#blockingqueue","children":[]},{"level":3,"title":"PriorityBlockingQueue 类","slug":"priorityblockingqueue-类","link":"#priorityblockingqueue-类","children":[]},{"level":3,"title":"ArrayBlockingQueue 类","slug":"arrayblockingqueue-类","link":"#arrayblockingqueue-类","children":[]},{"level":3,"title":"LinkedBlockingQueue 类","slug":"linkedblockingqueue-类","link":"#linkedblockingqueue-类","children":[]},{"level":3,"title":"SynchronousQueue 类","slug":"synchronousqueue-类","link":"#synchronousqueue-类","children":[]},{"level":3,"title":"ConcurrentLinkedDeque 类","slug":"concurrentlinkeddeque-类","link":"#concurrentlinkeddeque-类","children":[]},{"level":3,"title":"Queue 的并发应用","slug":"queue-的并发应用","link":"#queue-的并发应用","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":26.01,"words":7804},"filePathRelative":"01.Java/01.JavaSE/05.并发/06.Java并发和容器.md","localizedDate":"2020年2月2日","excerpt":"<h1> Java 并发和容器</h1>\\n<h2> 同步容器</h2>\\n<h3> 同步容器简介</h3>\\n<p>在 Java 中，同步容器主要包括 2 类：</p>\\n<ul>\\n<li><code>Vector</code>、<code>Stack</code>、<code>Hashtable</code>\\n<ul>\\n<li><code>Vector</code> - <code>Vector</code> 实现了 <code>List</code> 接口。<code>Vector</code> 实际上就是一个数组，和 <code>ArrayList</code> 类似。但是 <code>Vector</code> 中的方法都是 <code>synchronized</code> 方法，即进行了同步措施。</li>\\n<li><code>Stack</code> - <code>Stack</code> 也是一个同步容器，它的方法也用 <code>synchronized</code> 进行了同步，它实际上是继承于 <code>Vector</code> 类。</li>\\n<li><code>Hashtable</code>- <code>Hashtable</code> 实现了 <code>Map</code> 接口，它和 <code>HashMap</code> 很相似，但是 <code>Hashtable</code> 进行了同步处理，而 <code>HashMap</code> 没有。</li>\\n</ul>\\n</li>\\n<li><code>Collections</code> 类中提供的静态工厂方法创建的类（由 <code>Collections.synchronizedXXX</code> 等方法）</li>\\n</ul>","autoDesc":true}');export{e as data};
