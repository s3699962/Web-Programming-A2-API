const db = require("../database");

// Select all posts from the database.
exports.all = async (req, res) => {
  const comments = await db.comment.findAll();

  res.json(comments);
};

// Create a post in the database.
exports.create = async (req, res) => {
  const comments = await db.comment.create({
    text: req.body.text,
    userEmail: req.body.userEmail,
    postId: req.body.postId
  });

  res.json(comments);
};

exports.delete = async(req, res) => {
  await db.comment.destroy({where: {id: req.params.id}});
  console.log("HERERERE");
  res.json(null);
};

//TODO: UDpate comment

