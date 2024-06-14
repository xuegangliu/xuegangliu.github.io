const e=JSON.parse('{"key":"v-2a0bbb98","path":"/pages/b46249/","title":"链路追踪","lang":"zh-CN","frontmatter":{"title":"链路追踪","date":"2022-04-20T09:08:29.000Z","order":2,"permalink":"/pages/b46249/","category":["DevOps","监控"],"tag":["DevOps","监控","APM","链路追踪"],"description":"链路追踪 链路追踪简介 什么是链路追踪 链路追踪系统广义的概念是：由数据采集、数据处理和数据展示三个相对独立的模块所构成的分布式追踪系统；链路追踪系统狭义的概念是：特指链路追踪的数据采集。譬如 Spring Cloud Sleuth 就属于狭义的链路追踪系统，通常会搭配 Zipkin 作为数据展示，搭配 Elasticsearch 作为数据存储来组合使用；而 Zipkin、Pinpoint、SkyWalking、CAT 都属于广义的链路追踪系统。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/b46249/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"链路追踪"}],["meta",{"property":"og:description","content":"链路追踪 链路追踪简介 什么是链路追踪 链路追踪系统广义的概念是：由数据采集、数据处理和数据展示三个相对独立的模块所构成的分布式追踪系统；链路追踪系统狭义的概念是：特指链路追踪的数据采集。譬如 Spring Cloud Sleuth 就属于狭义的链路追踪系统，通常会搭配 Zipkin 作为数据展示，搭配 Elasticsearch 作为数据存储来组合使用；而 Zipkin、Pinpoint、SkyWalking、CAT 都属于广义的链路追踪系统。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"DevOps"}],["meta",{"property":"article:tag","content":"监控"}],["meta",{"property":"article:tag","content":"APM"}],["meta",{"property":"article:tag","content":"链路追踪"}],["meta",{"property":"article:published_time","content":"2022-04-20T09:08:29.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"链路追踪\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-20T09:08:29.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"链路追踪简介","slug":"链路追踪简介","link":"#链路追踪简介","children":[{"level":3,"title":"什么是链路追踪","slug":"什么是链路追踪","link":"#什么是链路追踪","children":[]},{"level":3,"title":"为什么需要链路追踪","slug":"为什么需要链路追踪","link":"#为什么需要链路追踪","children":[]}]},{"level":2,"title":"链路追踪原理","slug":"链路追踪原理","link":"#链路追踪原理","children":[{"level":3,"title":"链路追踪核心概念","slug":"链路追踪核心概念","link":"#链路追踪核心概念","children":[]},{"level":3,"title":"数据埋点阶段","slug":"数据埋点阶段","link":"#数据埋点阶段","children":[]}]},{"level":2,"title":"链路追踪实现","slug":"链路追踪实现","link":"#链路追踪实现","children":[{"level":3,"title":"数据采集","slug":"数据采集","link":"#数据采集","children":[]},{"level":3,"title":"数据处理","slug":"数据处理","link":"#数据处理","children":[]},{"level":3,"title":"数据展示","slug":"数据展示","link":"#数据展示","children":[]}]},{"level":2,"title":"链路追踪主流技术","slug":"链路追踪主流技术","link":"#链路追踪主流技术","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":14.11,"words":4233},"filePathRelative":"04.DevOps/03.监控/02.链路追踪.md","localizedDate":"2022年4月20日","excerpt":"<h1> 链路追踪</h1>\\n<h2> 链路追踪简介</h2>\\n<h3> 什么是链路追踪</h3>\\n<p>链路追踪系统<strong>广义</strong>的概念是：由<strong>数据采集</strong>、<strong>数据处理</strong>和<strong>数据展示</strong>三个相对独立的模块所构成的分布式追踪系统；链路追踪系统<strong>狭义</strong>的概念是：特指链路追踪的数据采集。譬如 <a href=\\"https://spring.io/projects/spring-cloud-sleuth\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring Cloud Sleuth</a> 就属于狭义的链路追踪系统，通常会搭配 <a href=\\"https://github.com/openzipkin/zipkin\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Zipkin</a> 作为数据展示，搭配 Elasticsearch 作为数据存储来组合使用；而 <a href=\\"https://github.com/openzipkin/zipkin\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Zipkin</a>、<a href=\\"https://github.com/pinpoint-apm/pinpoint\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Pinpoint</a>、<a href=\\"https://github.com/apache/skywalking\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SkyWalking</a>、<a href=\\"https://github.com/dianping/cat\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CAT</a> 都属于广义的链路追踪系统。</p>","autoDesc":true}');export{e as data};
