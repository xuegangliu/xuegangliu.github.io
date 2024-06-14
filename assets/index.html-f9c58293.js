import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as r,a as e,b as a,d as s,e as t}from"./app-c4cc7cd5.js";const c={},p=t('<h1 id="zookeeper-运维指南" tabindex="-1"><a class="header-anchor" href="#zookeeper-运维指南" aria-hidden="true">#</a> ZooKeeper 运维指南</h1><h2 id="单点服务部署" tabindex="-1"><a class="header-anchor" href="#单点服务部署" aria-hidden="true">#</a> 单点服务部署</h2><p>在安装 ZooKeeper 之前，请确保你的系统是在以下任一操作系统上运行：</p><ul><li><strong>任意 Linux OS</strong> - 支持开发和部署。适合演示应用程序。</li><li><strong>Windows OS</strong> - 仅支持开发。</li><li><strong>Mac OS</strong> - 仅支持开发。</li></ul><p>安装步骤如下：</p><h3 id="下载解压" tabindex="-1"><a class="header-anchor" href="#下载解压" aria-hidden="true">#</a> 下载解压</h3>',6),d={href:"http://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>解压到本地：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxf</span> zookeeper-3.4.6.tar.gz
<span class="token builtin class-name">cd</span> zookeeper-3.4.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><p>执行 <code>vim /etc/profile</code>，添加环境变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOOKEEPER_HOME</span><span class="token operator">=</span>/usr/app/zookeeper-3.4.14
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$ZOOKEEPER_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再执行 <code>source /etc/profile</code> ， 使得配置的环境变量生效。</p><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h3><p>你必须创建 <code>conf/zoo.cfg</code> 文件，否则启动时会提示你没有此文件。</p><p>初次尝试，不妨直接使用 Kafka 提供的模板配置文件 <code>conf/zoo_sample.cfg</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> conf/zoo_sample.cfg conf/zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改后完整配置如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># The number of milliseconds of each tick</span>
<span class="token key attr-name">tickTime</span><span class="token punctuation">=</span><span class="token value attr-value">2000</span>
<span class="token comment"># The number of ticks that the initial</span>
<span class="token comment"># synchronization phase can take</span>
<span class="token key attr-name">initLimit</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token comment"># The number of ticks that can pass between</span>
<span class="token comment"># sending a request and getting an acknowledgement</span>
<span class="token key attr-name">syncLimit</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token comment"># the directory where the snapshot is stored.</span>
<span class="token comment"># do not use /tmp for storage, /tmp here is just</span>
<span class="token comment"># example sakes.</span>
<span class="token key attr-name">dataDir</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/local/zookeeper/data</span>
<span class="token key attr-name">dataLogDir</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/local/zookeeper/log</span>
<span class="token comment"># the port at which the clients will connect</span>
<span class="token key attr-name">clientPort</span><span class="token punctuation">=</span><span class="token value attr-value">2181</span>
<span class="token comment"># the maximum number of client connections.</span>
<span class="token comment"># increase this if you need to handle more clients</span>
<span class="token comment">#maxClientCnxns=60</span>
<span class="token comment">#</span>
<span class="token comment"># Be sure to read the maintenance section of the</span>
<span class="token comment"># administrator guide before turning on autopurge.</span>
<span class="token comment">#</span>
<span class="token comment"># http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance</span>
<span class="token comment">#</span>
<span class="token comment"># The number of snapshots to retain in dataDir</span>
<span class="token comment">#autopurge.snapRetainCount=3</span>
<span class="token comment"># Purge task interval in hours</span>
<span class="token comment"># Set to &quot;0&quot; to disable auto purge feature</span>
<span class="token comment">#autopurge.purgeInterval=1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置参数说明：</p><ul><li><strong>tickTime</strong>：用于计算的基础时间单元。比如 session 超时：N*tickTime；</li><li><strong>initLimit</strong>：用于集群，允许从节点连接并同步到 master 节点的初始化连接时间，以 tickTime 的倍数来表示；</li><li><strong>syncLimit</strong>：用于集群， master 主节点与从节点之间发送消息，请求和应答时间长度（心跳机制）；</li><li><strong>dataDir</strong>：数据存储位置；</li><li><strong>dataLogDir</strong>：日志目录；</li><li><strong>clientPort</strong>：用于客户端连接的端口，默认 2181</li></ul><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h3><p>执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin/zkServer.sh start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行此命令后，你将收到以下响应</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>JMX enabled by default
Using config: /Users/<span class="token punctuation">..</span>/zookeeper-3.4.6/bin/<span class="token punctuation">..</span>/conf/zoo.cfg
Starting zookeeper <span class="token punctuation">..</span>. STARTED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="停止服务" tabindex="-1"><a class="header-anchor" href="#停止服务" aria-hidden="true">#</a> 停止服务</h3><p>可以使用以下命令停止 zookeeper 服务器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin/zkServer.sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="集群服务部署" tabindex="-1"><a class="header-anchor" href="#集群服务部署" aria-hidden="true">#</a> 集群服务部署</h2><p>分布式系统节点数一般都要求是奇数，且最少为 3 个节点，Zookeeper 也不例外。</p><p>这里，规划一个含 3 个节点的最小 ZooKeeper 集群，主机名分别为 hadoop001，hadoop002，hadoop003 。</p><h3 id="修改配置-1" tabindex="-1"><a class="header-anchor" href="#修改配置-1" aria-hidden="true">#</a> 修改配置</h3><p>修改配置文件 <code>zoo.cfg</code>，内容如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">tickTime</span><span class="token punctuation">=</span><span class="token value attr-value">2000</span>
<span class="token key attr-name">initLimit</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">syncLimit</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">dataDir</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/local/zookeeper-cluster/data/</span>
<span class="token key attr-name">dataLogDir</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/local/zookeeper-cluster/log/</span>
<span class="token key attr-name">clientPort</span><span class="token punctuation">=</span><span class="token value attr-value">2181</span>

<span class="token comment"># server.1 这个1是服务器的标识，可以是任意有效数字，标识这是第几个服务器节点，这个标识要写到dataDir目录下面myid文件里</span>
<span class="token comment"># 指名集群间通讯端口和选举端口</span>
<span class="token key attr-name">server.1</span><span class="token punctuation">=</span><span class="token value attr-value">hadoop001:2287:3387</span>
<span class="token key attr-name">server.2</span><span class="token punctuation">=</span><span class="token value attr-value">hadoop002:2287:3387</span>
<span class="token key attr-name">server.3</span><span class="token punctuation">=</span><span class="token value attr-value">hadoop003:2287:3387</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标识节点" tabindex="-1"><a class="header-anchor" href="#标识节点" aria-hidden="true">#</a> 标识节点</h3><p>分别在三台主机的 <code>dataDir</code> 目录下新建 <code>myid</code> 文件,并写入对应的节点标识。Zookeeper 集群通过 <code>myid</code> 文件识别集群节点，并通过上文配置的节点通信端口和选举端口来进行节点通信，选举出 Leader 节点。</p><p>创建存储目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 三台主机均执行该命令</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-vp</span>  /usr/local/zookeeper-cluster/data/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建并写入节点标识到 <code>myid</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># hadoop001主机</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">&gt;</span> /usr/local/zookeeper-cluster/data/myid
<span class="token comment"># hadoop002主机</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;2&quot;</span> <span class="token operator">&gt;</span> /usr/local/zookeeper-cluster/data/myid
<span class="token comment"># hadoop003主机</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;3&quot;</span> <span class="token operator">&gt;</span> /usr/local/zookeeper-cluster/data/myid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动集群" tabindex="-1"><a class="header-anchor" href="#启动集群" aria-hidden="true">#</a> 启动集群</h3><p>分别在三台主机上，执行如下命令启动服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/app/zookeeper-cluster/zookeeper/bin/zkServer.sh start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="集群验证" tabindex="-1"><a class="header-anchor" href="#集群验证" aria-hidden="true">#</a> 集群验证</h3><p>启动后使用 <code>zkServer.sh status</code> 查看集群各个节点状态。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,40),m={href:"https://www.w3cschool.cn/zookeeper/zookeeper_installation.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/heibaiying/BigData-Notes/blob/master/notes/installation/Zookeeper%E5%8D%95%E6%9C%BA%E7%8E%AF%E5%A2%83%E5%92%8C%E9%9B%86%E7%BE%A4%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.md",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.runoob.com/w3cnote/zookeeper-bs-command.html",target:"_blank",rel:"noopener noreferrer"};function k(b,g){const n=o("ExternalLinkIcon");return l(),r("div",null,[p,e("p",null,[a("进入官方下载地址："),e("a",d,[a("http://zookeeper.apache.org/releases.html#download"),s(n)]),a(" ，选择合适版本。")]),u,e("ul",null,[e("li",null,[e("a",m,[a("Zookeeper 安装"),s(n)])]),e("li",null,[e("a",v,[a("Zookeeper 单机环境和集群环境搭建"),s(n)])]),e("li",null,[e("a",h,[a("Zookeeper 客户端基础命令使用"),s(n)])])])])}const z=i(c,[["render",k],["__file","index.html.vue"]]);export{z as default};
