import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as a,e}from"./app-64d71392.js";const r={},d=e('<h1 id="spark" tabindex="-1"><a class="header-anchor" href="#spark" aria-hidden="true">#</a> Spark</h1><h2 id="spark-简介" tabindex="-1"><a class="header-anchor" href="#spark-简介" aria-hidden="true">#</a> Spark 简介</h2><h3 id="spark-概念" tabindex="-1"><a class="header-anchor" href="#spark-概念" aria-hidden="true">#</a> Spark 概念</h3><ul><li>大规模分布式通用计算引擎 <ul><li>Spark Core：核心计算框架</li><li>Spark SQL：结构化数据查询</li><li>Spark Streaming：实时流处理</li><li>Spark MLib：机器学习</li><li>Spark GraphX：图计算</li></ul></li><li>具有高吞吐、低延时、通用易扩展、高容错等特点</li><li>采用 Scala 语言开发</li><li>提供多种运行模式</li></ul><h3 id="spark-特点" tabindex="-1"><a class="header-anchor" href="#spark-特点" aria-hidden="true">#</a> Spark 特点</h3><ul><li>计算高效 <ul><li>利用内存计算、Cache 缓存机制，支持迭代计算和数据共享，减少数据读取的 IO 开销</li><li>利用 DAG 引擎，减少中间计算结果写入 HDFS 的开销</li><li>利用多线程池模型，减少任务启动开销，避免 Shuffle 中不必要的排序和磁盘 IO 操作</li></ul></li><li>通用易用 <ul><li>适用于批处理、流处理、交互式计算、机器学习算法等场景</li><li>提供了丰富的开发 API，支持 Scala、Java、Python、R 等</li></ul></li><li>运行模式多样 <ul><li>Local 模式</li><li>Standalone 模式</li><li>YARN/Mesos 模式</li></ul></li><li>计算高效 <ul><li>利用内存计算、Cache 缓存机制，支持迭代计算和数据共享，减少数据读取的 IO 开销</li><li>利用 DAG 引擎，减少中间计算结果写入 HDFS 的开销</li><li>利用多线程池模型，减少任务启动开销，避免 Shuffle 中不必要的排序和磁盘 IO 操作</li></ul></li><li>通用易用 <ul><li>适用于批处理、流处理、交互式计算、机器学习等场景</li><li>提供了丰富的开发 API，支持 Scala、Java、Python、R 等</li></ul></li></ul><h2 id="spark-原理" tabindex="-1"><a class="header-anchor" href="#spark-原理" aria-hidden="true">#</a> Spark 原理</h2><h3 id="编程模型" tabindex="-1"><a class="header-anchor" href="#编程模型" aria-hidden="true">#</a> 编程模型</h3><h4 id="rdd" tabindex="-1"><a class="header-anchor" href="#rdd" aria-hidden="true">#</a> RDD</h4><ul><li>弹性分布式数据集（Resilient Distributed Datesets） <ul><li>分布在集群中的只读对象集合</li><li>由多个 Partition 组成</li><li>通过转换操作构造</li><li>失效后自动重构（弹性）</li><li>存储在内存或磁盘中</li></ul></li><li>Spark 基于 RDD 进行计算</li></ul><h4 id="rdd-操作-operator" tabindex="-1"><a class="header-anchor" href="#rdd-操作-operator" aria-hidden="true">#</a> RDD 操作（Operator）</h4><ul><li>Transformation（转换） <ul><li>将 Scala 集合或 Hadoop 输入数据构造成一个新 RDD</li><li>通过已有的 RDD 产生新 RDD</li><li>惰性执行：只记录转换关系，不触发计算</li><li>例如：map、filter、flatmap、union、distinct、sortbykey</li></ul></li><li>Action（动作） <ul><li>通过 RDD 计算得到一个值或一组值</li><li>真正触发计算</li><li>例如：first、count、collect、foreach、saveAsTextFile</li></ul></li></ul><h4 id="rdd-依赖-dependency" tabindex="-1"><a class="header-anchor" href="#rdd-依赖-dependency" aria-hidden="true">#</a> RDD 依赖（Dependency）</h4><ul><li>窄依赖（Narrow Dependency） <ul><li>父 RDD 中的分区最多只能被一个子 RDD 的一个分区使用</li><li>子 RDD 如果有部分分区数据丢失或损坏，只需从对应的父 RDD 重新计算恢复</li><li>例如：map、filter、union</li></ul></li><li>宽依赖（Shuffle/Wide Dependency ） <ul><li>子 RDD 分区依赖父 RDD 的所有分区</li><li>子 RDD 如果部分或全部分区数据丢失或损坏，必须从所有父 RDD 分区重新计算</li><li>相对于窄依赖，宽依赖付出的代价要高很多，尽量避免使用</li><li>例如：groupByKey、reduceByKey、sortByKey</li></ul></li></ul>',14),h=[d];function n(t,s){return l(),a("div",null,h)}const o=i(r,[["render",n],["__file","index.html.vue"]]);export{o as default};
