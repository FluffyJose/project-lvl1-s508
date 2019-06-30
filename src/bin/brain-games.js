#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Черновик для всяких штук

const greeting = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  return playerName;
};

const userName = greeting();
console.log(userName);
