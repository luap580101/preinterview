# 前測作業

## 介紹

這是一個基於 Next.js 和 TypeScript 的網站，使用了 Ant Design 和 App Router，並實現了 PWA 技術來支持離線使用。

## 功能特性

- 基於 Next.js 和 TypeScript 開發
- 使用 Ant Design 和 Tailwind 提供現代化 UI
- 內建 App Router 用於路由管理
- Docker 部屬，並透過 `next build` 進行優化
- PWA 實現

## 優化

- 應用列表
  應用列表支援每 10 個記錄顯示一頁。在 `2a2a339` 分支中，已經實現了使用 `slice` 方法來處理每頁資料（`slice((pageRef.current - 1) * 10)`）。目前的實現方式可能是基於分頁形式，但由於沒有提供第二頁的 API，會根據滾動事件來加載下一頁資料。當使用者接近頁面底部時，會自動加載並顯示下一批應用資料。這樣能夠在沒有分頁的 API 支援下，實現類似「無限滾動」的效果。若未來需要，也可以進一步優化這個機制。

- 應用推薦
  應用推薦功能每次僅顯示 10 個應用，並使用了 Slick 插件來實現無限滾動。這樣能夠讓使用者在瀏覽推薦應用時，體驗流暢且不會中斷的滾動效果。

- 快取機制
  為了提升網站的效率，應用推薦的資料會被快取 1 小時，以減少每次請求所需的伺服器負擔。為了確保排名的準確性，推薦資料的快取會每 10 分鐘更新一次，從而保證推薦結果的及時性和精準性。

## 開發環境

- Node.js 版本：20.9.0

## 安裝與使用

### 1. 克隆專案 開發環境啟動

```bash
git clone https://github.com/luap580101/preinterview.git

cd preinterview

npm install

npm run dev
```

### 2. 部署

```bash
cd preinterview

docker build -t preinterview .

docker run -p 3000:3000 preinterview
```

### 3. 測試

```bash
cd preinterview

npm run test
```

### 文件結構

```text
preinterview/
├── app/        # 應用程式路由設定目錄
├── components/ # React 元件目錄
├── redux/      # Redux 狀態管理配置目錄
├── services/   # 服務相關配置目錄
├── public/     # 公共靜態資源目錄
└── package.json # 專案的 npm 配置文件

```
