import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as n,b as s,d as a,w as r,e as t}from"./app-64d71392.js";const u={},d=t(`<h1 id="设计模式之工厂方法模式" tabindex="-1"><a class="header-anchor" href="#设计模式之工厂方法模式" aria-hidden="true">#</a> 设计模式之工厂方法模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>工厂方法模式</strong> (Factory Method)是一种创建型设计模式， 其在父类中提供一个创建对象的方法， 让子类决定实例化对象的类型。</p><ul><li><strong>工厂模式中，增加一种产品类，就要增加一个工厂类</strong>：因为每个工厂类只能创建一种产品的实例。</li><li>工厂模式<strong>遵循“开放-封闭原则”</strong>：工厂模式中，新增一种产品并不需要修改原有类，仅仅是扩展。</li></ul><p>简单工厂模式相比于工厂方法模式</p><p><strong>优点</strong>：工厂类中<strong>包含必要的逻辑判断，可根据客户端的选择条件动态实例化需要的类</strong>。对于客户端来说，去除了对具体产品的依赖。</p><p><strong>缺点</strong>：<strong>违背了开放封闭原则</strong>。 每添加一个新的产品，都需要对原有类进行修改。增加维护成本，且不易于维护。</p><blockquote><p><strong>开放封闭原则</strong>：一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。</p></blockquote><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>当你在编写代码的过程中， 如果无法预知对象确切类别及其依赖关系时， 可使用工厂方法。</li><li>如果你希望用户能扩展你软件库或框架的内部组件， 可使用工厂方法。</li><li>如果你希望复用现有对象来节省系统资源， 而不是每次都重新创建对象， 可使用工厂方法。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210429171651.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><strong>产品</strong> （Product） 将会对接口进行声明。 对于所有由创建者及其子类构建的对象， 这些接口都是通用的。</li><li><strong>具体产品</strong> （Concrete Products） 是产品接口的不同实现。</li><li><strong>创建者</strong> （Creator） 类声明返回产品对象的工厂方法。 该方法的返回对象类型必须与产品接口相匹配。</li></ol><ul><li>你可以将工厂方法声明为抽象方法， 强制要求每个子类以不同方式实现该方法。 或者， 你也可以在基础工厂方法中返回默认产品类型。</li><li>注意， 尽管它的名字是创建者， 但他最主要的职责并<strong>不是</strong>创建产品。 一般来说， 创建者类包含一些与产品相关的核心业务逻辑。 工厂方法将这些逻辑处理从具体产品类中分离出来。 打个比方， 大型软件开发公司拥有程序员培训部门。 但是， 这些公司的主要工作还是编写代码， 而非生产程序员。</li></ul><ol start="4"><li><strong>具体创建者</strong> （Concrete Creators） 将会重写基础工厂方法， 使其返回不同类型的产品。<br> 注意， 并不一定每次调用工厂方法都会<strong>创建</strong>新的实例。 工厂方法也可以返回缓存、 对象池或其他来源的已有对象。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p>【Product】</p><p>定义产品对象的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【ConcreteProduct】</p><p>实现 <code>Product</code> 接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteProduct</span> <span class="token keyword">extends</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ConcreteProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;创建 ConcreteProduct 产品&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Use</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用 ConcreteProduct 产品&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【Creator】</p><p>声明工厂方法，它会<strong>返回一个产品类型的对象</strong>。 <strong>Creator</strong> 也可以实现一个默认的工厂方法 <code>factoryMethod()</code> ，以返回一个默认的具体产品类型。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【ConcreteCreator】</p><p><strong>覆写</strong> <strong>Creator</strong> 中的工厂方法 <code>factoryMethod()</code> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteCreator</span> <span class="token keyword">implements</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【客户端】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> factoryMethodPattern <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Creator</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteCreator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">product<span class="token punctuation">.</span></span>Use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【输出】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建 ConcreteProduct 产品
使用 ConcreteProduct 产品
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>以下示例演示了如何使用<strong>工厂方法</strong>开发跨平台 UI （用户界面） 组件， 并同时避免客户代码与具体 UI 类之间的耦合。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210517194622.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>基础对话框类使用不同的 UI 组件渲染窗口。 在不同的操作系统下， 这些组件外观或许略有不同， 但其功能保持一致。 Windows 系统中的按钮在 Linux 系统中仍然是按钮。</p><p>如果使用工厂方法， 就不需要为每种操作系统重写对话框逻辑。 如果我们声明了一个在基本对话框类中生成按钮的工厂方法， 那么我们就可以创建一个对话框子类， 并使其通过工厂方法返回 Windows 样式按钮。 子类将继承对话框基础类的大部分代码， 同时在屏幕上根据 Windows 样式渲染按钮。</p><p>如需该模式正常工作， 基础对话框类必须使用抽象按钮 （例如基类或接口）， 以便将其扩展为具体按钮。 这样一来， 无论对话框中使用何种类型的按钮， 其代码都可以正常工作。</p>`,39),k={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建者类声明的工厂方法必须返回一个产品类的对象。创建者的子类通常会提供</span>
<span class="token comment">// 该方法的实现。</span>
<span class="token keyword">class</span> <span class="token class-name">Dialog</span> is
    <span class="token comment">// 创建者还可提供一些工厂方法的默认实现。</span>
    <span class="token keyword">abstract</span> method <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Button</span>

    <span class="token comment">// 请注意，创建者的主要职责并非是创建产品。其中通常会包含一些核心业务</span>
    <span class="token comment">// 逻辑，这些逻辑依赖于由工厂方法返回的产品对象。子类可通过重写工厂方</span>
    <span class="token comment">// 法并使其返回不同类型的产品来间接修改业务逻辑。</span>
    method <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 调用工厂方法创建一个产品对象。</span>
        <span class="token class-name">Button</span> okButton <span class="token operator">=</span> <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 现在使用产品。</span>
        okButton<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>closeDialog<span class="token punctuation">)</span>
        okButton<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 具体创建者将重写工厂方法以改变其所返回的产品类型。</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsDialog</span> <span class="token keyword">extends</span> <span class="token class-name">Dialog</span> is
    method <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Button</span> is
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">WebDialog</span> <span class="token keyword">extends</span> <span class="token class-name">Dialog</span> is
    method <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Button</span> is
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HTMLButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 产品接口中将声明所有具体产品都必须实现的操作。</span>
<span class="token keyword">interface</span> <span class="token class-name">Button</span> is
    method <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">onClick</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>

