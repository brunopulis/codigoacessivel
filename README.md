# Código Acessível

Comunidade técnica sobre **acessibilidade digital tratada como decisão de engenharia**, não como checklist, ferramenta automática ou conformidade de fachada.

Este projeto é a landing page oficial da comunidade **Código Acessível**, construída com foco em:

- Performance real
- SEO sem hacks
- Acessibilidade estrutural
- Clareza semântica
- Experiência de pessoas reais

---

## Princípio do projeto

> **Se o Google entende melhor a página do que uma pessoa, algo está errado.**

Tudo aqui parte da mesma premissa:
- O que melhora acessibilidade melhora SEO  
- O que melhora performance melhora acesso  
- O que é claro para pessoas é claro para máquinas  

Não usamos atalhos.

---

## Stack técnica

- **Astro** (SSG / Islands Architecture)
- **HTML semântico**
- **CSS utilitário (Tailwind)**  
- **Zero JavaScript desnecessário**
- **Deploy na Vercel**

### Integrações principais
- `@astrojs/seo`
- `@astrojs/sitemap`
- `astro:assets`
- `@astrojs/font`
- Analytics leve (privacy-first)

---

## Acessibilidade (baseline do projeto)

Este projeto segue um **baseline próprio de SEO + Acessibilidade**, que pode ser usado como referência:

- Um `<h1>` por página
- Headings em ordem lógica
- Landmarks semânticos (`header`, `main`, `footer`)
- Foco visível e perceptível
- Links com texto descritivo
- Imagens com função clara (`alt` significativo ou vazio)
- Navegação completa por teclado
- Performance como critério de acesso

> ARIA só é usada quando o HTML não resolve.

---

## SEO (sem conflito com a11y)

SEO aqui é consequência de boas decisões técnicas:

- Titles e descriptions claros e honestos
- Conteúdo escrito para pessoas, não para crawler
- Dados estruturados com moderação
- Sitemap e robots automáticos
- Core Web Vitals como sinal secundário, não KPI único

Não fazemos:
- keyword stuffing  
- plugins SEO mágicos  
- hacks de metadata  

---

## Estrutura do projeto

```txt
├── public/
│   ├── robots.txt
│   ├── og.png
│   └── favicon.svg
├── src/
│
│── styles/
│   └── global.css
│
├── .gitignore
├── astro.config.mjs
├── package.json
└── README.md
```
---

## Licença

[CC BY-SA 4.0](LICENSE)
