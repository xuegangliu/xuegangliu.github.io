const e=JSON.parse('{"key":"v-39c793d8","path":"/pages/dac0e2/","title":"CAP 和 BASE","lang":"zh-CN","frontmatter":{"title":"CAP 和 BASE","date":"2021-11-08T08:15:33.000Z","order":3,"permalink":"/pages/dac0e2/","category":["分布式","分布式理论"],"tag":["分布式","一致性","ACID","CAP","BASE"],"description":"CAP 和 BASE 一致性 一致性（Consistency）指的是多个数据副本是否能保持一致的特性。 在一致性的条件下，分布式系统在执行写操作成功后，如果所有用户都能够读取到最新的值，该系统就被认为具有强一致性。 数据一致性又可以分为以下几点： 强一致性 - 数据更新操作结果和操作响应总是一致的，即操作响应通知更新失败，那么数据一定没有被更新，而不是处于不确定状态。 弱一致性 - 系统在写入数据成功后，不承诺立即能读到最新的值，也不承诺什么时候能读到，但是过一段时间之后用户可以看到更新后的值。那么用户读不到最新数据的这段时间被称为“不一致窗口时间”。 最终一致性 - 最终一致性作为弱一致性中的特例，强调的是所有数据副本，在经过一段时间的同步后，最终能够到达一致的状态，不需要实时保证系统数据的强一致性。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/dac0e2/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"CAP 和 BASE"}],["meta",{"property":"og:description","content":"CAP 和 BASE 一致性 一致性（Consistency）指的是多个数据副本是否能保持一致的特性。 在一致性的条件下，分布式系统在执行写操作成功后，如果所有用户都能够读取到最新的值，该系统就被认为具有强一致性。 数据一致性又可以分为以下几点： 强一致性 - 数据更新操作结果和操作响应总是一致的，即操作响应通知更新失败，那么数据一定没有被更新，而不是处于不确定状态。 弱一致性 - 系统在写入数据成功后，不承诺立即能读到最新的值，也不承诺什么时候能读到，但是过一段时间之后用户可以看到更新后的值。那么用户读不到最新数据的这段时间被称为“不一致窗口时间”。 最终一致性 - 最终一致性作为弱一致性中的特例，强调的是所有数据副本，在经过一段时间的同步后，最终能够到达一致的状态，不需要实时保证系统数据的强一致性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"一致性"}],["meta",{"property":"article:tag","content":"ACID"}],["meta",{"property":"article:tag","content":"CAP"}],["meta",{"property":"article:tag","content":"BASE"}],["meta",{"property":"article:published_time","content":"2021-11-08T08:15:33.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAP 和 BASE\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-08T08:15:33.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"一致性","slug":"一致性","link":"#一致性","children":[]},{"level":2,"title":"ACID","slug":"acid","link":"#acid","children":[]},{"level":2,"title":"CAP 定理","slug":"cap-定理","link":"#cap-定理","children":[{"level":3,"title":"CAP 简介","slug":"cap-简介","link":"#cap-简介","children":[]},{"level":3,"title":"AP 模式","slug":"ap-模式","link":"#ap-模式","children":[]},{"level":3,"title":"CP 模式","slug":"cp-模式","link":"#cp-模式","children":[]},{"level":3,"title":"CAP 定理的应用","slug":"cap-定理的应用","link":"#cap-定理的应用","children":[]},{"level":3,"title":"CAP 定理的误导","slug":"cap-定理的误导","link":"#cap-定理的误导","children":[]}]},{"level":2,"title":"BASE 定理","slug":"base-定理","link":"#base-定理","children":[]},{"level":2,"title":"BASE vs. ACID","slug":"base-vs-acid","link":"#base-vs-acid","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":8.68,"words":2605},"filePathRelative":"15.分布式/01.分布式理论/03.CAP和BASE.md","localizedDate":"2021年11月8日","excerpt":"<h1> CAP 和 BASE</h1>\\n<h2> 一致性</h2>\\n<p>一致性（Consistency）指的是<strong>多个数据副本是否能保持一致</strong>的特性。</p>\\n<p>在一致性的条件下，分布式系统在执行写操作成功后，如果所有用户都能够读取到最新的值，该系统就被认为具有强一致性。</p>\\n<p>数据一致性又可以分为以下几点：</p>\\n<ul>\\n<li><strong>强一致性</strong> - 数据更新操作结果和操作响应总是一致的，即操作响应通知更新失败，那么数据一定没有被更新，而不是处于不确定状态。</li>\\n<li><strong>弱一致性</strong> - 系统在写入数据成功后，不承诺立即能读到最新的值，也不承诺什么时候能读到，但是过一段时间之后用户可以看到更新后的值。那么用户读不到最新数据的这段时间被称为“不一致窗口时间”。</li>\\n<li><strong>最终一致性</strong> - 最终一致性作为弱一致性中的特例，强调的是所有数据副本，在经过一段时间的同步后，最终能够到达一致的状态，不需要实时保证系统数据的强一致性。</li>\\n</ul>","autoDesc":true}');export{e as data};
