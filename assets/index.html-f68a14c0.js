import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as l,a,b as o,d as i,e as r}from"./app-64d71392.js";const d={},p=r(`<h1 id="《sql-必知必会》笔记" tabindex="-1"><a class="header-anchor" href="#《sql-必知必会》笔记" aria-hidden="true">#</a> 《SQL 必知必会》笔记</h1><h2 id="第一章-sql-语法基础篇" tabindex="-1"><a class="header-anchor" href="#第一章-sql-语法基础篇" aria-hidden="true">#</a> 第一章：SQL 语法基础篇</h2><h3 id="_01-丨了解-sql-一门半衰期很长的语言" tabindex="-1"><a class="header-anchor" href="#_01-丨了解-sql-一门半衰期很长的语言" aria-hidden="true">#</a> 01 丨了解 SQL：一门半衰期很长的语言</h3><p>SQL 语言按照功能划分成以下的 4 个部分：</p><ul><li><strong>DDL</strong>，英文叫做 Data Definition Language，也就是数据定义语言，它用来定义我们的数据库对象，包括数据库、数据表和列。通过使用 DDL，我们可以创建，删除和修改数据库和表结构。</li><li><strong>DML</strong>，英文叫做 Data Manipulation Language，数据操作语言，我们用它操作和数据库相关的记录，比如增加、删除、修改数据表中的记录。</li><li><strong>DCL</strong>，英文叫做 Data Control Language，数据控制语言，我们用它来定义访问权限和安全级别。</li><li><strong>DQL</strong>，英文叫做 Data Query Language，数据查询语言，我们用它查询想要的记录，它是 SQL 语言的重中之重。在实际的业务中，我们绝大多数情况下都是在和查询打交道，因此学会编写正确且高效的查询语句，是学习的重点。</li></ul><h3 id="_02-丨-dbms-的前世今生" tabindex="-1"><a class="header-anchor" href="#_02-丨-dbms-的前世今生" aria-hidden="true">#</a> 02 丨 DBMS 的前世今生</h3><p>DB、DBS 和 DBMS 的区别：</p><ul><li>DBMS 的英文全称是 DataBase Management System，数据库管理系统，实际上它可以对多个数据库进行管理，所以你可以理解为 DBMS = 多个数据库（DB） + 管理程序。</li><li>DB 的英文是 DataBase，也就是数据库。数据库是存储数据的集合，你可以把它理解为多个数据表。</li><li>DBS 的英文是 DataBase System，数据库系统。它是更大的概念，包括了数据库、数据库管理系统以及数据库管理人员 DBA。</li></ul><p>NoSql 不同时期的释义</p><ul><li>1970：NoSQL = We have no SQL</li><li>1980：NoSQL = Know SQL</li><li>2000：NoSQL = No SQL!</li><li>2005：NoSQL = Not only SQL</li><li>2013：NoSQL = No, SQL!</li></ul><h3 id="_03-丨学会用数据库的方式思考-sql-是如何执行的" tabindex="-1"><a class="header-anchor" href="#_03-丨学会用数据库的方式思考-sql-是如何执行的" aria-hidden="true">#</a> 03 丨学会用数据库的方式思考 SQL 是如何执行的</h3><h4 id="oracle-中的-sql-是如何执行的" tabindex="-1"><a class="header-anchor" href="#oracle-中的-sql-是如何执行的" aria-hidden="true">#</a> Oracle 中的 SQL 是如何执行的</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220716105947.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><strong>语法检查</strong>：检查 SQL 拼写是否正确，如果不正确，Oracle 会报语法错误。</li><li><strong>语义检查</strong>：检查 SQL 中的访问对象是否存在。比如我们在写 SELECT 语句的时候，列名写错了，系统就会提示错误。语法检查和语义检查的作用是保证 SQL 语句没有错误。</li><li><strong>权限检查</strong>：看用户是否具备访问该数据的权限。</li><li><strong>共享池检查</strong>：共享池（Shared Pool）是一块内存池，最主要的作用是缓存 SQL 语句和该语句的执行计划。Oracle 通过检查共享池是否存在 SQL 语句的执行计划，来判断进行软解析，还是硬解析。那软解析和硬解析又该怎么理解呢？ <ul><li>在共享池中，Oracle 首先对 SQL 语句进行 Hash 运算，然后根据 Hash 值在库缓存（Library Cache）中查找，如果存在 SQL 语句的执行计划，就直接拿来执行，直接进入“执行器”的环节，这就是<strong>软解析</strong>。</li><li>如果没有找到 SQL 语句和执行计划，Oracle 就需要创建解析树进行解析，生成执行计划，进入“优化器”这个步骤，这就是<strong>硬解析</strong>。</li></ul></li><li><strong>优化器</strong>：优化器中就是要进行硬解析，也就是决定怎么做，比如创建解析树，生成执行计划。</li><li><strong>执行器</strong>：当有了解析树和执行计划之后，就知道了 SQL 该怎么被执行，这样就可以在执行器中执行语句了。</li></ol><p>共享池是 Oracle 中的术语，包括了库缓存，数据字典缓冲区等。它主要缓存 SQL 语句和执行计划。</p><p>而数据字典缓冲区存储的是 Oracle 中的对象定义，比如表、视图、索引等对象。当对 SQL 语句进行解析的时候，如果需要相关的数据，会从数据字典缓冲区中提取。</p><h4 id="mysql-中的-sql-是如何执行的" tabindex="-1"><a class="header-anchor" href="#mysql-中的-sql-是如何执行的" aria-hidden="true">#</a> MySQL 中的 SQL 是如何执行的</h4><p>MySQL 是典型的 C/S 架构，即 Client/Server 架构，服务器端程序使用的 mysqld。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220716110905.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Mysql 可分为三层：</p><ol><li><strong>连接层</strong>：客户端和服务器端建立连接，客户端发送 SQL 至服务器端；</li><li><strong>SQL 层</strong>：对 SQL 语句进行查询处理；</li><li><strong>存储引擎层</strong>：与数据库文件打交道，负责数据的存储和读取。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220716111103.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>SQL 层的结构</p><ol><li><strong>查询缓存</strong>：Server 如果在查询缓存中发现了这条 SQL 语句，就会直接将结果返回给客户端；如果没有，就进入到解析器阶段。需要说明的是，因为查询缓存往往效率不高，所以在 MySQL8.0 之后就抛弃了这个功能。</li><li><strong>解析器</strong>：在解析器中对 SQL 语句进行语法分析、语义分析。</li><li><strong>优化器</strong>：在优化器中会确定 SQL 语句的执行路径，比如是根据全表检索，还是根据索引来检索等。</li><li><strong>执行器</strong>：在执行之前需要判断该用户是否具备权限，如果具备权限就执行 SQL 查询并返回结果。在 MySQL8.0 以下的版本，如果设置了查询缓存，这时会将查询结果进行缓存。</li></ol><p>与 Oracle 不同的是，MySQL 的存储引擎采用了插件的形式，每个存储引擎都面向一种特定的数据库应用环境。同时开源的 MySQL 还允许开发人员设置自己的存储引擎，下面是一些常见的存储引擎：</p><ol><li>InnoDB 存储引擎：它是 MySQL 5.5 版本之后默认的存储引擎，最大的特点是支持事务、行级锁定、外键约束等。</li><li>MyISAM 存储引擎：在 MySQL 5.5 版本之前是默认的存储引擎，不支持事务，也不支持外键，最大的特点是速度快，占用资源少。</li><li>Memory 存储引擎：使用系统内存作为存储介质，以便得到更快的响应速度。不过如果 mysqld 进程崩溃，则会导致所有的数据丢失，因此我们只有当数据是临时的情况下才使用 Memory 存储引擎。</li><li>NDB 存储引擎：也叫做 NDB Cluster 存储引擎，主要用于 MySQL Cluster 分布式集群环境，类似于 Oracle 的 RAC 集群。</li><li>Archive 存储引擎：它有很好的压缩机制，用于文件归档，在请求写入时会进行压缩，所以也经常用来做仓库。</li></ol><h3 id="_04-丨使用-ddl-创建数据库-数据表时需要注意什么" tabindex="-1"><a class="header-anchor" href="#_04-丨使用-ddl-创建数据库-数据表时需要注意什么" aria-hidden="true">#</a> 04 丨使用 DDL 创建数据库&amp;数据表时需要注意什么？</h3><p>DDL 的核心指令是 <code>CREATE</code>、<code>ALTER</code>、<code>DROP</code>。</p><p>设计数据表的原则</p><ul><li><strong>数据表的个数越少越好</strong> - RDBMS 的核心在于对实体和联系的定义，也就是 E-R 图（Entity Relationship Diagram），数据表越少，证明实体和联系设计得越简洁，既方便理解又方便操作。</li><li><strong>数据表中的字段个数越少越好</strong> - 字段个数越多，数据冗余的可能性越大。设置字段个数少的前提是各个字段相互独立，而不是某个字段的取值可以由其他字段计算出来。当然字段个数少是相对的，我们通常会在数据冗余和检索效率中进行平衡。</li><li><strong>数据表中联合主键的字段个数越少越好</strong> - 设置主键是为了确定唯一性，当一个字段无法确定唯一性的时候，就需要采用联合主键的方式（也就是用多个字段来定义一个主键）。联合主键中的字段越多，占用的索引空间越大，不仅会加大理解难度，还会增加运行时间和索引空间，因此联合主键的字段个数越少越好。</li><li><strong>使用主键和外键越多越好</strong> - 数据库的设计实际上就是定义各种表，以及各种字段之间的关系。这些关系越多，证明这些实体之间的冗余度越低，利用度越高。这样做的好处在于不仅保证了数据表之间的独立性，还能提升相互之间的关联使用率。——不同意</li></ul><h3 id="_05-丨检索数据-你还在-select-么" tabindex="-1"><a class="header-anchor" href="#_05-丨检索数据-你还在-select-么" aria-hidden="true">#</a> 05 丨检索数据：你还在 SELECT 么？</h3><p>SELECT 的作用是从一个表或多个表中检索出想要的数据行。</p><ul><li><code>SELECT</code> 语句用于从数据库中查询数据。</li><li><code>DISTINCT</code> 用于返回唯一不同的值。它作用于所有列，也就是说所有列的值都相同才算相同。</li><li><code>LIMIT</code> 限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。 <ul><li><code>ASC</code> ：升序（默认）</li><li><code>DESC</code> ：降序</li></ul></li></ul><p>查询单列</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询多列</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> continent<span class="token punctuation">,</span> region <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询所有列</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询不同的值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">distinct</span><span class="token punctuation">(</span>continent<span class="token punctuation">)</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>限制查询结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 返回前 5 行</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country <span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country <span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">-- 返回第 3 ~ 5 行</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country <span class="token keyword">LIMIT</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_06-丨数据过滤-sql-数据过滤都有哪些方法" tabindex="-1"><a class="header-anchor" href="#_06-丨数据过滤-sql-数据过滤都有哪些方法" aria-hidden="true">#</a> 06 丨数据过滤：SQL 数据过滤都有哪些方法？</h3><h4 id="比较操作符" tabindex="-1"><a class="header-anchor" href="#比较操作符" aria-hidden="true">#</a> 比较操作符</h4><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>=</code></td><td>等于</td></tr><tr><td><code>&lt;&gt;</code></td><td>不等于。注释：在 SQL 的一些版本中，该操作符可被写成 !=</td></tr><tr><td><code>&gt;</code></td><td>大于</td></tr><tr><td><code>&lt;</code></td><td>小于</td></tr><tr><td><code>&gt;=</code></td><td>大于等于</td></tr><tr><td><code>&lt;=</code></td><td>小于等于</td></tr></tbody></table><h4 id="范围操作符" tabindex="-1"><a class="header-anchor" href="#范围操作符" aria-hidden="true">#</a> 范围操作符</h4><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>BETWEEN</code></td><td>在某个范围内</td></tr><tr><td><code>IN</code></td><td>指定针对某个列的多个可能值</td></tr></tbody></table><h4 id="逻辑操作符" tabindex="-1"><a class="header-anchor" href="#逻辑操作符" aria-hidden="true">#</a> 逻辑操作符</h4><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>AND</code></td><td>并且（与）</td></tr><tr><td><code>OR</code></td><td>或者（或）</td></tr><tr><td><code>NOT</code></td><td>否定（非）</td></tr></tbody></table><h4 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h4><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>LIKE</code></td><td>搜索某种模式</td></tr><tr><td><code>%</code></td><td>表示任意字符出现任意次数</td></tr><tr><td><code>_</code></td><td>表示任意字符出现一次</td></tr><tr><td><code>[]</code></td><td>必须匹配指定位置的一个字符</td></tr></tbody></table><h3 id="_07-丨什么是-sql-函数-为什么使用-sql-函数可能会带来问题" tabindex="-1"><a class="header-anchor" href="#_07-丨什么是-sql-函数-为什么使用-sql-函数可能会带来问题" aria-hidden="true">#</a> 07 丨什么是 SQL 函数？为什么使用 SQL 函数可能会带来问题？</h3><ul><li>数学函数</li><li>字符串函数</li><li>日期函数</li><li>转换函数</li><li>聚合函数</li></ul><h3 id="_08-丨什么是-sql-的聚集函数-如何利用它们汇总表的数据" tabindex="-1"><a class="header-anchor" href="#_08-丨什么是-sql-的聚集函数-如何利用它们汇总表的数据" aria-hidden="true">#</a> 08 丨什么是 SQL 的聚集函数，如何利用它们汇总表的数据？</h3><p>聚合函数</p><table><thead><tr><th style="text-align:center;">函 数</th><th style="text-align:center;">说 明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>AVG()</code></td><td style="text-align:center;">返回某列的平均值</td></tr><tr><td style="text-align:center;"><code>COUNT()</code></td><td style="text-align:center;">返回某列的行数</td></tr><tr><td style="text-align:center;"><code>MAX()</code></td><td style="text-align:center;">返回某列的最大值</td></tr><tr><td style="text-align:center;"><code>MIN()</code></td><td style="text-align:center;">返回某列的最小值</td></tr><tr><td style="text-align:center;"><code>SUM()</code></td><td style="text-align:center;">返回某列值之和</td></tr></tbody></table><h3 id="_09-丨子查询-子查询的种类都有哪些-如何提高子查询的性能" tabindex="-1"><a class="header-anchor" href="#_09-丨子查询-子查询的种类都有哪些-如何提高子查询的性能" aria-hidden="true">#</a> 09 丨子查询：子查询的种类都有哪些，如何提高子查询的性能？</h3><p>EXISTS、IN、ANY、ALL、SOME</p><h3 id="_10-丨常用的-sql-标准有哪些-在-sql92-中是如何使用连接的" tabindex="-1"><a class="header-anchor" href="#_10-丨常用的-sql-标准有哪些-在-sql92-中是如何使用连接的" aria-hidden="true">#</a> 10 丨常用的 SQL 标准有哪些，在 SQL92 中是如何使用连接的？</h3><p>内连接（INNER JOIN）</p><p>自连接（<code>=</code>）</p><p>自然连接（NATURAL JOIN）</p><p>外连接（OUTER JOIN）</p><p>左连接（LEFT JOIN）</p><p>右连接（RIGHT JOIN）</p><h3 id="_11-丨-sql99-是如何使用连接的-与-sql92-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_11-丨-sql99-是如何使用连接的-与-sql92-的区别是什么" aria-hidden="true">#</a> 11 丨 SQL99 是如何使用连接的，与 SQL92 的区别是什么？</h3><h3 id="_12-丨视图在-sql-中的作用是什么-它是怎样工作的" tabindex="-1"><a class="header-anchor" href="#_12-丨视图在-sql-中的作用是什么-它是怎样工作的" aria-hidden="true">#</a> 12 丨视图在 SQL 中的作用是什么，它是怎样工作的？</h3><blockquote><p>视图是基于 SQL 语句的结果集的可视化的表。<strong>视图是虚拟的表，本身不存储数据，也就不能对其进行索引操作</strong>。对视图的操作和对普通表的操作一样。</p></blockquote><p>视图的作用：</p><ul><li>简化复杂的 SQL 操作，比如复杂的连接。</li><li>只使用实际表的一部分数据。</li><li>通过只给用户访问视图的权限，保证数据的安全性。</li><li>更改数据格式和表示。</li></ul><h3 id="_13-丨什么是存储过程-在实际项目中用得多么" tabindex="-1"><a class="header-anchor" href="#_13-丨什么是存储过程-在实际项目中用得多么" aria-hidden="true">#</a> 13 丨什么是存储过程，在实际项目中用得多么？</h3><p>存储过程的英文是 Stored Procedure。它可以视为一组 SQL 语句的批处理。一旦存储过程被创建出来，使用它就像使用函数一样简单，我们直接通过调用存储过程名即可。</p><p>存储过程的优点：</p><ul><li><strong>执行效率高</strong>：一次编译多次使用。</li><li><strong>安全性强</strong>：在设定存储过程的时候可以设置对用户的使用权限，这样就和视图一样具有较强的安全性。</li><li><strong>可复用</strong>：将代码封装，可以提高代码复用。</li><li><strong>性能好</strong><ul><li>由于是预先编译，因此具有很高的性能。</li><li>一个存储过程替代大量 T_SQL 语句 ，可以降低网络通信量，提高通信速率。</li></ul></li></ul><p>存储过程的缺点：</p><ul><li><strong>可移植性差</strong>：存储过程不能跨数据库移植。由于不同数据库的存储过程语法几乎都不一样，十分难以维护（不通用）。</li><li><strong>调试困难</strong>：只有少数 DBMS 支持存储过程的调试。对于复杂的存储过程来说，开发和维护都不容易。</li><li><strong>版本管理困难</strong>：比如数据表索引发生变化了，可能会导致存储过程失效。我们在开发软件的时候往往需要进行版本管理，但是存储过程本身没有版本控制，版本迭代更新的时候很麻烦。</li><li><strong>不适合高并发的场景</strong>：高并发的场景需要减少数据库的压力，有时数据库会采用分库分表的方式，而且对可扩展性要求很高，在这种情况下，存储过程会变得难以维护，增加数据库的压力，显然就不适用了。</li></ul><blockquote><p><em>综上，存储过程的优缺点都非常突出，是否使用一定要慎重，需要根据具体应用场景来权衡</em>。</p></blockquote><h3 id="_14-丨什么是事务处理-如何使用-commit-和-rollback-进行操作" tabindex="-1"><a class="header-anchor" href="#_14-丨什么是事务处理-如何使用-commit-和-rollback-进行操作" aria-hidden="true">#</a> 14 丨什么是事务处理，如何使用 COMMIT 和 ROLLBACK 进行操作？</h3><p>ACID：</p><ol><li>A，也就是原子性（Atomicity）。原子的概念就是不可分割，你可以把它理解为组成物质的基本单位，也是我们进行数据处理操作的基本单位。</li><li>C，就是一致性（Consistency）。一致性指的就是数据库在进行事务操作后，会由原来的一致状态，变成另一种一致的状态。也就是说当事务提交后，或者当事务发生回滚后，数据库的完整性约束不能被破坏。</li><li>I，就是隔离性（Isolation）。它指的是每个事务都是彼此独立的，不会受到其他事务的执行影响。也就是说一个事务在提交之前，对其他事务都是不可见的。</li><li>最后一个 D，指的是持久性（Durability）。事务提交之后对数据的修改是持久性的，即使在系统出故障的情况下，比如系统崩溃或者存储介质发生故障，数据的修改依然是有效的。因为当事务完成，数据库的日志就会被更新，这时可以通过日志，让系统恢复到最后一次成功的更新状态。</li></ol><p>事务的控制语句：</p><ol><li>START TRANSACTION 或者 BEGIN，作用是显式开启一个事务。</li><li>COMMIT：提交事务。当提交事务后，对数据库的修改是永久性的。</li><li>ROLLBACK 或者 ROLLBACK TO [SAVEPOINT]，意为回滚事务。意思是撤销正在进行的所有没有提交的修改，或者将事务回滚到某个保存点。</li><li>SAVEPOINT：在事务中创建保存点，方便后续针对保存点进行回滚。一个事务中可以存在多个保存点。</li><li>RELEASE SAVEPOINT：删除某个保存点。</li><li>SET TRANSACTION，设置事务的隔离级别。</li></ol><h3 id="_15-丨初识事务隔离-隔离的级别有哪些-它们都解决了哪些异常问题" tabindex="-1"><a class="header-anchor" href="#_15-丨初识事务隔离-隔离的级别有哪些-它们都解决了哪些异常问题" aria-hidden="true">#</a> 15 丨初识事务隔离：隔离的级别有哪些，它们都解决了哪些异常问题？</h3><p>事务隔离级别从低到高分别是：读未提交（READ UNCOMMITTED ）、读已提交（READ COMMITTED）、可重复读（REPEATABLE READ）和可串行化（SERIALIZABLE）。</p><h3 id="_16-丨游标-当我们需要逐条处理数据时-该怎么做" tabindex="-1"><a class="header-anchor" href="#_16-丨游标-当我们需要逐条处理数据时-该怎么做" aria-hidden="true">#</a> 16 丨游标：当我们需要逐条处理数据时，该怎么做？</h3><h3 id="_17-丨如何使用-python-操作-mysql" tabindex="-1"><a class="header-anchor" href="#_17-丨如何使用-python-操作-mysql" aria-hidden="true">#</a> 17 丨如何使用 Python 操作 MySQL？</h3><p>略</p><h3 id="_18-丨-sqlalchemy-如何使用-pythonorm-框架来操作-mysql" tabindex="-1"><a class="header-anchor" href="#_18-丨-sqlalchemy-如何使用-pythonorm-框架来操作-mysql" aria-hidden="true">#</a> 18 丨 SQLAlchemy：如何使用 PythonORM 框架来操作 MySQL？</h3><p>略</p><h3 id="_19-丨基础篇总结-如何理解查询优化、通配符以及存储过程" tabindex="-1"><a class="header-anchor" href="#_19-丨基础篇总结-如何理解查询优化、通配符以及存储过程" aria-hidden="true">#</a> 19 丨基础篇总结：如何理解查询优化、通配符以及存储过程？</h3><h2 id="第二章-sql-性能优化篇" tabindex="-1"><a class="header-anchor" href="#第二章-sql-性能优化篇" aria-hidden="true">#</a> 第二章：SQL 性能优化篇</h2><h3 id="_20-丨当我们思考数据库调优的时候-都有哪些维度可以选择" tabindex="-1"><a class="header-anchor" href="#_20-丨当我们思考数据库调优的时候-都有哪些维度可以选择" aria-hidden="true">#</a> 20 丨当我们思考数据库调优的时候，都有哪些维度可以选择？</h3><p>我的理解：</p><ul><li>选择合适数据库</li><li>配置优化</li><li>硬件优化</li><li>优化表设计</li><li>优化查询</li><li>使用缓存</li><li>读写分离+分库分表</li></ul><h3 id="_21-丨范式设计-数据表的范式有哪些-3nf-指的是什么" tabindex="-1"><a class="header-anchor" href="#_21-丨范式设计-数据表的范式有哪些-3nf-指的是什么" aria-hidden="true">#</a> 21 丨范式设计：数据表的范式有哪些，3NF 指的是什么？</h3><p>范式定义：</p><ul><li><strong>1NF</strong>：指的是数据库表中的任何属性都是原子性的，不可再分。</li><li><strong>2NF</strong>：指的数据表里的非主属性都要和这个数据表的候选键有完全依赖关系。</li><li><strong>3NF</strong>：在满足 2NF 的同时，对任何非主属性都不传递依赖于候选键。</li><li><strong>BCNF</strong>：在 3NF 的基础上消除了主属性对候选键的部分依赖或者传递依赖关系。</li></ul><p><strong>范式化的目标是尽力减少冗余列，节省空间</strong>。</p><h3 id="_22-丨反范式设计-3nf-有什么不足-为什么有时候需要反范式设计" tabindex="-1"><a class="header-anchor" href="#_22-丨反范式设计-3nf-有什么不足-为什么有时候需要反范式设计" aria-hidden="true">#</a> 22 丨反范式设计：3NF 有什么不足，为什么有时候需要反范式设计？</h3><p><strong>反范式化的目标是适当增加冗余列，以避免关联查询</strong>。</p><p>范式化优点</p><ul><li>更节省空间</li><li>更新操作更快</li><li>更少需要 <code>DISTINCT</code> 或 <code>GROUP BY</code> 语句</li></ul><p>范式化缺点</p><ul><li>增加了关联查询，而关联查询代价很高</li></ul><h3 id="_23-丨索引的概览-用还是不用索引-这是一个问题" tabindex="-1"><a class="header-anchor" href="#_23-丨索引的概览-用还是不用索引-这是一个问题" aria-hidden="true">#</a> 23 丨索引的概览：用还是不用索引，这是一个问题</h3><blockquote><p>索引的优缺点</p></blockquote><p><strong>索引的优点</strong></p><ul><li>大大减少了服务器需要扫描的数据量</li><li>可以帮助服务器避免排序和临时表</li><li>可以将随机 I/O 变为顺序 I/O</li></ul><p><strong>索引的缺点</strong></p><ul><li>创建和维护索引要耗费时间，这会随着数据量的增加而增加。</li><li>占用额外物理空间</li><li>写操作时很可能需要更新索引，导致数据库的写操作性能降低</li></ul><blockquote><p>索引的适用场景</p></blockquote><p><strong>适用场景</strong></p><ul><li>频繁读操作（SELECT）</li><li>表的数据量比较大</li><li>列名经常出现在 WHERE 或连接（JOIN）条件中</li></ul><p><strong>不适用场景</strong></p><ul><li>频繁写操作（INSERT/UPDATE/DELETE）</li><li>列名不经常出现在 WHERE 或连接（JOIN）条件中</li><li>索引会经常无法命中，没有意义</li><li>非常小的表（比如不到 1000 行）：简单的全表扫描更高效</li><li>特大型的表：索引的代价很高昂，可以用分区或 Nosql</li></ul><h3 id="_24-丨索引的原理-我们为什么用-b-树来做索引" tabindex="-1"><a class="header-anchor" href="#_24-丨索引的原理-我们为什么用-b-树来做索引" aria-hidden="true">#</a> 24 丨索引的原理：我们为什么用 B+树来做索引？</h3><p>磁盘的 I/O 操作次数对索引的使用效率至关重要。虽然传统的二叉树数据结构查找数据的效率高，但很容易增加磁盘 I/O 操作的次数，影响索引使用的效率。因此在构造索引的时候，我们更倾向于采用“矮胖”的数据结构。</p><p>B 树和 B+ 树都可以作为索引的数据结构，在 MySQL 中采用的是 B+ 树，B+ 树在查询性能上更稳定，在磁盘页大小相同的情况下，树的构造更加矮胖，所需要进行的磁盘 I/O 次数更少，更适合进行关键字的范围查询。</p><h3 id="_25-丨-hash-索引的底层原理是什么" tabindex="-1"><a class="header-anchor" href="#_25-丨-hash-索引的底层原理是什么" aria-hidden="true">#</a> 25 丨 Hash 索引的底层原理是什么？</h3><p>Mysql 中，只有 Memory 存储引擎显示支持哈希索引。</p><p>✔️️️️️ 哈希索引的<strong>优点</strong>：</p><ul><li>因为索引数据结构紧凑，所以<strong>查询速度非常快</strong>。</li></ul><p>❌ 哈希索引的<strong>缺点</strong>：</p><ul><li><strong>只支持等值比较查询</strong> - 包括 <code>=</code>、<code>IN()</code>、<code>&lt;=&gt;</code>。 <ul><li><strong>不支持范围查询</strong>，如 <code>WHERE price &gt; 100</code>。</li><li><strong>不支持模糊查询</strong>，如 <code>%</code> 开头。</li></ul></li><li><strong>无法用于排序</strong> - 因为 Hash 索引指向的数据是无序的，因此无法起到排序优化的作用。</li><li><strong>不支持联合索引的最左侧原则</strong> - 对于联合索引来说，Hash 索引在计算 Hash 值的时候是将索引键合并后再一起计算 Hash 值，所以不会针对每个索引单独计算 Hash 值。因此如果用到联合索引的一个或者几个索引时，联合索引无法被利用。例如：在数据列 (A,B) 上建立哈希索引，如果查询只有数据列 A，无法使用该索引。</li><li><strong>不能用索引中的值来避免读取行</strong> - 因为哈希索引只包含哈希值和行指针，不存储字段，所以不能使用索引中的值来避免读取行。不过，访问内存中的行的速度很快，所以大部分情况下这一点对性能影响不大。</li><li>哈希索引有<strong>可能出现哈希冲突</strong><ul><li>出现哈希冲突时，必须遍历链表中所有的行指针，逐行比较，直到找到符合条件的行。</li><li>如果哈希冲突多的话，维护索引的代价会很高。</li></ul></li></ul><blockquote><p>提示：因为种种限制，所以哈希索引只适用于特定的场合。而一旦使用哈希索引，则它带来的性能提升会非常显著。</p></blockquote><h3 id="_26-丨索引的使用原则-如何通过索引让-sql-查询效率最大化" tabindex="-1"><a class="header-anchor" href="#_26-丨索引的使用原则-如何通过索引让-sql-查询效率最大化" aria-hidden="true">#</a> 26 丨索引的使用原则：如何通过索引让 SQL 查询效率最大化？</h3><p>✔️️️️ 什么情况<strong>适用</strong>索引？</p><ul><li><strong>字段的数值有唯一性的限制</strong>，如用户名。</li><li><strong>频繁作为 <code>WHERE</code> 条件或 <code>JOIN</code> 条件的字段，尤其在数据表大的情况下</strong></li><li><strong>频繁用于 <code>GROUP BY</code> 或 <code>ORDER BY</code> 的字段</strong>。将该字段作为索引，查询时就无需再排序了，因为 B+ 树</li><li><strong>DISTINCT 字段需要创建索引</strong>。</li></ul><p>❌ 什么情况<strong>不适用</strong>索引？</p><ul><li><strong>频繁写操作</strong>（ <code>INSERT</code>/<code>UPDATE</code>/<code>DELETE</code> ），也就意味着需要更新索引。</li><li><strong>列名不经常出现在 <code>WHERE</code> 或连接（<code>JOIN</code>）条件中</strong>，也就意味着索引会经常无法命中，没有意义，还增加空间开销。</li><li><strong>非常小的表</strong>，对于非常小的表，大部分情况下简单的全表扫描更高效。</li><li><strong>特大型的表</strong>，建立和使用索引的代价将随之增长。可以考虑使用分区技术或 Nosql。</li></ul><p>索引失效的场景：</p><ul><li>对索引使用左模糊匹配</li><li>对索引使用表达式或函数</li><li>对索引隐式类型转换</li><li>联合索引不遵循最左匹配原则</li><li>索引列判空</li><li>WHERE 子句中的 OR 前后条件存在非索引列</li></ul><h3 id="_27-丨从数据页的角度理解-b-树查询" tabindex="-1"><a class="header-anchor" href="#_27-丨从数据页的角度理解-b-树查询" aria-hidden="true">#</a> 27 丨从数据页的角度理解 B+树查询</h3><p><strong>在数据库中，不论读一行，还是读多行，都是将这些行所在的页进行加载。也就是说，数据库管理存储空间的基本单位是页（Page）。</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720055715.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一个表空间包括了一个或多个段，一个段包括了一个或多个区，一个区包括了多个页，而一个页中可以有多行记录：</p><ul><li><p>页是数据库存储的最小单位。</p></li><li><p>区（Extent）是比页大一级的存储结构，在 InnoDB 存储引擎中，一个区会分配 64 个连续的页。因为 InnoDB 中的页大小默认是 16KB，所以一个区的大小是 64*16KB=1MB。</p></li><li><p>段（Segment）由一个或多个区组成，区在文件系统是一个连续分配的空间（在 InnoDB 中是连续的 64 个页），不过在段中不要求区与区之间是相邻的。段是数据库中的分配单位，不同类型的数据库对象以不同的段形式存在。当我们创建数据表、索引的时候，就会相应创建对应的段，比如创建一张表时会创建一个表段，创建一个索引时会创建一个索引段。</p></li><li><p>表空间（Tablespace）是一个逻辑容器，表空间存储的对象是段，在一个表空间中可以有一个或多个段，但是一个段只能属于一个表空间。数据库由一个或多个表空间组成，表空间从管理上可以划分为系统表空间、用户表空间、撤销表空间、临时表空间等。</p></li></ul><h3 id="_28-丨从磁盘-i-o-的角度理解-sql-查询的成本" tabindex="-1"><a class="header-anchor" href="#_28-丨从磁盘-i-o-的角度理解-sql-查询的成本" aria-hidden="true">#</a> 28 丨从磁盘 I/O 的角度理解 SQL 查询的成本</h3><p>磁盘 I/O 耗时远大于内存，因此数据库会采用缓冲池的方式提升页的查找效率。</p><p>SQL 查询是一个动态的过程，从页加载的角度来看：</p><ol><li>位置决定效率。如果页就在数据库缓冲池中，那么效率是最高的，否则还需要从内存或者磁盘中进行读取，当然针对单个页的读取来说，如果页存在于内存中，会比在磁盘中读取效率高很多。</li><li>批量决定效率。如果我们从磁盘中对单一页进行随机读，那么效率是很低的（差不多 10ms），而采用顺序读取的方式，批量对页进行读取，平均一页的读取效率就会提升很多，甚至要快于单个页面在内存中的随机读取。</li></ol><h3 id="_29-丨为什么没有理想的索引" tabindex="-1"><a class="header-anchor" href="#_29-丨为什么没有理想的索引" aria-hidden="true">#</a> 29 丨为什么没有理想的索引？</h3><p>略</p><h3 id="_30-丨锁-悲观锁和乐观锁是什么" tabindex="-1"><a class="header-anchor" href="#_30-丨锁-悲观锁和乐观锁是什么" aria-hidden="true">#</a> 30 丨锁：悲观锁和乐观锁是什么？</h3><p>基于加锁方式分类，Mysql 可以分为悲观锁和乐观锁。</p><ul><li><strong>悲观锁</strong> - 假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作 <ul><li>在查询完数据的时候就把事务锁起来，直到提交事务（<code>COMMIT</code>）</li><li>实现方式：<strong>使用数据库中的锁机制</strong>。</li></ul></li><li><strong>乐观锁</strong> - 假设最好的情况——每次访问数据时，都假设数据不会被其他线程修改，不必加锁。只在更新的时候，判断一下在此期间是否有其他线程更新该数据。 <ul><li>实现方式：<strong>更新数据时，先使用版本号机制或 CAS 算法检查数据是否被修改</strong>。</li></ul></li></ul><h3 id="_31-丨为什么大部分-rdbms-都会支持-mvcc" tabindex="-1"><a class="header-anchor" href="#_31-丨为什么大部分-rdbms-都会支持-mvcc" aria-hidden="true">#</a> 31 丨为什么大部分 RDBMS 都会支持 MVCC？</h3><p>MVCC 的核心就是 Undo Log+ Read View</p><ul><li>Undo Log 保存数据的历史版本，实现多版本的管理；</li><li>通过 Read View 原则来决定数据是否显示；</li><li>时针对不同的隔离级别，Read View 的生成策略不同，也就实现了不同的隔离级别</li></ul><h3 id="_32-丨查询优化器是如何工作的" tabindex="-1"><a class="header-anchor" href="#_32-丨查询优化器是如何工作的" aria-hidden="true">#</a> 32 丨查询优化器是如何工作的？</h3><p>MySQL 整个查询执行过程，总的来说分为 6 个步骤，分别对应 6 个组件：</p><ol><li><strong>连接器</strong> - 客户端和 MySQL 服务器建立连接；连接器负责跟客户端建立连接、获取权限、维持和管理连接。</li><li><strong>查询缓存</strong> - MySQL 服务器首先检查查询缓存，如果命中缓存，则立刻返回结果。否则进入下一阶段。</li><li><strong>分析器</strong> - MySQL 服务器进行 SQL 分析：语法分析、词法分析。</li><li><strong>优化器</strong> - MySQL 服务器用优化器生成对应的执行计划。</li><li><strong>执行器</strong> - MySQL 服务器根据执行计划，调用存储引擎的 API 来执行查询。</li><li><strong>返回结果</strong> - MySQL 服务器将结果返回给客户端，同时缓存查询结果。</li></ol><h3 id="_33-丨如何使用性能分析工具定位-sql-执行慢的原因" tabindex="-1"><a class="header-anchor" href="#_33-丨如何使用性能分析工具定位-sql-执行慢的原因" aria-hidden="true">#</a> 33 丨如何使用性能分析工具定位 SQL 执行慢的原因？</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720093823.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_34-丨答疑篇-关于索引以及缓冲池的一些解惑" tabindex="-1"><a class="header-anchor" href="#_34-丨答疑篇-关于索引以及缓冲池的一些解惑" aria-hidden="true">#</a> 34 丨答疑篇：关于索引以及缓冲池的一些解惑</h3><h3 id="_35-丨数据库主从同步的作用是什么-如何解决数据不一致问题" tabindex="-1"><a class="header-anchor" href="#_35-丨数据库主从同步的作用是什么-如何解决数据不一致问题" aria-hidden="true">#</a> 35 丨数据库主从同步的作用是什么，如何解决数据不一致问题？</h3><p>Mysql 支持两种复制：基于行的复制和基于语句的复制。</p><p>这两种方式都是在主库上记录二进制日志，然后在从库重放日志的方式来实现异步的数据复制。这意味着：复制过程存在时延，这段时间内，主从数据可能不一致。</p><p>主要涉及三个线程：binlog 线程、I/O 线程和 SQL 线程。</p><ul><li><strong>binlog 线程</strong> ：负责将主服务器上的数据更改写入二进制文件（binlog）中。</li><li><strong>I/O 线程</strong> ：负责从主服务器上读取二进制日志文件，并写入从服务器的中继日志中。</li><li><strong>SQL 线程</strong> ：负责读取中继日志并重放其中的 SQL 语句。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/mysql/master-slave.png"></div><p>如何解决主从同步时的数据一致性问题？</p><p><strong>异步复制</strong></p><p>异步模式就是客户端提交 COMMIT 之后不需要等从库返回任何结果，而是直接将结果返回给客户端，这样做的好处是不会影响主库写的效率，但可能会存在主库宕机，而 Binlog 还没有同步到从库的情况，也就是此时的主库和从库数据不一致。这时候从从库中选择一个作为新主，那么新主则可能缺少原来主服务器中已提交的事务。所以，这种复制模式下的数据一致性是最弱的。</p><p><strong>半异步复制</strong></p><p>原理是在客户端提交 COMMIT 之后不直接将结果返回给客户端，而是等待至少有一个从库接收到了 Binlog，并且写入到中继日志中，再返回给客户端。这样做的好处就是提高了数据的一致性，当然相比于异步复制来说，至少多增加了一个网络连接的延迟，降低了主库写的效率。——其实是一种两阶段提交的思想。</p><p><strong>组复制</strong></p><p>这种复制技术是基于 Paxos 的状态机复制。</p><p>将多个节点共同组成一个复制组，在执行读写（RW）事务的时候，需要通过一致性协议层（Consensus 层）的同意，也就是读写事务想要进行提交，必须要经过组里“大多数人”（对应 Node 节点）的同意，大多数指的是同意的节点数量需要大于（N/2+1），这样才可以进行提交，而不是原发起方一个说了算。而针对只读（RO）事务则不需要经过组内同意，直接 COMMIT 即可。</p><p>在一个复制组内有多个节点组成，它们各自维护了自己的数据副本，并且在一致性协议层实现了原子消息和全局有序消息，从而保证组内数据的一致性。</p><h3 id="_36-丨数据库没有备份-没有使用-binlog-的情况下-如何恢复数据" tabindex="-1"><a class="header-anchor" href="#_36-丨数据库没有备份-没有使用-binlog-的情况下-如何恢复数据" aria-hidden="true">#</a> 36 丨数据库没有备份，没有使用 Binlog 的情况下，如何恢复数据？</h3><h3 id="_37-丨-sql-注入-你的-sql-是如何被注入的" tabindex="-1"><a class="header-anchor" href="#_37-丨-sql-注入-你的-sql-是如何被注入的" aria-hidden="true">#</a> 37 丨 SQL 注入：你的 SQL 是如何被注入的？</h3><p><strong>SQL 注入攻击（SQL injection）</strong>，是发生于应用程序之数据层的安全漏洞。简而言之，是在输入的字符串之中注入 SQL 指令，在设计不良的程序当中忽略了检查，那么这些注入进去的指令就会被数据库服务器误认为是正常的 SQL 指令而运行，因此遭到破坏或是入侵。</p><p>攻击示例：</p><p>考虑以下简单的登录表单：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POST<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Username: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Password: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>登陆<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的处理里面的 SQL 可能是这样的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>username:<span class="token operator">=</span>r<span class="token punctuation">.</span>Form<span class="token punctuation">.</span>Get<span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
password:<span class="token operator">=</span>r<span class="token punctuation">.</span>Form<span class="token punctuation">.</span>Get<span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM user WHERE username=&#39;&quot;</span><span class="token operator">+</span>username<span class="token operator">+</span><span class="token string">&quot;&#39; AND password=&#39;&quot;</span><span class="token operator">+</span>password<span class="token operator">+</span><span class="token string">&quot;&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户的输入的用户名如下，密码任意</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>myuser<span class="token string">&#39; or &#39;</span>foo<span class="token string">&#39; = &#39;</span>foo&#39; <span class="token comment">--</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么我们的 SQL 变成了如下所示：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span> <span class="token keyword">WHERE</span> username<span class="token operator">=</span><span class="token string">&#39;myuser&#39;</span> <span class="token operator">or</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token comment">--&#39;&#39; AND password=&#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 SQL 里面 <code>--</code> 是注释标记，所以查询语句会在此中断。这就让攻击者在不知道任何合法用户名和密码的情况下成功登录了。</p><p>对于 MSSQL 还有更加危险的一种 SQL 注入，就是控制系统，下面这个可怕的例子将演示如何在某些版本的 MSSQL 数据库上执行系统命令。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM products WHERE name LIKE &#39;%&quot;</span><span class="token operator">+</span>prod<span class="token operator">+</span><span class="token string">&quot;%&#39;&quot;</span>
Db<span class="token punctuation">.</span><span class="token keyword">Exec</span><span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果攻击提交 <code>a%&#39; exec master..xp_cmdshell &#39;net user test testpass /ADD&#39; --</code> 作为变量 prod 的值，那么 sql 将会变成</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM products WHERE name LIKE &#39;%a%&#39; exec master..xp_cmdshell &#39;net user test testpass /ADD&#39;--%&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MSSQL 服务器会执行这条 SQL 语句，包括它后面那个用于向系统添加新用户的命令。如果这个程序是以 sa 运行而 MSSQLSERVER 服务又有足够的权限的话，攻击者就可以获得一个系统帐号来访问主机了。</p><p>虽然以上的例子是针对某一特定的数据库系统的，但是这并不代表不能对其它数据库系统实施类似的攻击。针对这种安全漏洞，只要使用不同方法，各种数据库都有可能遭殃。</p><blockquote><p>攻击手段和目的</p></blockquote><ul><li>数据表中的数据外泄，例如个人机密数据，账户数据，密码等。</li><li>数据结构被黑客探知，得以做进一步攻击（例如 <code>SELECT * FROM sys.tables</code>）。</li><li>数据库服务器被攻击，系统管理员账户被窜改（例如 <code>ALTER LOGIN sa WITH PASSWORD=&#39;xxxxxx&#39;</code>）。</li><li>获取系统较高权限后，有可能得以在网页加入恶意链接、恶意代码以及 XSS 等。</li><li>经由数据库服务器提供的操作系统支持，让黑客得以修改或控制操作系统（例如 xp_cmdshell &quot;net stop iisadmin&quot;可停止服务器的 IIS 服务）。</li><li>破坏硬盘数据，瘫痪全系统（例如 xp_cmdshell &quot;FORMAT C:&quot;）。</li></ul><blockquote><p>应对手段</p></blockquote><ul><li><strong>使用参数化查询</strong> - 建议使用数据库提供的参数化查询接口，参数化的语句使用参数而不是将用户输入变量嵌入到 SQL 语句中，即不要直接拼接 SQL 语句。例如使用 database/sql 里面的查询函数 <code>Prepare</code> 和 <code>Query</code> ，或者 <code>Exec(query string, args ...interface{})</code>。</li><li><strong>单引号转换</strong> - 在组合 SQL 字符串时，先针对所传入的参数进行字符替换（将单引号字符替换为连续 2 个单引号字符）。</li></ul><h2 id="第三章-认识-dbms" tabindex="-1"><a class="header-anchor" href="#第三章-认识-dbms" aria-hidden="true">#</a> 第三章：认识 DBMS</h2><blockquote><p>内容对我意义不大，略</p></blockquote><h3 id="_38-丨如何在-excel-中使用-sql-语言" tabindex="-1"><a class="header-anchor" href="#_38-丨如何在-excel-中使用-sql-语言" aria-hidden="true">#</a> 38 丨如何在 Excel 中使用 SQL 语言？</h3><h3 id="_39-丨-websql-如何在-h5-中存储一个本地数据库" tabindex="-1"><a class="header-anchor" href="#_39-丨-websql-如何在-h5-中存储一个本地数据库" aria-hidden="true">#</a> 39 丨 WebSQL：如何在 H5 中存储一个本地数据库？</h3><h3 id="_40-丨-sqlite-为什么微信用-sqlite-存储聊天记录" tabindex="-1"><a class="header-anchor" href="#_40-丨-sqlite-为什么微信用-sqlite-存储聊天记录" aria-hidden="true">#</a> 40 丨 SQLite：为什么微信用 SQLite 存储聊天记录？</h3><h3 id="_41-丨初识-redis-redis-为什么会这么快" tabindex="-1"><a class="header-anchor" href="#_41-丨初识-redis-redis-为什么会这么快" aria-hidden="true">#</a> 41 丨初识 Redis：Redis 为什么会这么快？</h3><h3 id="_42-丨如何使用-redis-来实现多用户抢票问题" tabindex="-1"><a class="header-anchor" href="#_42-丨如何使用-redis-来实现多用户抢票问题" aria-hidden="true">#</a> 42 丨如何使用 Redis 来实现多用户抢票问题</h3><h3 id="_43-丨如何使用-redis-搭建玩家排行榜" tabindex="-1"><a class="header-anchor" href="#_43-丨如何使用-redis-搭建玩家排行榜" aria-hidden="true">#</a> 43 丨如何使用 Redis 搭建玩家排行榜？</h3><h3 id="_44-丨-dbms-篇总结和答疑-用-sqlite-做词云" tabindex="-1"><a class="header-anchor" href="#_44-丨-dbms-篇总结和答疑-用-sqlite-做词云" aria-hidden="true">#</a> 44 丨 DBMS 篇总结和答疑：用 SQLite 做词云</h3><h2 id="第四章-sql-项目实战" tabindex="-1"><a class="header-anchor" href="#第四章-sql-项目实战" aria-hidden="true">#</a> 第四章：SQL 项目实战</h2><h3 id="_45-丨数据清洗-如何使用-sql-对数据进行清洗" tabindex="-1"><a class="header-anchor" href="#_45-丨数据清洗-如何使用-sql-对数据进行清洗" aria-hidden="true">#</a> 45 丨数据清洗：如何使用 SQL 对数据进行清洗？</h3><p>SQL 可以帮我们进行数据处理，总的来说可以分成 OLTP 和 OLAP 两种方式。</p><ul><li><strong>OLTP</strong>：称之为<strong>联机事务处理</strong>。对数据进行增删改查，SQL 查询优化，事务处理等就属于 OLTP 的范畴。它对实时性要求高，需要将用户的数据有效地存储到数据库中，同时有时候针对互联网应用的需求，我们还需要设置数据库的主从架构保证数据库的高并发和高可用性。</li><li><strong>OLAP</strong>：称之为<strong>联机分析处理</strong>。它是对已经存储在数据库中的数据进行分析，帮我们得出报表，指导业务。它对数据的实时性要求不高，但数据量往往很大，存储在数据库（数据仓库）中的数据可能还存在数据质量的问题，比如数据重复、数据中有缺失值，或者单位不统一等，因此在进行数据分析之前，首要任务就是对收集的数据进行清洗，从而保证数据质量。</li></ul><h3 id="_46-丨数据集成-如何对各种数据库进行集成和转换" tabindex="-1"><a class="header-anchor" href="#_46-丨数据集成-如何对各种数据库进行集成和转换" aria-hidden="true">#</a> 46 丨数据集成：如何对各种数据库进行集成和转换？</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720142031.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ETL 是英文 Extract、Transform 和 Load 的缩写，也就是将数据从不同的数据源进行抽取，然后通过交互转换，最终加载到目的地的过程。</p><ul><li>在 Extract 数据抽取这个过程中，需要做大量的工作，我们需要了解企业分散在不同地方的数据源都采用了哪种 DBMS，还需要了解这些数据源存放的数据结构等，是结构化数据，还是非结构化数据。在抽取中，我们也可以采用全量抽取和增量抽取两种方式。相比于全量抽取，增量抽取使用得更为广泛，它可以帮我们动态捕捉数据源的数据变化，并进行同步更新。</li><li>在 Transform 数据转换的过程中，我们可以使用一些数据转换的组件，比如说数据字段的映射、数据清洗、数据验证和数据过滤等，这些模块可以像是在流水线上进行作业一样，帮我们完成各种数据转换的需求，从而将不同质量，不同规范的数据进行统一。</li><li>在 Load 数据加载的过程中，我们可以将转换之后的数据加载到目的地，如果目标是 RDBMS，我们可以直接通过 SQL 进行加载，或者使用批量加载的方式进行加载。</li></ul><h3 id="_47-丨如何利用-sql-对零售数据进行分析" tabindex="-1"><a class="header-anchor" href="#_47-丨如何利用-sql-对零售数据进行分析" aria-hidden="true">#</a> 47 丨如何利用 SQL 对零售数据进行分析？</h3><p>略</p><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>`,214),c={href:"https://time.geekbang.org/column/intro/192",target:"_blank",rel:"noopener noreferrer"};function u(h,g){const s=t("ExternalLinkIcon");return e(),l("div",null,[p,a("ul",null,[a("li",null,[a("a",c,[o("SQL 必知必会"),i(s)])])])])}const b=n(d,[["render",u],["__file","index.html.vue"]]);export{b as default};
