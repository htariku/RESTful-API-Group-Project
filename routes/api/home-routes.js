const router = require("express").Router();
// const req = require("express/lib/request");
// const res = require("express/lib/response");
// const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
 
      console.log("hello");
      res.json("test");
    });




module.exports = router;