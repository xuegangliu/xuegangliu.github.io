import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as i,a,b as n,d as s,w as d,e as c}from"./app-c4cc7cd5.js";const r={},u=c(`<h1 id="java-进程内缓存" tabindex="-1"><a class="header-anchor" href="#java-进程内缓存" aria-hidden="true">#</a> Java 进程内缓存</h1><blockquote><p>关键词：ConcurrentHashMap、LRUHashMap、Guava Cache、Caffeine、Ehcache</p></blockquote><h2 id="一、concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#一、concurrenthashmap" aria-hidden="true">#</a> 一、ConcurrentHashMap</h2><p>最简单的进程内缓存可以通过 JDK 自带的 <code>HashMap</code> 或 <code>ConcurrentHashMap</code> 实现。</p><p>适用场景：<strong>不需要淘汰的缓存数据</strong>。</p><p>缺点：无法进行缓存淘汰，内存会无限制的增长。</p><h2 id="二、lruhashmap" tabindex="-1"><a class="header-anchor" href="#二、lruhashmap" aria-hidden="true">#</a> 二、LRUHashMap</h2><p>可以通过<strong>继承 <code>LinkedHashMap</code> 来实现一个简单的 <code>LRUHashMap</code></strong>，即可完成一个简单的 **LRU （最近最少使用）**算法。</p><p>缺点：</p><ul><li>锁竞争严重，性能比较低。</li><li>不支持过期时间</li><li>不支持自动刷新</li></ul><p>【示例】LRUHashMap 的简单实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LRUCache</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedHashMap</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> max<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> lock<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token keyword">int</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//无需扩容</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>max <span class="token operator">*</span> <span class="token number">1.4f</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0.75f</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> max<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 重写LinkedHashMap的removeEldestEntry方法即可 在Put的时候判断，如果为true，就会删除最老的
     *
     * <span class="token keyword">@param</span> <span class="token parameter">eldest</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">removeEldestEntry</span><span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span> eldest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">putValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">removeValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、guava-cache" tabindex="-1"><a class="header-anchor" href="#三、guava-cache" aria-hidden="true">#</a> 三、Guava Cache</h2><p>Guava Cache 解决了 <code>LRUHashMap</code> 中的几个缺点。</p><p>Guava Cache 提供了<strong>基于容量，时间和引用的缓存回收方式</strong>。基于容量的方式内部实现采用 LRU 算法，基于引用回收很好的利用了 Java 虚拟机的垃圾回收机制。</p><p>其中的缓存构造器 CacheBuilder 采用构建者模式提供了设置好各种参数的缓存对象。缓存核心类 LocalCache 里面的内部类 Segment 与 jdk1.7 及以前的 <code>ConcurrentHashMap</code> 非常相似，分段加锁，减少锁竞争，并且都继承于 <code>ReetrantLock</code>，还有六个队列，以实现丰富的本地缓存方案。Guava Cache 对于过期的 Entry 并没有马上过期(也就是并没有后台线程一直在扫)，而是通过进行读写操作的时候进行过期处理，这样做的好处是避免后台线程扫描的时候进行全局加锁。</p><p>直接通过查询，判断其是否满足刷新条件，进行刷新。</p><h3 id="guava-cache-缓存回收" tabindex="-1"><a class="header-anchor" href="#guava-cache-缓存回收" aria-hidden="true">#</a> Guava Cache 缓存回收</h3><p>Guava Cache 提供了三种基本的缓存回收方式。</p><h3 id="基于容量回收" tabindex="-1"><a class="header-anchor" href="#基于容量回收" aria-hidden="true">#</a> 基于容量回收</h3><p><code>maximumSize(long)</code>：当缓存中的元素数量超过指定值时触发回收。</p><h3 id="基于定时回收" tabindex="-1"><a class="header-anchor" href="#基于定时回收" aria-hidden="true">#</a> 基于定时回收</h3><ul><li><code>expireAfterAccess(long, TimeUnit)</code>：缓存项在给定时间内没有被读/写访问，则回收。请注意这种缓存的回收顺序和基于大小回收一样。</li><li><code>expireAfterWrite(long, TimeUnit)</code>：缓存项在给定时间内没有被写访问（创建或覆盖），则回收。如果认为缓存数据总是在固定时候后变得陈旧不可用，这种回收方式是可取的。</li></ul><p>如下文所讨论，定时回收周期性地在写操作中执行，偶尔在读操作中执行。</p><h3 id="基于引用回收" tabindex="-1"><a class="header-anchor" href="#基于引用回收" aria-hidden="true">#</a> 基于引用回收</h3><ul><li><code>CacheBuilder.weakKeys()</code>：使用弱引用存储键。当键没有其它（强或软）引用时，缓存项可以被垃圾回收。</li><li><code>CacheBuilder.weakValues()</code>：使用弱引用存储值。当值没有其它（强或软）引用时，缓存项可以被垃圾回收。</li><li><code>CacheBuilder.softValues()</code>：使用软引用存储值。软引用只有在响应内存需要时，才按照全局最近最少使用的顺序回收。</li></ul><h3 id="guava-cache-核心-api" tabindex="-1"><a class="header-anchor" href="#guava-cache-核心-api" aria-hidden="true">#</a> Guava Cache 核心 API</h3><h4 id="cachebuilder" tabindex="-1"><a class="header-anchor" href="#cachebuilder" aria-hidden="true">#</a> CacheBuilder</h4><p>缓存构建器。构建缓存的入口，指定缓存配置参数并初始化本地缓存。<br> 主要采用 builder 的模式，CacheBuilder 的每一个方法都返回这个 CacheBuilder 知道 build 方法的调用。<br> 注意 build 方法有重载，带有参数的为构建一个具有数据加载功能的缓存，不带参数的构建一个没有数据加载功能的缓存。</p><h4 id="localmanualcache" tabindex="-1"><a class="header-anchor" href="#localmanualcache" aria-hidden="true">#</a> LocalManualCache</h4><p>作为 LocalCache 的一个内部类，在构造方法里面会把 LocalCache 类型的变量传入，并且调用方法时都直接或者间接调用 LocalCache 里面的方法。</p><h4 id="localloadingcache" tabindex="-1"><a class="header-anchor" href="#localloadingcache" aria-hidden="true">#</a> LocalLoadingCache</h4><p>可以看到该类继承了 LocalManualCache 并实现接口 LoadingCache。<br> 覆盖了 get，getUnchecked 等方法。</p><h4 id="localcache" tabindex="-1"><a class="header-anchor" href="#localcache" aria-hidden="true">#</a> LocalCache</h4><p>Guava Cache 中的核心类，重点了解。</p><p>LocalCache 的数据结构与 ConcurrentHashMap 很相似，都由多个 segment 组成，且各 segment 相对独立，互不影响，所以能支持并行操作。每个 segment 由一个 table 和若干队列组成。缓存数据存储在 table 中，其类型为 AtomicReferenceArray。</p><h2 id="四、caffeine" tabindex="-1"><a class="header-anchor" href="#四、caffeine" aria-hidden="true">#</a> 四、Caffeine</h2>`,37),h={href:"https://github.com/ben-manes/caffeine",target:"_blank",rel:"noopener noreferrer"},k=a("p",null,[n("Caffeine 实现了 W-TinyLFU("),a("strong",null,"LFU"),n(" + "),a("strong",null,"LRU"),n(" 算法的变种)，其"),a("strong",null,"命中率和读写吞吐量大大优于 Guava Cache"),n("。")],-1),v={href:"https://juejin.im/post/5b7593496fb9a009b62904fa#comment",target:"_blank",rel:"noopener noreferrer"},b=a("h2",{id:"五、ehcache",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#五、ehcache","aria-hidden":"true"},"#"),n(" 五、Ehcache")],-1),m=c('<h2 id="六、进程内缓存对比" tabindex="-1"><a class="header-anchor" href="#六、进程内缓存对比" aria-hidden="true">#</a> 六、进程内缓存对比</h2><p>常用进程内缓存技术对比：</p><table><thead><tr><th>比较项</th><th>ConcurrentHashMap</th><th>LRUMap</th><th>Ehcache</th><th>Guava Cache</th><th>Caffeine</th></tr></thead><tbody><tr><td>读写性能</td><td>很好，分段锁</td><td>一般，全局加锁</td><td>好</td><td>好，需要做淘汰操作</td><td>很好</td></tr><tr><td>淘汰算法</td><td>无</td><td>LRU，一般</td><td>支持多种淘汰算法,LRU,LFU,FIFO</td><td>LRU，一般</td><td>W-TinyLFU, 很好</td></tr><tr><td>功能丰富程度</td><td>功能比较简单</td><td>功能比较单一</td><td>功能很丰富</td><td>功能很丰富，支持刷新和虚引用等</td><td>功能和 Guava Cache 类似</td></tr><tr><td>工具大小</td><td>jdk 自带类，很小</td><td>基于 LinkedHashMap，较小</td><td>很大，最新版本 1.4MB</td><td>是 Guava 工具类中的一个小部分，较小</td><td>一般，最新版本 644KB</td></tr><tr><td>是否持久化</td><td>否</td><td>否</td><td>是</td><td>否</td><td>否</td></tr><tr><td>是否支持集群</td><td>否</td><td>否</td><td>是</td><td>否</td><td>否</td></tr></tbody></table><ul><li><strong><code>ConcurrentHashMap</code></strong> - 比较适合缓存比较固定不变的元素，且缓存的数量较小的。虽然从上面表格中比起来有点逊色，但是其由于是 JDK 自带的类，在各种框架中依然有大量的使用，比如我们可以用来缓存我们反射的 Method，Field 等等；也可以缓存一些链接，防止其重复建立。在 Caffeine 中也是使用的 <code>ConcurrentHashMap</code> 来存储元素。</li><li><strong><code>LRUMap</code></strong> - 如果不想引入第三方包，又想使用淘汰算法淘汰数据，可以使用这个。</li><li><strong><code>Ehcache</code></strong> - 由于其 jar 包很大，较重量级。对于需要持久化和集群的一些功能的，可以选择 Ehcache。需要注意的是，虽然 Ehcache 也支持分布式缓存，但是由于其节点间通信方式为 rmi，表现不如 Redis，所以一般不建议用它来作为分布式缓存。</li><li><strong><code>Guava Cache</code></strong> - Guava 这个 jar 包在很多 Java 应用程序中都有大量的引入，所以很多时候其实是直接用就好了，并且其本身是轻量级的而且功能较为丰富，在不了解 Caffeine 的情况下可以选择 Guava Cache。</li><li><strong><code>Caffeine</code></strong> - 其在命中率，读写性能上都比 Guava Cache 好很多，并且其 API 和 Guava cache 基本一致，甚至会多一点。在真实环境中使用 Caffeine，取得过不错的效果。</li></ul><p>总结一下：<strong>如果不需要淘汰算法则选择 <code>ConcurrentHashMap</code>，如果需要淘汰算法和一些丰富的 API，推荐选择 <code>Caffeine</code></strong>。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',6),f={href:"https://github.com/ben-manes/caffeine",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.im/post/5b8df63c6fb9a019e04ebaf4",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.jianshu.com/p/9a80c662dac4",target:"_blank",rel:"noopener noreferrer"},y={href:"https://wizardforcel.gitbooks.io/guava-tutorial/content/1.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.jianshu.com/p/38bd5f1cf2f2",target:"_blank",rel:"noopener noreferrer"},w={href:"https://developer.ibm.com/zh/articles/os-cn-spring-cache/",target:"_blank",rel:"noopener noreferrer"};function L(x,M){const e=t("ExternalLinkIcon"),o=t("RouterLink");return l(),i("div",null,[u,a("blockquote",null,[a("p",null,[a("a",h,[n("caffeine"),s(e)]),n(" 是一个使用 JDK8 改进 Guava 缓存的高性能缓存库。")])]),k,a("p",null,[n("其实现原理较复杂，可以参考"),a("a",v,[n("你应该知道的缓存进化史"),s(e)]),n("。")]),b,a("blockquote",null,[a("p",null,[n("参考："),s(o,{to:"/01.Java/14.%E4%B8%AD%E9%97%B4%E4%BB%B6/02.%E7%BC%93%E5%AD%98/04.Ehcache.html"},{default:d(()=>[n("Ehcache")]),_:1})])]),m,a("ul",null,[a("li",null,[a("a",f,[n("caffeine github"),s(e)])]),a("li",null,[a("a",g,[n("深入解密来自未来的缓存-Caffeine"),s(e)])]),a("li",null,[a("a",C,[n("Caffeine 缓存"),s(e)])]),a("li",null,[a("a",y,[n("Google Guava 官方教程（中文版）"),s(e)])]),a("li",null,[a("a",_,[n("Google Guava Cache 全解析"),s(e)])]),a("li",null,[a("a",w,[n("注释驱动的 Spring cache 缓存介绍"),s(e)])])])])}const E=p(r,[["render",L],["__file","index.html.vue"]]);export{E as default};
