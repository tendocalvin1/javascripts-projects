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

// Login a user
function login() {
    console.log("Login to your account");

    const email = readlineSync.question("Enter your email: ");
    const password = readlineSync.question("Enter your password: ", { hideEchoBack: true });

    const users = readUsers();
    const user = users.find(user => user.email === email);

    if (!user) {
        console.log("Email not found.");
        return;
    }

    // Verify password
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
        console.log("Incorrect password.");
        return;
    }

    console.log("Login successful!");
    userMenu(user);
}

// Display user menu
function userMenu(user) {
    console.log(`\nWelcome, ${user.name}!`);

    while (true) {
        console.log("\n1. View Profile\n2. Logout\n3. Exit");
        const choice = readlineSync.question("Choose an option: ");

        if (choice === '1') {
            viewProfile(user);
        } else if (choice === '2') {
            console.log("Logged out successfully.");
            break;
        } else if (choice === '3') {
            console.log("Exiting...");
            process.exit();
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
}

// View Profile
function viewProfile(user) {
    console.log(`\nProfile Information:\nName: ${user.name}\nEmail: ${user.email}`);
}

// Start the login process
login();
