# Lab 3 - REST API with Express

### Submitted by: Glenn R. Harshman, CS553-01, on June 20, 2026

The purpose of this lab was to understand how Node.js Express can ease the creation of REST-style APIs.
Express makes it easier and faster to organize API routes, parse JSON request bodies, return JSON responses,
and use HTTP methods and status codes more clearly.

In this lab, we create an API for managing a small in-memory collection of items.  Because the collection
is defined in the Node.js program and not stored in a separate persistent database, the date collection
resets every time the server is restarted.

## Lab Completion Process:
- Instructor's upstream repository was fetched/merged
- Student's remote repository was branched to "dev"
- Lab was completed in branch "dev"
- Added all functionality and endpoints/routes
- Added new tests to file `server.test.js`
- README.MD file was updated
- Switched back to "main", merged "dev", and branched "lab03" to preserve lab completion
- Remote repository was pushed to student's Github local repository
- Link was attached to Canvas submission

## Features     

#### <em><u>*** All of the graduate extension features were implemented. ***</u></em>

- Created an Express server and a collection of JSON items with fields {`id`, `name`, `quantity`}.
- Defined API routes using `app.get()`, `app.post()`, `app.put()`, and `app.delete()`.
- Defined routes:     
  * `GET /health`
  * `GET /items`
  * `GET /items/:id`
  * `POST /items`
  * `PUT /items/:id`
  * `DELETE /items/:id`
- Read JSON request bodies using `express.json()`.
- Return JSON responses using `res.json()`.
- Use appropriate HTTP status codes for successes and failures.
- Implement basic REST-style CRUD operations.
- Described the API using a simple OpenAPI YAML file.
- Created automated test file to test API behavior.
- Created text file to run multiple tests with `curl`.

## Running the Lab

1. `git clone https://github.com/gharshman/cs553-labs`
2. `cd ./cs553-labs/labs/lab03-rest-api/starter`
3. Install dependencies: `npm install`
4. In Terminal #1: `npm run server`
5. In Terminal #2: `npm test`

Alternatively, while server is running in Terminal #1, you can manually enter individual `curl` commands
in Terminal #2, or you could run the following command from `cs553-labs/labs/lab02-http-json/starter:

```bash
bash -v add_items.sh
```

## Configuring the Port

The server will use port `3000` by default.  You can run the server on a different port by setting the `PORT`
environment variable when running the server and when running the client.  `PORT` must be in ***ALL CAPS***:

```bash
PORT=4000 npm run server
PORT=4000 npm run client
```

## Reflection Questions & Answers

#### 1. What makes this API more "REST-like" than the previous HTTP/JSON lab?

In the previous lab, we were dealing directly with HTTP commands GET & POST, which are verbs and appear more
like function calls or remote procedure calls (RPCs).  REST APIs focus more on the nouns, e.g., item, id, name,
etc., so they seem more like class methods from object-oriented programming.

#### 2. What is the purpose of a route parameter such as `/items/:id`?

By passing the object/noun through the URL, you are helping to enforce abstraction and hiding of the methods
that are acting on the data.  You are hiding field names and query strings especially, which were formerly
passed in the URL back in the dark days of `.asp` and `.php` pages.  It helps with data fetching and code efficiency.

#### 3. Why should `POST`, `PUT`, and `DELETE` use different HTTP methods?

They require different methods because they are designed for different operations.  `POST` is used to create a new
database record, `PUT` is used to update an existing record, and `DELETE` is used to remove a record.  Clearly
defining these operations allows us to have predictable, standardized operations between clients and servers.

#### 4. What is the difference between a `400` error and a `404` error?

Having standardized response status codes also helps to maintain clarity in successful and unsuccessful client-server
transactions.  Error response codes that start with 4xx indicate that the client did something wrong and the server
is unable to satisfy the client's request.  Specifically...

* Status `400` means that the client's request had malformed syntax or bad format, i.e., the client passed bad data.
* Status `404` means that the server cannot find the requested resource, i.e., the client's syntax was fine, but the
requested resource does not exist.

#### 5. How does the OpenAPI file relate to your Express server code?

An `openapi.yaml` file is a blueprint for the Express server.  It defines the API endpoints, the expected data, and
what data the API endpoints will return.  The workflow can be "Design First" or "Code First".
