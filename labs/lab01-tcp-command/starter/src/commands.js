export function handleCommand(line) {
    const trimmed = line.trim();

    if (trimmed.length === 0) {
        return "ERROR empty command";
    }

    const [command, ...parts] = trimmed.split(" ");
    const argument = parts.join(" ");

    switch (command.toUpperCase()) {
        case "ECHO":
            return argument;

        case "UPPER":
            return argument.toUpperCase();

        case "LOWER":
            return argument.toLowerCase();

        case "REVERSE":
            return argument.split('').reverse().join('');

        case "TIME":
            const timeString = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false                    // 24-hour time
            }).format(new Date());
            return "The current time is " + timeString;

        case "QUIT":
            return "Goodbye.";

        default:
            return `ERROR unknown command: ${command}`;
    }
}

export function shouldCloseConnection(line) {
    return line.trim().toUpperCase() === "QUIT";
}