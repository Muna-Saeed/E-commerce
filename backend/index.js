const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(express.cors());

//Database connection with MongoDB
mongoose.connect("mongodb+srv://munasaeed:M0n90Db@7L@$@cluster0.cbjvsbq.mongodb.net/e-commerce")