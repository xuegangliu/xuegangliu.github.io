const e=JSON.parse('{"key":"v-4eddf786","path":"/pages/518280/","title":"Redis 高级数据类型","lang":"zh-CN","frontmatter":{"icon":"logos:redis","title":"Redis 高级数据类型","cover":"https://raw.githubusercontent.com/dunwu/images/master/snap/20230901071808.png","date":"2020-06-24T10:45:38.000Z","order":2,"permalink":"/pages/518280/","category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis","数据类型"],"description":"Redis 高级数据类型 关键词：BitMap、HyperLogLog、Geo、Stream Redis 支持的高级数据类型：BitMap、HyperLogLog、GEO、Stream 使用 Redis ，不仅要了解其数据类型的特性，还需要根据业务场景，灵活的、高效的使用其数据类型来建模。 BitMap BitMap 简介 Bitmap，即位图，是一串连续的二进制数组（0 和 1），可以通过偏移量（offset）定位元素。由于 bit 是计算机中最小的单位，使用它进行储存将非常节省空间，特别适合一些数据量大且使用二值统计的场景。例如在一个系统中，不同的用户使用单调递增的用户 ID 表示。40 亿（$$2^{32}$$ = $$410241024*1024$$ ≈ 40 亿）用户只需要 512M 内存就能记住某种状态，例如用户是否已登录。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/518280/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"Redis 高级数据类型"}],["meta",{"property":"og:description","content":"Redis 高级数据类型 关键词：BitMap、HyperLogLog、Geo、Stream Redis 支持的高级数据类型：BitMap、HyperLogLog、GEO、Stream 使用 Redis ，不仅要了解其数据类型的特性，还需要根据业务场景，灵活的、高效的使用其数据类型来建模。 BitMap BitMap 简介 Bitmap，即位图，是一串连续的二进制数组（0 和 1），可以通过偏移量（offset）定位元素。由于 bit 是计算机中最小的单位，使用它进行储存将非常节省空间，特别适合一些数据量大且使用二值统计的场景。例如在一个系统中，不同的用户使用单调递增的用户 ID 表示。40 亿（$$2^{32}$$ = $$410241024*1024$$ ≈ 40 亿）用户只需要 512M 内存就能记住某种状态，例如用户是否已登录。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dunwu/images/master/snap/20230901071808.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis 高级数据类型"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"数据类型"}],["meta",{"property":"article:published_time","content":"2020-06-24T10:45:38.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 高级数据类型\\",\\"image\\":[\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20230901071808.png\\"],\\"datePublished\\":\\"2020-06-24T10:45:38.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"BitMap","slug":"bitmap","link":"#bitmap","children":[{"level":3,"title":"BitMap 简介","slug":"bitmap-简介","link":"#bitmap-简介","children":[]},{"level":3,"title":"BitMap 实现","slug":"bitmap-实现","link":"#bitmap-实现","children":[]},{"level":3,"title":"BitMap 命令","slug":"bitmap-命令","link":"#bitmap-命令","children":[]},{"level":3,"title":"BitMap 应用","slug":"bitmap-应用","link":"#bitmap-应用","children":[]}]},{"level":2,"title":"HyperLogLog","slug":"hyperloglog","link":"#hyperloglog","children":[{"level":3,"title":"HyperLogLog 简介","slug":"hyperloglog-简介","link":"#hyperloglog-简介","children":[]},{"level":3,"title":"HyperLogLog 实现","slug":"hyperloglog-实现","link":"#hyperloglog-实现","children":[]},{"level":3,"title":"HyperLogLog 命令","slug":"hyperloglog-命令","link":"#hyperloglog-命令","children":[]},{"level":3,"title":"HyperLogLog 应用","slug":"hyperloglog-应用","link":"#hyperloglog-应用","children":[]}]},{"level":2,"title":"GEO","slug":"geo","link":"#geo","children":[{"level":3,"title":"GEO 简介","slug":"geo-简介","link":"#geo-简介","children":[]},{"level":3,"title":"GEO 实现","slug":"geo-实现","link":"#geo-实现","children":[]},{"level":3,"title":"GEO 命令","slug":"geo-命令","link":"#geo-命令","children":[]},{"level":3,"title":"GEO 应用","slug":"geo-应用","link":"#geo-应用","children":[]}]},{"level":2,"title":"Stream","slug":"stream","link":"#stream","children":[{"level":3,"title":"Stream 简介","slug":"stream-简介","link":"#stream-简介","children":[]},{"level":3,"title":"Stream 命令","slug":"stream-命令","link":"#stream-命令","children":[]},{"level":3,"title":"Stream 应用","slug":"stream-应用","link":"#stream-应用","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":23.56,"words":7067},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/02.Redis高级数据类型.md","localizedDate":"2020年6月24日","excerpt":"<h1> Redis 高级数据类型</h1>\\n<blockquote>\\n<p>关键词：<code>BitMap</code>、<code>HyperLogLog</code>、<code>Geo</code>、<code>Stream</code></p>\\n</blockquote>\\n<p>Redis 支持的高级数据类型：BitMap、HyperLogLog、GEO、Stream</p>\\n<p>使用 Redis ，不仅要了解其数据类型的特性，还需要根据业务场景，灵活的、高效的使用其数据类型来建模。</p>\\n<h2> BitMap</h2>\\n<h3> BitMap 简介</h3>\\n<p>Bitmap，<strong>即位图，是一串连续的二进制数组（0 和 1）</strong>，可以通过偏移量（offset）定位元素。由于 bit 是计算机中最小的单位，使用它进行储存将<strong>非常节省空间</strong>，特别适合一些数据量大且使用<strong>二值统计的场景</strong>。例如在一个系统中，不同的用户使用单调递增的用户 ID 表示。40 亿（$$2^{32}$$ = $$4<em>1024</em>1024*1024$$ ≈ 40 亿）用户只需要 512M 内存就能记住某种状态，例如用户是否已登录。</p>","autoDesc":true}');export{e as data};
