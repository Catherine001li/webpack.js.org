(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{324:function(n,s,a){"use strict";a.r(s),s.default='<p>可以通过配置 <code>output</code> 选项，告知 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个 <code>entry</code> 起点，但只能指定一个 <code>output</code> 配置。</p>\n<h2 id="用法">用法<a href="#%E7%94%A8%E6%B3%95" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>在 webpack 配置中，<code>output</code> 属性的最低要求是，将它的值设置为一个对象，然后为将输出文件的文件名配置为一个 <a href="/configuration/output/#outputfilename"><code>output.filename</code></a>：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>此配置将一个单独的 <code>bundle.js</code> 文件输出到 <code>dist</code> 目录中。</p>\n<h2 id="多个入口起点">多个入口起点<a href="#%E5%A4%9A%E4%B8%AA%E5%85%A5%E5%8F%A3%E8%B5%B7%E7%82%B9" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>如果配置中创建出多于一个 "chunk"（例如，使用多个入口起点或使用像 CommonsChunkPlugin 这样的插件），则应该使用 <a href="/configuration/output#output-filename">占位符(substitutions)</a> 来确保每个文件具有唯一的名称。</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">,</span>\n    search<span class="token punctuation">:</span> <span class="token string">\'./src/search.js\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'[name].js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> __dirname <span class="token operator">+</span> <span class="token string">\'/dist\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 写入到硬盘：./dist/app.js, ./dist/search.js</span></code></pre>\n<h2 id="高级进阶">高级进阶<a href="#%E9%AB%98%E7%BA%A7%E8%BF%9B%E9%98%B6" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>以下是对资源使用 CDN 和 hash 的复杂示例：</p>\n<p><strong>config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'/home/proj/cdn/assets/[hash]\'</span><span class="token punctuation">,</span>\n    publicPath<span class="token punctuation">:</span> <span class="token string">\'https://cdn.example.com/assets/[hash]/\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>如果在编译时，不知道最终输出文件的 <code>publicPath</code> 是什么地址，则可以将其留空，并且在运行时通过入口起点文件中的 <code>__webpack_public_path__</code> 动态设置。</p>\n<pre><code class="hljs language-javascript">__webpack_public_path__ <span class="token operator">=</span> myRuntimePublicPath<span class="token punctuation">;</span>\n\n<span class="token comment">// 应用程序入口的其余部分</span></code></pre>\n'}}]);