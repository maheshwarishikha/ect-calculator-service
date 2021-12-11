const express = require("express");
const app = express();

const Calculator = require("./calculator/calc");


app.get("/", (req, res) => {
    console.log("/");
    res.json({ message: "Calculator Service!" });
});

app.get("/:operation", async (req,res) => {
    console.log("/operation");
    console.log(req.params.operation);
    console.log("Operands:", req.query.operands);
    
    const allowedOperation = ['add', 'sub', 'mult', 'div'];
    if ( ! allowedOperation.includes(req.params.operation) ) {
        console.log("Upsupported Operation");
        res.sendStatus(400);
    } else if ( req.query.operands == null || req.query.operands.length == 0 ) {
        console.log("Invalid input");
        res.sendStatus(400);
    } else {
        var response = await Calculator.performOperation(req.params.operation, req.query.operands);
        console.log("Calculated Response:", response);
        if (response < 0 || response > 3999) {
            res.sendStatus(501);
        } else if ( isNaN(response) ) {
            res.sendStatus(400);
        } else {
            res.json(response);
        }
    }
});

app.listen(3001, () => {
    console.log("Server is running at 3001");
});