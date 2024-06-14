import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as a,c as o,a as r,b as n,d as e,e as s}from"./app-c4cc7cd5.js";const h={},g=s('<h1 id="如何建设监控体系" tabindex="-1"><a class="header-anchor" href="#如何建设监控体系" aria-hidden="true">#</a> 如何建设监控体系</h1><p>当服务消费者与服务提供者之间建立了通信，作为管理者需要通过监控手段来观察服务是否正常，调用是否成功。服务监控是很复杂的，在微服务架构下，一次用户调用会因为服务化拆分后，变成多个不同服务之间的相互调用，这也就需要对拆分后的每个服务都监控起来。</p><h2 id="监控的意义" tabindex="-1"><a class="header-anchor" href="#监控的意义" aria-hidden="true">#</a> 监控的意义</h2><ul><li><strong>发现问题</strong>：当系统出现问题或故障，监控系统应根据监控对象的数据异常，及时发现问题，触发告警。</li><li><strong>定位问题</strong>：监控系统的告警提示，通常应该指明问题的影响范围（如某机器 IP、某机房），触发故障的内容（数据库、MQ 或某服务的某监控数据异常），触发时间等等。有了这些必要的信息，有利于工程师分析问题时缩小排查范围，更快找到问题原因。</li><li><strong>解决问题</strong>：一旦分析清楚故障的原因后，就需要根据故障的重要度、紧急程度、影响范围等要素，去决定应该如何应对故障。</li><li><strong>总结问题</strong>：如果发生了重大故障后，需要对故障进行复盘，总结故障的原因和应对故障时的措施，思考在事前有没有更好的防范手段；在事后的应对故障的处理有没有改进的空间。</li></ul><h2 id="监控目标" tabindex="-1"><a class="header-anchor" href="#监控目标" aria-hidden="true">#</a> 监控目标</h2><ul><li><strong>对系统不间断实时监控</strong>：实际上是对系统不间断的实时监控(这就是监控)</li><li><strong>实时反馈系统当前状态</strong>：我们监控某个硬件、或者某个系统，都是需要能实时看到当前系统的状态，是正常、异常、或者故障</li><li><strong>保证服务的可靠性、安全性</strong>：我们监控的目的就是要保证系统、服务、业务正常运行</li><li><strong>保证业务持续稳定运行</strong>：如果我们的监控做得很完善，即使出现故障，能第一时间接收到故障告警，在第一时间处理解决，从而保证业务持续性的稳定运行。</li></ul><h2 id="监控方法" tabindex="-1"><a class="header-anchor" href="#监控方法" aria-hidden="true">#</a> 监控方法</h2><ul><li><strong>明确监控对象</strong>：根据业务和系统的实际需要，明确需要监控的对象。</li><li><strong>确定性能基准指标</strong>：确定了监控对象，接下来，要确定该监控对象的性能基准。如：CPU 使用率、吞吐量等。</li><li><strong>定义告警阈值</strong>：监控对象什么情况是正常的，什么情况是异常的，什么情况是有故障的？</li><li><strong>故障处理流程</strong>：当监控对象达到告警阈值时，应如何应对？触发怎样的告警？有没有自动化处理机制，如弹性扩容等？有没有熔断、降级等？</li></ul><h2 id="监控流程" tabindex="-1"><a class="header-anchor" href="#监控流程" aria-hidden="true">#</a> 监控流程</h2><p>一旦明确了要监控的对象，接下就是考虑如何监控。</p><p>完整的监控流程主要包括以下环节：采集、传输、存储、分析、展示、告警、处理。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220602172630.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据采集" tabindex="-1"><a class="header-anchor" href="#数据采集" aria-hidden="true">#</a> 数据采集</h3><p>通常有两种数据收集方式：</p><ul><li><strong>服务主动上报</strong>：这种处理方式通过在业务代码或者服务框架里加入数据收集代码逻辑，在每一次服务调用完成后，主动上报服务的调用信息。这种方式在链路跟踪中较为常见，主流的技术方案有：Zipkin。</li><li><strong>代理收集</strong>：这种处理方式通过服务调用后把调用的详细信息记录到本地日志文件中，然后再通过代理去解析本地日志文件，然后再上报服务的调用信息。主流的技术方案有：ELK、Flume。</li></ul><h3 id="数据传输" tabindex="-1"><a class="header-anchor" href="#数据传输" aria-hidden="true">#</a> 数据传输</h3><p>数据传输最常用的方式有两种：</p><ul><li><strong>UDP 传输</strong>：这种处理方式是数据处理单元提供服务器的请求地址，数据采集后通过 UDP 协议与服务器建立连接，然后把数据发送过去。</li><li><strong>Kafka 传输</strong>：这种处理方式是数据采集后发送到指定的 Topic，然后数据处理单元再订阅对应的 Topic，就可以从 Kafka 消息队列中读取到对应的数据。由于 Kafka 有非常高的吞吐能力，所以很适合作为大数据量的缓冲池。</li></ul><h3 id="数据存储" tabindex="-1"><a class="header-anchor" href="#数据存储" aria-hidden="true">#</a> 数据存储</h3><p>上报的监控数据需要存储，不同监控系统选择的存储非常多样化。比较常见的有：</p><ul><li>时序数据库：InfluxDB（如：Prometheus）</li><li>列式数据库：OpenTSDB 用 Hbase 存储所有时序（无须采样）的数据，来构建一个分布式、可伸缩的时间序列数据库。它支持秒级数据采集，支持永久存储，可以做容量规划，并很容易地接入到现有的告警系统里。</li><li>SQL 数据库：Zabbix 使用关系型数据库 Mysql 存储数据。</li><li>搜索引擎数据库：ELK 使用 Elasticsearch 存储数据，以倒排索引的数据结构存储，需要查询的时候，根据索引来查询。</li></ul><h3 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h3><p>数据处理是对收集来的原始数据进行聚合计算并存储。数据聚合通常有两个维度：</p><ul><li><strong>接口维度聚合</strong>：这个维度是把实时收到的数据按照接口名维度实时聚合在一起，这样就可以得到每个接口的每秒请求量、平均耗时、成功率等信息。</li><li><strong>机器维度聚合</strong>：这个维度是把实时收到的数据按照调用的节点维度聚合在一起，这样就可以从单机维度去查看每个接口的实时请求量、平均耗时等信息。</li></ul><h3 id="数据展示" tabindex="-1"><a class="header-anchor" href="#数据展示" aria-hidden="true">#</a> 数据展示</h3><p>数据展示是把处理后的数据以 Dashboard 的方式展示给用户。数据展示有多种方式，比如曲线图、饼状图、格子图展示等。</p><h3 id="监控告警" tabindex="-1"><a class="header-anchor" href="#监控告警" aria-hidden="true">#</a> 监控告警</h3><p>监控告警的形式很多，如：电话告警、邮件告警、短信告警、IM 告警等。</p><p>此外，告警需要根据甄别故障的影响范围，以确定故障级别，如：重要度、紧急度等。根据故障的级别，通知需要介入的人员，快速响应处理。</p><h2 id="监控对象" tabindex="-1"><a class="header-anchor" href="#监控对象" aria-hidden="true">#</a> 监控对象</h2><p>服务监控一定是通过观察数据来量化分析，所以首先要明确需要监控什么。</p><p>一般来说，服务监控数据有以下分类：</p><ul><li><strong>基础层监控</strong>： <ul><li><strong>CPU</strong>：CPU 利用率、用户态利用率、内核态利用率、单核平均负载</li><li><strong>内存</strong>：内存使用量、内存剩余量</li><li><strong>磁盘</strong>：磁盘使用量、磁盘使用率</li><li><strong>网络</strong>：网络流量、丢包数、错包数、连接数等。</li><li><strong>温度</strong></li><li><strong>电压</strong></li><li>等等</li></ul></li><li><strong>中间层监控</strong><ul><li><strong>数据库</strong><ul><li><strong>Mysql</strong>：集群健康状况、磁盘使用率、连接数、慢日志等</li><li><strong>Redis</strong>：集群健康状况、内存使用量、CPU 使用率、内存使用率、连接数、对象数、慢日志等</li><li><strong>Elasticsearch</strong>：集群健康状况、CPU 使用率、内存使用率</li><li><strong>MongoDB</strong>：集群健康状况、</li><li>等等</li></ul></li><li><strong>中间件</strong><ul><li><strong>MQ</strong>：QPS、消息成功数、消息失败数、传输耗时、消息堆积量</li><li><strong>任务调度</strong></li><li>等等</li></ul></li></ul></li><li><strong>应用层监控</strong>：接口监控、访问服务、SQL、内存使用率、响应时间、TPS、QPS 等。</li><li><strong>业务监控</strong>：核心指标、登录、登出、下单、支付等。</li><li><strong>客户端监控</strong>：性能、返回码、地域、运营商、版本、系统等。</li></ul><h2 id="监控维度" tabindex="-1"><a class="header-anchor" href="#监控维度" aria-hidden="true">#</a> 监控维度</h2><p>一般来说，要从多个维度来对业务进行监控，具体来讲可以包括下面几个维度：</p><ul><li><strong>全局维度</strong>。从整体角度监控对象的的请求量、平均耗时以及错误率，全局维度的监控一般是为了让你对监控对象的调用情况有个整体了解。</li><li><strong>机房维度</strong>。一般为了业务的高可用性，服务通常部署在不止一个机房，因为不同机房地域的不同，同一个监控对象的各种指标可能会相差很大，所以需要深入到机房内部去了解。</li><li><strong>单机维度</strong>。即便是在同一个机房内部，可能由于采购年份和批次的不同，位于不同机器上的同一个监控对象的各种指标也会有很大差异。一般来说，新采购的机器通常由于成本更低，配置也更高，在同等请求量的情况下，可能表现出较大的性能差异，因此也需要从单机维度去监控同一个对象。</li><li><strong>时间维度</strong>。同一个监控对象，在每天的同一时刻各种指标通常也不会一样，这种差异要么是由业务变更导致，要么是运营活动导致。为了了解监控对象各种指标的变化，通常需要与一天前、一周前、一个月前，甚至三个月前做比较。</li><li><strong>核心维度</strong>。业务上一般会依据重要性程度对监控对象进行分级，最简单的是分成核心业务和非核心业务。核心业务和非核心业务在部署上必须隔离，分开监控，这样才能对核心业务做重点保障。</li></ul><h2 id="监控技术" tabindex="-1"><a class="header-anchor" href="#监控技术" aria-hidden="true">#</a> 监控技术</h2><ul><li>ELK 的技术栈比较成熟，应用范围也比较广，除了可用作监控系统外，还可以用作日志查询和分析。</li><li>Graphite 是基于时间序列数据库存储的监控系统，并且提供了功能强大的各种聚合函数比如 sum、average、top5 等可用于监控分析，而且对外提供了 API 也可以接入其他图形化监控系统如 Grafana。</li><li>TICK 的核心在于其时间序列数据库 InfluxDB 的存储功能强大，且支持类似 SQL 语言的复杂数据处理操作。</li><li>Prometheus 的独特之处在于它采用了拉数据的方式，对业务影响较小，同时也采用了时间序列数据库存储，而且支持独有的 PromQL 查询语言，功能强大而且简洁。</li><li><strong>OpenTSDB</strong> 用 Hbase 存储所有时序（无须采样）的数据，来构建一个分布式、可伸缩的时间序列数据库。它支持秒级数据采集，支持永久存储，可以做容量规划，并很容易地接入到现有的告警系统里。OpenTSDB 可以从大规模的集群（包括集群中的网络设备、操作系统、应用程序）中获取相应的采集指标，并进行存储、索引和服务，从而使这些数据更容易让人理解，如 Web 化、图形化等。</li><li><strong>Zabbix</strong> 是一个分布式监控系统，支持多种采集方式和采集客户端，有专用的 Agent 代理，也支持 SNMP、IPMI、JMX、Telnet、SSH 等多种协议，它将采集到的数据存放到数据库，然后对其进行分析整理，达到条件触发告警。其灵活的扩展性和丰富的功能是其他监控系统所不能比的。相对来说，它的总体功能做的非常优秀。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',39),d={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},c={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"},u={href:"https://time.geekbang.org/course/intro/100003901",target:"_blank",rel:"noopener noreferrer"},p={href:"https://zhuanlan.zhihu.com/p/26369145",target:"_blank",rel:"noopener noreferrer"};function f(b,x){const i=t("ExternalLinkIcon");return a(),o("div",null,[g,r("ul",null,[r("li",null,[r("a",d,[n("从 0 开始学微服务"),e(i)])]),r("li",null,[r("a",c,[n("RPC 实战与核心原理"),e(i)])]),r("li",null,[r("a",u,[n("微服务架构核心 20 讲"),e(i)])]),r("li",null,[r("a",p,[n("一篇文章全面了解监控知识体系"),e(i)])])])])}const P=l(h,[["render",f],["__file","index.html.vue"]]);export{P as default};
