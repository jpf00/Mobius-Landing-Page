# Documentação do Projeto: Landing Page Design

## Descrição
Este projeto é uma landing page moderna desenvolvida para apresentar serviços, projetos e informações de contato de forma visualmente atraente e responsiva. Utiliza tecnologias modernas de frontend, incluindo React, Vite, Tailwind CSS e animações com Framer Motion.

## Estrutura de Pastas
- **public/**: Arquivos públicos, como imagens e ícones.
- **src/**: Código-fonte principal do projeto.
  - **app/components/**: Componentes reutilizáveis da interface, como Navbar, Hero, Gallery, Footer, etc.
  - **app/components/ui/**: Componentes de UI genéricos (botões, cards, tabelas, etc.).
  - **assets/styles/**: Arquivos de estilos CSS, incluindo Tailwind e temas.
- **guidelines/**: Documentação de diretrizes e padrões do projeto.

## Principais Tecnologias
- **React**: Biblioteca para construção da interface de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápido.
- **Tailwind CSS**: Framework utilitário para estilização.
- **Framer Motion**: Biblioteca de animações para React.

## Como Executar o Projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Estrutura dos Componentes
- **Navbar**: Navegação principal do site.
- **Hero**: Seção de destaque inicial.
- **About**: Informações sobre a empresa ou serviço.
- **Gallery**: Galeria de projetos realizados, com modal de visualização.
- **Services**: Lista de serviços oferecidos.
- **Footer**: Rodapé com informações de contato e redes sociais.
- **WhatsAppButton**: Botão flutuante para contato via WhatsApp.

## Personalização
- As imagens dos projetos estão em `public/images/projetos/`.
- Os estilos podem ser ajustados em `src/assets/styles/`.
- Novos projetos podem ser adicionados no array `projects` do componente `Gallery`.

## Deploy
Para gerar uma versão de produção:
```bash
npm run build
```
Os arquivos finais estarão na pasta `dist/`.

## Licença
Consulte o arquivo `ATTRIBUTIONS.md` para informações de licenciamento e créditos de recursos utilizados.

---

Para dúvidas ou sugestões, consulte o arquivo `README.md` ou entre em contato com o responsável pelo projeto.
