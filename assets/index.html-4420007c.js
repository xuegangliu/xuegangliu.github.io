const e=JSON.parse('{"key":"v-4f4ec49c","path":"/pages/fd0aaa/","title":"缓存基本原理","lang":"zh-CN","frontmatter":{"title":"缓存基本原理","date":"2019-06-27T15:36:00.000Z","order":1,"permalink":"/pages/fd0aaa/","category":["分布式","分布式存储"],"tag":["分布式","数据调度","缓存"],"description":"缓存基本原理 缓存是一种利用空间换时间的设计，其目标就是更快、更近。 缓存简介 为什么需要缓存 众所周知，当今是一个互联网时代，而互联网应用几乎遍及我们日常生活的方方面面。一般而言，一个互联网应用的请求/响应流程会有以下几个主要流程： 客户端发起请求，请求经过网络 I/O，分发到服务层。 服务层可能有多级服务，请求需要被多个服务层层处理。 不同服务根据请求进行计算时，可能依赖于不同数据库的数据，需要通过网络 I/O 读写数据库。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/fd0aaa/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"缓存基本原理"}],["meta",{"property":"og:description","content":"缓存基本原理 缓存是一种利用空间换时间的设计，其目标就是更快、更近。 缓存简介 为什么需要缓存 众所周知，当今是一个互联网时代，而互联网应用几乎遍及我们日常生活的方方面面。一般而言，一个互联网应用的请求/响应流程会有以下几个主要流程： 客户端发起请求，请求经过网络 I/O，分发到服务层。 服务层可能有多级服务，请求需要被多个服务层层处理。 不同服务根据请求进行计算时，可能依赖于不同数据库的数据，需要通过网络 I/O 读写数据库。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"数据调度"}],["meta",{"property":"article:tag","content":"缓存"}],["meta",{"property":"article:published_time","content":"2019-06-27T15:36:00.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缓存基本原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-27T15:36:00.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"缓存简介","slug":"缓存简介","link":"#缓存简介","children":[{"level":3,"title":"为什么需要缓存","slug":"为什么需要缓存","link":"#为什么需要缓存","children":[]},{"level":3,"title":"什么是缓存","slug":"什么是缓存","link":"#什么是缓存","children":[]},{"level":3,"title":"何时需要缓存","slug":"何时需要缓存","link":"#何时需要缓存","children":[]},{"level":3,"title":"缓存的基本原理","slug":"缓存的基本原理","link":"#缓存的基本原理","children":[]},{"level":3,"title":"缓存淘汰策略","slug":"缓存淘汰策略","link":"#缓存淘汰策略","children":[]}]},{"level":2,"title":"缓存的分类","slug":"缓存的分类","link":"#缓存的分类","children":[{"level":3,"title":"HTTP 缓存","slug":"http-缓存","link":"#http-缓存","children":[]},{"level":3,"title":"CDN 缓存","slug":"cdn-缓存","link":"#cdn-缓存","children":[]},{"level":3,"title":"反向代理缓存","slug":"反向代理缓存","link":"#反向代理缓存","children":[]}]},{"level":2,"title":"进程内缓存","slug":"进程内缓存","link":"#进程内缓存","children":[{"level":3,"title":"ConcurrentHashMap","slug":"concurrenthashmap","link":"#concurrenthashmap","children":[]},{"level":3,"title":"LRUHashMap","slug":"lruhashmap","link":"#lruhashmap","children":[]},{"level":3,"title":"Guava Cache","slug":"guava-cache","link":"#guava-cache","children":[]},{"level":3,"title":"Caffeine","slug":"caffeine","link":"#caffeine","children":[]},{"level":3,"title":"Ehcache","slug":"ehcache","link":"#ehcache","children":[]},{"level":3,"title":"进程内缓存对比","slug":"进程内缓存对比","link":"#进程内缓存对比","children":[]}]},{"level":2,"title":"分布式缓存","slug":"分布式缓存","link":"#分布式缓存","children":[{"level":3,"title":"Memcached","slug":"memcached","link":"#memcached","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"分布式缓存对比","slug":"分布式缓存对比","link":"#分布式缓存对比","children":[]}]},{"level":2,"title":"多级缓存","slug":"多级缓存","link":"#多级缓存","children":[{"level":3,"title":"整体缓存框架","slug":"整体缓存框架","link":"#整体缓存框架","children":[]},{"level":3,"title":"使用进程内缓存","slug":"使用进程内缓存","link":"#使用进程内缓存","children":[]},{"level":3,"title":"使用分布式缓存","slug":"使用分布式缓存","link":"#使用分布式缓存","children":[]},{"level":3,"title":"使用多级缓存","slug":"使用多级缓存","link":"#使用多级缓存","children":[]}]},{"level":2,"title":"缓存问题","slug":"缓存问题","link":"#缓存问题","children":[{"level":3,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[]},{"level":3,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[]},{"level":3,"title":"缓存击穿","slug":"缓存击穿","link":"#缓存击穿","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"缓存策略","slug":"缓存策略","link":"#缓存策略","children":[{"level":3,"title":"缓存预热","slug":"缓存预热","link":"#缓存预热","children":[]},{"level":3,"title":"如何缓存","slug":"如何缓存","link":"#如何缓存","children":[]},{"level":3,"title":"缓存更新","slug":"缓存更新","link":"#缓存更新","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":36.74,"words":11023},"filePathRelative":"15.分布式/22.分布式存储/01.分布式缓存.md","localizedDate":"2019年6月27日","excerpt":"<h1> 缓存基本原理</h1>\\n<blockquote>\\n<p>缓存是一种利用空间换时间的设计，其目标就是<strong>更快</strong>、<strong>更近</strong>。</p>\\n</blockquote>\\n<h2> 缓存简介</h2>\\n<h3> 为什么需要缓存</h3>\\n<p>众所周知，当今是一个互联网时代，而互联网应用几乎遍及我们日常生活的方方面面。一般而言，一个互联网应用的请求/响应流程会有以下几个主要流程：</p>\\n<ul>\\n<li>客户端发起请求，请求经过网络 I/O，分发到服务层。</li>\\n<li>服务层可能有多级服务，请求需要被多个服务层层处理。</li>\\n<li>不同服务根据请求进行计算时，可能依赖于不同数据库的数据，需要通过网络 I/O 读写数据库。</li>\\n</ul>","autoDesc":true}');export{e as data};
