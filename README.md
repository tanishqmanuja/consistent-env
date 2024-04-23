# @tqman/env

A thin wrapper around [dotenv](https://github.com/motdotla/dotenv) for providing consistent experience with loading environment variables across different runtimes.

## 📦 Install

Install using `npm`

```bash
npm install dotenv@latest @tqman/env@latest
```

Install using `bun`

```bash
bun install dotenv@latest @tqman/env@latest
```

## ⚙️ Loading Strategy

Environment variables are loaded in the following order:

- .env
- .env.{mode} (mode is NODE_ENV lowercased, default is development)
- .env.local

Strategy is a mix of (bun)[https://bun.sh/docs/runtime/env], (vite)[https://vitejs.dev/guide/env-and-mode]

> [!NOTE]  
> Difference from Bun's strategy - bun only supports .env.{mode} when mode is production, development or test.
> Issue: https://github.com/oven-sh/bun/issues/9090

> [!NOTE]  
> Difference from Vite's strategy - .env.{mode}.local is loaded by default in vite, but not by this library.

## 👨‍💻 Usage

As a side effect import

```ts
import "@tqman/env/load";
```

As a function call

```ts
import { load } from "@tqman/env";

load();
```
