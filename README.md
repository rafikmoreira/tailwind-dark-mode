# Este é um projeto que usa Tailwind CSS para implementar um modo escuro em um site.

## Instalação

Para usar este projeto, você precisa ter o Node.js instalado em sua máquina. Após a instalação do Node.js, siga os passos abaixo:

1. Clone este repositório para o seu diretório local.
2. Abra o terminal e navegue até o diretório clonado.
3. Execute npm install para instalar as dependências.

## Uso
Este projeto inclui dois scripts no arquivo package.json:

dev: Executa o servidor de desenvolvimento com hot-reload em http://localhost:1234.

build: Compila o projeto para produção.

Para executar qualquer um desses scripts, basta digitar npm run dev ou npm run build no terminal.

## Dependências
Este projeto usa as seguintes dependências:

- @parcel/transformer-sass: permite que o Parcel compile arquivos .scss em CSS.
- parcel: um empacotador de módulos que também serve como servidor de desenvolvimento.
- autoprefixer: adiciona prefixos de navegador ao CSS automaticamente.
- postcss: um pré-processador de CSS que adiciona funcionalidades como variáveis, mixins e funções.
- process: um pacote do Node.js que fornece informações sobre o ambiente em que o processo está sendo executado.
- tailwindcss: uma biblioteca CSS que fornece classes utilitárias para estilos comuns.

## Licença
Este projeto é licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
