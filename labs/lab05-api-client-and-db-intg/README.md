# Lab 5 - API Client and Database Integration

### Submitted by: Glenn R. Harshman, CS553-01, on June 20, 2026

The purpose of this lab was to understand how Node.js Express can run two services, API and HTTP,
and allow the API service to serve as a "service-in-the-middle" between the HTTP server and the
database server.

### Lab Completion Process:
- Instructor's upstream repository was fetched/merged
- Student's remote repository was branched to "dev"
- Lab was completed in branch "dev"
- Added all functionality and endpoints/routes to API service
- Created bash script `test-script.bash` to test API with curl commands
- Extended `index.html` with button to `edit.html` page
- Wrote `edit.html` page to allow PATCH and DELETE from browser client
- README.MD file was updated
- Switched back to "main", merged "dev", and branched "lab05" to preserve lab completion
- Remote repository was pushed to student's Github local repository
- Link was attached to Canvas submission

### API Routes

| Route | Method |
|-----------|--------|
| `GET /health` | using `app.get()` |
| `GET /api/items` | using `app.get()` |
| `POST /api/items` | using `app.post()` |
| `GET /api/items/:id` | using `app.get()` |
| `PUT /api/items/:id` | using `app.put()` |
| `PATCH /api/items/:id` | using `app.patch()` |
| `DELETE /api/items/:id` | using `app.delete()` |

### Features     

- Express API and HTTP servers
- PostgreSQL database running in Docker
- Collection of items with fields {`id`, `name`, `quantity`}.
- Defined API routes:
- Created bash script `test-script.bash` to test API with curl commands

### Running the Lab (in Linux)

#### In Terminal:
```bash
git clone https://github.com/gharshman/cs553-labs
cd ./cs553-labs/labs/lab05-api-client-and-db-intg/starter
npm install
docker compose up -d
npm run api &
npm client &
bash ./src/test-script.bash
```

#### In Browser:
* API Server runs on `http://localhost:3000` 
* HTTP Server runs on `http://localhost:5173` 

*****
-----
_______


## Reflection Questions & Answers

#### 1. What changed when the API moved from in-memory data to Postgres?

The database makes the data persistant, even if the API server is shut down.  It comes at a cost of speed and added complexity.

#### 2. When should you use `PUT` instead of `PATCH`?

PUT replaces the entire record, and it is preferred if you want to ensure idempotent operations.

#### 3. What kinds of validation belong in the API even if the browser client also validates input?

Browsers are not the only clients.  Your API must still perform data validation to protect against errors from curl, Postman, etc.

#### 4. How does the browser client help you test the API differently than `curl` alone?

Browsers are used more commonly that any other client, and they behave differently too (added security, etc.)

#### 5. If you added an extension, what did you add and why?

I extended the client `index.html` by:
* automatically displaying the list of items when the page loads, and
* adding a button that takes the user to an `edit.html` page.

On the `edit.html` page, the user can retrieve a record by item id #, and then either:
* make changes to the name and/or quantity and then click `Edit`, or
* click the `Delete` button.

Whichever one they choose, they are required to confirm their choice via a Confirm window.
