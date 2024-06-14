import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as d,a as e,b as a,d as n,e as i}from"./app-c4cc7cd5.js";const c={},p=i('<h1 id="大型系统核心技术" tabindex="-1"><a class="header-anchor" href="#大型系统核心技术" aria-hidden="true">#</a> 大型系统核心技术</h1><blockquote><p>大型系统的设计目标就是为了快速、高效、稳定的处理海量的数据以及高并发的请求。</p><p>单机服务受限于硬件，客观存在着资源瓶颈，难以应对不断增长的数据量和请求量，为了打破瓶颈，大型系统基本上都被设计为分布式系统。</p><p>分布式系统由于其面临的共性问题，在很多场景下的解决方案往往也存在着共性。因此，我们会发现，很多优秀的大型系统在设计方案上存在着很多的共同点。</p><p>本文主要讨论应对分布式系统共性问题的解决方案，这既可以加深对分布式系统运作原理的理解，也可以作为设计大型分布式系统时的借鉴。</p></blockquote><h2 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务" aria-hidden="true">#</a> 分布式事务</h2><h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h2><p>Java 原生 API 虽然有并发锁，但并没有提供分布式锁的能力，所以针对分布式场景中的锁需要解决的方案。</p><p>分布式锁的解决方案大致有以下几种：</p><ul><li>基于数据库实现</li><li>基于缓存（redis，memcached 等）实现</li><li>基于 Zookeeper 实现</li></ul><h3 id="基于数据库实现分布式锁" tabindex="-1"><a class="header-anchor" href="#基于数据库实现分布式锁" aria-hidden="true">#</a> 基于数据库实现分布式锁</h3><h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h4><h5 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>methodLock<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;主键&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>method_name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;锁定的方法名&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>desc<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;备注信息&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>update_time<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;保存数据时间，自动生成&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>uidx_method_name<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>method_name <span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token keyword">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;锁定中的方法&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="获取锁" tabindex="-1"><a class="header-anchor" href="#获取锁" aria-hidden="true">#</a> 获取锁</h5><p>想要锁住某个方法时，执行以下 SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> methodLock<span class="token punctuation">(</span>method_name<span class="token punctuation">,</span><span class="token keyword">desc</span><span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span>‘method_name’<span class="token punctuation">,</span>‘<span class="token keyword">desc</span>’<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为我们对 <code>method_name</code> 做了唯一性约束，这里如果有多个请求同时提交到数据库的话，数据库会保证只有一个操作可以成功，那么我们就可以认为操作成功的那个线程获得了该方法的锁，可以执行方法体内容。</p><p>成功插入则获取锁。</p><h5 id="释放锁" tabindex="-1"><a class="header-anchor" href="#释放锁" aria-hidden="true">#</a> 释放锁</h5><p>当方法执行完毕之后，想要释放锁的话，需要执行以下 Sql:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> methodLock <span class="token keyword">where</span> method_name <span class="token operator">=</span><span class="token string">&#39;method_name&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h4><ol><li>这把锁强依赖数据库的可用性。如果数据库是一个单点，一旦数据库挂掉，会导致业务系统不可用。</li><li>这把锁没有失效时间，一旦解锁操作失败，就会导致锁记录一直在数据库中，其他线程无法再获得到锁。</li><li>这把锁只能是非阻塞的，因为数据的 insert 操作，一旦插入失败就会直接报错。没有获得锁的线程并不会进入排队队列，要想再次获得锁就要再次触发获得锁操作。</li><li>这把锁是非重入的，同一个线程在没有释放锁之前无法再次获得该锁。因为数据中数据已经存在了。</li></ol><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><ol><li>单点问题可以用多数据库实例，同时塞 N 个表，N/2+1 个成功就任务锁定成功</li><li>写一个定时任务，隔一段时间清除一次过期的数据。</li><li>写一个 while 循环，不断的重试插入，直到成功。</li><li>在数据库表中加个字段，记录当前获得锁的机器的主机信息和线程信息，那么下次再获取锁的时候先查询数据库，如果当前机器的主机信息和线程信息在数据库可以查到的话，直接把锁分配给他就可以了。</li></ol><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h4><ul><li>优点: 直接借助数据库，容易理解。</li><li>缺点: 会有各种各样的问题，在解决问题的过程中会使整个方案变得越来越复杂。操作数据库需要一定的开销，性能问题需要考虑。</li></ul><h3 id="基于-redis-实现分布式锁" tabindex="-1"><a class="header-anchor" href="#基于-redis-实现分布式锁" aria-hidden="true">#</a> 基于 Redis 实现分布式锁</h3><p>相比于用数据库来实现分布式锁，基于缓存实现的分布式锁的性能会更好一些。目前有很多成熟的分布式产品，包括 Redis、memcache、Tair 等。这里以 Redis 举例。</p><h4 id="redis-命令" tabindex="-1"><a class="header-anchor" href="#redis-命令" aria-hidden="true">#</a> Redis 命令</h4><ul><li>setnx - setnx key val：当且仅当 key 不存在时，set 一个 key 为 val 的字符串，返回 1；若 key 存在，则什么都不做，返回 0。</li><li>expire - expire key timeout：为 key 设置一个超时时间，单位为 second，超过这个时间锁会自动释放，避免死锁。</li><li>delete - delete key：删除 key</li></ul><h4 id="实现-1" tabindex="-1"><a class="header-anchor" href="#实现-1" aria-hidden="true">#</a> 实现</h4><p>单点实现步骤：</p><ol><li>获取锁的使用，使用 setnx 加锁，锁的 value 值为一个随机生成的 UUID，再使用 expire 设置一个过期值。</li><li>获取锁的时候还设置一个获取的超时时间，若超过这个时间则放弃获取锁。</li><li>释放锁的时候，通过 UUID 判断是不是该锁，若是该锁，则执行 delete 进行锁释放。</li></ol><h4 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题</h4><ul><li>单点问题。如果单机 redis 挂掉了，那么程序会跟着出错。</li><li>如果转移使用 slave 节点，复制不是同步复制，会出现多个程序获取锁的情况</li></ul><h4 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1" aria-hidden="true">#</a> 小结</h4>',35),l={href:"https://github.com/redisson/redisson/wiki/8.-%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E5%92%8C%E5%90%8C%E6%AD%A5%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},h=i('<h3 id="基于-zookeeper-实现分布式锁" tabindex="-1"><a class="header-anchor" href="#基于-zookeeper-实现分布式锁" aria-hidden="true">#</a> 基于 ZooKeeper 实现分布式锁</h3><h4 id="实现-2" tabindex="-1"><a class="header-anchor" href="#实现-2" aria-hidden="true">#</a> 实现</h4><p>这也是 ZooKeeper 客户端 curator 的分布式锁实现。</p><ol><li>创建一个目录 mylock；</li><li>线程 A 想获取锁就在 mylock 目录下创建临时顺序节点；</li><li>获取 mylock 目录下所有的子节点，然后获取比自己小的兄弟节点，如果不存在，则说明当前线程顺序号最小，获得锁；</li><li>线程 B 获取所有节点，判断自己不是最小节点，设置监听比自己次小的节点；</li><li>线程 A 处理完，删除自己的节点，线程 B 监听到变更事件，判断自己是不是最小的节点，如果是则获得锁。</li></ol><h4 id="小结-2" tabindex="-1"><a class="header-anchor" href="#小结-2" aria-hidden="true">#</a> 小结</h4><p>ZooKeeper 版本的分布式锁问题相对比较来说少。</p><ul><li>锁的占用时间限制：redis 就有占用时间限制，而 ZooKeeper 则没有，最主要的原因是 redis 目前没有办法知道已经获取锁的客户端的状态，是已经挂了呢还是正在执行耗时较长的业务逻辑。而 ZooKeeper 通过临时节点就能清晰知道，如果临时节点存在说明还在执行业务逻辑，如果临时节点不存在说明已经执行完毕释放锁或者是挂了。由此看来 redis 如果能像 ZooKeeper 一样添加一些与客户端绑定的临时键，也是一大好事。</li><li>是否单点故障：redis 本身有很多中玩法，如客户端一致性 hash，服务器端 sentinel 方案或者 cluster 方案，很难做到一种分布式锁方式能应对所有这些方案。而 ZooKeeper 只有一种玩法，多台机器的节点数据是一致的，没有 redis 的那么多的麻烦因素要考虑。</li></ul><p>总体上来说 ZooKeeper 实现分布式锁更加的简单，可靠性更高。但 ZooKeeper 因为需要频繁的创建和删除节点，性能上不如 Redis 方式。</p><h2 id="分布式-session" tabindex="-1"><a class="header-anchor" href="#分布式-session" aria-hidden="true">#</a> 分布式 Session</h2><p>在分布式场景下，一个用户的 Session 如果只存储在一个服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器上，该服务器没有用户的 Session，就可能导致用户需要重新进行登录等操作。</p><p>分布式 Session 的几种实现策略：</p><ol><li>粘性 session</li><li>应用服务器间的 session 复制共享</li><li>基于 cache DB 缓存的 session 共享</li></ol><h3 id="sticky-sessions" tabindex="-1"><a class="header-anchor" href="#sticky-sessions" aria-hidden="true">#</a> Sticky Sessions</h3><p>需要配置负载均衡器，使得一个用户的所有请求都路由到一个服务器节点上，这样就可以把用户的 Session 存放在该服务器节点中。</p><p>缺点：当服务器节点宕机时，将丢失该服务器节点上的所有 Session。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/MultiNode-StickySessions.jpg"></div><h3 id="session-replication" tabindex="-1"><a class="header-anchor" href="#session-replication" aria-hidden="true">#</a> Session Replication</h3><p>在服务器节点之间进行 Session 同步操作，这样的话用户可以访问任何一个服务器节点。</p><p>缺点：占用过多内存；同步过程占用网络带宽以及服务器处理器时间。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/MultiNode-SessionReplication.jpg"></div><h3 id="session-server" tabindex="-1"><a class="header-anchor" href="#session-server" aria-hidden="true">#</a> Session Server</h3><p>使用一个单独的服务器存储 Session 数据，可以存在 MySQL 数据库上，也可以存在 Redis 或者 Memcached 这种内存型数据库。</p><p>缺点：需要去实现存取 Session 的代码。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/MultiNode-SpringSession.jpg"></div><h2 id="分布式存储" tabindex="-1"><a class="header-anchor" href="#分布式存储" aria-hidden="true">#</a> 分布式存储</h2><p>通常有两种解决方案：</p><ol><li>数据分布：就是把数据分块存在不同的服务器上（分库分表）。</li><li>数据复制：让所有的服务器都有相同的数据，提供相当的服务。</li></ol><h2 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存" aria-hidden="true">#</a> 分布式缓存</h2><p>使用缓存的好处：</p><ul><li>提升数据读取速度</li><li>提升系统扩展能力，通过扩展缓存，提升系统承载能力</li><li>降低存储成本，Cache+DB 的方式可以承担原有需要多台 DB 才能承担的请求量，节省机器成本</li></ul><p>根据业务场景，通常缓存有以下几种使用方式</p><ul><li>懒汉式(读时触发)：写入 DB 后, 然后把相关的数据也写入 Cache</li><li>饥饿式(写时触发)：先查询 DB 里的数据, 然后把相关的数据写入 Cache</li><li>定期刷新：适合周期性的跑数据的任务，或者列表型的数据，而且不要求绝对实时性</li></ul><p>缓存分类：</p><ul><li>应用内缓存：如：EHCache</li><li>分布式缓存：如：Memached、Redis</li></ul><h2 id="分布式计算" tabindex="-1"><a class="header-anchor" href="#分布式计算" aria-hidden="true">#</a> 分布式计算</h2><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3><h4 id="轮询-round-robin" tabindex="-1"><a class="header-anchor" href="#轮询-round-robin" aria-hidden="true">#</a> 轮询（Round Robin）</h4><p>轮询算法把每个请求轮流发送到每个服务器上。下图中，一共有 6 个客户端产生了 6 个请求，这 6 个请求按 (1, 2, 3, 4, 5, 6) 的顺序发送。最后，(1, 3, 5) 的请求会被发送到服务器 1，(2, 4, 6) 的请求会被发送到服务器 2。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/负载均衡算法之轮询-01.jpg" width="640"></div><p>该算法比较适合每个服务器的性能差不多的场景，如果有性能存在差异的情况下，那么性能较差的服务器可能无法承担过大的负载（下图的 Server 2）。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/负载均衡算法之轮询-02.jpg" width="640"></div><h4 id="加权轮询-weighted-round-robbin" tabindex="-1"><a class="header-anchor" href="#加权轮询-weighted-round-robbin" aria-hidden="true">#</a> 加权轮询（Weighted Round Robbin）</h4><p>加权轮询是在轮询的基础上，根据服务器的性能差异，为服务器赋予一定的权值。例如下图中，服务器 1 被赋予的权值为 5，服务器 2 被赋予的权值为 1，那么 (1, 2, 3, 4, 5) 请求会被发送到服务器 1，(6) 请求会被发送到服务器 2。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/负载均衡算法之加权轮询.jpg" width="640"></div><h4 id="最少连接-least-connections" tabindex="-1"><a class="header-anchor" href="#最少连接-least-connections" aria-hidden="true">#</a> 最少连接（least Connections）</h4><p>由于每个请求的连接时间不一样，使用轮询或者加权轮询算法的话，可能会让一台服务器当前连接数过大，而另一台服务器的连接过小，造成负载不均衡。例如下图中，(1, 3, 5) 请求会被发送到服务器 1，但是 (1, 3) 很快就断开连接，此时只有 (5) 请求连接服务器 1；(2, 4, 6) 请求被发送到服务器 2，只有 (2) 的连接断开。该系统继续运行时，服务器 2 会承担过大的负载。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/负载均衡算法之最少连接-01.jpg" width="640"></div><p>最少连接算法就是将请求发送给当前最少连接数的服务器上。例如下图中，服务器 1 当前连接数最小，那么新到来的请求 6 就会被发送到服务器 1 上。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/负载均衡算法之最少连接-02.jpg" width="640"></div><h4 id="加权最少连接-weighted-least-connection" tabindex="-1"><a class="header-anchor" href="#加权最少连接-weighted-least-connection" aria-hidden="true">#</a> 加权最少连接（Weighted Least Connection）</h4><p>在最少连接的基础上，根据服务器的性能为每台服务器分配权重，再根据权重计算出每台服务器能处理的连接数。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/负载均衡算法之加权最少连接.jpg" width="640"></div><h4 id="随机算法-random" tabindex="-1"><a class="header-anchor" href="#随机算法-random" aria-hidden="true">#</a> 随机算法（Random）</h4><p>把请求随机发送到服务器上。和轮询算法类似，该算法比较适合服务器性能差不多的场景。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/负载均衡算法之随机.jpg" width="640"></div><h4 id="源地址哈希法-ip-hash" tabindex="-1"><a class="header-anchor" href="#源地址哈希法-ip-hash" aria-hidden="true">#</a> 源地址哈希法 (IP Hash)</h4><p>源地址哈希通过对客户端 IP 哈希计算得到的一个数值，用该数值对服务器数量进行取模运算，取模结果便是目标服务器的序号。</p><ul><li>优点：保证同一 IP 的客户端都会被 hash 到同一台服务器上。</li><li>缺点：不利于集群扩展，后台服务器数量变更都会影响 hash 结果。可以采用一致性 Hash 改进。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/负载均衡算法之IpHash.jpg" width="640"></div><h3 id="实现-3" tabindex="-1"><a class="header-anchor" href="#实现-3" aria-hidden="true">#</a> 实现</h3><h4 id="http-重定向" tabindex="-1"><a class="header-anchor" href="#http-重定向" aria-hidden="true">#</a> HTTP 重定向</h4><p>HTTP 重定向负载均衡服务器收到 HTTP 请求之后会返回服务器的地址，并将该地址写入 HTTP 重定向响应中返回给浏览器，浏览器收到后需要再次发送请求。</p><p>缺点：</p><ul><li>用户访问的延迟会增加；</li><li>如果负载均衡器宕机，就无法访问该站点。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/Http重定向.png" width="640"></div><h4 id="dns-重定向" tabindex="-1"><a class="header-anchor" href="#dns-重定向" aria-hidden="true">#</a> DNS 重定向</h4><p>使用 DNS 作为负载均衡器，根据负载情况返回不同服务器的 IP 地址。大型网站基本使用了这种方式做为第一级负载均衡手段，然后在内部使用其它方式做第二级负载均衡。</p><p>缺点：</p><ul><li>DNS 查找表可能会被客户端缓存起来，那么之后的所有请求都会被重定向到同一个服务器。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/Dns重定向.png" width="640"></div><h4 id="修改-mac-地址" tabindex="-1"><a class="header-anchor" href="#修改-mac-地址" aria-hidden="true">#</a> 修改 MAC 地址</h4><p>使用 LVS（Linux Virtual Server）这种链路层负载均衡器，根据负载情况修改请求的 MAC 地址。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/修改Mac地址.png" width="640"></div><h4 id="修改-ip-地址" tabindex="-1"><a class="header-anchor" href="#修改-ip-地址" aria-hidden="true">#</a> 修改 IP 地址</h4><p>在网络层修改请求的目的 IP 地址。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/修改IP地址.png" width="640"></div><h4 id="代理自动配置" tabindex="-1"><a class="header-anchor" href="#代理自动配置" aria-hidden="true">#</a> 代理自动配置</h4><p>正向代理与反向代理的区别：</p><ul><li>正向代理：发生在客户端，是由用户主动发起的。比如翻墙，客户端通过主动访问代理服务器，让代理服务器获得需要的外网数据，然后转发回客户端。</li><li>反向代理：发生在服务器端，用户不知道代理的存在。</li></ul><p>PAC 服务器是用来判断一个请求是否要经过代理。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/代理自动配置.jpg" width="640"></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>',83),u={href:"https://www.cnblogs.com/savorboard/p/distributed-system-transaction-consistency.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/CyC2018/Interview-Notebook/blob/master/notes/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98%E5%88%86%E6%9E%90.md",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/453c6e7ff81c",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.im/post/5a20cd8bf265da43163cdd9a",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/redisson/redisson/wiki/8.-%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E5%92%8C%E5%90%8C%E6%AD%A5%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/L316476844/distributed-session",target:"_blank",rel:"noopener noreferrer"},f={href:"https://juejin.im/entry/57e39e320e3dd90058021bff",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.toutiao.com/i6533812974807679495/?tt_from=weixin&utm_campaign=client_share&from=singlemessage&timestamp=1521281305&app=news_article&utm_source=weixin&iid=28128279343&utm_medium=toutiao_android&weixin_list=1&wxshare_count=2&pbid=6517746516513195523",target:"_blank",rel:"noopener noreferrer"};function _(x,y){const s=r("ExternalLinkIcon");return o(),d("div",null,[p,e("p",null,[a("可以考虑使用 "),e("a",l,[a("redisson 的解决方案"),n(s)]),a("。")]),h,e("ul",null,[e("li",null,[e("a",u,[a("https://www.cnblogs.com/savorboard/p/distributed-system-transaction-consistency.html"),n(s)])]),e("li",null,[e("a",k,[a("https://github.com/CyC2018/Interview-Notebook/blob/master/notes/分布式问题分析.md"),n(s)])]),e("li",null,[e("a",m,[a("https://www.jianshu.com/p/453c6e7ff81c"),n(s)])]),e("li",null,[e("a",g,[a("https://juejin.im/post/5a20cd8bf265da43163cdd9a"),n(s)])]),e("li",null,[e("a",b,[a("https://github.com/redisson/redisson/wiki/8.-分布式锁和同步器"),n(s)])]),e("li",null,[e("a",w,[a("https://github.com/L316476844/distributed-session"),n(s)])]),e("li",null,[e("a",f,[a("分布式缓存架构基础"),n(s)])]),e("li",null,[e("a",v,[a("阿里 P8 技术专家细究分布式缓存问题"),n(s)])])])])}const T=t(c,[["render",_],["__file","index.html.vue"]]);export{T as default};
