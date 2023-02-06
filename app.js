const express = require("express")
const fs = require("fs")
const app = express()
const path = require('path')

app.listen(5000, () => {
	console.log("运行中");
})


app.use("/",express.static(__dirname+"/app"))

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

