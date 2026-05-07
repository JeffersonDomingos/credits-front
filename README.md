💳 Credits Frontend Teste develop

Aplicação **front-end em Angular** desenvolvida para consumo da **API de Consulta de Créditos**, permitindo buscas por **Número da NFS-e** ou **Número do Crédito**, conforme especificação do desafio técnico.

---

🧾 Visão Geral

O projeto disponibiliza uma interface web moderna e responsiva para consulta de créditos constituídos, consumindo endpoints REST expostos pelo back-end.

Funcionalidades
- 🔍 Consulta por **Número da NFS-e**
- 🔎 Consulta por **Número do Crédito**
- 📊 Exibição dos resultados em tabela
- ⏳ Indicador de carregamento (loading)
- ❌ Tratamento de erros e mensagens amigáveis
- 📱 Layout responsivo
- 🎨 UI baseada em **Tailwind CSS + Flowbite**

---

🛠️ Tecnologias Utilizadas

- **Angular 19+**
- **TypeScript**
- **Tailwind CSS**
- **Flowbite**
- **RxJS**
- **Docker**
- **Nginx** (para servir o build em produção)

---

📁 Estrutura do Projeto

```text
src/
 ├── app/
 │   ├── core/
 │   │   ├── models/
 │   │   │   └── credito.model.ts
 │   │   └── services/
 │   │       └── credito.service.ts
 │   ├── pages/
 │   │   └── credit-consultation/
 │   │       ├── credit-consultation.component.ts
 │   │       ├── credit-consultation.component.html
 │   │       └── credit-consultation.component.scss
 │   ├── app.component.ts
 │   ├── app.component.html
 │   └── app.routes.ts
 ├── styles.scss
 └── main.ts
```
� Integração com a API

O front consome os seguintes endpoints:

GET /api/creditos/{numeroNfse}
Retorna uma lista de créditos.

Consulta por Número do Crédito
GET /api/creditos/credito/{numeroCredito}

▶️ Executando o Projeto Localmente (Modo Desenvolvimento)
Pré-requisitos

Node.js 18+ (recomendado Node 20)
Angular CLI

    npm install
    ng serve

A aplicação ficará disponível em:

    http://localhost:4200
    
  ℹ️ Em modo desenvolvimento (ng serve), as alterações no código são refletidas automaticamente.

🐳 Executando com Docker (Produção)

Build e execução

    docker compose up -d --build

A aplicação será servida via Nginx em:

    http://localhost:4200

Observações importantes

O Docker não utiliza ng serve

O Angular é buildado via npm run build

O Nginx serve os arquivos estáticos gerados em /dist

Para forçar rebuild sem cache:

    docker compose down
    docker compose build --no-cache
    docker compose up -d

✅ Boas Práticas Aplicadas

Separação de responsabilidades (Component / Service / Model)

Tipagem forte com TypeScript

Uso de Observables (RxJS)

Componentes standalone

Código limpo e organizado

Layout responsivo

📌 Considerações Finais

Este front-end foi desenvolvido seguindo as especificações do desafio técnico, priorizando:

Clareza

Manutenibilidade

Boa experiência do usuário

Integração correta com a API

👤 Autor: Jefferson Morais
📌 Projeto: Credits Frontend
🚀 Stack: Angular | Tailwind | Flowbite | Docker
