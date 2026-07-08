# Lab 5 - API Client and Database Integration

### Submitted by: Glenn R. Harshman, CS553-01, on June 20, 2026

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
