# GUIA DE PUBLICAÇÃO DO SITE EWS GESTOR NO NETLIFY

Este documento explica como publicar o site institucional da **EWS Gestor — Sistemas e Gestão Empresarial** no Netlify sem erros de exibição ou tela em branco.

---

## 1. POR QUE O ERRO DE EXIBIÇÃO ACONTECIA NO NETLIFY?

1. **Roteamento SPA (Erro 404 ao atualizar ou acessar rotas):**
   * O React funciona como uma Single Page Application (SPA). Em servidores estáticos como o Netlify, se alguém acessa `/termos`, `/privacidade` ou recarrega a página (F5), o servidor tenta procurar uma pasta física. Sem a regra de reescrita, o Netlify exibia a tela de erro `404: Page Not Found`.
   * **Correção aplicada:** Criamos o arquivo `public/_redirects` (que é copiado para `dist/_redirects`) e o arquivo `netlify.toml` na raiz, com a regra:
     ```text
     /*    /index.html   200
     ```

2. **Caminho Base de Recursos (Base URL):**
   * Configuramos explicitamente `base: '/'` no `vite.config.ts`, garantindo que os scripts e estilos (`/assets/...`) sejam sempre carregados da raiz do domínio, sem erro de MIME type ou tela em branco.

3. **Configuração Automatizada do Netlify (`netlify.toml`):**
   * O projeto agora possui um arquivo `netlify.toml` na raiz com o comando de build (`npm run build`) e pasta de publicação (`dist`), eliminando falhas de detecção automática no painel.

---

## 2. COMO PUBLICAR NO NETLIFY (2 MÉTODOS)

### Método A — Conectando via Git (GitHub / GitLab / Bitbucket) — [Recomendado]

1. Faça o push do projeto para o seu repositório no GitHub.
2. No painel do Netlify, clique em **Add new site > Import an existing project**.
3. Selecione o repositório. O Netlify detectará automaticamente o arquivo `netlify.toml`:
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
4. Clique em **Deploy site**.
5. O site estará no ar e todas as rotas funcionarão perfeitamente.

---

### Método B — Arrastar e Soltar (Netlify Drop)

Caso você não use repositório Git e faça o upload manual arrastando a pasta no Netlify Drop:

1. No terminal do seu computador, execute:
   ```bash
   npm install
   npm run build
   ```
2. Uma pasta chamada **`dist`** será gerada na raiz do projeto.
3. **ATENÇÃO:** Arraste **EXCLUSIVAMENTE a pasta `dist`** (ou os arquivos de dentro dela) para a área de upload do Netlify Drop.
   * **NÃO arraste a pasta inteira do projeto**, pois os navegadores não conseguem executar arquivos `.tsx` ou `.ts` diretamente sem compilação.
   * A pasta `dist` já contém o `index.html`, a pasta `assets/`, os favicons e o arquivo `_redirects`.

---

## 3. CHECKLIST DOS ARQUIVOS DE CONFIGURAÇÃO

* `public/_redirects`: Instrução `/* /index.html 200` para suporte completo ao roteamento SPA.
* `netlify.toml`: Configuração oficial de build, publicação e headers de segurança para o Netlify.
* `vite.config.ts`: Configurado com `base: '/'` e compatibilidade total com ESM.
* `index.html`: Metadados, OpenGraph e favicons oficiais da EWS Gestor.
