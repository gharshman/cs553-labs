import http from "node:http";

const MY_PORT = 3000;

const pageCounts = new Map();
pageCounts.set("health", 0);
pageCounts.set("time", 0);
pageCounts.set("echo", 0);
pageCounts.set("calculate", 0);
pageCounts.set("requests", 0);

export function sendJson(res, statusCode, body) {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(body) + "\n");
}

export function readJsonBody(req) {
    return new Promise((resolve, reject) => {

        let body = "";

        req.on("data", chunk => { body += chunk; });

        req.on("end", () => {
            if ( body.trim() === "" || body.trim() === "{}" ) {
                reject( new Error("Invalid JSON body") ); }
            try { resolve( JSON.parse(body) ); }
            catch ( error ) { reject( new Error( "Invalid JSON body" ) ); }
        })
        req.on( "error", reject );
    });
}

export function handleCalculate(body) {

    try {
        if (!body.operation || !body.a || !body.b) {
            return { statusCode: 400, response: { error: "Missing field" } }; }
    } catch {
        return { statusCode: 400, response: { error: "Unknown error" } };
    }

    const validOperations = ["add", "subtract", "multiply", "divide", "modulo"];
    const operation = body.operation;
    const a = body.a;
    const b = body.b;

    if (!validOperations.includes(operation)) {
        return { statusCode: 400, response: { error: "Invalid operation" }};}

    if (!Number.isFinite(a)) {
        return { statusCode: 400, response: { error: "Not a number" }};}

    if (!Number.isFinite(b)) {
        return { statusCode: 400, response: { error: "Not a number" }};}

    if (operation === "divide" && b === 0) {
        return { statusCode: 400, response: { error: "Cannot divide by zero" }};}

    if (operation === "modulo" && b === 0) {
        return { statusCode: 400, response: { error: "Cannot divide by zero" }};}

    let answer = 0;
    if (operation === "add")      { answer = a + b; }
    if (operation === "subtract") { answer = a - b; }
    if (operation === "multiply") { answer = a * b; }
    if (operation === "divide")   { answer = a / b; }
    if (operation === "modulo")   { answer = a % b; }

    return { statusCode: 200, response: { result : answer } };
}


export async function requestHandler(req, res) {

    const method = req.method;
    const url = req.url;

    if (method === "GET" && url === "/health") {
        let count = pageCounts.get("health");
        pageCounts.set("health",++count);
        sendJson(res, 200, { status: "ok" }); return; }

    if (method === "GET" && url === "/time") {
        let count = pageCounts.get("time");
        pageCounts.set("time",++count);
        const timeString = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false                    // 24-hour time
        }).format(new Date());
        let timeMessage = "The current time is " + timeString;
        sendJson(res, 200, { message: timeMessage }); return; }

    if (method === "GET" && url === "/requests") {
        let count = pageCounts.get("requests");
        pageCounts.set("requests",++count);
        count = pageCounts.get("requests") +
                pageCounts.get("time") +
                pageCounts.get("echo") +
                pageCounts.get("calculate") +
                pageCounts.get("health");

        sendJson(res, 200, {
            count:     count,
            health:    pageCounts.get("health"),
            time:      pageCounts.get("time"),
            echo:      pageCounts.get("echo"),
            calculate: pageCounts.get("calculate"),
            requests:  pageCounts.get("requests")
        } );
        return; }

    if (method === "POST" && url === "/echo") {
        let count = pageCounts.get("echo");
        pageCounts.set("echo",++count);
        try {
            const body = await readJsonBody(req);
            sendJson(res, 200, body );
        }
        catch {
            sendJson(res, 400, { error: "Invalid JSON" });
        }
        return; }

    if (method === "POST" && url === "/calculate") {
        let count = pageCounts.get("calculate");
        pageCounts.set("calculate",++count);
        try {
            const body = await readJsonBody(req);
            const result = handleCalculate(body);
            sendJson(res, result.statusCode, result.response);
        } catch {
            sendJson(res, 400, { error: "Invalid JSON" });
        }

        return;
    }

    sendJson(res, 404, { error: "Not found" });
}

export function createServer() {
    return http.createServer(requestHandler); }

export function resetState() {
    pageCounts.set("health", 0);
    pageCounts.set("time", 0);
    pageCounts.set("echo", 0);
    pageCounts.set("calculate", 0);
    pageCounts.set("requests", 0);
}

if (import.meta.url === `file://${process.argv[1]}`) {
    const port = process.env.PORT || MY_PORT;
    const server = createServer();

    server.listen(port, () => {
        console.log(`HTTP JSON server listening on port ${port}`);
    });
}
