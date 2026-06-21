import express from "express";

export function createApp() {
  const app = express();
  app.set('json spaces', 2);
  app.use(express.json());

  // Starter data. This data is stored in memory and will reset when the server restarts.
  let nextId = 3;

  let items = [
    { id: 1, name: "keyboard", quantity: 10 },
    { id: 2, name: "mouse", quantity: 5 }
  ];

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/items", (req, res) => {
    res.status(200).json(items);
  });

  app.get("/items/:id", (req, res) => {
    const targetId = Number(req.params.id);
    const targetItem = items.find( item => item.id === targetId );
    if (typeof targetItem === "undefined") {
      res.status(404).json({error: "Item not found"});
    }
    res.status(200).json( targetItem );
  });

  app.post("/items", (req, res) => {
    const add_name = req.body.name;
    const add_quantity = req.body.quantity;

    // Validate the incoming data
    if (!add_name || add_name === "") {
      return res.status(400).json({ error: 'Item name is required.' });
    }

    if (!add_quantity) {
      return res.status(400).json({ error: 'Quantity is required.' });
    }

    const add_qty = Number(add_quantity);

    if ( Number.isNaN(add_qty) ) {
      return res.status(400).json({ error: 'Quantity must be a number.' });
    }

    if ( add_qty < 0) {
      return res.status(400).json({ error: 'Quantity cannot be negative.' });
    }

    const newItem = {
      id: nextId,
      name: add_name,
      quantity: add_qty
    };

    nextId++;
    items.push(newItem);

    // Send back a success response with the newly created object
    res.status(201).json({ message: 'Item created successfully' });
  });

  app.put("/items/:id", (req, res) => {
    const targetId = Number(req.params.id);
    const targetItem = items.find( item => item.id === targetId );
    if (typeof targetItem === "undefined") {
      res.status(404).json({error: "Item not found."});
    }

    const upd_name = req.body.name;
    const upd_quantity = req.body.quantity;

    // Validate the incoming data
    if (!upd_name || upd_name === "") {
      return res.status(400).json({ error: 'Item name is required.' });
    }

    if (!upd_quantity) {
      return res.status(400).json({ error: 'Quantity is required.' });
    }

    const upd_qty = Number(upd_quantity);

    if ( Number.isNaN(upd_qty) ) {
      return res.status(400).json({ error: 'Quantity must be a number.' });
    }
    if ( upd_qty < 0) {
      return res.status(400).json({ error: 'Quantity cannot be negative.' });
    }

    targetItem.name = upd_name;
    targetItem.quantity = upd_qty;

    res.status(200).json( targetItem );

  });

  app.delete("/items/:id", (req, res) => {

    const targetId = parseInt(req.params.id);
    const itemExists = items.some(item => item.id === targetId);
    if (!itemExists) {
      return res.status(404).json({error: "Item not found."});
    }
    items = items.filter( item => item.id === targetId);
    let itemIndex = items.findIndex( item => items.id !== targetId);
    return res.status(201).json( { message: "Item deleted."} );
  });

  app.use((req, res) => {
    res.status(404).json({ error: "API Endpoint Not Found." });
  });

  return app;
}

const isMainModule = process.argv[1] === new URL(import.meta.url).pathname;

if (isMainModule) {
  const PORT = process.env.PORT || 3000;
  const app = createApp();

  app.listen(PORT, () => {
    console.log(`Lab 3 REST API listening on port ${PORT}`);
  });
}
