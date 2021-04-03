import{r as n,o as a,c as s,b as t,w as o,d as e,a as p}from"./app.839cab67.js";const r='{"title":"Pathfinding","description":"","frontmatter":{"layout":"page","title":"Pathfinding","parent":"Tutorials"},"headers":[{"level":2,"title":"Using marker entities","slug":"using-marker-entities"},{"level":2,"title":"Pathfinding explained","slug":"pathfinding-explained"}],"relativePath":"tutorials/pathfinding-entities.md","lastUpdated":1617465113471}',c={},u=t("h1",{id:"pathfinding"},[t("a",{class:"header-anchor",href:"#pathfinding","aria-hidden":"true"},"#"),e(" Pathfinding")],-1),i=e("Beginner"),l=p('<p>Making entities go places is one of the most common requests for Marketplace content. This tutorial will show you the most common way to do pathfinding.</p><h2 id="using-marker-entities"><a class="header-anchor" href="#using-marker-entities" aria-hidden="true">#</a> Using marker entities</h2><p>The best way to do pathfinding uses a second entity, which the first entity will be attracted to. I am going to call this secondary entity the <strong>marker</strong>. If you are confused on how to create a marker, go review the &quot;Dummy Entities&quot; section.</p><h2 id="pathfinding-explained"><a class="header-anchor" href="#pathfinding-explained" aria-hidden="true">#</a> Pathfinding explained</h2><p>The way we are going to do pathfinding is actually fairly simple: Make our entity aggressive towards our marker, and then simply place our marker where we want our entity to path to. The hard part is knowing what components to add so we get really long-range pathing.</p><h1 id="the-json"><a class="header-anchor" href="#the-json" aria-hidden="true">#</a> The JSON</h1><p>These components can be edited as needed to create good pathing. Make sure to update the <code>nearest_attackable_target</code> to point to your marker entity. This takes a <code>family_type</code>, so you should set one of those on your marker.</p><p>The attack radius in <code>ranged_attack</code> can be updated. This number sets how close the entity will pathfind to the marker before stopping. A value of 0 will cause the entity to pathfind as close as possible.</p><div class="language-json"><pre><code><span class="token property">&quot;minecraft:movement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;minecraft:behavior.nearest_attackable_target&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;reselect_targets&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;target_search_height&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;within_radius&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;max_dist&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;must_see&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;entity_types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;an_entity&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;max_dist&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;minecraft:attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;minecraft:behavior.ranged_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;attack_radius&quot;</span><span class="token operator">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;minecraft:movement.basic&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;minecraft:follow_range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;minecraft:navigation.generic&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;can_path_over_water&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;avoid_water&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;can_pass_doors&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;can_walk&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;avoid_damage_blocks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;can_open_doors&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;minecraft:jump.static&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><h1 id="detecting-a-reached-waypoint"><a class="header-anchor" href="#detecting-a-reached-waypoint" aria-hidden="true">#</a> Detecting a reached waypoint</h1><p>You can use <code>minecraft:entity_sensor</code> to detect when you have reached the marker entity.</p>',11);c.render=function(e,p,r,c,k,d){const h=n("Label");return a(),s("div",null,[u,t(h,{color:"green"},{default:o((()=>[i])),_:1}),l])};export default c;export{r as __pageData};