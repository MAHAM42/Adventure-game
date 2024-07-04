#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
;
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "please select your opponent",
        choices: ["Skeleton", "Assassin", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "Skeleton") {
        console.log(`${chalk.bold.gray(p1.name)} vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Please select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.yellow("You Loose! *Better Luck* For The Next Time"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.blue("You Are Winner"));
                    process.exit();
                }
            }
            ;
            o1;
        }
        ;
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.blue(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.italic.yellow("You Loose! *Better Luck* For The Next Time"));
            process.exit();
        }
        ;
    }
    if (opponent.select === "Assassin") {
        console.log(`${chalk.bold.gray(p1.name)} vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Please select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.yellow("You Loose! *Better Luck* For The Next Time"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.gray(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.blue("You Are Winner"));
                    process.exit();
                }
            }
            ;
            o1;
        }
        ;
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.blue(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.italic.yellow("You Loose! *Better Luck* For The Next Time"));
            process.exit();
        }
        ;
    }
    if (opponent.select === "Zombie") {
        console.log(`${chalk.bold.gray(p1.name)} vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Please select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.yellow("You Loose! *Better Luck* For The Next Time"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.gray(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.blue("You Are Winner"));
                    process.exit();
                }
            }
            ;
            o1;
        }
        ;
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.blue(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.italic.yellow("You Loose! *Batter Luck* For The Next Time"));
            process.exit();
        }
        ;
    }
} while (true);
