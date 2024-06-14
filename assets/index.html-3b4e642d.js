import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as a,d as t,e}from"./app-c4cc7cd5.js";const i={},u=n("h1",{id:"zxing-快速入门",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#zxing-快速入门","aria-hidden":"true"},"#"),a(" ZXing 快速入门")],-1),k=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),a(" 简介")],-1),r=n("p",null,[n("code",null,"ZXing"),a(" 是一个开源 Java 类库用于解析多种格式的 1D/2D 条形码。目标是能够对 QR 编码、Data Matrix、UPC 的 1D 条形码进行解码。 其提供了多种平台下的客户端包括：J2ME、J2SE 和 Android。")],-1),d={href:"https://github.com/zxing/zxing",target:"_blank",rel:"noopener noreferrer"},g=n("u",null,"ZXing github 仓库",-1),m=e(`<h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><p><strong><em>本例演示如何在一个非 android 的 Java 项目中使用 ZXing 来生成、解析二维码图片。</em></strong></p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>maven 项目只需引入依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.google.zxing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.google.zxing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javase<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h={href:"https://github.com/zxing/zxing/releases",target:"_blank",rel:"noopener noreferrer"},v=n("u",null,"下载地址",-1),b=e(`<h3 id="生成二维码图片" tabindex="-1"><a class="header-anchor" href="#生成二维码图片" aria-hidden="true">#</a> 生成二维码图片</h3><p>ZXing 生成二维码图片有以下步骤：</p><ol><li><code>com.google.zxing.MultiFormatWriter</code> 根据内容以及图像编码参数生成图像 2D 矩阵。</li><li>​ <code>com.google.zxing.client.j2se.MatrixToImageWriter</code> 根据图像矩阵生成图片文件或图片缓存 <code>BufferedImage</code> 。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">String</span> filepath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">WriterException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
 <span class="token keyword">int</span> width <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> height <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
 <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EncodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> encodeHints <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EncodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 encodeHints<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">EncodeHintType</span><span class="token punctuation">.</span><span class="token constant">CHARACTER_SET</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">BitMatrix</span> bitMatrix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MultiFormatWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token class-name">BarcodeFormat</span><span class="token punctuation">.</span><span class="token constant">QR_CODE</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> encodeHints<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">Path</span> path <span class="token operator">=</span> <span class="token class-name">FileSystems</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">MatrixToImageWriter</span><span class="token punctuation">.</span><span class="token function">writeToPath</span><span class="token punctuation">(</span>bitMatrix<span class="token punctuation">,</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析二维码图片" tabindex="-1"><a class="header-anchor" href="#解析二维码图片" aria-hidden="true">#</a> 解析二维码图片</h3><p>ZXing 解析二维码图片有以下步骤：</p><ol><li><p>使用 <code>javax.imageio.ImageIO</code> 读取图片文件，并存为一个 <code>java.awt.image.BufferedImage</code> 对象。</p></li><li><p>将 <code>java.awt.image.BufferedImage</code> 转换为 ZXing 能识别的 <code>com.google.zxing.BinaryBitmap</code> 对象。</p></li><li><p><code>com.google.zxing.MultiFormatReader</code> 根据图像解码参数来解析 <code>com.google.zxing.BinaryBitmap</code> 。</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">String</span> filepath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">NotFoundException</span> <span class="token punctuation">{</span>
 <span class="token class-name">BufferedImage</span> bufferedImage <span class="token operator">=</span> <span class="token class-name">ImageIO</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">LuminanceSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedImageLuminanceSource</span><span class="token punctuation">(</span>bufferedImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">Binarizer</span> binarizer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HybridBinarizer</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">BinaryBitmap</span> bitmap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinaryBitmap</span><span class="token punctuation">(</span>binarizer<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> decodeHints <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 decodeHints<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">.</span><span class="token constant">CHARACTER_SET</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">Result</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MultiFormatReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>bitmap<span class="token punctuation">,</span> decodeHints<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),f={href:"https://github.com/dunwu/JavaParty/blob/master/toolbox/image/src/test/java/org/zp/image/QRCodeUtilTest.java",target:"_blank",rel:"noopener noreferrer"},_=n("u",null,"测试例代码",-1),x=n("p",null,"以下是一个生成的二维码图片示例：",-1),y=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/3101171-26b73730088f0ab8.png",alt:"img",tabindex:"0",loading:"lazy"}),n("figcaption",null,"img")],-1),w=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),a(" 参考")],-1),I={href:"https://github.com/zxing/zxing",target:"_blank",rel:"noopener noreferrer"};function z(B,j){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,k,r,n("p",null,[a("官网："),n("a",d,[g,t(s)])]),m,n("p",null,[a("如果非 maven 项目，就去官网下载发布版本："),n("a",h,[v,t(s)])]),b,n("p",null,[a("完整参考示例："),n("a",f,[_,t(s)])]),x,y,w,n("p",null,[n("a",I,[a("ZXing github 仓库"),t(s)])])])}const E=p(i,[["render",z],["__file","index.html.vue"]]);export{E as default};
