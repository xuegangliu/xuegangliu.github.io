const e=JSON.parse('{"key":"v-108765cf","path":"/pages/630e7a/","title":"代码坏味道之耦合","lang":"zh-CN","frontmatter":{"title":"代码坏味道之耦合","date":"2018-10-13T22:48:00.000Z","order":6,"permalink":"/pages/630e7a/","category":["设计","重构"],"tag":["设计","重构","代码的坏味道"],"description":"翻译自：https://sourcemaking.com/refactoring/smells/couplers 耦合(Couplers)这组坏味道意味着：不同类之间过度耦合。 不完美的库类 不完美的库类(Incomplete Library Class) 当一个类库已经不能满足实际需要时，你就不得不改变这个库（如果这个库是只读的，那就没辙了）。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/630e7a/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"代码坏味道之耦合"}],["meta",{"property":"og:description","content":"翻译自：https://sourcemaking.com/refactoring/smells/couplers 耦合(Couplers)这组坏味道意味着：不同类之间过度耦合。 不完美的库类 不完美的库类(Incomplete Library Class) 当一个类库已经不能满足实际需要时，你就不得不改变这个库（如果这个库是只读的，那就没辙了）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"重构"}],["meta",{"property":"article:tag","content":"代码的坏味道"}],["meta",{"property":"article:published_time","content":"2018-10-13T22:48:00.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码坏味道之耦合\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-10-13T22:48:00.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"不完美的库类","slug":"不完美的库类","link":"#不完美的库类","children":[{"level":3,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":3,"title":"收益","slug":"收益","link":"#收益","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略","link":"#何时忽略","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明","link":"#重构方法说明","children":[]}]},{"level":2,"title":"中间人","slug":"中间人","link":"#中间人","children":[{"level":3,"title":"问题原因","slug":"问题原因-1","link":"#问题原因-1","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-1","link":"#解决方法-1","children":[]},{"level":3,"title":"收益","slug":"收益-1","link":"#收益-1","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略-1","link":"#何时忽略-1","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-1","link":"#重构方法说明-1","children":[]}]},{"level":2,"title":"依恋情结","slug":"依恋情结","link":"#依恋情结","children":[{"level":3,"title":"问题原因","slug":"问题原因-2","link":"#问题原因-2","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-2","link":"#解决方法-2","children":[]},{"level":3,"title":"收益","slug":"收益-2","link":"#收益-2","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略-2","link":"#何时忽略-2","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-2","link":"#重构方法说明-2","children":[]}]},{"level":2,"title":"狎昵关系","slug":"狎昵关系","link":"#狎昵关系","children":[{"level":3,"title":"问题原因","slug":"问题原因-3","link":"#问题原因-3","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-3","link":"#解决方法-3","children":[]},{"level":3,"title":"收益","slug":"收益-3","link":"#收益-3","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-3","link":"#重构方法说明-3","children":[]}]},{"level":2,"title":"过度耦合的消息链","slug":"过度耦合的消息链","link":"#过度耦合的消息链","children":[{"level":3,"title":"问题原因","slug":"问题原因-4","link":"#问题原因-4","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-4","link":"#解决方法-4","children":[]},{"level":3,"title":"收益","slug":"收益-4","link":"#收益-4","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略-3","link":"#何时忽略-3","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-4","link":"#重构方法说明-4","children":[]}]},{"level":2,"title":"扩展阅读","slug":"扩展阅读","link":"#扩展阅读","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":9.9,"words":2971},"filePathRelative":"03.设计/03.重构/06.代码坏味道之耦合.md","localizedDate":"2018年10月13日","excerpt":"<blockquote>\\n<p>翻译自：<a href=\\"https://sourcemaking.com/refactoring/smells/couplers\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://sourcemaking.com/refactoring/smells/couplers</a></p>\\n<p><strong>耦合(Couplers)这组坏味道意味着：不同类之间过度耦合。</strong></p>\\n</blockquote>\\n<h2> 不完美的库类</h2>\\n<blockquote>\\n<p>不完美的库类(Incomplete Library Class)</p>\\n<p>当一个类库已经不能满足实际需要时，你就不得不改变这个库（如果这个库是只读的，那就没辙了）。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
