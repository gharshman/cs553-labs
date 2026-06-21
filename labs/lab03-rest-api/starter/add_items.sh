
# Add some spaces at the beginning of the script
echo -e "\n\n\n"
echo "-------------------------------------------------------------------------------"

# Check the API health
curl -w "\n\n" http://localhost:3000/health

# List the starting items
curl -w "\n\n" http://localhost:3000/items
curl -w "\n\n" http://localhost:3000/items/1
curl -w "\n\n" http://localhost:3000/items/2

# Create all of the items
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "monitor", "quantity": 4}'
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "speakers", "quantity": 7}'
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "camera", "quantity": 4}'
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "printer", "quantity": 3}'
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "power adapter", "quantity": 11}'
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "power cord", "quantity": 11}'
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "scanner", "quantity": 11}'
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "surge protector", "quantity": 11}'
curl -w "\n\n" -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "battery", "quantity": 22}'

# Capitalize all of the items
curl -w "\n\n" -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name": "keyboard", "quantity": 42}'
curl -w "\n\n" -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name": "Keyboard", "quantity": 25}'; echo;
curl -w "\n\n" -X PUT http://localhost:3000/items/2 -H "Content-Type: application/json" -d '{"name": "Mouse", "quantity": 25}'; echo;
curl -w "\n\n" -X PUT http://localhost:3000/items/3 -H "Content-Type: application/json" -d '{"name": "Monitor", "quantity": 4}'
curl -w "\n\n" -X PUT http://localhost:3000/items/4 -H "Content-Type: application/json" -d '{"name": "Speakers", "quantity": 7}'
curl -w "\n\n" -X PUT http://localhost:3000/items/5 -H "Content-Type: application/json" -d '{"name": "Camera", "quantity": 4}'
curl -w "\n\n" -X PUT http://localhost:3000/items/6 -H "Content-Type: application/json" -d '{"name": "Printer", "quantity": 3}'
curl -w "\n\n" -X PUT http://localhost:3000/items/7 -H "Content-Type: application/json" -d '{"name": "Power Adapter", "quantity": 11}'
curl -w "\n\n" -X PUT http://localhost:3000/items/8 -H "Content-Type: application/json" -d '{"name": "Power Cord", "quantity": 10}'
curl -w "\n\n" -X PUT http://localhost:3000/items/9 -H "Content-Type: application/json" -d '{"name": "Scanner", "quantity": 3}'
curl -w "\n\n" -X PUT http://localhost:3000/items/10 -H "Content-Type: application/json" -d '{"name": "Surge Protector", "quantity": 6}'
curl -w "\n\n" -X PUT http://localhost:3000/items/11 -H "Content-Type: application/json" -d '{"name": "Battery", "quantity": 8}'

# List all of the items:
curl -w "\n\n" http://localhost:3000/items

# List the items individually:
curl -w "\n\n" http://localhost:3000/items/1
curl -w "\n\n" http://localhost:3000/items/2
curl -w "\n\n" http://localhost:3000/items/3
curl -w "\n\n" http://localhost:3000/items/4
curl -w "\n\n" http://localhost:3000/items/5
curl -w "\n\n" http://localhost:3000/items/6
curl -w "\n\n" http://localhost:3000/items/7
curl -w "\n\n" http://localhost:3000/items/8
curl -w "\n\n" http://localhost:3000/items/9
curl -w "\n\n" http://localhost:3000/items/10
curl -w "\n\n" http://localhost:3000/items/11

# These items will not be found:
curl -w "\n\n" http://localhost:3000/items/12
curl -w "\n\n" http://localhost:3000/items/13
curl -w "\n\n" http://localhost:3000/items/14
curl -w "\n\n" http://localhost:3000/items/15

# These pages will not be found:
curl -w "\n\n" http://localhost:3000/missing

# Check the API health
curl -w "\n\n" http://localhost:3000/health

# Add some spaces at the end of the script
echo "-------------------------------------------------------------------------------"
echo -e "\n\n\n"
echo -e "\x07"
