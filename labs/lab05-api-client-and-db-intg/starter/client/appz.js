const findButton = document.getElementById('find-item');

findButton.addEventListener('click', async () => {

    let itemIDInput = parseInt(Number(document.getElementById('item-id').value));

    if (itemIDInput && typeof itemIDInput == "number") {
        document.getElementById('displayArea').innerHTML = `<p style="color: green;">You entered ItemID #${itemIDInput}. Make changes below and click Edit, or click Delete.</p>`;
    } else {
        document.getElementById('displayArea').innerHTML = `<p style="color: red;">Please enter a valid ItemID #.</p>`;
    }

    const response = await fetch(`http://localhost:3000/api/items/${itemIDInput}`);

    const data = await response.json();

    if (response.status > 299) {
        document.getElementById('displayArea').innerHTML = `<p style="color: red;">Please enter a valid ItemID #.</p>`;
    } else {
        console.log(data.items);
        document.getElementById('item-id').value = itemIDInput;
        document.getElementById('item-name').value = data.items.name;
        document.getElementById('item-quantity').value = data.items.quantity;
    }
    return;
});

const delButton = document.getElementById('del-item');

delButton.addEventListener('click', async () => {
    let itemIDInput = parseInt(Number(document.getElementById('item-id').value));
    let secondGuess = window.confirm("Confirm DELETE");
    const response = await fetch(`http://localhost:3000/api/items/${itemIDInput}`, { method: 'DELETE' });
    const data = await response.json();
    window.location.href = "http://localhost:5173/";
});

const patchButton = document.getElementById('patch-item');

patchButton.addEventListener('click', async () => {
    let itemIDInput   = parseInt(Number(document.getElementById('item-id').value));
    let itemNameInput = document.getElementById('item-name').value;
    let itemQtyInput  = parseInt(Number(document.getElementById('item-quantity').value));

    let patchJSON = { "id" : itemIDInput , "name": itemNameInput , "quantity": itemQtyInput }
    let secondGuess = window.confirm("Confirm UPDATE");
    const response = await fetch(`http://localhost:3000/api/items/${itemIDInput}`,
        { method: 'PATCH',
          headers: { 'Content-Type' : 'application/json' },
          body: JSON.stringify(patchJSON)
        }
    );
    window.location.href = "http://localhost:5173/";
});

