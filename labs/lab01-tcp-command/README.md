# Lab 1 - TCP Command Server

### Submitted by: Glenn R. Harshman, CS553-01, on June 7, 2026

The purpose of this lab was to understand how client/server connections
are established in Javascript code and how sockets are used to pass data
between clients and servers.  The client passes data and make requests,
and the server processes the data and responds with the modified data.

Lab completion process:
- Instructor's git repository was forked
- Student's fork was cloned to local laptop
- Edits were made to commands.js file
  * Added functions for UPPER, LOWER, REVERSE, and TIME
- README.MD file was updated
- Changes were committed
- Fork was synchronized back to student's Github repository
- Link was attached to Canvas submission

## Features

1. The server accepts TCP client connections on port 3000 (configurable...see below).
2. The client must send one command at a time.
3. The server supports `ECHO`, `UPPER`, `LOWER`, `REVERSE`, `TIME`, and `QUIT` commands.
4. The server returns an error message for unknown commands.
5. The server does not crash when the client sends an empty line.
6. This README describes the protocol.

## Commands

1. `ECHO` command: Repeats the string back to the client exactly as typed.
2. `UPPER` command: Converts alphabetic characters to *upper* case before echoing the string back to the client.
3. `LOWER` command: Converts alphabetic characters to *lower* case before echoing the string back to the client.
4. `REVERSE` command: Echos the client's string back in reverse order, ex. "Hello" becomes "olleH".
``` The REVERSE command converts the string to an array, invokes the reverse method on the array, and then joins the characters back into a string. ```
5. `TIME` command: Gives the client the current server-side system time, in 24-hour format.
6. `QUIT` command: exits the program and terminates the connection.  Server continues to listen for other client connection requests. 

## Running the Lab

1. `git clone https://github.com/gharshman/cs553-labs`
2. `cd ./cs553-labs/labs/lab01-tcp-command/starter`
3. Install dependencies: `npm install`
4. In Terminal #1: `npm run server`
5. In Terminal #2: `npm run client`
6. Enter commands in client terminal
7. Type `quit` when done

## Configuring the Port

The server will use port `3000` by default.  You can run the server on a different port by setting the `PORT` environment variable when running the server and when running the client:
```
PORT=4000 npm run server
PORT=4000 npm run client
```

## Testing

This lab includes automated tests for the command-handling logic, and all tests pass.  Run the tests from the starter directory:
```
npm test
```

## Reflection Questions

#### 1. <u>What is the difference between the client and the server?</u>

The server sits idly and listens on the designated port, waiting to "serve" clients.  Clients request a connection to
the server when they want something.  Once the connection is made, the client submits its request, the server handles
it, if possible, and returns a response to the client.  The word "return" was chosen purposefully, because the server
is, in effect, acting like a program function or an object method, which also "return" things to their callers or
invokers.

#### 2. <u>Why does the server need to keep running after handling one request?</u>

The entire reason for having and using a client/server model is to distribute computing and permit cooperation among
many computers. In this model, the server is a specialized machine providing a unique service, but the economics only
work if the server provides this service for many clients.  You could make a server that shuts down the service after
one client has been served, but that would not be useful or economical.  Better to have the server continue to listen
to see if other clients want what the server has to offer.

#### 3. <u>What happens if two clients connect at the same time?</u>

Ideally, the server should be able to handle many client connections and service all of their needs.  The only limits
are the server's processing power, the network's bandwidth, and possibly the number of available sockets.  Clients
request connections on port 3000 (or whatever configurable port is specified), but as part of the handshake process,
they switch to a different random unused port number.  That keeps port 3000 open to accept other clients.  It is not
unlike a walkie-talkie or CB radio communication: If the conversation is going to last for a while, change to another
channel so as not to hog the main channel.  If the connections happen at exactly the same time, the server's network
queue should handle the requests in order of receipt. Clients are uniquely identified by IP address and port number.

#### 4. <u>How is this different from HTTP?</u>

It is not different at all.  HTTP is a well-known port number designated for HTTP requests, but port 80 does not
know that.  It behaves like any other port.
