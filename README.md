# Demo Angular 1.x front-end for Spring Lemon - WARNING - NO MORE COMPATIBLE WITH LATEST ANGULAR 1.x

This is an Angular 1.x demo front-end for the [Lemon demo application](https://github.com/naturalprogrammer/lemon-demo).

## Installing the prerequisites

This project is built using [yo angular generator](https://github.com/yeoman/generator-angular). Below are the steps to install the development environment.

### Installing Node.js

Install or upgrade *Node.js* by following steps given at [https://nodejs.org](https://nodejs.org).

### Installing NPM, Yeoman, Bower and Grunt

Type the commands below in an ADMIN shell:

``` bash
npm install --global npm
npm install --global yo bower grunt-cli
```

Use the commands below to verify that the installation was successful:

``` bash
yo --version
bower --version
grunt --version
```

## Checking out the project

> New to Git? Our [Git Rapid Tutorial](http://www.naturalprogrammer.com/tutorials/) could help.

Assuming git is installed on your machine, open a command prompt and `cd` to the folder under which you want to check out this project. Then, run the following command:
```
git clone --depth 1 https://github.com/naturalprogrammer/lemon-demo-angular1.git
```

It will create a *lemon-demo-angular1* sub-directory and fetch the project into it. `cd` to that directory
```
cd lemon-demo-angular1
```
and then, give the following commands to fetch the *Node.js* and *Bower* dependencies:
```
npm install
bower install
```
Assuming the Lemon demo application is runnintg at *http://localhost:8080*, now give the following command to start the front-end:
```
grunt serve
```
This should start the front-end in a browser. Hitting Ctrl-C on the command prompt will stop it.

## Got any issue?

1. If you face any installation related issues with Node.js, Grunt, Bower, Yemoan or any of the related technologies, refer to the documentation of the respective project.
1. If you find any bug in the code, see if a [GitHub issue](https://github.com/naturalprogrammer/lemon-demo-angular1/issues) is already created, or else create one.
