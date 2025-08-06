const express =require("express");
const Router=express.Router();
const studentController= require("../controller/studentController");

Router.get("/index",studentController.index);
Router.get("/show/:id",studentController.show);
Router.post("/store",studentController.store);
Router.put("/update/:id",studentController.update); 
Router.delete("/destroy/:id",studentController.destroy);

module.exports = Router;