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