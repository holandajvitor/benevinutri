# BENEVINUTRI - Plataforma de Nutrição Online


Plataforma profissional para atendimento nutricional online, com foco em experiência do usuário e conversão de clientes.

## 🛠️ Tecnologias Utilizadas

- **React** + **Vite**: Estrutura principal
- **CSS Modules**: Estilização avançada
- **Mobile-First**: Design responsivo
- **Git**: Controle de versão
- **ESLint**/**Prettier**: Padronização de código

## 📂 Estrutura do Projeto

```plaintext
benevinutri/
├── public/
│   └── assets/
│       └── images/          # Assets visuais
│           ├── antesdepois1.jpg
│           ├── banner.png
│           └── ...demais imagens
│
├── src/
│   ├── components/          # Componentes React
│   │   ├── AboutMe/         # Seção "Sobre Mim"
│   │   │   ├── AboutMe.css
│   │   │   └── AboutMe.jsx
│   │   │
│   │   ├── FAQ/            # Seção de Perguntas Frequentes
│   │   ├── Footer/         # Componente de Rodapé
│   │   ├── Header/         # Cabeçalho responsivo
│   │   ├── Home/           # Página inicial
│   │   ├── Results/        # Carrossel de resultados
│   │   └── *Buttons/       # Componentes de interação
│   │       ├── InstagramButton/
│   │       ├── MenuButton/
│   │       └── WhatsappButton/
│   │
│   ├── App.jsx             # Componente raiz
│   └── index.js            # Ponto de entrada
