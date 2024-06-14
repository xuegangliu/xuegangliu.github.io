import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as a,c as l,a as r,b as n,d as i,e as p}from"./app-64d71392.js";const s={},g=p('<h1 id="spring-environment-抽象" tabindex="-1"><a class="header-anchor" href="#spring-environment-抽象" aria-hidden="true">#</a> Spring Environment 抽象</h1><h2 id="理解-spring-environment-抽象" tabindex="-1"><a class="header-anchor" href="#理解-spring-environment-抽象" aria-hidden="true">#</a> 理解 Spring Environment 抽象</h2><p>统一的 Spring 配置属性管理</p><p>Spring Framework 3.1 开始引入 Environment 抽象，它统一 Spring 配置属性的存储，包括占位符处理和类型转换，不仅完整地替换 PropertyPlaceholderConfigurer，而且还支持更丰富的配置属性源（PropertySource）</p><p>条件化 Spring Bean 装配管理</p><p>通过 Environment Profiles 信息，帮助 Spring 容器提供条件化地装配 Bean</p><h2 id="spring-environment-接口使用场景" tabindex="-1"><a class="header-anchor" href="#spring-environment-接口使用场景" aria-hidden="true">#</a> Spring Environment 接口使用场景</h2><ul><li>⽤于属性占位符处理</li><li>用于转换 Spring 配置属性类型</li><li>用于存储 Spring 配置属性源（PropertySource）</li><li>用于 Profiles 状态的维护</li></ul><h2 id="environment-占位符处理" tabindex="-1"><a class="header-anchor" href="#environment-占位符处理" aria-hidden="true">#</a> Environment 占位符处理</h2><p>Spring 3.1 前占位符处理</p><ul><li>组件：org.springframework.beans.factory.config.PropertyPlaceholderConfigurer</li><li>接口：org.springframework.util.StringValueResolver</li></ul><p>Spring 3.1 + 占位符处理</p><ul><li>组件：org.springframework.context.support.PropertySourcesPlaceholderConfigurer</li><li>接口：org.springframework.beans.factory.config.EmbeddedValueResolver</li></ul><h2 id="理解条件配置-spring-profiles" tabindex="-1"><a class="header-anchor" href="#理解条件配置-spring-profiles" aria-hidden="true">#</a> 理解条件配置 Spring Profiles</h2><p>Spring 3.1 条件配置</p><ul><li>API：org.springframework.core.env.ConfigurableEnvironment</li><li>修改：addActiveProfile(String)、setActiveProfiles(String...) 和 setDefaultProfiles(String...)</li><li>获取：getActiveProfiles() 和 getDefaultProfiles()</li><li>匹配：#acceptsProfiles(String...) 和 acceptsProfiles(Profiles)</li><li>注解：@org.springframework.context.annotation.Profile</li></ul><h2 id="spring-4-重构-profile" tabindex="-1"><a class="header-anchor" href="#spring-4-重构-profile" aria-hidden="true">#</a> Spring 4 重构 @Profile</h2><p>基于 Spring 4 org.springframework.context.annotation.Condition 接口实现</p><p>org.springframework.context.annotation.ProfileCondition</p><h2 id="依赖注入-environment" tabindex="-1"><a class="header-anchor" href="#依赖注入-environment" aria-hidden="true">#</a> 依赖注入 Environment</h2><p>直接依赖注入</p><ul><li>通过 EnvironmentAware 接口回调</li><li>通过 @Autowired 注入 Environment</li></ul><p>间接依赖注入</p><ul><li>通过 ApplicationContextAware 接口回调</li><li>通过 @Autowired 注入 ApplicationContext</li></ul><h2 id="依赖查找-environment" tabindex="-1"><a class="header-anchor" href="#依赖查找-environment" aria-hidden="true">#</a> 依赖查找 Environment</h2><p>直接依赖查找</p><ul><li>通过 org.springframework.context.ConfigurableApplicationContext#ENVIRONMENT_BEAN_NAME</li></ul><p>间接依赖查找</p><ul><li>通过 org.springframework.context.ConfigurableApplicationContext#getEnvironment</li></ul><h2 id="依赖注入-value" tabindex="-1"><a class="header-anchor" href="#依赖注入-value" aria-hidden="true">#</a> 依赖注入 @Value</h2><p>通过注入 @Value</p><p>实现 - org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor</p><h2 id="spring-类型转换在-environment-中的运用" tabindex="-1"><a class="header-anchor" href="#spring-类型转换在-environment-中的运用" aria-hidden="true">#</a> Spring 类型转换在 Environment 中的运用</h2><p>Environment 底层实现</p><ul><li>底层实现 - org.springframework.core.env.PropertySourcesPropertyResolver</li><li>核心方法 - convertValueIfNecessary(Object,Class)</li><li>底层服务 - org.springframework.core.convert.ConversionService</li><li>默认实现 - org.springframework.core.convert.support.DefaultConversionService</li></ul><h2 id="spring-类型转换在-value-中的运用" tabindex="-1"><a class="header-anchor" href="#spring-类型转换在-value-中的运用" aria-hidden="true">#</a> Spring 类型转换在 @Value 中的运用</h2><p>@Value 底层实现</p><ul><li>底层实现 - org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor <ul><li>org.springframework.beans.factory.support.DefaultListableBeanFactory#doResolveDependency</li></ul></li><li>底层服务 - org.springframework.beans.TypeConverter <ul><li>默认实现 - org.springframework.beans.TypeConverterDelegate <ul><li>java.beans.PropertyEditor</li><li>org.springframework.core.convert.ConversionService</li></ul></li></ul></li></ul><h2 id="spring-配置属性源-propertysource" tabindex="-1"><a class="header-anchor" href="#spring-配置属性源-propertysource" aria-hidden="true">#</a> Spring 配置属性源 PropertySource</h2><ul><li>API <ul><li>单配置属性源 - org.springframework.core.env.PropertySource</li><li>多配置属性源 - org.springframework.core.env.PropertySources</li></ul></li><li>注解 <ul><li>单配置属性源 - @org.springframework.context.annotation.PropertySource</li><li>多配置属性源 - @org.springframework.context.annotation.PropertySources</li></ul></li><li>关联 <ul><li>存储对象 - org.springframework.core.env.MutablePropertySources</li><li>关联方法 - org.springframework.core.env.ConfigurableEnvironment#getPropertySources()</li></ul></li></ul><h2 id="spring-內建的配置属性源" tabindex="-1"><a class="header-anchor" href="#spring-內建的配置属性源" aria-hidden="true">#</a> Spring 內建的配置属性源</h2><p>內建 PropertySource</p><table><thead><tr><th>PropertySource 类型</th><th>说明</th></tr></thead><tbody><tr><td>org.springframework.core.env.CommandLinePropertySource</td><td>命令行配置属性源</td></tr><tr><td>org.springframework.jndi.JndiPropertySource</td><td>JDNI 配置属性源</td></tr><tr><td>org.springframework.core.env.PropertiesPropertySource</td><td>Properties 配置属性源</td></tr><tr><td>org.springframework.web.context.support.ServletConfigPropertySource</td><td>Servlet 配置属性源</td></tr><tr><td>org.springframework.web.context.support.ServletContextPropertySource</td><td>ServletContext 配置属性源</td></tr><tr><td>org.springframework.core.env.SystemEnvironmentPropertySource</td><td>环境变量配置属性源</td></tr></tbody></table><h2 id="基于注解扩展-spring-配置属性源" tabindex="-1"><a class="header-anchor" href="#基于注解扩展-spring-配置属性源" aria-hidden="true">#</a> 基于注解扩展 Spring 配置属性源</h2><p>@org.springframework.context.annotation.PropertySource 实现原理</p><ul><li>入口 - org.springframework.context.annotation.ConfigurationClassParser#doProcessConfigurationClass <ul><li>org.springframework.context.annotation.ConfigurationClassParser#processPropertySource</li></ul></li><li>4.3 新增语义 <ul><li>配置属性字符编码 - encoding</li><li>org.springframework.core.io.support.PropertySourceFactory</li></ul></li><li>适配对象 - org.springframework.core.env.CompositePropertySource</li></ul><h2 id="基于-api-扩展-spring-配置属性源" tabindex="-1"><a class="header-anchor" href="#基于-api-扩展-spring-配置属性源" aria-hidden="true">#</a> 基于 API 扩展 Spring 配置属性源</h2><ul><li>Spring 应用上下文启动前装配 PropertySource</li><li>Spring 应用上下文启动后装配 PropertySource</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>简单介绍 Spring Environment 接口？</p><ul><li>核心接口 - org.springframework.core.env.Environment</li><li>父接口 - org.springframework.core.env.PropertyResolver</li><li>可配置接口 - org.springframework.core.env.ConfigurableEnvironment</li><li>职责： <ul><li>管理 Spring 配置属性源</li><li>管理 Profiles</li></ul></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',52),c={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},d={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function u(h,f){const e=t("ExternalLinkIcon");return a(),l("div",null,[g,r("ul",null,[r("li",null,[r("a",c,[n("Spring 官方文档之 Core Technologies"),i(e)])]),r("li",null,[r("a",d,[n("《小马哥讲 Spring 核心编程思想》"),i(e)])])])])}const S=o(s,[["render",u],["__file","index.html.vue"]]);export{S as default};
