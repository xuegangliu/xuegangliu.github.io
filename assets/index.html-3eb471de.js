import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as i,a as t,b as n,d as o,e as l}from"./app-64d71392.js";const c={},s=l('<h1 id="spring-依赖查找" tabindex="-1"><a class="header-anchor" href="#spring-依赖查找" aria-hidden="true">#</a> Spring 依赖查找</h1><p><strong>依赖查找是主动或手动的依赖查找方式，通常需要依赖容器或标准 API 实现</strong>。</p><p>IoC 依赖查找大致可以分为以下几类：</p><ul><li>根据 Bean 名称查找</li><li>根据 Bean 类型查找</li><li>根据 Bean 名称 + 类型查找</li><li>根据 Java 注解查找</li></ul><p>此外，根据查找的 Bean 对象是单一或集合对象，是否需要延迟查找等特定常见，有相应不同的 API。</p><h2 id="单一类型依赖查找" tabindex="-1"><a class="header-anchor" href="#单一类型依赖查找" aria-hidden="true">#</a> 单一类型依赖查找</h2><p>单一类型依赖查找接口- <code>BeanFactory</code></p><ul><li>根据 Bean 名称查找 <ul><li><code>getBean(String)</code></li><li>Spring 2.5 覆盖默认参数：<code>getBean(String,Object...)</code></li></ul></li><li>根据 Bean 类型查找 <ul><li>Bean 实时查找 <ul><li>Spring 3.0 <code>getBean(Class)</code></li><li>Spring 4.1 覆盖默认参数：<code>getBean(Class,Object...)</code></li></ul></li><li>Spring 5.1 Bean 延迟查找 <ul><li><code>getBeanProvider(Class)</code></li><li><code>getBeanProvider(ResolvableType)</code></li></ul></li></ul></li><li>根据 Bean 名称 + 类型查找：<code>getBean(String,Class)</code></li></ul><h2 id="集合类型依赖查找" tabindex="-1"><a class="header-anchor" href="#集合类型依赖查找" aria-hidden="true">#</a> 集合类型依赖查找</h2><p>集合类型依赖查找接口- <code>ListableBeanFactory</code></p><ul><li><p>根据 Bean 类型查找</p><ul><li>获取同类型 Bean 名称列表 <ul><li><code>getBeanNamesForType(Class)</code></li><li>Spring 4.2 <code>getBeanNamesForType(ResolvableType)</code></li></ul></li><li>获取同类型 Bean 实例列表 <ul><li><code>getBeansOfType(Class)</code> 以及重载方法</li></ul></li></ul></li><li><p>通过注解类型查找</p><ul><li><p>Spring 3.0 获取标注类型 Bean 名称列表</p><ul><li><code>getBeanNamesForAnnotation(Class&lt;? extends Annotation&gt;)</code></li></ul></li><li><p>Spring 3.0 获取标注类型 Bean 实例列表</p><ul><li><code>getBeansWithAnnotation(Class&lt;? extends Annotation&gt;)</code></li></ul></li><li><p>Spring 3.0 获取指定名称+ 标注类型 Bean 实例</p><ul><li><code>findAnnotationOnBean(String,Class&lt;? extends Annotation&gt;)</code></li></ul></li></ul></li></ul><h2 id="层次性依赖查找" tabindex="-1"><a class="header-anchor" href="#层次性依赖查找" aria-hidden="true">#</a> 层次性依赖查找</h2><p>层次性依赖查找接口- <code>HierarchicalBeanFactory</code></p><ul><li>双亲 <code>BeanFactory</code>：<code>getParentBeanFactory()</code></li><li>层次性查找 <ul><li>根据 Bean 名称查找 <ul><li>基于 <code>containsLocalBean</code> 方法实现</li></ul></li><li>根据 Bean 类型查找实例列表 <ul><li>单一类型：<code>BeanFactoryUtils#beanOfType</code></li><li>集合类型：<code>BeanFactoryUtils#beansOfTypeIncludingAncestors</code></li></ul></li><li>根据 Java 注解查找名称列表 <ul><li><code>BeanFactoryUtils#beanNamesForTypeIncludingAncestors</code></li></ul></li></ul></li></ul><h2 id="延迟依赖查找" tabindex="-1"><a class="header-anchor" href="#延迟依赖查找" aria-hidden="true">#</a> 延迟依赖查找</h2><p>Bean 延迟依赖查找接口</p><ul><li><code>org.springframework.beans.factory.ObjectFactory</code></li><li><code>org.springframework.beans.factory.ObjectProvider</code>（Spring 5 对 Java 8 特性扩展）</li><li>函数式接口 <ul><li><code>getIfAvailable(Supplier)</code></li><li><code>ifAvailable(Consumer)</code></li></ul></li><li>Stream 扩展- stream()</li></ul><h2 id="安全依赖查找" tabindex="-1"><a class="header-anchor" href="#安全依赖查找" aria-hidden="true">#</a> 安全依赖查找</h2><table><thead><tr><th>依赖查找类型</th><th>代表实现</th><th>是否安全</th></tr></thead><tbody><tr><td>单一类型查找</td><td><code>BeanFactory#getBean</code></td><td>否</td></tr><tr><td></td><td><code>ObjectFactory#getObject</code></td><td>否</td></tr><tr><td></td><td><code>ObjectProvider#getIfAvailable</code></td><td>是</td></tr><tr><td></td><td></td><td></td></tr><tr><td>集合类型查找</td><td><code>ListableBeanFactory#getBeansOfType</code></td><td>是</td></tr><tr><td></td><td><code>ObjectProvider#stream</code></td><td>是</td></tr></tbody></table><p>注意：层次性依赖查找的安全性取决于其扩展的单一或集合类型的 <code>BeanFactory</code> 接口</p><h2 id="内建可查找的依赖" tabindex="-1"><a class="header-anchor" href="#内建可查找的依赖" aria-hidden="true">#</a> 内建可查找的依赖</h2><p><code>AbstractApplicationContext</code> 内建可查找的依赖</p><table><thead><tr><th>Bean</th><th>名称 Bean</th><th>实例使用场景</th></tr></thead><tbody><tr><td>environment</td><td>Environment 对象</td><td>外部化配置以及 Profiles</td></tr><tr><td>systemProperties</td><td>java.util.Properties 对象</td><td>Java 系统属性</td></tr><tr><td>systemEnvironment</td><td>java.util.Map 对象</td><td>操作系统环境变量</td></tr><tr><td>messageSource</td><td>MessageSource 对象</td><td>国际化文案</td></tr><tr><td>lifecycleProcessor</td><td>LifecycleProcessor 对象</td><td>Lifecycle Bean 处理器</td></tr><tr><td>applicationEventMulticaster</td><td>ApplicationEventMulticaster 对象</td><td>Spring 事件广播器</td></tr></tbody></table><p>注解驱动 Spring 应用上下文内建可查找的依赖（部分）</p><table><thead><tr><th>Bean 名称</th><th>Bean 实例</th><th>使用场景</th></tr></thead><tbody><tr><td>org.springframework.context.annotation.internalConfigurationAnnotationProcessor</td><td>ConfigurationClassPostProcessor 对象</td><td>处理 Spring 配置类</td></tr><tr><td>org.springframework.context.annotation.internalAutowiredAnnotationProcessor</td><td>AutowiredAnnotationBeanPostProcessor 对象</td><td>处理@Autowired 以及@Value 注解</td></tr><tr><td>org.springframework.context.annotation.internalCommonAnnotationProcessor</td><td>CommonAnnotationBeanPostProcessor 对象</td><td>（条件激活）处理 JSR-250 注解，如@PostConstruct 等</td></tr><tr><td>org.springframework.context.event.internalEventListenerProcessor</td><td>EventListenerMethodProcessor 对象</td><td>处理标注@EventListener 的 Spring 事件监听方法</td></tr><tr><td>org.springframework.context.event.internalEventListenerFactory</td><td>DefaultEventListenerFactory 对象</td><td>@EventListener 事件监听方法适配为 ApplicationListener</td></tr><tr><td>org.springframework.context.annotation.internalPersistenceAnnotationProcessor</td><td>PersistenceAnnotationBeanPostProcessor 对象</td><td>（条件激活）处理 JPA 注解场景</td></tr></tbody></table><h2 id="依赖查找中的经典异常" tabindex="-1"><a class="header-anchor" href="#依赖查找中的经典异常" aria-hidden="true">#</a> 依赖查找中的经典异常</h2><p><code>BeansException</code> 子类型</p><table><thead><tr><th>异常类型</th><th>触发条件（举例）</th><th>场景举例</th></tr></thead><tbody><tr><td><code>NoSuchBeanDefinitionException</code></td><td>当查找 Bean 不存在于 IoC 容器时</td><td><code>BeanFactory#getBeanObjectFactory#getObject</code></td></tr><tr><td><code>NoUniqueBeanDefinitionException</code></td><td>类型依赖查找时，IoC 容器存在多个 Bean 实例</td><td><code>BeanFactory#getBean(Class)</code></td></tr><tr><td><code>BeanInstantiationException</code></td><td>当 Bean 所对应的类型非具体类时</td><td><code>BeanFactory#getBean</code></td></tr><tr><td><code>BeanCreationException</code></td><td>当 Bean 初始化过程中</td><td>Bean 初始化方法执行异常时</td></tr><tr><td><code>BeanDefinitionStoreException</code></td><td>当 <code>BeanDefinition</code> 配置元信息非法时</td><td>XML 配置资源无法打开时</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',29),h={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},p={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function u(g,B){const e=a("ExternalLinkIcon");return r(),i("div",null,[s,t("ul",null,[t("li",null,[t("a",h,[n("Spring 官方文档之 Core Technologies"),o(e)])]),t("li",null,[t("a",p,[n("《小马哥讲 Spring 核心编程思想》"),o(e)])])])])}const y=d(c,[["render",u],["__file","index.html.vue"]]);export{y as default};