<span class="token comment">// 具体产品需提供产品接口的各种实现。</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> is
    method <span class="token function">render</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> is
        <span class="token comment">// 根据 Windows 样式渲染按钮。</span>
    method <span class="token function">onClick</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> is
        <span class="token comment">// 绑定本地操作系统点击事件。</span>

<span class="token keyword">class</span> <span class="token class-name">HTMLButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> is
    method <span class="token function">render</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> is
        <span class="token comment">// 返回一个按钮的 HTML 表述。</span>
    method <span class="token function">onClick</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> is
        <span class="token comment">// 绑定网络浏览器的点击事件。</span>


<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    field dialog<span class="token operator">:</span> <span class="token class-name">Dialog</span>

    <span class="token comment">// 程序根据当前配置或环境设定选择创建者的类型。</span>
    method <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        config <span class="token operator">=</span> <span class="token function">readApplicationConfigFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token constant">OS</span> <span class="token operator">==</span> <span class="token string">&quot;Windows&quot;</span><span class="token punctuation">)</span> then
            dialog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WindowsDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token constant">OS</span> <span class="token operator">==</span> <span class="token string">&quot;Web&quot;</span><span class="token punctuation">)</span> then
            dialog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;错误！未知的操作系统。&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 当前客户端代码会与具体创建者的实例进行交互，但是必须通过其基本接口</span>
    <span class="token comment">// 进行。只要客户端通过基本接口与创建者进行交互，你就可将任何创建者子</span>
    <span class="token comment">// 类传递给客户端。</span>
    method <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        dialog<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 工厂方法模式在 Java 代码中得到了广泛使用。 当你需要在代码中提供高层次的灵活性时， 该模式会非常实用。</p><p>核心 Java 程序库中有该模式的应用：</p>`,4),m={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Calendar.html#getInstance--",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"java.util.Calendar#getInstance()",-1),h={href:"http://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html#getBundle-java.lang.String-",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"java.util.ResourceBundle#getBundle()",-1),f={href:"http://docs.oracle.com/javase/8/docs/api/java/text/NumberFormat.html#getInstance--",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"java.text.NumberFormat#getInstance()",-1),_={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/charset/Charset.html#forName-java.lang.String-",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"java.nio.charset.Charset#forName()",-1),C={href:"http://docs.oracle.com/javase/8/docs/api/java/net/URLStreamHandlerFactory.html",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"java.net.URLStreamHandlerFactory#createURLStreamHandler(String)",-1),x={href:"https://docs.oracle.com/javase/8/docs/api/java/util/EnumSet.html#of(E)",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"java.util.EnumSet#of()",-1),E={href:"https://docs.oracle.com/javase/8/docs/api/javax/xml/bind/JAXBContext.html#createMarshaller--",target:"_blank",rel:"noopener noreferrer"},F=n("code",null,"javax.xml.bind.JAXBContext#createMarshaller()",-1),M=n("p",null,[n("strong",null,"识别方法："),s(" 工厂方法可通过构建方法来识别， 它会创建具体类的对象， 但以抽象类型或接口的形式返回这些对象。")],-1),P=t(`<p>如何实现一个具有加减乘除基本功能的计算器？</p><p>两种模式的 <code>Product</code> 和 <code>ConcreteProduct</code> 角色代码没有区别，不再赘述。</p><p>差异在于 <code>Factory</code> 角色部分，以及客户端部分，请在代码中体会。</p><p>【Creator 角色】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Creator 角色，定义返回产品实例的公共工厂方法</span>
