import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as l}from"./app-c4cc7cd5.js";const r={},n=l('<h1 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> YARN</h1><blockquote><p>YARN 的目标是解决 MapReduce 的缺陷。</p></blockquote><h2 id="mapreduce-的缺陷-hadoop-1-x" tabindex="-1"><a class="header-anchor" href="#mapreduce-的缺陷-hadoop-1-x" aria-hidden="true">#</a> MapReduce 的缺陷（Hadoop 1.x）</h2><ul><li>身兼两职：计算框架 + 资源管理框架</li><li>JobTracker <ul><li>既做资源管理，又做任务调度</li><li>任务太重，开销过大</li><li>存在单点故障</li></ul></li><li>资源描述模型过于简单，资源利用率较低 <ul><li>仅把 Task 数量看作资源，没有考虑 CPU 和内存</li><li>强制把资源分成 Map Task Slot 和 Reduce Task Slot</li></ul></li><li>扩展性较差，集群规模上限 4K</li><li>源码难于理解，升级维护困难</li></ul><h2 id="yarn-简介" tabindex="-1"><a class="header-anchor" href="#yarn-简介" aria-hidden="true">#</a> YARN 简介</h2><p>YARN(Yet Another Resource Negotiator，另一种资源管理器)是一个<strong>分布式通用资源管理系统</strong>。</p><p>设计目标：聚焦资源管理、通用（适用各种计算框架）、高可用、高扩展。</p><h2 id="yarn-系统架构" tabindex="-1"><a class="header-anchor" href="#yarn-系统架构" aria-hidden="true">#</a> YARN 系统架构</h2><ul><li>主从结构（master/slave）</li><li>将 JobTracker 的资源管理、任务调度功能分离</li><li>三种角色： <ul><li>ResourceManager（Master） - 集群资源的统一管理和分配</li><li>NodeManager（Slave） - 管理节点资源，以及容器的生命周期</li><li>ApplicationMaster（新角色） - 管理应用程序实例，包括任务调度和资源申请</li></ul></li></ul><h3 id="resourcemanager-rm" tabindex="-1"><a class="header-anchor" href="#resourcemanager-rm" aria-hidden="true">#</a> ResourceManager（RM）</h3><p><strong>主要功能</strong></p><ul><li>统一管理集群的所有资源</li><li>将资源按照一定策略分配给各个应用（ApplicationMaster）</li><li>接收 NodeManager 的资源上报信息</li></ul><p><strong>核心组件</strong></p><ul><li>用户交互服务（User Service）</li><li>NodeManager 管理</li><li>ApplicationMaster 管理</li><li>Application 管理</li><li>安全管理</li><li>资源管理</li></ul><h3 id="nodemanager-nm" tabindex="-1"><a class="header-anchor" href="#nodemanager-nm" aria-hidden="true">#</a> NodeManager（NM）</h3><p><strong>主要功能</strong></p><ul><li>管理单个节点的资源</li><li>向 ResourceManager 汇报节点资源使用情况</li><li>管理 Container 的生命周期</li></ul><p><strong>核心组件</strong></p><ul><li>NodeStatusUpdater</li><li>ContainerManager</li><li>ContainerExecutor</li><li>NodeHealthCheckerService</li><li>Security</li><li>WebServer</li></ul><h3 id="applicationmaster-am" tabindex="-1"><a class="header-anchor" href="#applicationmaster-am" aria-hidden="true">#</a> ApplicationMaster（AM）</h3><p><strong>主要功能</strong></p><ul><li>管理应用程序实例</li><li>向 ResourceManager 申请任务执行所需的资源</li><li>任务调度和监管</li></ul><p><strong>实现方式</strong></p><ul><li>需要为每个应用开发一个 AM 组件</li><li>YARN 提供 MapReduce 的 ApplicationMaster 实现</li><li>采用基于事件驱动的异步编程模型，由中央事件调度器统一管理所有事件</li><li>每种组件都是一种事件处理器，在中央事件调度器中注册</li></ul><h3 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> Container</h3><ul><li>概念：Container 封装了节点上进程的相关资源，是 YARN 中资源的抽象</li><li>分类：运行 ApplicationMaster 的 Container 、运行应用任务的 Container</li></ul><h2 id="yarn-高可用" tabindex="-1"><a class="header-anchor" href="#yarn-高可用" aria-hidden="true">#</a> YARN 高可用</h2><p>ResourceManager 高可用</p><ul><li>1 个 Active RM、多个 Standby RM</li><li>宕机后自动实现主备切换</li><li>ZooKeeper 的核心作用 <ul><li>Active 节点选举</li><li>恢复 Active RM 的原有状态信息</li></ul></li><li>重启 AM，杀死所有运行中的 Container</li><li>切换方式：手动、自动</li></ul><h2 id="yarn-资源调度策略" tabindex="-1"><a class="header-anchor" href="#yarn-资源调度策略" aria-hidden="true">#</a> YARN 资源调度策略</h2><h3 id="fifo-scheduler-先进先出调度器" tabindex="-1"><a class="header-anchor" href="#fifo-scheduler-先进先出调度器" aria-hidden="true">#</a> FIFO Scheduler（先进先出调度器）</h3><p><strong>调度策略</strong></p><p>将所有任务放入一个队列，先进队列的先获得资源，排在后面的任务只有等待</p><p><strong>缺点</strong></p><ul><li>资源利用率低，无法交叉运行任务</li><li>灵活性差，如：紧急任务无法插队，耗时长的任务拖慢耗时短的任务</li></ul><h3 id="capacity-scheduler-容量调度器" tabindex="-1"><a class="header-anchor" href="#capacity-scheduler-容量调度器" aria-hidden="true">#</a> Capacity Scheduler（容量调度器）</h3><p><strong>核心思想</strong> - 提前<strong>做预算</strong>，在预算指导下分享集群资源。</p><p><strong>调度策略</strong></p><ul><li>集群资源由多个队列分享</li><li>每个队列都要预设资源分配的比例（提前做预算）</li><li>空闲资源优先分配给“实际资源/预算资源”比值最低的队列</li><li>队列内部采用 FIFO 调度策略</li></ul><p><strong>特点</strong></p><ul><li>层次化的队列设计：子队列可使用父队列资源</li><li>容量保证：每个队列都要预设资源占比，防止资源独占</li><li>弹性分配：空闲资源可以分配给任何队列，当多个队列争用时，会按比例进行平衡</li><li>支持动态管理：可以动态调整队列的容量、权限等参数，也可动态增加、暂停队列</li><li>访问控制：用户只能向自己的队列中提交任务，不能访问其他队列</li><li>多租户：多用户共享集群资源</li></ul><h3 id="fair-scheduler-公平调度器" tabindex="-1"><a class="header-anchor" href="#fair-scheduler-公平调度器" aria-hidden="true">#</a> Fair Scheduler（公平调度器）</h3><p><strong>调度策略</strong></p><ul><li>多队列公平共享集群资源</li><li>通过平分的方式，动态分配资源，无需预先设定资源分配比例</li><li>队列内部可配置调度策略：FIFO、Fair（默认）</li></ul><p><strong>资源抢占</strong></p><ul><li>终止其他队列的任务，使其让出所占资源，然后将资源分配给占用资源量少于最小资源量限制的队列</li></ul><p><strong>队列权重</strong></p><ul><li>当队列中有任务等待，并且集群中有空闲资源时，每个队列可以根据权重获得不同比例的空闲资源</li></ul><h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源" aria-hidden="true">#</a> 资源</h2>',49),t=[n];function o(d,s){return a(),e("div",null,t)}const u=i(r,[["render",o],["__file","index.html.vue"]]);export{u as default};
