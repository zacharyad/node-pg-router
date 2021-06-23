const prompt = (data) => {
  process.stdout.write(
    `Main Menu\nCommands:\n1. Select all users\n2. Select all puppies\n3. Exit\n> `
  );
};

const main = async (data) => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');
  switch (command) {
    case '1':
      break;
    case '2':
      break;
    case '3':
      process.exit(1);
    default:
      prompt('not valid command');
  }
  prompt();
};

function start() {
  prompt();
  process.stdin.on('data', main);
}

start();
