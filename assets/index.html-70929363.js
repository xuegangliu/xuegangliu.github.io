const e=JSON.parse('{"key":"v-6ac2ada4","path":"/pages/e593a4/","title":"如何建设监控体系","lang":"zh-CN","frontmatter":{"title":"如何建设监控体系","date":"2022-04-19T20:02:48.000Z","order":1,"permalink":"/pages/e593a4/","category":["DevOps","监控"],"tag":["DevOps","监控"],"description":"如何建设监控体系 当服务消费者与服务提供者之间建立了通信，作为管理者需要通过监控手段来观察服务是否正常，调用是否成功。服务监控是很复杂的，在微服务架构下，一次用户调用会因为服务化拆分后，变成多个不同服务之间的相互调用，这也就需要对拆分后的每个服务都监控起来。 监控的意义 发现问题：当系统出现问题或故障，监控系统应根据监控对象的数据异常，及时发现问题，触发告警。 定位问题：监控系统的告警提示，通常应该指明问题的影响范围（如某机器 IP、某机房），触发故障的内容（数据库、MQ 或某服务的某监控数据异常），触发时间等等。有了这些必要的信息，有利于工程师分析问题时缩小排查范围，更快找到问题原因。 解决问题：一旦分析清楚故障的原因后，就需要根据故障的重要度、紧急程度、影响范围等要素，去决定应该如何应对故障。 总结问题：如果发生了重大故障后，需要对故障进行复盘，总结故障的原因和应对故障时的措施，思考在事前有没有更好的防范手段；在事后的应对故障的处理有没有改进的空间。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/e593a4/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"如何建设监控体系"}],["meta",{"property":"og:description","content":"如何建设监控体系 当服务消费者与服务提供者之间建立了通信，作为管理者需要通过监控手段来观察服务是否正常，调用是否成功。服务监控是很复杂的，在微服务架构下，一次用户调用会因为服务化拆分后，变成多个不同服务之间的相互调用，这也就需要对拆分后的每个服务都监控起来。 监控的意义 发现问题：当系统出现问题或故障，监控系统应根据监控对象的数据异常，及时发现问题，触发告警。 定位问题：监控系统的告警提示，通常应该指明问题的影响范围（如某机器 IP、某机房），触发故障的内容（数据库、MQ 或某服务的某监控数据异常），触发时间等等。有了这些必要的信息，有利于工程师分析问题时缩小排查范围，更快找到问题原因。 解决问题：一旦分析清楚故障的原因后，就需要根据故障的重要度、紧急程度、影响范围等要素，去决定应该如何应对故障。 总结问题：如果发生了重大故障后，需要对故障进行复盘，总结故障的原因和应对故障时的措施，思考在事前有没有更好的防范手段；在事后的应对故障的处理有没有改进的空间。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"DevOps"}],["meta",{"property":"article:tag","content":"监控"}],["meta",{"property":"article:published_time","content":"2022-04-19T20:02:48.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何建设监控体系\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-19T20:02:48.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"监控的意义","slug":"监控的意义","link":"#监控的意义","children":[]},{"level":2,"title":"监控目标","slug":"监控目标","link":"#监控目标","children":[]},{"level":2,"title":"监控方法","slug":"监控方法","link":"#监控方法","children":[]},{"level":2,"title":"监控流程","slug":"监控流程","link":"#监控流程","children":[{"level":3,"title":"数据采集","slug":"数据采集","link":"#数据采集","children":[]},{"level":3,"title":"数据传输","slug":"数据传输","link":"#数据传输","children":[]},{"level":3,"title":"数据存储","slug":"数据存储","link":"#数据存储","children":[]},{"level":3,"title":"数据处理","slug":"数据处理","link":"#数据处理","children":[]},{"level":3,"title":"数据展示","slug":"数据展示","link":"#数据展示","children":[]},{"level":3,"title":"监控告警","slug":"监控告警","link":"#监控告警","children":[]}]},{"level":2,"title":"监控对象","slug":"监控对象","link":"#监控对象","children":[]},{"level":2,"title":"监控维度","slug":"监控维度","link":"#监控维度","children":[]},{"level":2,"title":"监控技术","slug":"监控技术","link":"#监控技术","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":9.61,"words":2883},"filePathRelative":"04.DevOps/03.监控/01.监控体系.md","localizedDate":"2022年4月19日","excerpt":"<h1> 如何建设监控体系</h1>\\n<p>当服务消费者与服务提供者之间建立了通信，作为管理者需要通过监控手段来观察服务是否正常，调用是否成功。服务监控是很复杂的，在微服务架构下，一次用户调用会因为服务化拆分后，变成多个不同服务之间的相互调用，这也就需要对拆分后的每个服务都监控起来。</p>\\n<h2> 监控的意义</h2>\\n<ul>\\n<li><strong>发现问题</strong>：当系统出现问题或故障，监控系统应根据监控对象的数据异常，及时发现问题，触发告警。</li>\\n<li><strong>定位问题</strong>：监控系统的告警提示，通常应该指明问题的影响范围（如某机器 IP、某机房），触发故障的内容（数据库、MQ 或某服务的某监控数据异常），触发时间等等。有了这些必要的信息，有利于工程师分析问题时缩小排查范围，更快找到问题原因。</li>\\n<li><strong>解决问题</strong>：一旦分析清楚故障的原因后，就需要根据故障的重要度、紧急程度、影响范围等要素，去决定应该如何应对故障。</li>\\n<li><strong>总结问题</strong>：如果发生了重大故障后，需要对故障进行复盘，总结故障的原因和应对故障时的措施，思考在事前有没有更好的防范手段；在事后的应对故障的处理有没有改进的空间。</li>\\n</ul>","autoDesc":true}');export{e as data};
