import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as i,a as e,b as n,d as r,e as t}from"./app-64d71392.js";const d={},c=t('<h1 id="域名解析协议-dns" tabindex="-1"><a class="header-anchor" href="#域名解析协议-dns" aria-hidden="true">#</a> 域名解析协议 DNS</h1><blockquote><p>域名系统（英文：Domain Name System，缩写：DNS）是互联网的一项服务。它作为将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS 使用 TCP 和 UDP 端口 53。当前，对于每一级域名长度的限制是 63 个字符，域名总长度则不能超过 253 个字符。</p><p>关键词：DNS, 域名解析</p></blockquote><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="什么是-dns" tabindex="-1"><a class="header-anchor" href="#什么是-dns" aria-hidden="true">#</a> 什么是 DNS</h3><p>DNS 是一个应用层协议。</p>',5),h={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},p=e("h3",{id:"什么是域名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是域名","aria-hidden":"true"},"#"),n(" 什么是域名")],-1),m=e("code",null,".",-1),u={href:"http://wikipedia.org",target:"_blank",rel:"noopener noreferrer"},_={href:"http://wikipedia.org",target:"_blank",rel:"noopener noreferrer"},w={href:"http://wikipedia.org",target:"_blank",rel:"noopener noreferrer"},g=t('<div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/application/dns/dns-domain.png"></div><h3 id="dns-的分层" tabindex="-1"><a class="header-anchor" href="#dns-的分层" aria-hidden="true">#</a> DNS 的分层</h3><p><strong>域名系统是分层次的。</strong></p><p>在域名系统的层次结构中，各种域名都隶属于域名系统根域的下级。域名的第一级是顶级域，它包括通用顶级域，例如 <code>.com</code>、<code>.net</code> 和 <code>.org</code>；以及国家和地区顶级域，例如 <code>.us</code>、<code>.cn</code> 和 <code>.tk</code>。顶级域名下一层是二级域名，一级一级地往下。这些域名向人们提供注册服务，人们可以用它创建公开的互联网资源或运行网站。顶级域名的管理服务由对应的域名注册管理机构（域名注册局）负责，注册服务通常由域名注册商负责。</p><h3 id="dns-服务类型" tabindex="-1"><a class="header-anchor" href="#dns-服务类型" aria-hidden="true">#</a> DNS 服务类型</h3><ul><li><strong>授权型 DNS</strong> - 一种授权型 DNS 服务提供一种更新机制，供开发人员用于管理其公用 DNS 名称。然后，它响应 DNS 查询，将域名转换为 IP 地址，以便计算机可以相互通信。授权型 DNS 对域有最终授权且负责提供递归型 DNS 服务器对 IP 地址信息的响应。Amazon Route 53 是一种授权型 DNS 系统。</li><li><strong>递归型 DNS</strong> - 客户端通常不会对授权型 DNS 服务直接进行查询。而是通常连接到称为解析程序的其他类型 DNS 服务，或递归型 DNS 服务。递归型 DNS 服务就像是旅馆的门童：尽管没有任何自身的 DNS 记录，但是可充当代表您获得 DNS 信息的中间程序。如果递归型 DNS 拥有已缓存或存储一段时间的 DNS 参考，那么它会通过提供源或 IP 信息来响应 DNS 查询。如果没有，则它会将查询传递到一个或多个授权型 DNS 服务器以查找信息。</li></ul><h3 id="记录类型" tabindex="-1"><a class="header-anchor" href="#记录类型" aria-hidden="true">#</a> 记录类型</h3><p>DNS 中，常见的资源记录类型有：</p>',8),b=e("li",null,[e("strong",null,"NS 记录（域名服务）"),n(" ─ 指定解析域名或子域名的 DNS 服务器。")],-1),f=e("li",null,[e("strong",null,"MX 记录（邮件交换）"),n(" ─ 指定接收信息的邮件服务器。")],-1),k=e("li",null,[e("strong",null,"A 记录（地址）"),n(" ─ 指定域名对应的 IPv4 地址记录。")],-1),x=e("li",null,[e("strong",null,"AAAA 记录（地址）"),n(" ─ 指定域名对应的 IPv6 地址记录。")],-1),D=e("strong",null,"CNAME（规范）",-1),S=e("code",null,"CNAME",-1),N={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.example.com/",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"A",-1),A=e("li",null,[e("strong",null,"PTR 记录（反向记录）"),n(" ─ PTR 记录用于定义与 IP 地址相关联的名称。 PTR 记录是 A 或 AAAA 记录的逆。 PTR 记录是唯一的，因为它们以 .arpa 根开始并被委派给 IP 地址的所有者。")],-1),P={href:"https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%AE%B0%E5%BD%95%E7%B1%BB%E5%9E%8B%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},I=t('<h2 id="域名解析" tabindex="-1"><a class="header-anchor" href="#域名解析" aria-hidden="true">#</a> 域名解析</h2><p>主机名到 IP 地址的映射有两种方式：</p><ul><li><strong>静态映射</strong> - 在本机上配置域名和 IP 的映射，旨在本机上使用。Windows 和 Linux 的 hosts 文件中的内容就属于静态映射。</li><li><strong>动态映射</strong> - 建立一套域名解析系统（DNS），只在专门的 DNS 服务器上配置主机到 IP 地址的映射，网络上需要使用主机名通信的设备，首先需要到 DNS 服务器查询主机所对应的 IP 地址。</li></ul><p>通过域名去查询域名服务器，得到 IP 地址的过程叫做域名解析。在解析域名时，一般先静态域名解析，再动态解析域名。可以将一些常用的域名放入静态域名解析表中，这样可以大大提高域名解析效率。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/application/dns/dns-resolve.png"></div><p>上图展示了一个动态域名解析的流程，步骤如下：</p>',6),B={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},z={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},F={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},R={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},T={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},W={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},C={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},L={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},q={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},j={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},M={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},V={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},y=t(`<blockquote><p>🔔 注意：只有配置了域名服务器，才能执行域名解析。</p><p>例如，在 Linux 中执行 <code>vim /etc/resolv.conf</code> 命令，在其中添加下面的内容来配置域名服务器地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nameserver 218.2.135.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h2 id="linux-上的域名相关命令" tabindex="-1"><a class="header-anchor" href="#linux-上的域名相关命令" aria-hidden="true">#</a> Linux 上的域名相关命令</h2><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3>`,3),H=e("p",null,[n("hostname 命令用于查看和设置系统的主机名称。环境变量 HOSTNAME 也保存了当前的主机名。在使用 hostname 命令设置主机名后，系统并不会永久保存新的主机名，重新启动机器之后还是原来的主机名。如果需要永久修改主机名，需要同时修改 "),e("code",null,"/etc/hosts"),n(" 和 "),e("code",null,"/etc/sysconfig/network"),n(" 的相关内容。")],-1),O={href:"http://man.linuxde.net/hostname",target:"_blank",rel:"noopener noreferrer"},U=t(`<p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">hostname</span>
AY1307311912260196fcZ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nslookup" tabindex="-1"><a class="header-anchor" href="#nslookup" aria-hidden="true">#</a> nslookup</h3>`,3),X=e("p",null,"nslookup 命令是常用域名查询工具，就是查 DNS 信息用的命令。",-1),Y={href:"http://man.linuxde.net/nslookup",target:"_blank",rel:"noopener noreferrer"},Z=t(`<p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nslookup www.jsdig.com</span>
Server:         <span class="token number">202.96</span>.104.15
Address:        <span class="token number">202.96</span>.104.15<span class="token comment">#53</span>

Non-authoritative answer:
www.jsdig.com canonical name <span class="token operator">=</span> host.1.jsdig.com.
Name:   host.1.jsdig.com
Address: <span class="token number">100.42</span>.212.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更多内容" tabindex="-1"><a class="header-anchor" href="#更多内容" aria-hidden="true">#</a> 更多内容</h2>`,3),$={href:"https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D",target:"_blank",rel:"noopener noreferrer"},G={href:"https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"},J={href:"https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%AE%B0%E5%BD%95%E7%B1%BB%E5%9E%8B%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},K={href:"https://aws.amazon.com/cn/route53/what-is-dns/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://tools.ietf.org/html/rfc1034",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://tools.ietf.org/html/rfc1035",target:"_blank",rel:"noopener noreferrer"};function ne(oe,re){const o=l("ExternalLinkIcon");return s(),i("div",null,[c,e("p",null,[n("域名系统 (DNS) 的作用是将人类可读的域名 (如，"),e("a",h,[n("www.example.com"),r(o)]),n(") 转换为机器可读的 IP 地址 (如，192.0.2.44)。")]),p,e("p",null,[n("域名是由一串用点分隔符 "),m,n(" 组成的互联网上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的方位。域名可以说是一个 IP 地址的代称，目的是为了便于记忆后者。例如，"),e("a",u,[n("wikipedia.org"),r(o)]),n(" 是一个域名，和 IP 地址 208.80.152.2 相对应。人们可以直接访问 "),e("a",_,[n("wikipedia.org"),r(o)]),n(" 来代替 IP 地址，然后域名系统（DNS）就会将它转化成便于机器识别的 IP 地址。这样，人们只需要记忆 "),e("a",w,[n("wikipedia.org"),r(o)]),n(" 这一串带有特殊含义的字符，而不需要记忆没有含义的数字。")]),g,e("ul",null,[b,f,k,x,e("li",null,[D,n(" ─ 一个域名映射到另一个域名或 "),S,n(" 记录（ "),e("a",N,[n("example.com"),r(o)]),n(" 指向 "),e("a",v,[n("www.example.com"),r(o)]),n(" ）或映射到一个 "),E,n("记录。")]),A]),e("blockquote",null,[e("p",null,[n("详细可以参考："),e("a",P,[n("维基百科 - 域名服务器记录类型列表"),r(o)])])]),I,e("ol",null,[e("li",null,[n("用户打开 Web 浏览器，在地址栏中输入 "),e("a",B,[n("www.example.com"),r(o)]),n("，然后按 Enter 键。")]),e("li",null,[e("a",z,[n("www.example.com"),r(o)]),n(" 的请求被路由到 DNS 解析程序，这一般由用户的 Internet 服务提供商 (ISP) 进行管理，例如有线 Internet 服务提供商、DSL 宽带提供商或公司网络。")]),e("li",null,[n("ISP 的 DNS 解析程序将 "),e("a",F,[n("www.example.com"),r(o)]),n(" 的请求转发到 DNS 根名称服务器。")]),e("li",null,[n("ISP 的 DNS 解析程序再次转发 "),e("a",R,[n("www.example.com"),r(o)]),n(" 的请求，这次转发到 .com 域的一个 TLD 名称服务器。.com 域的名称服务器使用与 "),e("a",T,[n("example.com"),r(o)]),n(" 域相关的四个 Amazon Route 53 名称服务器的名称来响应该请求。")]),e("li",null,[n("ISP 的 DNS 解析程序选择一个 Amazon Route 53 名称服务器，并将 "),e("a",W,[n("www.example.com"),r(o)]),n(" 的请求转发到该名称服务器。")]),e("li",null,[n("Amazon Route 53 名称服务器在 "),e("a",C,[n("example.com"),r(o)]),n(" 托管区域中查找 "),e("a",L,[n("www.example.com"),r(o)]),n(" 记录，获得相关值，例如，Web 服务器的 IP 地址 (192.0.2.44)，并将 IP 地址返回至 DNS 解析程序。")]),e("li",null,[n("ISP 的 DNS 解析程序最终获得用户需要的 IP 地址。解析程序将此值返回至 Web 浏览器。DNS 解析程序还会将 "),e("a",q,[n("example.com"),r(o)]),n(" 的 IP 地址缓存 (存储) 您指定的时长，以便它能够在下次有人浏览 "),e("a",j,[n("example.com"),r(o)]),n(" 时更快地作出响应。有关更多信息，请参阅存活期 (TTL)。")]),e("li",null,[n("Web 浏览器将 "),e("a",M,[n("www.example.com"),r(o)]),n(" 的请求发送到从 DNS 解析程序中获得的 IP 地址。这是您的内容所处位置，例如，在 Amazon EC2 实例中或配置为网站终端节点的 Amazon S3 存储桶中运行的 Web 服务器。")]),e("li",null,[n("192.0.2.44 上的 Web 服务器或其他资源将 "),e("a",V,[n("www.example.com"),r(o)]),n(" 的 Web 页面返回到 Web 浏览器，且 Web 浏览器会显示该页面。")])]),y,e("blockquote",null,[H,e("p",null,[n("参考："),e("a",O,[n("http://man.linuxde.net/hostname"),r(o)])])]),U,e("blockquote",null,[X,e("p",null,[n("参考："),e("a",Y,[n("http://man.linuxde.net/nslookup"),r(o)])])]),Z,e("ul",null,[e("li",null,[e("a",$,[n("维基百科 - 域名"),r(o)])]),e("li",null,[e("a",G,[n("维基百科 - 域名系统"),r(o)])]),e("li",null,[e("a",J,[n("维基百科 - 域名服务器记录类型列表"),r(o)])]),e("li",null,[e("a",K,[n("什么是 DNS？"),r(o)])]),e("li",null,[e("a",Q,[n("RFC 1034"),r(o)])]),e("li",null,[e("a",ee,[n("RFC 1035"),r(o)])])])])}const le=a(d,[["render",ne],["__file","index.html.vue"]]);export{le as default};
