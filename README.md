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
- .env.production, .env.development, .env.test (depending on NODE_ENV, default is development)
- .env.local

> strategy replicated from: https://bun.sh/docs/runtime/env

## 👨‍💻 Usage

0. As a side effect import

```ts
import "@tqman/env/load";
```

1. Simple usage

```ts
import { load } from "@tqman/env";

load();
```

2. Custom strategy (without defaults, i.e. overwrites config)

```ts
import { load } from "@tqman/env";

load({
  staging: ".env.staging",
}); // laoding of .env and .env.local will not be affected by config
```

3. Custom strategy (with defaults, i.e. extends config)

```ts
import { load } from "@tqman/env";

load((config) => ({
  ...config,
  staging: ".env.staging",
})); // laoding of .env and .env.local will not be affected by config
```
