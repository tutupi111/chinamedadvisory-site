# ChinaMedAdvisory 官网 — 后续开发计划

> **目标**：为面向全球发达国家居民提供中国高质量医疗服务的咨询公司打造专业、可信、易用的官方网站。

---

## 一、项目现状概览

### 1.1 已有资产

| 类型 | 位置 | 说明 |
|------|------|------|
| **Next.js 应用骨架** | `app/` | 使用 App Router，含 `layout.tsx`、`page.tsx`、`globals.css`，当前首页内容极简 |
| **完整静态原型** | `index.html` | 单页官网：导航、Hero、服务（手风琴）、流程、为何选我们、为何选中国、适应症、对比表、患者视角、联系、页脚；中英双语（JS 切换）、咨询弹窗表单（Formspree）、完整设计系统（CSS 变量、字体、配色） |

### 1.2 技术栈与缺口

- **框架**：App Router 结构存在，但仓库内未见 `package.json` / `next.config.*`，需确认依赖与构建配置。
- **内容**：业务文案、服务项、流程步骤、患者视角等已在 `index.html` 中定型，可作迁移与 SEO 的数据源。
- **设计**：`index.html` 内嵌完整设计系统（如 `--accent: #0d5c3d`、Source Serif 4 + Inter、间距与圆角等），需迁移到 Next 与全局样式。
- **功能**：双语（EN/中文）、咨询表单（含前端校验 + Formspree）、手风琴、弹窗已在原型中实现，需在 React 中复现并增强可维护性。

---

## 二、产品与受众定位（共识）

- **受众**：主要面向发达国家居民（如北美、欧洲、澳新等），有意向在中国寻求高质量医疗服务或第二意见的患者及家属。
- **价值**：独立、透明、全流程的医疗顾问与协调服务（非医院隶属、无佣金导向），英文沟通、隐私与流程透明。
- **官网目标**：建立专业可信形象、清晰传达服务与流程、降低咨询门槛（联系入口明确、表单简单）、兼顾多语言与可访问性。

---

## 三、后续开发计划（分阶段）

### 阶段 0：项目基础与规范（优先）

1. **依赖与构建**
   - 若缺失则补全：`package.json`、`next.config.js`（或 `ts`）、`tsconfig.json`。
   - 锁定 Node 版本（如 18+），确保 `npm install` 与 `npm run build` 可运行。

2. **代码与目录规范**
   - 约定目录结构：如 `app/(marketing)/` 放官网页、`components/` 公共组件、`lib/` 工具与常量、`styles/` 全局与主题。
   - 统一使用 TypeScript，必要时为文案与表单定义类型。
   - 配置 ESLint + Prettier，保证提交前格式一致。

3. **设计系统落地**
   - 将 `index.html` 中的 CSS 变量、字体、颜色、间距、圆角等迁移到 `app/globals.css` 或 `styles/theme.css`。
   - 引入 Google Fonts：Source Serif 4、Inter（与现有原型一致），或在 `layout.tsx` 中通过 next/font 优化加载。
   - 确保移动端断点与触摸友好（如导航、按钮、表单），与原型行为一致。

**产出**：可稳定构建与运行的 Next 应用、统一设计 token、基础目录与规范。

---

### 阶段 1：首页与核心内容迁移

1. **布局与导航**
   - 实现全站布局：顶部导航（Logo、Services / Process / Why Us / Contact）、EN|中文 切换、移动端折叠菜单。
   - 导航项与 `index.html` 锚点或路由一致，保证「首屏 + 锚点滚动」或后续多页结构可扩展。

