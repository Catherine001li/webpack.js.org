(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{306:function(e,n,o){"use strict";o.r(n),n.default='<p>This section covers all <strong>variables</strong> available in code compiled with webpack. Modules will have access to certain data from the compilation process through <code>module</code> and other variables.</p>\n<h3 id="moduleloaded-nodejs"><code>module.loaded</code> (NodeJS)<a href="#moduleloaded-nodejs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>This is <code>false</code> if the module is currently executing, and <code>true</code> if the sync execution has finished.</p>\n<h3 id="modulehot-webpack-specific"><code>module.hot</code> (webpack-specific)<a href="#modulehot-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Indicates whether or not <a href="/concepts/hot-module-replacement">Hot Module Replacement</a> is enabled and provides an interface to the process. See the <a href="/api/hot-module-replacement">HMR API page</a> for details.</p>\n<h3 id="moduleid-commonjs"><code>module.id</code> (CommonJS)<a href="#moduleid-commonjs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The ID of the current module.</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>id <span class="token operator">===</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./file.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="moduleexports-commonjs"><code>module.exports</code> (CommonJS)<a href="#moduleexports-commonjs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Defines the value that will be returned when a consumer makes a <code>require</code> call to the module (defaults to a new object).</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Do something...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>This CANNOT be used in an asynchronous function.</p>\n</blockquote>\n<h3 id="exports-commonjs"><code>exports</code> (CommonJS)<a href="#exports-commonjs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>This variable is equal to the default value of <code>module.exports</code> (i.e. an object). If <code>module.exports</code> gets overwritten, <code>exports</code> will no longer be exported.</p>\n<pre><code class="hljs language-javascript">exports<span class="token punctuation">.</span>someValue <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\nexports<span class="token punctuation">.</span>anObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n  x<span class="token punctuation">:</span> <span class="token number">123</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nexports<span class="token punctuation">.</span><span class="token function-variable function">aFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Do something</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="global-nodejs"><code>global</code> (NodeJS)<a href="#global-nodejs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>See <a href="https://nodejs.org/api/globals.html#globals_global">node.js global</a>.</p>\n<h3 id="process-nodejs"><code>process</code> (NodeJS)<a href="#process-nodejs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>See <a href="https://nodejs.org/api/process.html">node.js process</a>.</p>\n<h3 id="__dirname-nodejs"><code>__dirname</code> (NodeJS)<a href="#__dirname-nodejs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Depending on the configuration option <code>node.__dirname</code>:</p>\n<ul>\n<li><code>false</code>: Not defined</li>\n<li><code>mock</code>: equal to <code>\'/\'</code></li>\n<li><code>true</code>: <a href="https://nodejs.org/api/globals.html#globals_dirname">node.js __dirname</a></li>\n</ul>\n<p>If used inside an expression that is parsed by the Parser, the configuration option is treated as <code>true</code>.</p>\n<h3 id="__filename-nodejs"><code>__filename</code> (NodeJS)<a href="#__filename-nodejs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Depending on the configuration option <code>node.__filename</code>:</p>\n<ul>\n<li><code>false</code>: Not defined</li>\n<li><code>mock</code>: equal to <code>\'/index.js\'</code></li>\n<li><code>true</code>: <a href="https://nodejs.org/api/globals.html#globals_filename">node.js __filename</a></li>\n</ul>\n<p>If used inside an expression that is parsed by the Parser, the configuration option is treated as <code>true</code>.</p>\n<h3 id="__resourcequery-webpack-specific"><code>__resourceQuery</code> (webpack-specific)<a href="#__resourcequery-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The resource query of the current module. If the following <code>require</code> call was made, then the query string would be available in <code>file.js</code>.</p>\n<pre><code class="hljs language-javascript"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'file.js?test\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>file.js</strong></p>\n<pre><code class="hljs language-javascript">__resourceQuery <span class="token operator">===</span> <span class="token string">\'?test\'</span><span class="token punctuation">;</span></code></pre>\n<h3 id="__webpack_public_path__-webpack-specific"><code>__webpack_public_path__</code> (webpack-specific)<a href="#__webpack_public_path__-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Equals the configuration option\'s <code>output.publicPath</code>.</p>\n<h3 id="__webpack_require__-webpack-specific"><code>__webpack_require__</code> (webpack-specific)<a href="#__webpack_require__-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The raw require function. This expression isn\'t parsed by the Parser for dependencies.</p>\n<h3 id="__webpack_chunk_load__-webpack-specific"><code>__webpack_chunk_load__</code> (webpack-specific)<a href="#__webpack_chunk_load__-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The internal chunk loading function. Takes two arguments:</p>\n<ul>\n<li><code>chunkId</code> The id for the chunk to load.</li>\n<li><code>callback(require)</code> A callback function called once the chunk is loaded.</li>\n</ul>\n<h3 id="__webpack_modules__-webpack-specific"><code>__webpack_modules__</code> (webpack-specific)<a href="#__webpack_modules__-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Access to the internal object of all modules.</p>\n<h3 id="__webpack_hash__-webpack-specific"><code>__webpack_hash__</code> (webpack-specific)<a href="#__webpack_hash__-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>This variable is only available with the <code>HotModuleReplacementPlugin</code> or the <code>ExtendedAPIPlugin</code>. It provides access to the hash of the compilation.</p>\n<h3 id="__non_webpack_require__-webpack-specific"><code>__non_webpack_require__</code> (webpack-specific)<a href="#__non_webpack_require__-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Generates a <code>require</code> function that is not parsed by webpack. Can be used to do cool stuff with a global require function if available.</p>\n<h3 id="__webpack_exports_info__-webpack-specific"><code>__webpack_exports_info__</code> (webpack-specific)<a href="#__webpack_exports_info__-webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>In modules, <code>__webpack_exports_info__</code> is available to allow exports introspection:</p>\n<ul>\n<li>\n<p><code>__webpack_exports_info__</code> is always <code>true</code></p>\n</li>\n<li>\n<p><code>__webpack_exports_info__.&#x3C;exportName>.used</code> is <code>false</code> when the export is known to be unused, <code>true</code> otherwise</p>\n</li>\n<li>\n<p><code>__webpack_exports_info__.&#x3C;exportName>.useInfo</code> is</p>\n<ul>\n<li><code>false</code> when the export is known to be unused</li>\n<li><code>true</code> when the export is known to be used</li>\n<li><code>null</code> when the export usage could depend on runtime conditions</li>\n<li><code>undefined</code> when no info is available</li>\n</ul>\n</li>\n<li>\n<p><code>__webpack_exports_info__.&#x3C;exportName>.provideInfo</code> is</p>\n<ul>\n<li><code>false</code> when the export is known to be not provided</li>\n<li><code>true</code> when the export is known to be provided</li>\n<li><code>null</code> when the export provision could depend on runtime conditions</li>\n<li><code>undefined</code> when no info is available</li>\n</ul>\n</li>\n<li>\n<p>Accessing the info from nested exports is possible: i. e. <code>__webpack_exports_info__.&#x3C;exportName>.&#x3C;exportName>.&#x3C;exportName>.used</code></p>\n</li>\n</ul>\n<h3 id="debug--webpack-specific"><code>DEBUG</code>  (webpack-specific)<a href="#debug--webpack-specific" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Equals the configuration option <code>debug</code>.</p>\n'}}]);