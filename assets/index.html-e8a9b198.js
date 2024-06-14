import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as n,a as e,b as s,d as i,e as o}from"./app-c4cc7cd5.js";const d={},h=o('<h1 id="网络协议之-icmp" tabindex="-1"><a class="header-anchor" href="#网络协议之-icmp" aria-hidden="true">#</a> 网络协议之 ICMP</h1><h2 id="icmp-简介" tabindex="-1"><a class="header-anchor" href="#icmp-简介" aria-hidden="true">#</a> ICMP 简介</h2><p>ICMP 全名为(INTERNET CONTROL MESSAGE PROTOCOL)网络控制消息协议。</p><p>ICMP 的协议号为<strong>1</strong>。</p><p>ICMP 报文就像是 IP 报文的小弟，总顶着 IP 报文的名头出来混。因为 ICMP 报文是在 IP 报文内部的，如图：</p><figure><img src="https://images2015.cnblogs.com/blog/318837/201606/318837-20160617091834260-1410966672.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="icmp-类型" tabindex="-1"><a class="header-anchor" href="#icmp-类型" aria-hidden="true">#</a> ICMP 类型</h2><p>ICMP 报文主要有两大功能：查询报文和差错报文。</p><h2 id="目的不可达-destination-unreachable-message" tabindex="-1"><a class="header-anchor" href="#目的不可达-destination-unreachable-message" aria-hidden="true">#</a> 目的不可达(Destination Unreachable Message)</h2><p>0 1 2 3</p><p>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Type | Code | Checksum |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| unused |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Internet Header + 64 bits of Original Data Datagram |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>日常生活中，邮寄包裹会经过多个传递环节，任意一环如果无法传下去，都会返回寄件人，并附上无法邮寄的原因。同理，当路由器收到一个无法传递下去的 IP 报文时，会发送 ICMP<strong>目的不可达报文</strong>（Type 为 3）给 IP 报文的源发送方。报文中的 Code 就表示发送失败的原因。</p><p>Code</p><p>0 = net unreachable;</p><p>1 = host unreachable;</p><p>2 = protocol unreachable;</p><p>3 = port unreachable;</p><p>4 = fragmentation needed and DF set;</p><p>5 = source route failed.</p><h2 id="超时-time-exceeded-message" tabindex="-1"><a class="header-anchor" href="#超时-time-exceeded-message" aria-hidden="true">#</a> 超时(Time Exceeded Message)</h2><p>0 1 2 3</p><p>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Type | Code | Checksum |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| unused |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Internet Header + 64 bits of Original Data Datagram |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>网络传输 IP 数据报的过程中，如果 IP 数据包的 TTL 值逐渐递减为 0 时，需要丢弃数据报。这时，路由器需要向源发送方发送 <strong>ICMP 超时报文</strong>(Type 为 11)，Code 为 0，表示传输过程中超时了。</p><p>一个 IP 数据报可能会因为过大而被分片，然后在目的主机侧把所有的分片重组。如果主机迟迟没有等到所有的分片报文，就会向源发送方发送一个 ICMP 超时报文，Code 为 1，表示分片重组超时了。</p><h2 id="参数错误报文-parameter-problem-message" tabindex="-1"><a class="header-anchor" href="#参数错误报文-parameter-problem-message" aria-hidden="true">#</a> 参数错误报文(Parameter Problem Message)</h2><p>0 1 2 3</p><p>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Type | Code | Checksum |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Pointer | unused |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Internet Header + 64 bits of Original Data Datagram |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>当路由器或主机处理数据报时，发现因为报文头的参数错误而不得不丢弃报文时，需要向源发送方发送<strong>参数错误报文</strong>(Type 为 12)。当 Code 为 0 时，报文中的 Pointer 表示错误的字节位置。</p><h2 id="源冷却-source-quench-message" tabindex="-1"><a class="header-anchor" href="#源冷却-source-quench-message" aria-hidden="true">#</a> 源冷却(Source Quench Message)</h2><p>0 1 2 3</p><p>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Type | Code | Checksum |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| unused |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Internet Header + 64 bits of Original Data Datagram |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>路由器在处理报文时会有一个缓存队列。如果超过最大缓存队列，将无法处理，从而丢弃报文。并向源发送方发一个 <strong>ICMP 源冷却报文</strong>(Type 为 4)，告诉对方：“嘿，我这里客满了，你迟点再来。”</p><h2 id="重定向-redirect-message" tabindex="-1"><a class="header-anchor" href="#重定向-redirect-message" aria-hidden="true">#</a> 重定向(Redirect Message)</h2><p>0 1 2 3</p><p>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Type | Code | Checksum |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Gateway Internet Address |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Internet Header + 64 bits of Original Data Datagram |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>想像一下，在公司中，有人来你的项目组问你某某某在哪儿。你一想，我们组没有这人啊。你肯定就会说，我们组没有这号人，你去其他组看看。当路由收到 IP 数据报，发现数据报的目的地址在路由表上没有，它就会发 <strong>ICMP 重定向报文</strong>(Type 为 5)给源发送方，提醒它想要发送的地址不在，去其他地方找找吧。</p><h2 id="请求回显或回显应答-echo-or-echo-reply-message" tabindex="-1"><a class="header-anchor" href="#请求回显或回显应答-echo-or-echo-reply-message" aria-hidden="true">#</a> 请求回显或回显应答(Echo or Echo Reply Message)</h2><p>0 1 2 3</p><p>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Type | Code | Checksum |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Identifier | Sequence Number |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Data ...</p><p>+-+-+-+-+-</p><p><strong>Type(8)<strong>是</strong>请求回显报文(Echo)</strong>；Type(0)是<strong>回显应答报文(Echo Reply)</strong>。</p><p>请求回显或回显应答报文属于查询报文。Ping 就是用这种报文进行查询和回应。</p><h2 id="时间戳或时间戳请求-timestamp-or-timestamp-reply-message" tabindex="-1"><a class="header-anchor" href="#时间戳或时间戳请求-timestamp-or-timestamp-reply-message" aria-hidden="true">#</a> 时间戳或时间戳请求(Timestamp or Timestamp Reply Message)</h2><p>0 1 2 3</p><p>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Type | Code | Checksum |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Identifier | Sequence Number |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Originate Timestamp |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Receive Timestamp |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Transmit Timestamp |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>时间戳报文是用来记录收发以及传输时间的报文。Originate Timestamp 记录的是发送方发送报文的时刻；<strong>Receive Timestamp</strong>记录的是接收方收到报文的时刻；<strong>Transmit Timestamp</strong>表示回显这最后发送报文的时刻。</p><h2 id="信息请求或信息响应" tabindex="-1"><a class="header-anchor" href="#信息请求或信息响应" aria-hidden="true">#</a> 信息请求或信息响应</h2><p>0 1 2 3</p><p>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Type | Code | Checksum |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>| Identifier | Sequence Number |</p><p>+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p><p>这种报文是用来找出一个主机所在的网络个数（一个主机可能会在多个网络中）。报文的 IP 消息头的目的地址会填为全 0，表示 this，源地址会填为源 IP 所在的网络 IP。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>图：ICMP 知识点思维导图</strong></p><figure><img src="https://images2015.cnblogs.com/blog/318837/201606/318837-20160617091835838-1982473379.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',111),c={href:"http://www.rfc-editor.org/info/rfc792",target:"_blank",rel:"noopener noreferrer"};function m(g,l){const p=r("ExternalLinkIcon");return t(),n("div",null,[h,e("ul",null,[e("li",null,[e("a",c,[s("RFC792"),i(p)])])])])}const b=a(d,[["render",m],["__file","index.html.vue"]]);export{b as default};
