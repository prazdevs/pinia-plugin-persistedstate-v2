import{_ as s,c as n,o as a,a as p}from"./app.bca8d31d.js";const u=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"relativePath":"guide/index.md","lastUpdated":1669480098000}'),l={name:"guide/index.md"},o=p(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is the documentation for the v2 of the plugin. If you are looking for the latest version (v3), check <a href="https://prazdevs.github.io/pinia-plugin-persistedstate/" target="_blank" rel="noreferrer">here</a>.</p></div><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>This plugin is compatible with <code>pinia^2.0.0</code>, make sure you have <a href="https://pinia.vuejs.org/getting-started.html" target="_blank" rel="noreferrer">Pinia installed</a> before proceeding. <code>pinia-plugin-persistedstate</code> comes with many features to make persistence of Pinia stores easy and configurable with:</p><ul><li>An API similar to <a href="https://github.com/robinvdvleuten/vuex-persistedstate" target="_blank" rel="noreferrer"><code>vuex-persistedstate</code></a>.</li><li>Per-store configuration.</li><li>Custom storage and custom data serializer.</li><li>Pre and post hydration hooks.</li><li>Multiple configurations per store.</li><li>Compatibility with Vue 2 and 3.</li><li>No external dependencies.</li><li>Super small (&lt;1kB gzipped).</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><ol><li><p>Install the dependency with your favorite package manager:</p><ul><li>pnpm:</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">pnpm i pinia-plugin-persistedstate</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">pnpm i pinia-plugin-persistedstate</span></span>
<span class="line"></span></code></pre></div><ul><li>npm:</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">npm i pinia-plugin-persistedstate</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">npm i pinia-plugin-persistedstate</span></span>
<span class="line"></span></code></pre></div><ul><li>yarn:</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">yarn add pinia-plugin-persistedstate</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">yarn add pinia-plugin-persistedstate</span></span>
<span class="line"></span></code></pre></div></li><li><p>Add the plugin to your pinia instance:</p></li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">createPinia</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">piniaPluginPersistedstate</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">pinia-plugin-persistedstate</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">pinia</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">createPinia</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#BD976A;">pinia</span><span style="color:#666666;">.</span><span style="color:#80A665;">use</span><span style="color:#666666;">(</span><span style="color:#BD976A;">piniaPluginPersistedstate</span><span style="color:#666666;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createPinia</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">piniaPluginPersistedstate</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia-plugin-persistedstate</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">pinia</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">createPinia</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#B07D48;">pinia</span><span style="color:#999999;">.</span><span style="color:#59873A;">use</span><span style="color:#999999;">(</span><span style="color:#B07D48;">piniaPluginPersistedstate</span><span style="color:#999999;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>When declaring your store, set the new <code>persist</code> option to <code>true</code>.</p><p><em>Using the option store syntax :</em></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#CB7676;"> const </span><span style="color:#BD976A;">useStore</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">defineStore</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">main</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#80A665;">state</span><span style="color:#666666;">:</span><span style="color:#CB7676;"> </span><span style="color:#666666;">()</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#CB7676;">    </span><span style="color:#4D9375;">return</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#CB7676;">      </span><span style="color:#B8A965;">someState</span><span style="color:#666666;">:</span><span style="color:#CB7676;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hello pinia</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#CB7676;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#B8A965;">persist</span><span style="color:#666666;">:</span><span style="color:#CB7676;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useStore</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">main</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">:</span><span style="color:#AB5959;"> </span><span style="color:#999999;">()</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">    </span><span style="color:#1E754F;">return</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">      </span><span style="color:#998418;">someState</span><span style="color:#999999;">:</span><span style="color:#AB5959;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hello pinia</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#AB5959;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#998418;">persist</span><span style="color:#999999;">:</span><span style="color:#AB5959;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><p><em>Or using the setup store syntax :</em></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#CB7676;"> const </span><span style="color:#BD976A;">useStore</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">defineStore</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">main</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#666666;">()</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#CB7676;">    const </span><span style="color:#BD976A;">someState</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">ref</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hello pinia</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#CB7676;">    </span><span style="color:#4D9375;">return</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">someState</span><span style="color:#CB7676;"> </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#CB7676;">    </span><span style="color:#B8A965;">persist</span><span style="color:#666666;">:</span><span style="color:#CB7676;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useStore</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">main</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#999999;">()</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">    const </span><span style="color:#B07D48;">someState</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hello pinia</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#AB5959;">    </span><span style="color:#1E754F;">return</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">someState</span><span style="color:#AB5959;"> </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">    </span><span style="color:#998418;">persist</span><span style="color:#999999;">:</span><span style="color:#AB5959;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">)</span></span>
<span class="line"></span></code></pre></div><p>Your whole store will now be saved with the <a href="/pinia-plugin-persistedstate-v2/guide/config.html">default persistence settings</a>.</p>`,15),e=[o];function t(r,c,i,y,A,d){return a(),n("div",null,e)}const D=s(l,[["render",t]]);export{u as __pageData,D as default};
