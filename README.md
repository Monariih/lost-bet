# Lost-Bet Server Installation Guide for Ubuntu Server 20.04

This guide provides step-by-step instructions for installing the Lost-Bet server on Ubuntu Server 20.04.

## Prerequisites
- Ensure a clean installation of Ubuntu 20.04.

## Server Preparation - Installing Dependencies
Open a terminal and run the following commands:

```bash
sudo apt install nodejs
sudo apt-get install npm -y
```

## Configure the System

## Installation ->
- Create the Ubuntu 20.04 operating system (standard installation).
- Server preparation – Install dependencies:
  - ```bash
    apt install nodejs
    apt get install npm -y
    ```
- **Configure the system:**
  - ```bash
    git clone https://github.com/Monariih/lost-bet
    cd /home/<your user>/lost-bet/
    ```
  - Inside this folder, execute the following commands:
    - ```bash
      npm install
      ```
    - After finishing, check if you have a "node_modules" folder.
    - ```bash
      npm install vuejs
      npm run dev
      npm i vite
      ```
  - Check if the server is listening on the network:
    - ```bash
      sudo lsof -nP -iTCP -sTCP:LISTEN
      ```
    - Ensure that the server is listening on the network.
    - Run the following command to start the Node.js server:
      - ```bash
        npm run dev --host
        ```
  - Confirm in the file "vite.conf.json" if you have the line called:
    - ```json
      "server": {
        "host": '0.0.0.0',
        "port": '80'
      }
      ```
    - **Observation:**
      - On the line "host," define your IP address.
      - On the line "port," define your TCP port.

## PORTUGUESE VERSION ##

# Guia de Instalação do Servidor Lost-Bet para Ubuntu Server 20.04

Este guia fornece instruções passo a passo para a instalação do servidor Lost-Bet no Ubuntu Server 20.04.

## Pré-requisitos
- Certifique-se de ter uma instalação limpa do Ubuntu 20.04.

## Preparação do Servidor - Instalação de Dependências
Abra um terminal e execute os seguintes comandos:

```bash
sudo apt install nodejs
sudo apt-get install npm -y
```

## Configurar o Sistema

## Instalação ->
- Crie o sistema operacional Ubuntu 20.04 (instalação padrão).
- Preparação do servidor – Instale as dependências:
  - ```bash
    apt install nodejs
    apt get install npm -y
    ```
- **Configure o sistema:**
  - ```bash
    git clone https://github.com/Monariih/lost-bet
    cd /home/<seu usuário>/lost-bet/
    ```
  - Dentro desta pasta, execute os seguintes comandos:
    - ```bash
      npm install
      ```
    - Após a conclusão, verifique se você possui uma pasta "node_modules".
    - ```bash
      npm install vuejs
      npm run dev
      npm i vite
      ```
  - Verifique se o servidor está ouvindo na rede:
    - ```bash
      sudo lsof -nP -iTCP -sTCP:LISTEN
      ```
    - Certifique-se de que o servidor está ouvindo na rede.
    - Execute o seguinte comando para iniciar o servidor Node.js:
      - ```bash
        npm run dev --host
        ```
  - Confirme no arquivo "vite.conf.json" se você tem a linha chamada:
    - ```json
      "server": {
        "host": '0.0.0.0',
        "port": '80'
      }
      ```
    - **Observação:**
      - Na linha "host", defina seu endereço IP.
      - Na linha "port", defina sua porta TCP.