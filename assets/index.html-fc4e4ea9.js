import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as s,a as e,b as a,d as i,e as d}from"./app-64d71392.js";const c={},g={href:"https://sourcemaking.com/refactoring/smells/change-preventers",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("strong",null,"变革的障碍(Change Preventers)这组坏味道意味着：当你需要改变一处代码时，却发现不得不改变其他的地方。这使得程序开发变得复杂、代价高昂。")],-1),l=d('<h2 id="发散式变化" tabindex="-1"><a class="header-anchor" href="#发散式变化" aria-hidden="true">#</a> 发散式变化</h2><blockquote><p><code>发散式变化(Divergent Change)</code> 类似于 <code>霰弹式修改(Shotgun Surgery)</code> ，但实际上完全不同。<code>发散式变化(Divergent Change)</code> 是指一个类受多种变化的影响。<code>霰弹式修改(Shotgun Surgery)</code> 是指多种变化引发多个类相应的修改。</p></blockquote><h3 id="特征" tabindex="-1"><a class="header-anchor" href="#特征" aria-hidden="true">#</a> 特征</h3><p>你发现你想要修改一个函数，却必须要同时修改许多不相关的函数。例如，当你想要添加一个新的产品类型时，你需要同步修改对产品进行查找、显示、排序的函数。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/divergent-change-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因</h3><p>通常，这种发散式修改是由于编程结构不合理或者“复制-粘贴式编程”。</p><h3 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h3><ul><li>运用 <code>提炼类(Extract Class)</code> 拆分类的行为。</li></ul><h3 id="收益" tabindex="-1"><a class="header-anchor" href="#收益" aria-hidden="true">#</a> 收益</h3><ul><li>提高代码组织结构</li><li>减少重复代码</li></ul><h3 id="重构方法说明" tabindex="-1"><a class="header-anchor" href="#重构方法说明" aria-hidden="true">#</a> 重构方法说明</h3><h4 id="提炼类-extract-class" tabindex="-1"><a class="header-anchor" href="#提炼类-extract-class" aria-hidden="true">#</a> 提炼类(Extract Class)</h4><p><strong>问题</strong></p><p>某个类做了不止一件事。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/extract-class-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>建立一个新类，将相关的字段和函数从旧类搬移到新类。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/extract-class-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="平行继承体系" tabindex="-1"><a class="header-anchor" href="#平行继承体系" aria-hidden="true">#</a> 平行继承体系</h2><blockquote><p><code>平行继承体系(Parallel Inheritance Hierarchies)</code> 其实是 <code>霰弹式修改(Shotgun Surgery)</code> 的特殊情况。</p></blockquote><h3 id="特征-1" tabindex="-1"><a class="header-anchor" href="#特征-1" aria-hidden="true">#</a> 特征</h3><p>每当你为某个类添加一个子类，必须同时为另一个类相应添加一个子类。这种情况的典型特征是：某个继承体系的类名前缀或类名后缀完全相同。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/parallel-inheritance-hierarchies-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="问题原因-1" tabindex="-1"><a class="header-anchor" href="#问题原因-1" aria-hidden="true">#</a> 问题原因</h3><p>起初的继承体系很小，随着不断添加新类，继承体系越来越大，也越来越难修改。</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><ul><li>一般策略是：让一个继承体系的实例引用另一个继承体系的实例。如果再接再厉运用 <code>搬移函数(Move Method)</code> 和 <code>搬移字段(Move Field)</code>，就可以消除引用端的继承体系。</li></ul><h3 id="收益-1" tabindex="-1"><a class="header-anchor" href="#收益-1" aria-hidden="true">#</a> 收益</h3><ul><li>更好的代码组织</li><li>减少重复代码</li></ul><h3 id="何时忽略" tabindex="-1"><a class="header-anchor" href="#何时忽略" aria-hidden="true">#</a> 何时忽略</h3><ul><li>有时具有并行类层次结构只是一种为了避免程序体系结构更混乱的方法。如果你发现尝试消除平行继承体系导致代码更加丑陋，那么你应该回滚你的修改。</li></ul><h3 id="重构方法说明-1" tabindex="-1"><a class="header-anchor" href="#重构方法说明-1" aria-hidden="true">#</a> 重构方法说明</h3><h4 id="搬移函数-move-method" tabindex="-1"><a class="header-anchor" href="#搬移函数-move-method" aria-hidden="true">#</a> 搬移函数(Move Method)</h4><p><strong>问题</strong></p><p>你的程序中，有个函数与其所驻类之外的另一个类进行更多交流：调用后者，或被后者调用。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-method-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在该函数最常引用的类中建立一个有着类似行为的新函数。将旧函数变成一个单纯的委托函数，或是旧函数完全移除。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-method-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="搬移字段-move-field" tabindex="-1"><a class="header-anchor" href="#搬移字段-move-field" aria-hidden="true">#</a> 搬移字段(Move Field)</h4><p><strong>问题</strong></p><p>在你的程序中，某个字段被其所驻类之外的另一个类更多地用到。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-field-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在目标类新建一个字段，修改源字段的所有用户，令他们改用新字段。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-field-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="霰弹式修改" tabindex="-1"><a class="header-anchor" href="#霰弹式修改" aria-hidden="true">#</a> 霰弹式修改</h2><blockquote><p><code>霰弹式修改(Shotgun Surgery)</code> 类似于 <code>发散式变化(Divergent Change)</code> ，但实际上完全不同。<code>发散式变化(Divergent Change)</code> 是指一个类受多种变化的影响。<code>霰弹式修改(Shotgun Surgery)</code> 是指多种变化引发多个类相应的修改。</p></blockquote><h3 id="特征-2" tabindex="-1"><a class="header-anchor" href="#特征-2" aria-hidden="true">#</a> 特征</h3><p>任何修改都需要在许多不同类上做小幅度修改。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/shotgun-surgery-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="问题原因-2" tabindex="-1"><a class="header-anchor" href="#问题原因-2" aria-hidden="true">#</a> 问题原因</h3><p>一个单一的职责被拆分成大量的类。</p><h3 id="解决方法-1" tabindex="-1"><a class="header-anchor" href="#解决方法-1" aria-hidden="true">#</a> 解决方法</h3><ul><li>运用<code>搬移函数(Move Method)</code> 和 <code>搬移字段(Move Field)</code> 来搬移不同类中相同的行为到一个独立类中。如果没有适合存放搬移函数或字段的类，就创建一个新类。</li><li>通常，可以运用 <code>将类内联化(Inline Class)</code> 将一些列相关行为放进同一个类。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/shotgun-surgery-2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="收益-2" tabindex="-1"><a class="header-anchor" href="#收益-2" aria-hidden="true">#</a> 收益</h3><ul><li>更好的代码组织</li><li>减少重复代码</li><li>更易维护</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/shotgun-surgery-3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="重构方法说明-2" tabindex="-1"><a class="header-anchor" href="#重构方法说明-2" aria-hidden="true">#</a> 重构方法说明</h3><h4 id="搬移函数-move-method-1" tabindex="-1"><a class="header-anchor" href="#搬移函数-move-method-1" aria-hidden="true">#</a> 搬移函数(Move Method)</h4><p><strong>问题</strong></p><p>你的程序中，有个函数与其所驻类之外的另一个类进行更多交流：调用后者，或被后者调用。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-method-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在该函数最常引用的类中建立一个有着类似行为的新函数。将旧函数变成一个单纯的委托函数，或是旧函数完全移除。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-method-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="搬移字段-move-field-1" tabindex="-1"><a class="header-anchor" href="#搬移字段-move-field-1" aria-hidden="true">#</a> 搬移字段(Move Field)</h4><p><strong>问题</strong></p><p>在你的程序中，某个字段被其所驻类之外的另一个类更多地用到。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-field-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在目标类新建一个字段，修改源字段的所有用户，令他们改用新字段。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-field-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="将类内联化-inline-class" tabindex="-1"><a class="header-anchor" href="#将类内联化-inline-class" aria-hidden="true">#</a> 将类内联化(Inline Class)</h4><p><strong>问题</strong></p><p>某个类没有做太多事情。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/inline-class-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>将这个类的所有特性搬移到另一个类中，然后移除原类。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/inline-class-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="扩展阅读" tabindex="-1"><a class="header-anchor" href="#扩展阅读" aria-hidden="true">#</a> 扩展阅读</h2>',83),u={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E7%9A%84%E5%9D%8F%E5%91%B3%E9%81%93%E5%92%8C%E9%87%8D%E6%9E%84.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D.md",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),_={href:"https://book.douban.com/subject/4199741/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://book.douban.com/subject/4262627/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://book.douban.com/subject/1477390/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://sourcemaking.com/refactoring",target:"_blank",rel:"noopener noreferrer"};function k(A,y){const r=n("ExternalLinkIcon");return o(),s("div",null,[e("blockquote",null,[e("p",null,[a("翻译自："),e("a",g,[a("https://sourcemaking.com/refactoring/smells/change-preventers"),i(r)])]),h]),l,e("ul",null,[e("li",null,[e("a",u,[a("代码的坏味道和重构"),i(r)])]),e("li",null,[e("a",f,[a("代码坏味道之代码臃肿"),i(r)])]),e("li",null,[e("a",p,[a("代码坏味道之滥用面向对象"),i(r)])]),e("li",null,[e("a",m,[a("代码坏味道之变革的障碍"),i(r)])]),e("li",null,[e("a",b,[a("代码坏味道之非必要的"),i(r)])]),e("li",null,[e("a",E,[a("代码坏味道之耦合"),i(r)])])]),x,e("ul",null,[e("li",null,[e("a",_,[a("《代码整洁之道》"),i(r)])]),e("li",null,[e("a",w,[a("《重构 - 改善既有代码的设计》"),i(r)])]),e("li",null,[e("a",B,[a("《代码大全》"),i(r)])]),e("li",null,[e("a",v,[a("https://sourcemaking.com/refactoring"),i(r)])])])])}const F=t(c,[["render",k],["__file","index.html.vue"]]);export{F as default};