2. **首页区块（按原型顺序）**
   - **Hero**：主标题、副标题、CTA（Contact Us + Request Consultation 打开表单）。
   - **Services**：手风琴展示 5 项服务（国际医疗咨询、转诊与医院协调、在华陪诊、远程会诊与随访、文书与口笔译），文案从原型迁移。
   - **Process**：4 步流程（Inquiry & assessment → Medical review → Hospital coordination → Follow-up），带步骤数字与简短说明。
   - **Why Us**：4 点（独立顾问、全流程支持、英文沟通、流程透明）。
   - **Why China**：4 张卡片（专家可及性、病例经验、整合诊疗、透明与选择）。
   - **Conditions**：适应症分类与列表 + 免责说明（不推荐具体治疗、仅作参考）。
   - **Compare**：中国 vs 本地就医对比表（保持表格可读与响应式）。
   - **Patient Perspectives**：3 条匿名患者视角引用。
   - **Contact**：邮箱、WhatsApp 说明 +「提交咨询表单」按钮。
   - **Footer**：版权与一句品牌说明。

3. **组件化**
   - 将上述区块拆成可复用组件（如 `Hero`、`ServicesAccordion`、`ProcessSteps`、`WhyUsGrid`、`ContactBox` 等），便于后续多语言与维护。
   - 文案与标签集中管理（为阶段 2 多语言做准备）：如 `lib/copy.ts` 或 `content/home.ts`。

**产出**：首页内容与交互与当前 `index.html` 对齐，且结构清晰、可维护。

---

### 阶段 2：多语言（i18n）

1. **策略选型**
   - 方案 A：Next.js 内置 i18n（若使用 Pages Router 可配 `next.config` 的 locales）；方案 B：App Router 下用 `next-intl` 或类似库做路由/段多语言。
   - 建议：优先支持 **EN + 中文（简体）**，语言切换不改变路径也可接受（与当前原型一致），但需考虑后续 SEO（如 `/en/`、`/zh/` 或 hreflang）。

2. **落地**
   - 将 `index.html` 中 `strings.en` / `strings.zh` 迁移到 JSON 或 TS 模块（如 `messages/en.json`、`messages/zh.json`）。
   - 所有 UI 文案、表单校验提示、页脚等走 i18n，避免硬编码。
   - 语言切换器保留在导航栏，可选持久化到 localStorage 或 cookie（与现有原型一致）。

3. **SEO 与可访问性**
   - 根据当前语言设置 `<html lang="en">` 或 `lang="zh-CN"`；若有 locale 路径，配置 hreflang。
   - 保持 section 的 `aria-labelledby`、表单的 `aria-describedby` 等，与原型一致。

**产出**：全站中英切换、文案集中管理、为 SEO 留好扩展点。

---

### 阶段 3：咨询表单与联系功能

1. **表单**
   - 复刻原型中的「国际患者咨询」弹窗：姓名*、邮箱*、国家/地区、医疗咨询内容、隐私说明、提交/取消。
   - 前端校验：必填、邮箱格式；错误信息使用 i18n。
   - 提交目标：Formspree 或自建 API（如 SendGrid、Resend）。若用 Formspree，在环境变量中配置 form id，避免占位 ID 提交到生产。

2. **安全与体验**
   - 防重复提交（提交中禁用按钮、Loading 状态）。
   - 成功态：显示感谢文案并关闭弹窗（与原型一致）。
   - 不在前端暴露敏感配置；如有后端，考虑 rate limit 与基础防垃圾。

3. **联系区**
   - 联系区块内邮箱、WhatsApp 文案可配置（或从 CMS/环境变量读取），便于后续更换。

**产出**：咨询表单可用、安全、中英友好，且易切换后端。

---

### 阶段 4：多页面与信息架构（可选扩展）

1. **可新增页面**
   - **/about**：团队/机构简介、资质与理念（增强信任）。
   - **/services**：服务详情页（可将首页手风琴内容展开为独立页，利于 SEO）。
   - **/process**：流程详解（与首页 Process 区块互补）。
   - **/faq**：常见问题（签证、费用、隐私、语言等），减轻咨询压力。
   - **/contact**：独立联系页（表单 + 联系方式 + 地图或办公信息若需要）。

2. **路由与导航**
   - 导航菜单随页面增加而更新；保持「首页 + 核心锚点/子页」清晰。
   - 若有 locale 路径，统一为 `/en/...`、`/zh/...`。

**产出**：信息架构清晰，核心问题可被搜索与分享。

