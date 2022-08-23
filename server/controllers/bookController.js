const connection = require("../connection");
const bookController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await connection.query("SELECT * FROM book");
      res.json({ data: rows });
    } catch (err) {
      console.log(err);
      res.json({
        state: "error",
      });
    }
  },
  getByID: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await connection.query(
        "SELECT * FROM book WHERE id = ?",
        [id]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log(err);
      res.json({
        state: "error",
      });
    }
  },
  creat: async (req, res) => {
    try {
      const { author, description } = req.body;
      const [rows, fields] = await connection.query(
        "INSERT INTO book (author,description) values (?,?)",
        [author, description]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log(err);
      res.json({
        state: "error",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { author, description } = req.body;
      const [rows, fields] = await connection.query(
        "UPDATE book SET author=? ,description=? WHERE id = ?",
        [author, description, id]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log(err);
      res.json({
        state: "error",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await connection.query(
        "DELETE FROM book WHERE id = ?",
        [id]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log(err);
      res.json({
        state: "error",
      });
    }
  },
};
module.exports = bookController;
