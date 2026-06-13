# Portfólio — Pedro Lima

Portfólio bilíngue (PT/EN) de Pedro Lima, Desenvolvedor Front-end Sênior.

**Stack**: Next.js (App Router) · TypeScript · Tailwind CSS v4 · next-intl · MDX · Motion · next-themes

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) — você será redirecionado para `/pt` (ou `/en` conforme o idioma do navegador).

## Estrutura

```
messages/              Textos da interface por idioma (pt.json / en.json)
public/cv/             CVs em PDF (PT e EN) para download
src/
  app/[locale]/        Páginas (home, /projects, /projects/[slug])
  components/          Header, footer, seções da home, cards
  content/projects/    Cases detalhados em MDX (um por projeto, em pt e en)
  data/                Dados estruturados: projetos, experiência, stack, links
  i18n/                Configuração do next-intl (rotas /pt e /en)
```

## Como editar o conteúdo

- **Textos da interface** (títulos, botões, hero): `messages/pt.json` e `messages/en.json`
- **Experiências da timeline**: `src/data/experience.ts`
- **Cases profissionais** (cards): `src/data/projects.ts` · (conteúdo da página): `src/content/projects/<slug>/{pt,en}.mdx`
- **Projetos pessoais do GitHub**: `src/data/github-projects.ts`
- **Stack/habilidades**: `src/data/stack.ts`
- **Links e contatos** (email, LinkedIn, WhatsApp, domínio): `src/data/site.ts`
- **CVs**: substitua os PDFs em `public/cv/`

### Adicionando um novo case

1. Adicione a entrada em `src/data/projects.ts`
2. Crie `src/content/projects/<slug>/pt.mdx` e `en.mdx`
3. Registre os imports em `src/content/projects/index.ts`

## Deploy

Projeto pronto para deploy na [Vercel](https://vercel.com): importe o repositório e faça o deploy sem configuração extra.

> **Importante**: atualize `site.url` em `src/data/site.ts` com o domínio definitivo (usado em SEO, sitemap e Open Graph).

## Scripts

| Comando         | Descrição                     |
| --------------- | ----------------------------- |
| `npm run dev`   | Servidor de desenvolvimento   |
| `npm run build` | Build de produção             |
| `npm start`     | Serve o build de produção     |
| `npm run lint`  | Verificação de lint (ESLint)  |