---

### 阶段 5：SEO、性能与可访问性

1. **SEO**
   - 每页独立 `title`、`description`、Open Graph；首页与关键页准备中英文 meta。
   - 语义化 HTML（h1/h2/section/article）、结构化数据（如 Organization、MedicalBusiness 等，视合规性添加）。
   - Sitemap、robots.txt；若多语言，hreflang 与 sitemap 中包含各语言 URL。

2. **性能**
   - 图片若有：使用 next/image、合适格式与尺寸。
   - 字体：next/font 优化 Source Serif 4、Inter。
   - 关键 CSS 内联或按路由拆分，避免首屏阻塞。
   - 若引入 CMS，优先静态生成（SSG）或 ISR，保证首屏速度。

3. **可访问性**
   - 键盘导航、焦点顺序、焦点可见性；弹窗 trap focus、Escape 关闭。
   - 对比度与字体大小符合 WCAG 2.1 AA；表单错误与成功有 `role="alert"` 或 live region。
   - 可选：简单 a11y 自动化（如 eslint-plugin-jsx-a11y、Lighthouse CI）。

**产出**：站点可被搜索引擎与辅助技术良好理解，加载与交互顺畅。

---

### 阶段 6：部署、监控与迭代

1. **部署**
   - 选定托管（Vercel、Netlify、自托管等），配置生产环境变量（Formspree ID、分析 ID 等）。
   - 自定义域名与 HTTPS；若有邮件发送，配置 SPF/DKIM 等。

2. **分析与监控**
   - 可选：Google Analytics 4 或 Plausible 等，关注流量、语言分布、咨询表单转化。
   - 错误监控（如 Sentry）便于排查前端与（若有）服务端问题。

3. **内容与合规**
   - 医疗与隐私相关文案需合规审核（免责、隐私政策、Cookie 提示若适用）。
   - 预留内容更新流程：若后续接入 CMS，可在此阶段规划。

**产出**：线上稳定运行、可观测、合规可迭代。

---

## 四、建议优先级与里程碑

| 优先级 | 内容 | 建议时间线 |
|--------|------|------------|
| P0 | 阶段 0：项目基础、设计系统、可构建 | 第 1 周 |
| P0 | 阶段 1：首页与核心内容迁移、组件化 | 第 2–3 周 |
| P0 | 阶段 2：多语言（EN + 中文） | 第 3–4 周 |
| P0 | 阶段 3：咨询表单与 Formspree/后端 | 第 4 周 |
| P1 | 阶段 5：SEO、性能、可访问性 | 第 5 周 |
| P1 | 阶段 6：部署与基础监控 | 第 5–6 周 |
| P2 | 阶段 4：多页面（About、Services、FAQ、Contact） | 按需迭代 |

---

## 五、风险与依赖

- **内容与合规**：医疗相关表述、免责声明、隐私政策需业务/法务确认，避免承诺疗效或误导。
- **表单与邮件**：依赖 Formspree 或自建接口；需确保生产环境 form id 与收件邮箱正确，并做好垃圾邮件与限流控制。
- **index.html 与 Next 并行**：建议以 Next 应用为主站，`index.html` 作为静态原型保留参考；若需临时对外可放于子路径或静态托管，避免与主站路由冲突。

---

## 六、下一步立即可做

1. 在仓库根目录补全 **package.json** 与 **next.config**（如缺失），运行 `npm install` 与 `npm run build`。
2. 将 **index.html** 中的 CSS 变量与关键样式迁移到 **app/globals.css**，并在 layout 中引入字体。
3. 在 **app/page.tsx** 中按区块引入占位组件（Hero、Services、Process 等），再逐块从 index.html 迁移内容与交互。
4. 建立 **lib/copy.ts**（或 JSON）存放中英文文案，为后续 i18n 与表单校验提示做准备。

本计划可根据实际资源与上线时间压缩或拆分迭代（如先单语上线再补多语言）。如需我按某一阶段细化成任务清单或直接开始实现某一块，可以指定阶段或文件。
