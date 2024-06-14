import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as o,a as t,d as n,b as i,e}from"./app-c4cc7cd5.js";const g={},d=e(`<h1 id="分布式基础理论" tabindex="-1"><a class="header-anchor" href="#分布式基础理论" aria-hidden="true">#</a> 分布式基础理论</h1><h2 id="分布式系统的发展" tabindex="-1"><a class="header-anchor" href="#分布式系统的发展" aria-hidden="true">#</a> 分布式系统的发展</h2><p>罗马不是一天建成的，同理，现代分布式系统架构也不是一蹴而就的，而是逐步发展的演化过程。随着业务的不断发展，用户体量的增加，系统的复杂度势必不断攀升，最终迫使系统架构进化，以应对挑战。</p><p>了解分布式系统架构的演化过程，有利于我们了解架构进化的发展规律和业界一些成熟的应对方案。帮助我们在实际工作中，如何去思考架构，如何去凝练解决方案。</p><h3 id="单机架构" tabindex="-1"><a class="header-anchor" href="#单机架构" aria-hidden="true">#</a> 单机架构</h3><ul><li><strong>场景</strong>：网站运营初期，访问用户少，一台服务器绰绰有余。</li><li><strong>特征</strong>：<strong>应用程序、数据库、文件等所有的资源都在一台服务器上。</strong></li><li><strong>描述</strong>：通常服务器操作系统使用 linux，应用程序使用 PHP 开发，然后部署在 Apache 上，数据库使用 Mysql，通俗称为 LAMP。汇集各种免费开源软件以及一台廉价服务器就可以开始系统的发展之路了。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200702718.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="应用服务和数据服务分离" tabindex="-1"><a class="header-anchor" href="#应用服务和数据服务分离" aria-hidden="true">#</a> 应用服务和数据服务分离</h3><ul><li><strong>场景</strong>：越来越多的用户访问导致性能越来越差，越来越多的数据导致存储空间不足，一台服务器已不足以支撑。</li><li><strong>特征</strong>：<strong>应用服务器、数据库服务器、文件服务器分别独立部署。</strong></li><li><strong>描述</strong>：三台服务器对性能要求各不相同： <ul><li>应用服务器要处理大量业务逻辑，因此需要更快更强大的 CPU；</li><li>数据库服务器需要快速磁盘检索和数据缓存，因此需要更快的硬盘和更大的内存；</li><li>文件服务器需要存储大量文件，因此需要更大容量的硬盘。</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200703123.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="使用缓存改善性能" tabindex="-1"><a class="header-anchor" href="#使用缓存改善性能" aria-hidden="true">#</a> 使用缓存改善性能</h3><ul><li><strong>场景</strong>：随着用户逐渐增多，数据库压力太大导致访问延迟。</li><li><strong>特征</strong>：由于网站访问和财富分配一样遵循二八定律：<em>80% 的业务访问集中在 20% 的数据上</em>。<strong>将数据库中访问较集中的少部分数据缓存在内存中，可以减少数据库的访问次数，降低数据库的访问压力。</strong></li><li><strong>描述</strong>：缓存分为两种：应用服务器上的本地缓存和分布式缓存服务器上的远程缓存。 <ul><li>本地缓存访问速度更快，但缓存数据量有限，同时存在与应用程序争用内存的情况。</li><li>分布式缓存可以采用集群方式，理论上可以做到不受内存容量限制的缓存服务。</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200705172.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><ul><li><strong>场景</strong>：使用缓存后，数据库访问压力得到有效缓解。但是单一应用服务器能够处理的请求连接有限，在访问高峰期，成为瓶颈。</li><li><strong>特征</strong>：<strong>多台服务器通过负载均衡同时向外部提供服务，解决单一服务器处理能力和存储空间不足的问题。</strong></li><li><strong>描述</strong>：使用集群是系统解决高并发、海量数据问题的常用手段。通过向集群中追加资源，提升系统的并发处理能力，使得服务器的负载压力不再成为整个系统的瓶颈。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200704005.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据库读写分离" tabindex="-1"><a class="header-anchor" href="#数据库读写分离" aria-hidden="true">#</a> 数据库读写分离</h3><ul><li><strong>场景</strong>：网站使用缓存后，使绝大部分数据读操作访问都可以不通过数据库就能完成，但是仍有一部分读操作和全部的写操作需要访问数据库，在网站的用户达到一定规模后，数据库因为负载压力过高而成为网站的瓶颈。</li><li><strong>特征</strong>：目前大部分的主流数据库都提供主从热备功能，通过配置两台数据库主从关系，可以将一台数据库服务器的数据更新同步到一台服务器上。<strong>网站利用数据库的主从热备功能，实现数据库读写分离，从而改善数据库负载压力。</strong></li><li><strong>描述</strong>：应用服务器在写操作的时候，访问主数据库，主数据库通过主从复制机制将数据更新同步到从数据库。这样当应用服务器在读操作的时候，访问从数据库获得数据。为了便于应用程序访问读写分离后的数据库，通常在应用服务器端使用专门的数据访问模块，使数据库读写分离的对应用透明。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200707199.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="多级缓存" tabindex="-1"><a class="header-anchor" href="#多级缓存" aria-hidden="true">#</a> 多级缓存</h3><ul><li><strong>场景</strong>：中国网络环境复杂，不同地区的用户访问网站时，速度差别也极大。</li><li><strong>特征</strong>：<strong>采用 CDN 和反向代理加快系统的静态资源访问速度。</strong></li><li><strong>描述</strong>：CDN 和反向代理的基本原理都是缓存，区别在于： <ul><li>CDN 部署在网络提供商的机房，使用户在请求网站服务时，可以从距离自己最近的网络提供商机房获取数据；</li><li>而反向代理则部署在网站的中心机房，当用户请求到达中心机房后，首先访问的服务器时反向代理服务器，如果反向代理服务器中缓存着用户请求的资源，就将其直接返回给用户。</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200710745.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="业务拆分" tabindex="-1"><a class="header-anchor" href="#业务拆分" aria-hidden="true">#</a> 业务拆分</h3><ul><li><strong>场景</strong>：大型网站的业务场景日益复杂，分为多个产品线。</li><li><strong>特征</strong>：采用分而治之的手段将整个网站业务分成不同的产品线。<strong>系统上按照业务进行拆分改造，应用服务器按照业务区分进行分别部署。</strong></li><li><strong>描述</strong>：应用之间可以通过超链接建立关系，也可以通过消息队列进行数据分发，当然更多的还是通过访问同一个数据存储系统来构成一个关联的完整系统。 <ul><li><strong>纵向拆分</strong>：<strong>将一个大应用拆分为多个小应用</strong>，如果新业务较为独立，那么就直接将其设计部署为一个独立的 Web 应用系统。纵向拆分相对较为简单，通过梳理业务，将较少相关的业务剥离即可。</li><li><strong>横向拆分</strong>：<strong>将复用的业务拆分出来，独立部署为分布式服务</strong>，新增业务只需要调用这些分布式服务横向拆分需要识别可复用的业务，设计服务接口，规范服务依赖关系。</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200710835.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="分库分表" tabindex="-1"><a class="header-anchor" href="#分库分表" aria-hidden="true">#</a> 分库分表</h3><ul><li><strong>场景</strong>：随着大型网站业务持续增长，数据库经过读写分离，从一台服务器拆分为两台服务器，依然不能满足需求。</li><li><strong>特征</strong>：<strong>数据库采用分布式数据库。</strong></li><li><strong>描述</strong>：分布式数据库是数据库拆分的最后方法，只有在单表数据规模非常庞大的时候才使用。不到不得已时，更常用的数据库拆分手段是业务分库，将不同的业务数据库部署在不同的物理服务器上。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200711984.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="分布式组件" tabindex="-1"><a class="header-anchor" href="#分布式组件" aria-hidden="true">#</a> 分布式组件</h3><ul><li><strong>场景</strong>：随着网站业务越来越复杂，对数据存储和检索的需求也越来越复杂。</li><li><strong>特征</strong>：<strong>系统引入 NoSQL 数据库及搜索引擎。</strong></li><li><strong>描述</strong>：NoSQL 数据库及搜索引擎对可伸缩的分布式特性具有更好的支持。应用服务器通过统一数据访问模块访问各种数据，减轻应用程序管理诸多数据源的麻烦。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200711267.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="微服务" tabindex="-1"><a class="header-anchor" href="#微服务" aria-hidden="true">#</a> 微服务</h3><ul><li><strong>场景</strong>：随着业务越拆越小，存储系统越来越庞大，应用系统整体复杂程度呈指数级上升，部署维护越来越困难。由于所有应用要和所有数据库系统连接，最终导致数据库连接资源不足，拒绝服务。</li><li><strong>特征</strong>：<strong>公共业务提取出来，独立部署。由这些可复用的业务连接数据库，通过分布式服务提供共用业务服务。</strong></li><li>描述：大型网站的架构演化到这里，基本上大多数的技术问题都得以解决，诸如跨数据中心的实时数据同步和具体网站业务相关的问题也都可以组合改进现有技术架构来解决。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200711681.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="分布式系统的指标" tabindex="-1"><a class="header-anchor" href="#分布式系统的指标" aria-hidden="true">#</a> 分布式系统的指标</h2><p><strong>分布式系统的目标是提升系统的整体性能和吞吐量，另外还要尽量保证分布式系统的容错性</strong>。</p><p>由分布式系统的目标很容易得出分布式系统的关键指标：性能、可用性、可扩展性。这些指标，正对应着耳熟能详的分布式系统“三高”特性——高并发、高性能、高可用。</p><h3 id="性能-performance" tabindex="-1"><a class="header-anchor" href="#性能-performance" aria-hidden="true">#</a> 性能（Performance）</h3><p>性能用于衡量一个系统处理各种任务的能力。</p><p>常见的性能指标有：</p><ul><li><strong>吞吐量（Throughput）</strong> - 系统在一定时间内可以处理的任务数。常见的吞吐量指标有： <ul><li><strong>QPS</strong> - Queries Per Second 的缩写，即每秒查询数。</li><li><strong>TPS</strong> - Transactions Per Second 的缩写，即每秒事务数。</li></ul></li><li><strong>响应时间（Response Time）</strong> - 执行一个请求从开始到最后收到响应数据所花费的总体时间，即从客户端发起请求到收到服务器响应结果的时间。</li><li><strong>并发数（Concurrency）</strong> - 并发数是指系统能同时处理请求的数量，这个也反映了系统的负载能力。并发意味着可以同时进行多个处理。并发在现代编程中无处不在，网络中有多台计算机同时存在，一台计算机上同时运行着多个应用程序。</li></ul><p>以上三个指标的关系大致为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>QPS（TPS）= 并发数 / 平均响应时间
并发数 = QPS（TPS） * 平均响应时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可用性-availability" tabindex="-1"><a class="header-anchor" href="#可用性-availability" aria-hidden="true">#</a> 可用性（Availability）</h3><p><strong>可用性</strong>：指的是系统在面对各种异常时可以正确提供服务的能力。</p><p>系统的可用性可以用<strong>系统停止服务的时间与总的时间之比衡量。</strong></p><p>行业内一般用几个 9 表示可用性指标，对应用的可用性程度一般衡量标准有三个 9 到五个 9；一般我们的系统至少要到 4 个 9（99.99%）的可用性才能谈得上高可用。</p><table><thead><tr><th style="text-align:center;">可用性</th><th style="text-align:center;">年故障时间</th></tr></thead><tbody><tr><td style="text-align:center;">99.9999%</td><td style="text-align:center;">32 秒</td></tr><tr><td style="text-align:center;">99.999%</td><td style="text-align:center;">5 分 15 秒</td></tr><tr><td style="text-align:center;">99.99%</td><td style="text-align:center;">52 分 34 秒</td></tr><tr><td style="text-align:center;">99.9%</td><td style="text-align:center;">8 小时 46 分</td></tr><tr><td style="text-align:center;">99%</td><td style="text-align:center;">3 天 15 小时 36 分</td></tr></tbody></table><p>而所谓的高可用，就是：<strong>在任何情况下，让服务尽最大可能对外提供服务</strong>。</p><h3 id="可扩展性-scalability" tabindex="-1"><a class="header-anchor" href="#可扩展性-scalability" aria-hidden="true">#</a> 可扩展性（Scalability）</h3><p>**可扩展性（Scalability）**指的是分布式系统通过扩展集群机器规模提高系统性能 (吞吐、响应时间、 完成时间)、存储容量、计算能力的特性，是分布式系统的特有性质。</p><p>系统扩展可以分为垂直扩展、水平扩展。</p><ul><li><strong>垂直扩展</strong>，即<strong>提升单机的硬件处理能力</strong>，比如 CPU 处理能力，内存容量，磁盘等方面。但是，单机是有性能瓶颈的，一旦触及瓶颈，再想提升，付出的成本和代价会极高。通俗来说，就三个字：<strong>得加钱</strong>！</li><li><strong>水平扩展</strong>：采用分而治之的思想，通过集群来分担吞吐量。集群中的应用机器（节点）通常被设计成无状态，用户可以请求任何一个节点，这些节点共同分担访问压力。水平扩展有两个要点： <ul><li><strong>集群化、分区化</strong>：将一个完整的应用化整为零，如果是无状态应用，可以直接集群化部署；如果是有状态应用，可以将状态数据分区（分片），然后部署到多台机器上。</li><li><strong>负载均衡</strong>：集群化、分区化后，要解决的问题是，请求应该被分发（寻址）到哪台机器上。这就需要通过某种策略来控制分发，这种技术就是负载均衡。</li></ul></li></ul><h2 id="分布式系统的分类" tabindex="-1"><a class="header-anchor" href="#分布式系统的分类" aria-hidden="true">#</a> 分布式系统的分类</h2><p>分布式技术错综复杂、知识庞杂，且各种技术相互耦合，所以不容易划分层次。</p><p>从应用的维度来看，大致可以将分布式系统分为以下四类：</p><ul><li><strong>分布式计算</strong>：解决应用的分布式计算问题。基于分布式计算模式，包括批处理计算、离线计算、在线计算、融合计算等，根据应用类型构建高效智能的分布式计算框架。</li><li><strong>分布式存储</strong>：解决数据的分布式和多元化问题。包括分布式数据库、分布式文件系统、分布式缓存等，支持不同类型的数据的存储和管理。</li><li><strong>分布式通信</strong>：解决进程间的分布式通信问题。通过消息队列、远程调用等方式，实现简单高效的通信。</li><li><strong>分布式资源管理</strong>：解决资源的分布式和异构性问题。将 CPU、内存、IO 等物理资源虚拟化，新城逻辑资源池，以便统一管理。</li></ul><p>此外，分布式系统都需要面对一些共性问题，可以视为分布式系统技术的基石：</p><ul><li><strong>分布式协同</strong> - 解决分布式状态及数据一致性的问题。代表技术：分布式互斥、分布式共识、分布式选举、分布式选举等。</li><li><strong>分布式调度</strong> - 解决分布式系统资源、请求分配调度的问题。代表技术：服务注册和发现、服务路由、负载均衡、流量控制等。</li><li><strong>分布式容错</strong> - 解决分布式系统中故障分析、处理的问题，保证系统整体可靠性。代表技术：链路追踪、故障隔离、故障转移等。</li><li><strong>分布式部署</strong> - 解决分布式系统部署问题。代表技术：CI/CD、容器化等。</li></ul><h2 id="分布式系统的挑战" tabindex="-1"><a class="header-anchor" href="#分布式系统的挑战" aria-hidden="true">#</a> 分布式系统的挑战</h2><h3 id="故障与部分失效" tabindex="-1"><a class="header-anchor" href="#故障与部分失效" aria-hidden="true">#</a> 故障与部分失效</h3><p>当程序运行在单机上时，通常会以一种可预测的方式运行：要么正常，要么异常。</p><p>一旦程序运行在多台机器上时，面临的场景就会变得复杂而难以预料。在分布式系统中，系统的某些部分可能会出现不可预知的故障，这被称为<strong>部分失效（partial failure）</strong>。问题的难点就在于部分失效是<strong>不确定性的</strong>。你甚至不确定请求是否成功了，因为消息通过网络传播的时间也是不确定的！这种不确定性和部分失效的可能性，使得分布式系统难以工作。</p>`,63),h={href:"https://web.archive.org/web/20171107014323/http://blog.fogcreek.com/eight-fallacies-of-distributed-computing-tech-talk/",target:"_blank",rel:"noopener noreferrer"},c=t("strong",null,"The Eight Fallacies of Distributed Computing - Tech Talk",-1),u=e('<ul><li>网络是稳定的</li><li>网络传输的延迟是零</li><li>网络的带宽是无穷大</li><li>网络是安全的</li><li>网络的拓扑不会改变</li><li>只有一个系统管理员</li><li>传输数据的成本为零</li><li>整个网络是同构的</li></ul><p>为什么我们要深刻地认识这 8 个错误？这是因为，我们需要清楚地认识到——<strong>在分布式系统中，故障是不可避免的</strong>。因此，如果要构建一个可靠的分布式系统，就必须要建立容错机制。很可能大部分组件在大部分时间都正常工作。然而，迟早会有一部分系统出现故障，软件必须以某种方式处理。故障处理必须是软件设计的一部分，并且作为软件的运维，你需要知道在发生故障的情况下，软件可能会表现出怎样的行为。</p><h3 id="不可靠的网络" tabindex="-1"><a class="header-anchor" href="#不可靠的网络" aria-hidden="true">#</a> 不可靠的网络</h3><p>互联网和数据中心（通常是以太网）中的大多数内部网络都是 <strong>异步分组网络（asynchronous packet networks）</strong>。在这种网络中，一个节点可以向另一个节点发送一个消息（一个数据包），但是网络不能保证它什么时候到达，或者是否到达。如果你发送请求并期待响应，则很多事情可能会出错：</p><ol><li>请求可能已经丢失（可能是被拔掉了网线）。</li><li>请求可能正在排队，稍后将交付（可能是网络或接收方过载）。</li><li>远程节点可能已经失效（可能是崩溃或关机）。</li><li>远程节点可能暂时停止了响应（可能会遇到长时间的垃圾回收而暂停），但稍后会再次响应。</li><li>远程节点可能已经处理了请求，但是网络上的响应已经丢失（可能是网络交换机配置错误）。</li><li>远程节点可能已经处理了请求，但是响应已经被延迟，并且稍后将被传递（可能是网络或者你自己的机器过载）。</li></ol>',5),p={href:"https://github.com/Vonng/ddia/blob/master/img/fig8-1.png",target:"_blank",rel:"noopener noreferrer"},f=t("img",{src:"https://github.com/Vonng/ddia/raw/master/img/fig8-1.png",alt:"img",tabindex:"0",loading:"lazy"},null,-1),b=t("figcaption",null,"img",-1),m=e('<p><strong>如果发送请求并没有得到响应，则无法区分（a）请求是否丢失，（b）远程节点是否关闭，或（c）响应是否丢失。</strong></p><p>发送者甚至不能分辨数据包是否被发送：唯一的选择是让接收者发送响应消息，这可能会丢失或延迟。这些问题在异步网络中难以区分：你所拥有的唯一信息是，你尚未收到响应。如果你向另一个节点发送请求并且没有收到响应，则不可能判断是什么原因。</p><p>处理这个问题的通常方法是 <strong>超时（Timeout）</strong>：在一段时间之后放弃等待，并且认为响应不会到达。但是，当发生超时时，你仍然不知道远程节点是否收到了请求（如果请求仍然在某个地方排队，那么即使发送者已经放弃了该请求，仍然可能会将其发送给接收者）。</p><h4 id="检测故障" tabindex="-1"><a class="header-anchor" href="#检测故障" aria-hidden="true">#</a> 检测故障</h4><p>许多系统需要自动检测故障节点。例如：</p><ul><li>负载平衡器需要停止向已失联的节点转发请求（从轮询列表移出，即 out of rotation）。</li><li>在支持主从复制功能的分布式数据库中，如果主库失效，则需要将从库之一升级为新主库。</li></ul><p>网络的不确定性使得很难判断一个节点是否工作。在某些特定的情况下，你可能会收到一些反馈信息，明确告诉你某些事情没有成功。关于远程节点关闭的快速反馈很有用，但是你不能指望它。</p><p>相反，如果出了什么问题，你可能会在堆栈的某个层次上得到一个错误响应，但总的来说，你必须假设你可能根本就得不到任何回应。你可以重试几次，等待超时过期，并且如果在超时时间内没有收到响应，则最终声明节点已经死亡。</p><h4 id="超时与无穷的延迟" tabindex="-1"><a class="header-anchor" href="#超时与无穷的延迟" aria-hidden="true">#</a> 超时与无穷的延迟</h4><p>如果超时是检测故障的唯一可靠方法，那么超时应该等待多久？</p><p>长时间的超时意味着长时间等待，直到一个节点被宣告死亡（在这段时间内，用户可能不得不等待，或者看到错误信息）。短的超时可以更快地检测到故障，但有更高地风险误将一个节点宣布为失效，而该节点实际上只是暂时地变慢了（例如由于节点或网络上的负载峰值）。</p><p>过早地声明一个节点已经死了是有问题的：如果这个节点实际上是活着的，并且正在执行一些动作（例如，发送一封电子邮件），而另一个节点接管，那么这个动作可能会最终执行两次。</p><p>当一个节点被宣告死亡时，它的职责需要转移到其他节点，这会给其他节点和网络带来额外的负担。如果系统已经处于高负荷状态，则过早宣告节点死亡会使问题更严重。特别是如果节点实际上没有死亡，只是由于过载导致其响应缓慢；这时将其负载转移到其他节点可能会导致 <strong>级联失效</strong>（即 cascading failure，表示在极端情况下，所有节点都宣告对方死亡，所有节点都将停止工作）。</p><p>可以通过实验方式选择超时：在一段较长的时期内、在多台机器上测量网络往返时间的分布，以确定延迟的预期变化。然后，考虑到应用程序的特性，可以确定 <strong>故障检测延迟</strong> 与 <strong>过早超时风险</strong> 之间的适当折衷。</p><p>更好的一种做法是，系统不是使用配置的常量超时时间，而是连续测量响应时间及其变化（抖动），并根据观察到的响应时间分布自动调整超时时间。这可以通过 Phi Accrual 故障检测器来完成，该检测器在例如 Akka 和 Cassandra 中使用。TCP 的超时重传机制也是以类似的方式工作。</p><h4 id="延迟和资源利用" tabindex="-1"><a class="header-anchor" href="#延迟和资源利用" aria-hidden="true">#</a> 延迟和资源利用</h4><p>可以将 <strong>延迟变化</strong> 视为 <strong>动态资源分区</strong> 的结果。</p><p>互联网动态分享网络带宽。发送者互相推挤和争夺，以让他们的数据包尽可能快地通过网络，并且网络交换机决定从一个时刻到另一个时刻发送哪个分组（即，带宽分配）。这种方法有排队的缺点，但其优点是它最大限度地利用了线路。</p><p>如果资源是静态分区的（例如，专用硬件和专用带宽分配），则在某些环境中可以实现 <strong>延迟保证</strong>。但是，这是以降低利用率为代价的 —— 换句话说，它是更昂贵的。另一方面，动态资源分配的多租户提供了更好的利用率，所以它更便宜，但它具有可变延迟的缺点。</p><p>网络中的可变延迟不是一种自然规律，而只是成本 / 收益权衡的结果。</p><h3 id="不可靠的时钟" tabindex="-1"><a class="header-anchor" href="#不可靠的时钟" aria-hidden="true">#</a> 不可靠的时钟</h3><p>时钟和时间很重要。应用程序以各种方式依赖于时钟来回答以下问题：</p><ol><li>这个请求是否超时了？</li><li>这项服务的第 99 百分位响应时间是多少？</li><li>在过去五分钟内，该服务平均每秒处理多少个查询？</li><li>用户在我们的网站上花了多长时间？</li><li>这篇文章在何时发布？</li><li>在什么时间发送提醒邮件？</li><li>这个缓存条目何时到期？</li><li>日志文件中此错误消息的时间戳是什么？</li></ol><p>在分布式系统中，时间是一件棘手的事情，因为通信不是即时的：消息通过网络从一台机器传送到另一台机器需要时间。收到消息的时间总是晚于发送的时间，但是由于网络中的可变延迟，我们不知道晚了多少时间。而且，网络上的每台机器都有自己的时钟，可能比其他机器稍快或更慢。</p><p>为了保证每台机器的时间同步，最常用的机制是 <strong>网络时间协议（NTP）</strong>，它允许根据一组服务器报告的时间来调整计算机时钟。需要注意的是，即使使用了 NTP 进行时间同步，但是依然会存在一些误差：一方面受限于 NTP 本身的同步精度，此外还受限于网络通信的延迟。</p><p>如果想要保证时序，另一种方案是采用逻辑时钟。**逻辑时钟（logic clock）**是基于递增计数器，对于排序事件来说是更安全的选择。逻辑时钟仅测量事件的相对顺序（无论一个事件发生在另一个事件之前还是之后）。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',27),x={href:"https://web.archive.org/web/20171107014323/http://blog.fogcreek.com/eight-fallacies-of-distributed-computing-tech-talk/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://book.mixu.net/distsys/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.41.7628&rep=rep1&type=pdf",target:"_blank",rel:"noopener noreferrer"};function w(k,P){const r=l("ExternalLinkIcon");return s(),o("div",null,[d,t("p",null,[t("a",h,[c,n(r)]),i(" 一文中提出了分布式系统新手常有的 8 种误区：")]),u,t("figure",null,[t("a",p,[f,n(r)]),b]),m,t("ul",null,[t("li",null,[t("a",x,[i("The Eight Fallacies of Distributed Computing - Tech Talk"),n(r)]),i(" - 分布式系统新手常犯的 8 个错误，并探讨了其会带来的影响。")]),t("li",null,[t("a",_,[i("Distributed Systems for Fun and Profit"),n(r)]),i(" - 一本学习小册，涵盖了分布式系统中的关键问题，包括时间的作用和不同的复制策略。")]),t("li",null,[t("a",y,[i("A Note on Distributed Systems"),n(r)]),i(" - 这是一篇经典的论文，讲述了为什么在分布式系统中，远程交互不能像本地对象那样进行。")])])])}const S=a(g,[["render",w],["__file","index.html.vue"]]);export{S as default};
