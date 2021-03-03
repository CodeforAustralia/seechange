<p align="center">
  <h1 align="center"><a href="https://seechange.codeforaustralia.org/">SeeChange (aka. Civic Makers Climate-Change) Project</a></h1>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Accessing the Application](#accessing-the-application)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

----

## About The Project

This is a Civic Makers project for Code for Australia. It's main goal will be to inform about climate change policies in Australia and encourage visitors to take action. Stay tuned for details!

----

## Getting Started

Follow the instructions below to set up your local development environment.

The instructions will guide you to deploy two services locally:

1. If you are a MAC user, please install Xcode using the following command

```
xcode-select --install
```

2. Install nvm, a version manager for node.js (for more information see: https://github.com/nvm-sh/nvm)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm --version

```

3. Clone the project source code.

```
git clone https://github.com/CodeforAustralia/seechange.git
```

4. Navigate into the project directory.

```
cd seechange
```

5. Install node using nvm:

```
nvm install
nvm use
```

6. Double check you are using the right version of node by typing the following command. the version number should match the version number mentioned in [.nvmrc](./.nvmrc) file:

```
$ cat .nvmrc
14.15.1

$ node --version
v14.15.1
```

7. To start up the client service run npm install

```
npm install
```

run npm start

```
npm start
```

8. Go to http://localhost:3000/ . You should see a short welcome message if the app is running.

## Accessing the Application

The application is currently hosted on [Github Pages](https://codeforaustralia.github.io/seechange/).

On your local development instance, enter `http://localhost:3000` into any web-browser to view the app.

## Contact

- Kris (Tech Lead) - klubiniecki@gmail.com
- Qing (Tech Lead) - hanqing.tan@gmail.com

## Acknowledgements

- [Code for Australia](https://codeforaustralia.org/)
