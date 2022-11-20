import express from "express";
import { request, response } from "express";
import cors from 'cors';
import { Db } from "mongodb";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/",express.static(__dirname));

const urldb ='';

const dbName = "Tasks";

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(urldb)




app.listen(4002, () =>{
  console.log("Server rodando na porta 4002");
});
