# Loja de Cursos Virtuais 🎓

Um site moderno para vender cursos e produtos digitais com sistema de checkout e pagamento integrado com Stripe.

## 🎨 Características

- ✨ Design elegante em preto e roxo
- 🛒 Sistema de checkout completo
- 💳 Integração com Stripe para pagamentos
- 📱 Responsivo para dispositivos móveis
- ⚡ Performance otimizada
- 🔒 Seguro para transações

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Conta Stripe (acesso a chaves de teste)

### Instalação

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/loja-cursos-virtuais.git
cd loja-cursos-virtuais
```

2. Instale as dependências

```bash
npm install
```

3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

4. Adicione suas chaves do Stripe no arquivo `.env`

```
STRIPE_PUBLIC_KEY=sua_chave_publica_aqui
STRIPE_SECRET_KEY=sua_chave_secreta_aqui
```

5. Inicie o servidor

```bash
npm start
```

6. Acesse em seu navegador

```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
loja-cursos-virtuais/
├── public/
│   ├── index.html       # Página principal
│   ├── success.html     # Página de sucesso
│   ├── styles.css       # Estilos globais
│   └── app.js          # JavaScript do cliente
├── routes/
│   └── checkout.js     # Rotas de checkout
├── server.js           # Servidor Express
├── package.json        # Dependências
├── .env.example        # Variáveis de ambiente (exemplo)
└── README.md          # Este arquivo
```

## 🔐 Variáveis de Ambiente

- `STRIPE_PUBLIC_KEY` - Chave pública do Stripe
- `STRIPE_SECRET_KEY` - Chave secreta do Stripe
- `PORT` - Porta do servidor (padrão: 3000)
- `NODE_ENV` - Ambiente (development ou production)

## 💳 Testando com Stripe

Use estes dados de cartão para testar em modo de sandbox:

- Cartão: `4242 4242 4242 4242`
- Data: Qualquer data futura (ex: 12/25)
- CVC: Qualquer número (ex: 123)

## 🌐 Deploy

Para fazer deploy em produção:

1. Configure as variáveis de ambiente com suas chaves reais do Stripe
2. Configure a variável `DOMAIN` com o domínio do seu site
3. Use um serviço como Heroku, Railway, Vercel ou AWS

## 📝 Personalizações Futuras

- [ ] Adicionar mais cursos ao catálogo
- [ ] Sistema de autenticação de usuários
- [ ] Painel de administração
- [ ] Área de acesso aos cursos adquiridos
- [ ] Sistema de cupons de desconto
- [ ] Avaliações e comentários
- [ ] Integração com email (nodemailer)
- [ ] Banco de dados (MongoDB ou PostgreSQL)

## 📧 Suporte

Para suporte, entre em contato através do email ou abra uma issue no repositório.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️**
