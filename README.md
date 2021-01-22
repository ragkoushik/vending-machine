# vending-machine

## Description and constraints 
The vending machine can be operated on a CLI
- The vending machine has been tasked to dispense the latest vegan chocolate bars. 
- The system allows the user to enter coins in the following denominations (10c, 20c, 50c, $1, $2). 
- It will then prompt the user to enter their choice of chocolate bar from the following selections; Caramel ­ $2.50, Hazelnut ­ $3.10 , Organic Raw ­ $2.00.
- Refunds the whole amount if inserted coins exceed product cost.

## Stages and allowed commands
### Stage 1 - Select product
```
Begin by entering your choice of chocolate bar 
[1] Caramel ­ $2.50 
[2] Hazelnut ­ $3.10 
[3] Organic Raw ­ $2.00. 
Press 1 OR 2 OR 3 OR 'c' to cancel OR 'q' to exit.
```
### Stage 2 - Insert coins
```
Insert coins in any of the following denominations 10c,20c,50c,$1,$2. Example: Type: 10c OR $1 etc to insert $0 out of $2.5 paid
```
### Stage 3 - Dispense product

## Tech Stack
- Node
- Jest

## Commands
### Start the app by running
`node app.js`

### Run test cases
`npm test`
