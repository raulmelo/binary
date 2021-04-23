#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.yellow("             Tariq"),
    handle: chalk.yellow("Selawi"),
    work: chalk.magenta("Junior Web Developer at BeCode.org"),
    twitter: chalk.blue("https://twitter.com/") + chalk.red("@selawi_be"),
    npm: chalk.green("https://npmjs.com/") + chalk.red("tselawi"),
    github: chalk.yellowBright("https://github.com/") + chalk.red("tselawi"),
    linkedin: chalk.magenta("https://linkedin.com/in/") + chalk.red("tariq-selawi"),
    portfolio: chalk.cyanBright("https://tariqs-portfolio.netlify.app/"),
    npx: chalk.red("npx") + " " + chalk.yellowBright("Tariq"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelportfolio: chalk.white.bold("        Portfolio:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.redBright(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelportfolio} ${data.portfolio}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);