import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as a,c as r,a as e,b as o,d as i,e as c}from"./app-64d71392.js";const n={},s=c('<h1 id="vim-应用" tabindex="-1"><a class="header-anchor" href="#vim-应用" aria-hidden="true">#</a> Vim 应用</h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><h3 id="什么是-vim" tabindex="-1"><a class="header-anchor" href="#什么是-vim" aria-hidden="true">#</a> 什么是 vim</h3><p>Vim 是从 vi 发展出来的一个文本编辑器。代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。和 Emacs 并列成为类 Unix 系统用户最喜欢的编辑器。</p><h3 id="vim-的模式" tabindex="-1"><a class="header-anchor" href="#vim-的模式" aria-hidden="true">#</a> Vim 的模式</h3><p>基本上 vi/vim 共分为三种模式，分别是<strong>命令模式（Command mode）</strong>，<strong>插入模式（Insert mode）<strong>和</strong>底线命令模式（Last line mode）</strong>。</p><h4 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h4><p><strong>用户刚刚启动 vi/vim，便进入了命令模式。</strong></p><p>此状态下敲击键盘动作会被 Vim 识别为命令，而非输入字符。</p><h4 id="插入模式" tabindex="-1"><a class="header-anchor" href="#插入模式" aria-hidden="true">#</a> 插入模式</h4><p><strong>在命令模式下按下 <code>i</code> 就进入了输入模式。</strong></p><p>在输入模式下，你可以输入文本内容。</p><h4 id="底线命令模式" tabindex="-1"><a class="header-anchor" href="#底线命令模式" aria-hidden="true">#</a> 底线命令模式</h4><p><strong>在命令模式下按下 <code>:</code>（英文冒号）就进入了底线命令模式。</strong></p><p>底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。</p><h2 id="vim-渐进学习" tabindex="-1"><a class="header-anchor" href="#vim-渐进学习" aria-hidden="true">#</a> Vim 渐进学习</h2><h3 id="存活" tabindex="-1"><a class="header-anchor" href="#存活" aria-hidden="true">#</a> 存活</h3>',17),u={href:"http://www.vim.org/",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"启动 vim",-1),p=e("li",null,"**什么也别干！**请先阅读",-1),g=c('<p>当你安装好一个编辑器后，你一定会想在其中输入点什么东西，然后看看这个编辑器是什么样子。但 vim 不是这样的，请按照下面的命令操作：</p><ul><li>启 动 Vim 后，vim 在 <em>Normal</em> 模式下。</li><li>让我们进入 <em>Insert</em> 模式，请按下键 i 。(注：你会看到 vim 左下角有一个–insert–字样，表示，你可以以插入的方式输入了）</li><li>此时，你可以输入文本了，就像你用“记事本”一样。</li><li>如果你想返回 <em>Normal</em> 模式，请按 <code>ESC</code> 键。</li></ul><p>现在，你知道如何在 <em>Insert</em> 和 <em>Normal</em> 模式下切换了。下面是一些命令，可以让你在 <em>Normal</em> 模式下幸存下来：</p><blockquote><ul><li><code>i</code> → <em>Insert</em> 模式，按 <code>ESC</code> 回到 <em>Normal</em> 模式.</li><li><code>x</code> → 删当前光标所在的一个字符。</li><li><code>:wq</code> → 存盘 + 退出 (<code>:w</code> 存盘, <code>:q</code> 退出) （注：:w 后可以跟文件名）</li><li><code>dd</code> → 删除当前行，并把删除的行存到剪贴板里</li><li><code>p</code> → 粘贴剪贴板</li></ul><p><strong>推荐</strong></p><ul><li><code>hjkl</code> (强例推荐使用其移动光标，但不必需) → 你也可以使用光标键 (←↓↑→). 注: <code>j</code> 就像下箭头。</li><li><code>:help &lt;command&gt;</code> → 显示相关命令的帮助。你也可以就输入 <code>:help</code> 而不跟命令。（注：退出帮助需要输入:q）</li></ul></blockquote><p>你能在 vim 幸存下来只需要上述的那 5 个命令，你就可以编辑文本了，你一定要把这些命令练成一种下意识的状态。于是你就可以开始进阶到第二级了。</p><p>当是，在你进入第二级时，需要再说一下 <em>Normal</em> 模式。在一般的编辑器下，当你需要 copy 一段文字的时候，你需要使用 <code>Ctrl</code> 键，比如：<code>Ctrl-C</code>。也就是说，<code>Ctrl</code> 键就好像功能键一样，当你按下了功能键 <code>Ctrl</code> 后，C 就不在是 C 了，而且就是一个命令或是一个快键键了，<strong>在 vim 的 Normal 模式下，所有的键都是功能键</strong>。这个你需要知道。</p><blockquote><p><strong>标记</strong></p><ul><li>下面的文字中，如果是 <code>Ctrl-λ</code>我会写成 <code>&lt;C-λ&gt;</code>.</li><li>以 <code>:</code> 开始的命令你需要输入 <code>&lt;enter&gt;</code>回车，例如 — 如果我写成 <code>:q</code> 也就是说你要输入 <code>:q&lt;enter&gt;</code>.</li></ul></blockquote><h3 id="感觉良好" tabindex="-1"><a class="header-anchor" href="#感觉良好" aria-hidden="true">#</a> 感觉良好</h3><p>上面的那些命令只能让你存活下来，现在是时候学习一些更多的命令了，下面是我的建议：（注：所有的命令都需要在 Normal 模式下使用，如果你不知道现在在什么样的模式，你就狂按几次 ESC 键）</p><ol><li><p>各种插入模式</p><blockquote><ul><li><code>a</code> → 在光标后插入</li><li><code>o</code> → 在当前行后插入一个新行</li><li><code>O</code> → 在当前行前插入一个新行</li><li><code>cw</code> → 替换从光标所在位置后到一个单词结尾的字符</li></ul></blockquote></li><li><p>简单的移动光标</p><blockquote><ul><li><code>0</code> → 数字零，到行头</li><li><code>^</code> → 到本行第一个不是 blank 字符的位置（所谓 blank 字符就是空格，tab，换行，回车等）</li><li><code>$</code> → 到本行行尾</li><li><code>g_</code> → 到本行最后一个不是 blank 字符的位置。</li><li><code>/pattern</code> → 搜索 <code>pattern</code> 的字符串（注：如果搜索出多个匹配，可按 n 键到下一个）</li></ul></blockquote></li><li><p>拷贝/粘贴</p><p>（注：p/P 都可以，p 是表示在当前位置之后，P 表示在当前位置之前）</p><blockquote><ul><li><code>P</code> → 粘贴</li><li><code>yy</code> → 拷贝当前行当行于 <code>ddP</code></li></ul></blockquote></li><li><p>Undo/Redo</p><blockquote><ul><li><code>u</code> → undo</li><li><code>&lt;C-r&gt;</code> → redo</li></ul></blockquote></li><li><p>打开/保存/退出/改变文件</p><p>(Buffer)</p><blockquote><ul><li><code>:e &lt;path/to/file&gt;</code> → 打开一个文件</li><li><code>:w</code> → 存盘</li><li><code>:saveas &lt;path/to/file&gt;</code> → 另存为 <code>&lt;path/to/file&gt;</code></li><li><code>:x</code>， <code>ZZ</code> 或 <code>:wq</code> → 保存并退出 (<code>:x</code> 表示仅在需要时保存，ZZ 不需要输入冒号并回车)</li><li><code>:q!</code> → 退出不保存 <code>:qa!</code> 强行退出所有的正在编辑的文件，就算别的文件有更改。</li><li><code>:bn</code> 和 <code>:bp</code> → 你可以同时打开很多文件，使用这两个命令来切换下一个或上一个文件。（注：我喜欢使用:n 到下一个文件）</li></ul></blockquote></li></ol><p>花点时间熟悉一下上面的命令，一旦你掌握他们了，你就几乎可以干其它编辑器都能干的事了。但是到现在为止，你还是觉得使用 vim 还是有点笨拙，不过没关系，你可以进阶到第三级了。</p><h3 id="更好-更强-更快" tabindex="-1"><a class="header-anchor" href="#更好-更强-更快" aria-hidden="true">#</a> 更好，更强，更快</h3><p>先恭喜你！你干的很不错。我们可以开始一些更为有趣的事了。在第三级，我们只谈那些和 vi 可以兼容的命令。</p><h4 id="更好" tabindex="-1"><a class="header-anchor" href="#更好" aria-hidden="true">#</a> 更好</h4><p>下面，让我们看一下 vim 是怎么重复自己的：1515G</p><ol><li><code>.</code> → (小数点) 可以重复上一次的命令</li><li><code>N&lt;command&gt;</code> → 重复某个命令 N 次</li></ol><p>下面是一个示例，找开一个文件你可以试试下面的命令：</p><blockquote><ul><li><code>2dd</code> → 删除 2 行</li><li><code>3p</code> → 粘贴文本 3 次</li><li><code>100idesu [ESC]</code> → 会写下 “desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu “</li><li><code>.</code> → 重复上一个命令—— 100 “desu “.</li><li><code>3.</code> → 重复 3 次 “desu” (注意：不是 300，你看，VIM 多聪明啊).</li></ul></blockquote><h4 id="更强" tabindex="-1"><a class="header-anchor" href="#更强" aria-hidden="true">#</a> 更强</h4><p>你要让你的光标移动更有效率，你一定要了解下面的这些命令，<strong>千万别跳过</strong>。</p><ol><li><p>N<code>G</code> → 到第 N 行 （注：注意命令中的 G 是大写的，另我一般使用 : N 到第 N 行，如 :137 到第 137 行）</p></li><li><p><code>gg</code> → 到第一行。（注：相当于 1G，或 :1）</p></li><li><p><code>G</code> → 到最后一行。</p></li><li><p>按单词移动：</p><blockquote><ol><li><code>w</code> → 到下一个单词的开头。</li><li><code>e</code> → 到下一个单词的结尾。</li></ol><p>&gt; 如果你认为单词是由默认方式，那么就用小写的 e 和 w。默认上来说，一个单词由字母，数字和下划线组成（注：程序变量）</p><p>&gt; 如果你认为单词是由 blank 字符分隔符，那么你需要使用大写的 E 和 W。（注：程序语句）</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-46f752c581d79057.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></blockquote></li></ol><p>下面，让我来说说最强的光标移动：</p><blockquote><ul><li><code>%</code> : 匹配括号移动，包括 <code>(</code>, <code>{</code>, <code>[</code>. （注：你需要把光标先移到括号上）</li><li><code>*</code> 和 <code>#</code>: 匹配光标当前所在的单词，移动光标到下一个（或上一个）匹配单词（*是下一个，#是上一个）</li></ul></blockquote><p>相信我，上面这三个命令对程序员来说是相当强大的。</p><h4 id="更快" tabindex="-1"><a class="header-anchor" href="#更快" aria-hidden="true">#</a> 更快</h4><p>你一定要记住光标的移动，因为很多命令都可以和这些移动光标的命令连动。很多命令都可以如下来干：</p><p><code>&lt;start position&gt;&lt;command&gt;&lt;end position&gt;</code></p><p>例如 <code>0y$</code> 命令意味着：</p><ul><li><code>0</code> → 先到行头</li><li><code>y</code> → 从这里开始拷贝</li><li><code>$</code> → 拷贝到本行最后一个字符</li></ul><p>你可可以输入 <code>ye</code>，从当前位置拷贝到本单词的最后一个字符。</p><p>你也可以输入 <code>y2/foo</code> 来拷贝 2 个 “foo” 之间的字符串。</p><p>还有很多时间并不一定你就一定要按 y 才会拷贝，下面的命令也会被拷贝：</p><ul><li><code>d</code> (删除 )</li><li><code>v</code> (可视化的选择)</li><li><code>gU</code> (变大写)</li><li><code>gu</code> (变小写)</li><li>等等</li></ul><p>（注：可视化选择是一个很有意思的命令，你可以先按 v，然后移动光标，你就会看到文本被选择，然后，你可能 d，也可 y，也可以变大写等）</p><h3 id="vim-超能力" tabindex="-1"><a class="header-anchor" href="#vim-超能力" aria-hidden="true">#</a> Vim 超能力</h3><p>你只需要掌握前面的命令，你就可以很舒服的使用 VIM 了。但是，现在，我们向你介绍的是 VIM 杀手级的功能。下面这些功能是我只用 vim 的原因。</p><h4 id="在当前行上移动光标-0-fftt" tabindex="-1"><a class="header-anchor" href="#在当前行上移动光标-0-fftt" aria-hidden="true">#</a> 在当前行上移动光标: <code>0</code> <code>^</code> <code>####</code>f<code>F</code>t<code>T</code>,``;`</h4><blockquote><ul><li><code>0</code> → 到行头</li><li><code>^</code> → 到本行的第一个非 blank 字符</li><li><code>$</code> → 到行尾</li><li><code>g_</code> → 到本行最后一个不是 blank 字符的位置。</li><li><code>fa</code> → 到下一个为 a 的字符处，你也可以 fs 到下一个为 s 的字符。</li><li><code>t,</code> → 到逗号前的第一个字符。逗号可以变成其它字符。</li><li><code>3fa</code> → 在当前行查找第三个出现的 a。</li><li><code>F</code> 和 <code>T</code> → 和 <code>f</code> 和 <code>t</code> 一样，只不过是相反方向。<br><img src="http://upload-images.jianshu.io/upload_images/3101171-00835b8316330c58.jpg" alt="img" loading="lazy"></li></ul></blockquote><p>还有一个很有用的命令是 <code>dt&quot;</code> → 删除所有的内容，直到遇到双引号—— <code>&quot;。</code></p><h4 id="区域选择-action-a-object-或-action-i-object" tabindex="-1"><a class="header-anchor" href="#区域选择-action-a-object-或-action-i-object" aria-hidden="true">#</a> 区域选择 <code>&lt;action&gt;a&lt;object&gt;</code> 或 <code>&lt;action&gt;i&lt;object&gt;</code></h4><p>在 visual 模式下，这些命令很强大，其命令格式为</p><p><code>&lt;action&gt;a&lt;object&gt;</code> 和 <code>&lt;action&gt;i&lt;object&gt;</code></p><ul><li>action 可以是任何的命令，如 <code>d</code> (删除), <code>y</code> (拷贝), <code>v</code> (可以视模式选择)。</li><li>object 可能是： <code>w</code> 一个单词， <code>W</code> 一个以空格为分隔的单词， <code>s</code> 一个句字， <code>p</code> 一个段落。也可以是一个特别的字符：<code>&quot;、</code> <code>&#39;、</code> <code>)、</code> <code>}、</code> <code>]。</code></li></ul><p>假设你有一个字符串 <code>(map (+) (&quot;foo&quot;))</code>.而光标键在第一个 <code>o</code>的位置。</p><blockquote><ul><li><code>vi&quot;</code> → 会选择 <code>foo</code>.</li><li><code>va&quot;</code> → 会选择 <code>&quot;foo&quot;</code>.</li><li><code>vi)</code> → 会选择 <code>&quot;foo&quot;</code>.</li><li><code>va)</code> → 会选择<code>(&quot;foo&quot;)</code>.</li><li><code>v2i)</code> → 会选择 <code>map (+) (&quot;foo&quot;)</code></li><li><code>v2a)</code> → 会选择 <code>(map (+) (&quot;foo&quot;))</code></li></ul></blockquote><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-0b109d66a6111c83.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="块操作-c-v" tabindex="-1"><a class="header-anchor" href="#块操作-c-v" aria-hidden="true">#</a> 块操作: <code>&lt;C-v&gt;</code></h4><p>块操作，典型的操作： <code>0 &lt;C-v&gt; &lt;C-d&gt; I-- [ESC]</code></p><ul><li><code>^</code> → 到行头</li><li><code>&lt;C-v&gt;</code> → 开始块操作</li><li><code>&lt;C-d&gt;</code> → 向下移动 (你也可以使用 hjkl 来移动光标，或是使用%，或是别的)</li><li><code>I-- [ESC]</code> → I 是插入，插入“<code>--</code>”，按 ESC 键来为每一行生效。</li></ul><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-8b093a0f65707949.gif?imageMogr2/auto-orient/strip" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 Windows 下的 vim，你需要使用 <code>&lt;C-q&gt;</code> 而不是 <code>&lt;C-v&gt;</code> ，<code>&lt;C-v&gt;</code> 是拷贝剪贴板。</p><h4 id="自动提示-c-n-和-c-p" tabindex="-1"><a class="header-anchor" href="#自动提示-c-n-和-c-p" aria-hidden="true">#</a> 自动提示： <code>&lt;C-n&gt;</code> 和 <code>&lt;C-p&gt;</code></h4><p>在 Insert 模式下，你可以输入一个词的开头，然后按 <code>&lt;C-p&gt;或是&lt;C-n&gt;，自动补齐功能就出现了……</code></p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-e2ae877e67880ff7.gif?imageMogr2/auto-orient/strip" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="宏录制-qa-操作序列-q-a" tabindex="-1"><a class="header-anchor" href="#宏录制-qa-操作序列-q-a" aria-hidden="true">#</a> 宏录制： <code>qa</code> 操作序列 <code>q</code>, <code>@a</code>, <code>@@</code></h4><ul><li><code>qa</code> 把你的操作记录在寄存器 <code>a。</code></li><li>于是 <code>@a</code> 会 replay 被录制的宏。</li><li><code>@@</code> 是一个快捷键用来 replay 最新录制的宏。</li></ul><blockquote><p><strong>示例</strong></p><p>在一个只有一行且这一行只有“1”的文本中，键入如下命令：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>qaYp&lt;C-a&gt;q\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>→</p><ul><li><code>qa</code> 开始录制</li><li><code>Yp</code> 复制行.</li><li><code>&lt;C-a&gt;</code> 增加 1.</li><li><code>q</code> 停止录制.</li></ul></li><li><p><code>@a</code> → 在 1 下面写下 2</p></li><li><p><code>@@</code> → 在 2 正面写下 3</p></li><li><p>现在做 <code>100@@</code> 会创建新的 100 行，并把数据增加到 103.</p></li></ul></blockquote><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-f1889f8bca723964.gif?imageMogr2/auto-orient/strip" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="可视化选择-v-v-c-v" tabindex="-1"><a class="header-anchor" href="#可视化选择-v-v-c-v" aria-hidden="true">#</a> 可视化选择： <code>v</code>,<code>V</code>,<code>&lt;C-v&gt;</code></h4><p>前面，我们看到了 <code>&lt;C-v&gt;</code>的示例 （在 Windows 下应该是 <code>&lt;C-q&gt;</code>），我们可以使用 <code>v</code> 和 <code>V</code>。一但被选好了，你可以做下面的事：</p><ul><li><code>J</code> → 把所有的行连接起来（变成一行）</li><li><code>&lt;</code> 或 <code>&gt;</code> → 左右缩进</li><li><code>=</code> → 自动给缩进 （注：这个功能相当强大，我太喜欢了）</li></ul><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-fe1e19983fca213f.gif?imageMogr2/auto-orient/strip" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在所有被选择的行后加上点东西：</p><ul><li><code>&lt;C-v&gt;</code></li><li>选中相关的行 (可使用 <code>j</code> 或 <code>&lt;C-d&gt;</code> 或是 <code>/pattern</code> 或是 <code>%</code> 等……)</li><li><code>$</code> 到行最后</li><li><code>A</code>, 输入字符串，按 <code>ESC。</code></li></ul><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-b192601247334c4e.gif?imageMogr2/auto-orient/strip" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="分屏-split-和-vsplit" tabindex="-1"><a class="header-anchor" href="#分屏-split-和-vsplit" aria-hidden="true">#</a> 分屏: <code>:split</code> 和 <code>vsplit</code>.</h4>',66),m=e("code",null,":help split",-1),f={href:"https://coolshell.cn/articles/1679.html",target:"_blank",rel:"noopener noreferrer"},b=c('<blockquote><ul><li><code>:split</code> → 创建分屏 (<code>:vsplit</code>创建垂直分屏)</li><li><code>&lt;C-w&gt;&lt;dir&gt;</code> : dir 就是方向，可以是 <code>hjkl</code> 或是 ←↓↑→ 中的一个，其用来切换分屏。</li><li><code>&lt;C-w&gt;_</code> (或 <code>&lt;C-w&gt;|</code>) : 最大化尺寸 (<code>&lt;C-w&gt;</code>| 垂直分屏)</li><li><code>&lt;C-w&gt;+</code> (或 <code>&lt;C-w&gt;-</code>) : 增加尺寸</li></ul></blockquote><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-f329d01e299cb366.gif?imageMogr2/auto-orient/strip" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="vim-cheat-sheet" tabindex="-1"><a class="header-anchor" href="#vim-cheat-sheet" aria-hidden="true">#</a> Vim Cheat Sheet</h2>',3),_={href:"http://cenalulu.github.io/linux/all-vim-cheatsheat/",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"经典版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#经典版","aria-hidden":"true"},"#"),o(" 经典版")],-1),x={href:"http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html",target:"_blank",rel:"noopener noreferrer"},q={href:"http://blog.ngedit.com/vi-vim-cheat-sheet-sch.gif",target:"_blank",rel:"noopener noreferrer"},k=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/os/linux/vim/vim-cheat-sheet.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),C=e("h3",{id:"入门版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#入门版","aria-hidden":"true"},"#"),o(" 入门版")],-1),w={href:"https://github.com/ahrencode/Miscellaneous",target:"_blank",rel:"noopener noreferrer"},y=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/os/linux/vim/basic-vim-cheat-sheet.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),j=e("h3",{id:"进阶版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#进阶版","aria-hidden":"true"},"#"),o(" 进阶版")],-1),V={href:"http://michael.peopleofhonoronly.com/vim/",target:"_blank",rel:"noopener noreferrer"},I=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/os/linux/vim/vim-cheat-sheet-for-programmers.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),N=e("h3",{id:"增强版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#增强版","aria-hidden":"true"},"#"),o(" 增强版")],-1),z={href:"http://vimcheatsheet.com/",target:"_blank",rel:"noopener noreferrer"},E=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/os/linux/vim/vim-cheat-sheet-02.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),M=e("h3",{id:"文字版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文字版","aria-hidden":"true"},"#"),o(" 文字版")],-1),S={href:"http://tnerual.eriogerg.free.fr/vimqrc.pdf",target:"_blank",rel:"noopener noreferrer"},G=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/os/linux/vim/vim-cheat-sheet-text-01.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),P=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/os/linux/vim/vim-cheat-sheet-text-02.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),$=e("h2",{id:"资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),o(" 资料")],-1),B={href:"https://coolshell.cn/articles/5426.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://vim.sourceforge.io/docs.php",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/mhinz/vim-galore",target:"_blank",rel:"noopener noreferrer"},L={href:"http://www.jianshu.com/p/bcbe916f97e1",target:"_blank",rel:"noopener noreferrer"};function T(U,Y){const d=t("ExternalLinkIcon");return a(),r("div",null,[s,e("ol",null,[e("li",null,[o("安装 "),e("a",u,[o("vim"),i(d)])]),h,p]),g,e("p",null,[o("下面是主要的命令，你可以使用 VIM 的帮助 "),m,o(". 你可以参考本站以前的一篇文章"),e("a",f,[o("VIM 分屏"),i(d)]),o("。")]),b,e("blockquote",null,[e("p",null,[o("本节内容的原文地址："),e("a",_,[o("http://cenalulu.github.io/linux/all-vim-cheatsheat/"),i(d)])])]),v,e("p",null,[o("下面这个键位图应该是大家最常看见的经典版了。其实这个版本是一系列的入门教程键位图的组合结果。要查看不同编辑模式下的键位图，可以看"),e("a",x,[o("这里打包下载"),i(d)])]),e("p",null,[o("此外，"),e("a",q,[o("这里"),i(d)]),o("还有简体中文版。")]),k,C,e("p",null,[o("基本操作的入门版。"),e("a",w,[o("原版出处"),i(d)]),o("还有 keynote 版本可供 DIY 以及其他相关有用的 cheatsheet。")]),y,j,e("p",null,[o("下图是 300DPI 的超清大图，另外"),e("a",V,[o("查看原文"),i(d)]),o("还有更多版本：黑白，低分辨率，色盲等")]),I,N,e("p",null,[o("下图是一个更新时间较新的现代版，含有的信息也更丰富。"),e("a",z,[o("原文链接"),i(d)])]),E,M,e("p",null,[e("a",S,[o("原文链接"),i(d)])]),G,P,$,e("ul",null,[e("li",null,[e("a",B,[o("简明 VIM 练级攻略"),i(d)]),o(" ，Vim 渐进学习内容来源于这篇文章，作为 Vim 新手，我觉得入门效果很好。")]),e("li",null,[e("a",W,[o("vim 官方文档"),i(d)])]),e("li",null,[e("a",Z,[o("vim-galore"),i(d)])]),e("li",null,[e("a",L,[o("Vim 入门基础"),i(d)])])])])}const A=l(n,[["render",T],["__file","index.html.vue"]]);export{A as default};
