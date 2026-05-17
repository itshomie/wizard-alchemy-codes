# Wizard Alchemy Codes 攻略站项目文档

## 1. 项目定位

本站定位为英文 SEO 小站：

```text
Wizard Alchemy Codes & Guides
```

首页主攻关键词：

```text
wizard alchemy codes
wizard alchemy codes may 2026
wizard alchemy roblox codes
wizard alchemy working codes
```

首页不是泛 Wiki，而是直接作为 codes 页面使用。导航里的 `Codes` 也直接指向 `/`，避免首页和 `/wizard-alchemy-codes/` 互相抢同一个关键词。

已加入 Cloudflare Pages 兼容重定向：

```text
/wizard-alchemy-codes/ -> / 301
```

## 2. MVP 页面范围

MVP 第一版包含 6 个核心攻略页：

```text
/                                      Wizard Alchemy Codes
/wizard-alchemy-race-tier-list/        Race Tier List
/wizard-alchemy-beginner-guide/        Beginner Guide
/wizard-alchemy-potions/               Potions Guide
/wizard-alchemy-materials/             Materials Guide
/wizard-alchemy-discord-trello-wiki/   Discord / Trello / Wiki
```

同时加入 AdSense 和站点可信度准备页面：

```text
/about/
/contact/
/privacy-policy/
/terms/
/cookie-policy/
```

## 3. 当前可用 Codes

截至 2026-05-17，MVP 只写入已确认的 active codes：

```text
WIZARD   5 Race Rerolls
RELEASE  5 Race Rerolls
```

不要为了让页面显得更丰富而编造 codes。公开搜索结果里有个别页面提到额外字符串，例如 `MACHI`，但官方 Roblox 游戏页和主流 codes 页面未稳定确认前，不应放进 active list。可以作为观察项，等实测可用后再加入。

数据文件：

```text
src/data/codes.json
```

后续更新 codes 时，优先改这个文件，不要直接在页面里散改。

## 4. MVP 内容要点

### 首页 `/`

Title：

```text
Wizard Alchemy Codes May 2026 - Working Roblox Codes
```

H1：

```text
Wizard Alchemy Codes
```

首屏必须直接显示 active codes 表格和复制按钮。不要先写长介绍。

首页包含：

- active codes 表格
- expired codes
- redeem steps
- troubleshooting
- how to get more codes
- what is Wizard Alchemy
- after redeeming codes
- more guides 内链
- update log
- FAQ schema

### Race Tier List

URL：

```text
/wizard-alchemy-race-tier-list/
```

作用：承接 codes 用户拿到 Race Rerolls 后的下一步需求。

核心内链：

```text
首页 -> Race Tier List
Race Tier List -> 首页 codes
```

### Beginner Guide

作用：承接新玩家，提升站点内容厚度。

内容路线：

```text
redeem codes -> tutorial -> materials -> potions -> spells -> rerolls
```

### Potions Guide

作用：后续长尾 SEO 重点页面。

已加入 potion 表格，后续应扩展为：

```text
/wizard-alchemy-potion-calculator/
```

工具目标：

- 选择目标 potion
- 输入已有材料
- 计算 Magic Power 是否足够
- 给出材料组合建议

### Materials Guide

作用：覆盖材料、掉落、Magic Power、keep or sell 等长尾词。

表格字段：

```text
Material | Type | Magic Power | Source | Enemy / Node | Best Use | Keep or Sell | Notes
```

### Discord / Trello / Wiki

作用：覆盖导航型搜索意图：

```text
wizard alchemy discord
wizard alchemy trello
wizard alchemy wiki
wizard alchemy roblox group
```

页面必须保留免责声明：

```text
This is an unofficial fan-made guide site.
```

## 5. 技术结构

使用：

```text
Astro + 静态输出 + Cloudflare Pages
```

核心目录：

```text
src/pages/
src/components/
src/layouts/
src/data/
src/styles/
public/
docs/
```

主要数据文件：

