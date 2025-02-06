const readlineSync = require('readline-sync');
const fs = require('fs');
const bcrypt = require('bcrypt');
const usersFile = 'users.json';

// Read users from the JSON file
function readUsers() {
    if (fs.existsSync(usersFile)) {
        return JSON.parse(fs.readFileSync(usersFile));
    }
    return [];
}

// Write users to the JSON file
function writeUsers(users) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Register a new user
function register() {
    console.log("Register a new account");

    const name = readlineSync.question("Enter your name: ");
    const email = readlineSync.question("Enter your email: ");
    const password = readlineSync.question("Enter your password: ", { hideEchoBack: true });

    const users = readUsers();

    // Check if email already exists
    if (users.find(user => user.email === email)) {
        console.log("Email already registered. Please use a different email.");
        return;
    }

    // Encrypt password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Save user
    const user = { name, email, password: hashedPassword };
    users.push(user);
    writeUsers(users);

    console.log("Registration successful!");
}

register();
