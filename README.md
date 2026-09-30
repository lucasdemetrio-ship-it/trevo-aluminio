# Alumínios Trevo

Site institucional da Alumínios Trevo — esquadrias de alumínio e vidros temperados, em Petrolândia/SC.

## Stack

- TanStack Start
- TypeScript
- React
- Tailwind CSS
- Deploy: Cloudflare (via Nitro)

## Desenvolvimento local

Requer [Bun](https://bun.sh).

```sh
bun install
bun dev
```

O site fica disponível em `http://localhost:8080`.

## Build de produção

```sh
bun run build
```

Gera os arquivos de deploy em `.output/`, prontos para publicar no Cloudflare (`npx nitro deploy --prebuilt`) ou em qualquer ambiente que sirva o worker do Nitro.
