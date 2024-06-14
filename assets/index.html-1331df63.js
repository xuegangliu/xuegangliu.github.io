const e=JSON.parse('{"key":"v-9e987532","path":"/pages/cd38ec/","title":"JavaMail 快速入门","lang":"zh-CN","frontmatter":{"title":"JavaMail 快速入门","date":"2022-02-17T22:34:30.000Z","order":4,"permalink":"/pages/cd38ec/","category":["Java","工具","其他"],"tag":["Java","邮件"],"description":"JavaMail 快速入门 简介 邮件相关的标准 厂商所提供的 JavaMail 服务程序可以有选择地实现某些邮件协议，常见的邮件协议包括： SMTP(Simple Mail Transfer Protocol) ：即简单邮件传输协议，它是一组用于由源地址到目的地址传送邮件的规则，由它来控制信件的中转方式。 POP3(Post Office Protocol - Version 3) ：即邮局协议版本 3 ，用于接收电子邮件的标准协议。 IMAP(Internet Mail Access Protocol) ：即 Internet 邮件访问协议。是 POP3 的替代协议。","head":[["meta",{"property":"og:url","content":"https://xuegangliu.github.io/pages/cd38ec/"}],["meta",{"property":"og:site_name","content":"俩天"}],["meta",{"property":"og:title","content":"JavaMail 快速入门"}],["meta",{"property":"og:description","content":"JavaMail 快速入门 简介 邮件相关的标准 厂商所提供的 JavaMail 服务程序可以有选择地实现某些邮件协议，常见的邮件协议包括： SMTP(Simple Mail Transfer Protocol) ：即简单邮件传输协议，它是一组用于由源地址到目的地址传送邮件的规则，由它来控制信件的中转方式。 POP3(Post Office Protocol - Version 3) ：即邮局协议版本 3 ，用于接收电子邮件的标准协议。 IMAP(Internet Mail Access Protocol) ：即 Internet 邮件访问协议。是 POP3 的替代协议。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2016-10-23T04:35:16.000Z"}],["meta",{"property":"article:author","content":"俩天"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"邮件"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2016-10-23T04:35:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaMail 快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:34:30.000Z\\",\\"dateModified\\":\\"2016-10-23T04:35:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俩天\\",\\"url\\":\\"https://xuegangliu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"邮件相关的标准","slug":"邮件相关的标准","link":"#邮件相关的标准","children":[]},{"level":3,"title":"JavaMail 简介","slug":"javamail-简介","link":"#javamail-简介","children":[]},{"level":3,"title":"邮件传输过程","slug":"邮件传输过程","link":"#邮件传输过程","children":[]},{"level":3,"title":"Message 结构","slug":"message-结构","link":"#message-结构","children":[]}]},{"level":2,"title":"JavaMail 的核心类","slug":"javamail-的核心类","link":"#javamail-的核心类","children":[{"level":3,"title":"java.util.Properties 类（属性对象）","slug":"java-util-properties-类-属性对象","link":"#java-util-properties-类-属性对象","children":[]},{"level":3,"title":"javax.mail.Session 类（会话对象）","slug":"javax-mail-session-类-会话对象","link":"#javax-mail-session-类-会话对象","children":[]},{"level":3,"title":"javax.mail.Transport 类（邮件传输）","slug":"javax-mail-transport-类-邮件传输","link":"#javax-mail-transport-类-邮件传输","children":[]},{"level":3,"title":"javax.mail.Store 类（邮件存储 ）","slug":"javax-mail-store-类-邮件存储","link":"#javax-mail-store-类-邮件存储","children":[]},{"level":3,"title":"javax.mail.Message 类（消息对象）","slug":"javax-mail-message-类-消息对象","link":"#javax-mail-message-类-消息对象","children":[]},{"level":3,"title":"javax.mail.Address 类（地址）","slug":"javax-mail-address-类-地址","link":"#javax-mail-address-类-地址","children":[]},{"level":3,"title":"Authenticator 类（认证者）","slug":"authenticator-类-认证者","link":"#authenticator-类-认证者","children":[]}]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[{"level":3,"title":"发送文本邮件","slug":"发送文本邮件","link":"#发送文本邮件","children":[]},{"level":3,"title":"发送 HTML 格式的邮件","slug":"发送-html-格式的邮件","link":"#发送-html-格式的邮件","children":[]},{"level":3,"title":"发送带附件的邮件","slug":"发送带附件的邮件","link":"#发送带附件的邮件","children":[]},{"level":3,"title":"获取邮箱中的邮件","slug":"获取邮箱中的邮件","link":"#获取邮箱中的邮件","children":[]},{"level":3,"title":"转发邮件","slug":"转发邮件","link":"#转发邮件","children":[]}]}],"git":{"createdTime":1477197316000,"updatedTime":1477197316000,"contributors":[{"name":"刘雪岗","email":"1453860636@qq.com","commits":1}]},"readingTime":{"minutes":9.12,"words":2736},"filePathRelative":"01.Java/12.工具/99.其他/04.JavaMail.md","localizedDate":"2022年2月17日","excerpt":"<h1> JavaMail 快速入门</h1>\\n<h2> 简介</h2>\\n<h3> 邮件相关的标准</h3>\\n<p>厂商所提供的 JavaMail 服务程序可以有选择地实现某些邮件协议，常见的邮件协议包括：</p>\\n<ul>\\n<li><code>SMTP(Simple Mail Transfer Protocol)</code> ：即简单邮件传输协议，它是一组用于由源地址到目的地址传送邮件的规则，由它来控制信件的中转方式。</li>\\n<li><code>POP3(Post Office Protocol - Version 3)</code> ：即邮局协议版本 3 ，用于接收电子邮件的标准协议。</li>\\n<li><code>IMAP(Internet Mail Access Protocol)</code> ：即 Internet 邮件访问协议。是 POP3 的替代协议。</li>\\n</ul>","autoDesc":true}');export{e as data};
