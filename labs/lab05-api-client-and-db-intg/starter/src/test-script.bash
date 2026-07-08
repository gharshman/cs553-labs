echo -e "\n\n**** Testing GET General Paths ****\n"
curl http://localhost:3000
curl http://localhost:3000/
curl http://localhost:3000/health
curl http://localhost:3000/health/
curl http://localhost:3000/healthy
read -r -p "Press Enter to Continue: " enterVar

echo -e "\n\n**** Testing GET List Items Path ****\n"
curl http://localhost:3000/api/items
curl http://localhost:3000/api/items/
read -r -p "Press Enter to Continue: " enterVar

echo -e "\n\n**** Testing POST Add Items Path ****\n"
curl -X POST --json '{"name": "CPU", "quantity": 5}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Motherboard", "quantity": 8}' http://localhost:3000/api/items
curl -X POST --json '{"name": "RAM", "quantity": 12}' http://localhost:3000/api/items
curl -X POST --json '{"name": "SSD", "quantity": 6}' http://localhost:3000/api/items
curl -X POST --json '{"name": "External DVD", "quantity": 7}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Video Card", "quantity": 4}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Power Supply", "quantity": 11}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Cooling Fan", "quantity": 5}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Computer Case", "quantity": 4}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Webcam", "quantity": 13}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Microphone", "quantity": 4}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Speakers", "quantity": 16}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Flash Drive", "quantity": 21}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Ethernet Cable", "quantity": 42}' http://localhost:3000/api/items
curl -X POST --json '{"name": "HDMI Cable", "quantity": 11}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Router", "quantity": 6}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Printer", "quantity": 4}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Mouse Pad", "quantity": 124}' http://localhost:3000/api/items
curl -X POST --json '{"name": "Rubber Poop Emoji Toy", "quantity": 42}' http://localhost:3000/api/items

echo -e "\n\n**** Testing GET List Items Path ****\n"
curl http://localhost:3000/api/items/
read -r -p "Press Enter to Continue: " enterVar

echo -e "\n\n**** Testing GET One (1) Item Path ****\n"
curl http://localhost:3000/api/items/22
read -r -p "Press Enter to Continue: " enterVar

echo -e "\n\n**** Testing PUT Replace Item Path ****\n"
curl -X PUT --json '{ "name": "Stress Relief Ball", "quantity": 24}' http://localhost:3000/api/items/22
read -r -p "Press Enter to Continue: " enterVar

echo -e "\n\n**** Testing PATCH Item Path ****\n"
curl -X PATCH --json '{ "name": "Rubber Poop Emoji Stress Relief Toy" }' http://localhost:3000/api/items/22
curl -X PATCH --json '{ "quantity": 42 }' http://localhost:3000/api/items/22
read -r -p "Press Enter to Continue: " enterVar

echo -e "\n\n**** Testing DELETE Item Path ****\n"
curl -X DELETE http://localhost:3000/api/items/4
curl -X DELETE http://localhost:3000/api/items/5
curl -X DELETE http://localhost:3000/api/items/6
curl -X DELETE http://localhost:3000/api/items/7
curl -X DELETE http://localhost:3000/api/items/8
curl -X DELETE http://localhost:3000/api/items/9
curl -X DELETE http://localhost:3000/api/items/10
curl -X DELETE http://localhost:3000/api/items/11
curl -X DELETE http://localhost:3000/api/items/12
curl -X DELETE http://localhost:3000/api/items/13
curl -X DELETE http://localhost:3000/api/items/14
curl -X DELETE http://localhost:3000/api/items/15
curl -X DELETE http://localhost:3000/api/items/16
curl -X DELETE http://localhost:3000/api/items/17
curl -X DELETE http://localhost:3000/api/items/18
curl -X DELETE http://localhost:3000/api/items/19
curl -X DELETE http://localhost:3000/api/items/20
curl -X DELETE http://localhost:3000/api/items/21
curl -X DELETE http://localhost:3000/api/items/22
sudo docker exec -it lab05-postgres psql -U postgres -d lab05 -c "ALTER SEQUENCE items_id_seq RESTART WITH 4;"
read -r -p "Press Enter to Continue: " enterVar

echo -e "\n\n**** Testing GET List Items Path ****\n"
curl http://localhost:3000/api/items/
read -r -p "Back to Where We Started!  Press Enter to Continue: " enterVar