<span class="token keyword">interface</span> <span class="token class-name">OperationFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Operation</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【ConcreteCreator 角色】</p><p>和简单工厂模式相比，每一种产品都会有一个具体的工厂类负责生产实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ConcreteCreator 角色，具体实现 Creator 中的方法</span>
<span class="token keyword">class</span> <span class="token class-name">AddFactory</span> <span class="token keyword">implements</span> <span class="token class-name">OperationFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Operation</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ConcreteCreator 角色，具体实现 Creator 中的方法</span>
<span class="token keyword">class</span> <span class="token class-name">SubFactory</span> <span class="token keyword">implements</span> <span class="token class-name">OperationFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Operation</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ConcreteCreator 角色，具体实现 Creator 中的方法</span>
<span class="token keyword">class</span> <span class="token class-name">MulFactory</span> <span class="token keyword">implements</span> <span class="token class-name">OperationFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Operation</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Mul</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ConcreteCreator 角色，具体实现 Creator 中的方法</span>
<span class="token keyword">class</span> <span class="token class-name">DivFactory</span> <span class="token keyword">implements</span> <span class="token class-name">OperationFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Operation</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Div</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【Client 角色】</p><p>与简单工厂模式中无需关注具体创建不同，工厂模式中需要指定具体工厂，以负责生产具体对应的产品。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Client 角色，需要指定具体工厂，以负责生产具体产品</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> factoryMethodPattern <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OperationFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Operation</span> oper <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oper<span class="token punctuation">.</span>numA <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        oper<span class="token punctuation">.</span>numB <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> result <span class="token operator">=</span> oper<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与其他模式的关系" tabindex="-1"><a class="header-anchor" href="#与其他模式的关系" aria-hidden="true">#</a> 与其他模式的关系</h2>`,12),O={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},A={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},S={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},q={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},D={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},W={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},L={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},I={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},U={href:"https://refactoringguru.cn/design-patterns/iterator",target:"_blank",rel:"noopener noreferrer"},N={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},R=n("em",null,"原型",-1),H={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},z={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},J={href:"https://refactoringguru.cn/design-patterns/template-method",target:"_blank",rel:"noopener noreferrer"},T=n("em",null,"工厂方法",-1),V=n("em",null,"模板方法",-1),X=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),G={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const e=o("ExternalLinkIcon"),p=o("RouterLink");return l(),i("div",null,[d,n("p",null,[s("你可以使用此方法开发其他 UI 组件。 不过， 每向对话框中添加一个新的工厂方法， 你就离"),n("a",k,[s("抽象工厂"),a(e)]),s("模式更近一步。 我们将在稍后谈到这个模式。")]),v,n("ul",null,[n("li",null,[n("a",m,[b,a(e)])]),n("li",null,[n("a",h,[g,a(e)])]),n("li",null,[n("a",f,[y,a(e)])]),n("li",null,[n("a",_,[w,a(e)])]),n("li",null,[n("a",C,[j,a(e)]),s(" （根据协议返回不同的单例对象）")]),n("li",null,[n("a",x,[B,a(e)])]),n("li",null,[n("a",E,[F,a(e)]),s(" 及其他类似的方法。")])]),M,n("p",null,[s("还是以 "),n("strong",null,[a(p,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/01.%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html"},{default:r(()=>[s("简单工厂模式")]),_:1})]),s(" 里的例子来进行说明。")]),P,n("ul",null,[n("li",null,[s("在许多设计工作的初期都会使用"),n("a",O,[s("工厂方法模式"),a(e)]),s(" （较为简单， 而且可以更方便地通过子类进行定制）， 随后演化为使用"),n("a",A,[s("抽象工厂模式"),a(e)]),s("、 "),n("a",S,[s("原型模式"),a(e)]),s("或"),n("a",q,[s("生成器模式"),a(e)]),s(" （更灵活但更加复杂）。")]),n("li",null,[n("a",D,[s("抽象工厂模式"),a(e)]),s("通常基于一组"),n("a",W,[s("工厂方法"),a(e)]),s("， 但你也可以使用"),n("a",L,[s("原型模式"),a(e)]),s("来生成这些类的方法。")]),n("li",null,[s("你可以同时使用"),n("a",I,[s("工厂方法"),a(e)]),s("和"),n("a",U,[s("迭代器模式"),a(e)]),s("来让子类集合返回不同类型的迭代器， 并使得迭代器与集合相匹配。")]),n("li",null,[n("a",N,[s("原型"),a(e)]),s("并不基于继承， 因此没有继承的缺点。 另一方面， "),R,s("需要对被复制对象进行复杂的初始化。 "),n("a",H,[s("工厂方法"),a(e)]),s("基于继承， 但是它不需要初始化步骤。")]),n("li",null,[n("a",z,[s("工厂方法"),a(e)]),s("是"),n("a",J,[s("模板方法模式"),a(e)]),s("的一种特殊形式。 同时， "),T,s("可以作为一个大型"),V,s("中的一个步骤。")])]),X,n("ul",null,[n("li",null,[n("a",G,[s("《Head First 设计模式》"),a(e)])]),n("li",null,[n("a",K,[s("《大话设计模式》"),a(e)])]),n("li",null,[n("a",Q,[s("设计模式教程"),a(e)])])])])}const an=c(u,[["render",Y],["__file","index.html.vue"]]);export{an as default};
