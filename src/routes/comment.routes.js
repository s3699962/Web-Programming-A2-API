module.exports = (express, app) => {
  const controller = require("../controllers/comment.controller.js");
  const router = express.Router();


  // Create a new comment.
  router.post("/", controller.create);

  //Delete a comment
  router.delete("/:id", controller.delete);

  //TODO: Edit a comment

  // Add routes to server.
  app.use("/api/comment", router);
};
