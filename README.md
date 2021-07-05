# Memory Game Arcade

- Jogo da Memória desenvolvido para avaliação de conhecimento para vaga de Desenvolvedor Júnior em React Native da DB1 Group.

## Instalação

- Projeto inicializado através do Expo.io para utilização em ambientes mobile iOS e/ou Android.
  Para instalar e iniciar o Memory Card Game:
  ```expo init```
  ```expo start```

  Para o mecanismo das cartas, foi utilizado jSON server e Axios:
  ```json-server ./src/services/server.json --host (ip da máquina) --port (n da porta)```
  ```yarn add axios```

## Features

- Fontes personalizadas (expo-fonts);
- Navegação (react-navigation);
- Gradiente no background (expo-linear-gradient);
- Storage de informações locais (async-storage);
- UX (react-native-gesture-handler);
- Posicionamento da barra para iOS (react-native-iphone-x-helper);
- Entre outros componentes nativos.

## To Do

Melhorias para implementação do projeto:
- Jogabilidade;
- Score;
- Ranking;