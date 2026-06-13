# Lab 2 - HTTP JSON Command Server

### Submitted by: Glenn R. Harshman, CS553-01, on June 13, 2026

The purpose of this lab was to understand how HTTP client/server connections are established in Node.js and
how the request/response mechanism is used to pass data between clients and servers via HTTP GET and POST requests. 
The client passes data and make requests,  and the server processes the data and responds appropriately.

Lab completion process:
- Instructor's repository was setup as "upstream" repository and fetched/merged
- Student's remote repository was branched to "dev"
- Lab was completed in branch "dev"
- Added additional "/time" endpoint
- Added modulo function to "/calculate" endpoint
- Added functionality to count requests by endpoint/route
- Added new tests to file `server.test.js`
- README.MD file was updated
- Switched back to "main", merged "dev", and branched "lab02" to preserve lab completion
- Remote repository was pushed to student's Github local repository
- Link was attached to Canvas submission

## Features
### *** <u>All four of the graduate extension features were implemented</u>.***

1. The server accepts HTTP GET and POST commands on port 3000.
2. The client must send one command at a time.
3. The server supports `POST /echo`, `GET /health`, `GET /time`, `POST /calculate`, `GET /requests` requests.
4. The server returns an error message for unknown commands and invalid requests.
5. This README describes the protocol.

## Running the Lab

1. `git clone https://github.com/gharshman/cs553-labs`
2. `cd ./cs553-labs/labs/lab02-http-json/starter`
3. Install dependencies: `npm install`
4. In Terminal #1: `npm run server`
5. In Terminal #2: `npm test`

Alternatively, while server is running in Terminal #1, you can manually enter individual `curl` commands
in Terminal #2, or you could run the following command from `cs553-labs/labs/lab02-http-json/starter:
```
bash -v my_test.sh
```

## Configuring the Port

The server will use port `3000` by default.  You can run the server on a different port by setting the `PORT` environment
variable when running the server and when running the client.  `PORT` must be in ***ALL CAPS***:
```
PORT=4000 npm run server
PORT=4000 npm run client
```

## Reflection Questions

#### 1. What is the difference between a TCP message and an HTTP request?

A TCP message is a Transport layer (Layer 4) message.  It is characterized by being connection-oriented, established
by 3-way handshake, disassembly into packets, reassembly and accounting on the other end, retransmission of lost
packets, etc.

By contrast, an HTTP Request is an Application layer (Layer 7) message characterized by request-response model,
header/status/body structure, and more predictable schema.  It uses a familiar CRUD operation framework, and it 
is the foundation for web transactions.  Easy to adapt to HTML forms.

#### 2. What does the `Content-Type: application/json` header tell the server?

The Content-Type header gives the server confirmation of the data format, so that the server's backend logic 
knows how to handle, parse, and translate the incoming data.  In this case, we are using the JavaScript Object 
Notation (JSON) data format.

#### 3. Why should a server return different HTTP status codes for different situations?

Status codes are for standardization.  Without these codes, every programmer in the world would have a free
license to define success and failure in their own manner.  Standardized codes make it easier to handle 
different situations and failure types, and it makes the web more reliable and predictable.

#### 4. What happens if the client sends invalid JSON?

If a client specifies JSON format and then does not comply with their own specification, the client should not
expect the server to untangle the mess.  The server will not be able to parse the data object, and the request
will be rejected.  The client should expect a "Status 400: Bad Request" HTTP status code.

#### 5. How is this lab different from Lab 1?

In Lab #2, the code more closely resembles the object-oriented approach that most students are familiar with.
We see more functions, methods, try-catch statements, and error handling.  Additionally, Lab #1 felt more mechanistic,
whereas Lab #2 seems more focused on functionality.  From Lab #2, it is not a large step to making web pages to
handle these GET and POST calls for us.