```text
src/data/site.ts
src/data/codes.json
src/data/races.ts
src/data/potions.ts
src/data/materials.ts
src/data/faqs.ts
```

## 6. 日期维护要求

网站中所有涉及日期的部分都需要定期修改。当前集中维护点：

```text
src/data/site.ts
```

需要更新的字段：

```text
lastReviewed
lastCheckedLabel
monthLabel
```

codes 单条测试日期：

```text
src/data/codes.json -> lastTested
```

首页 update log：

```text
src/pages/index.astro
```

建议更新规则：

- 每天检查 codes 后，更新 `lastCheckedLabel`、`lastReviewed` 和 `codes.json` 的 `lastTested`。
- 如果 codes 没变化，也要在首页 update log 里写清楚当天已检查。
- 每周检查 Race、Discord、Wiki 页面后，更新 `lastCheckedLabel` 或单独拆出页面级更新时间。
- 每次游戏更新后，重点检查 potions、materials、bosses、wands、equipment。

注意：不要只改标题里的月份而不改正文日期、schema 的 lastmod、codes 表格日期。

## 7. SEO 基础设置

已实现：

- 每页 title 和 meta description
- canonical
- Open Graph
- FAQPage schema
- WebPage / Article schema
- BreadcrumbList schema
- `/sitemap.xml`
- `/robots.txt`
- Cloudflare Pages `_redirects`

站点域名目前默认写为：

```text
https://wizardalchemycodes.com
```

如果正式域名不同，部署时设置环境变量：

```text
PUBLIC_SITE_URL=https://your-domain.com
```

或修改：

```text
src/data/site.ts
astro.config.mjs
```

## 8. 内容质量标准

必须坚持：

- 首页第一屏直接给 codes。
- 不编造 codes。
- 所有 active codes 必须能从官方页面、主流可靠攻略页或实测中确认。
- expired codes 单独列出，不要混在 active 表。
- 每个页面都显示 Last checked / Last updated。
- 攻略页优先用表格、步骤、FAQ，不堆无效介绍。
- 外链使用官方 Roblox、Discord、Roblox Group、社区 Wiki 等可信入口。

## 9. 运营计划

### 每日

- 检查官方 Roblox 游戏描述。
- 检查 Discord / group 公告。
- 检查主流 codes 页面是否新增 code。
- 测试 active codes 是否仍可用。
- 更新首页 Last checked 和 update log。

### 每周

- 更新 Race Tier List。
- 检查 Discord invite 是否过期。
- 检查 Trello / official wiki 是否出现。
- 根据 Search Console 查询词补 FAQ 和内链。

### 游戏更新后

- 更新 Potions。
- 更新 Materials。
- 新增或更新 Bosses、Wands、Robes、Hats、Monsters。
- 检查 code reward 是否变化。

## 10. 后续扩展路线

第二阶段页面：

```text
/wizard-alchemy-wands/
/wizard-alchemy-robes/
/wizard-alchemy-hats/
/wizard-alchemy-bosses/
/wizard-alchemy-monsters/
```

第三阶段工具：

```text
/wizard-alchemy-potion-calculator/
/wizard-alchemy-materials-database/
/wizard-alchemy-race-reroll-calculator/
```

第四阶段长尾拆分：

```text
/wizard-alchemy-ice-spike-potion/
/wizard-alchemy-fire-arrow-potion/
/wizard-alchemy-blueberry/
/wizard-alchemy-withered-mushroom/
```

只有当单页能写出足够独立内容并有实际搜索需求时，才拆分长尾页面。

## 11. 当前设计方向

视觉原则：

```text
轻量、可扫描、攻略站优先，首屏直接服务 codes 搜索意图。
```

交互原则：

- codes 表格支持一键复制。
- guide links 使用清晰内链路径。
- 页面动效只用于首屏轻量进入和链接 hover，不影响阅读速度。

内容路径：

```text
Codes -> Race Tier List -> Beginner Guide -> Potions -> Materials -> Discord / Wiki
```
