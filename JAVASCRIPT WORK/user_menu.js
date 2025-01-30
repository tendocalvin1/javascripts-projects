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
