/* eslint-disable semi */
/* eslint-disable quotes */
// eslint-disable-next-line semi
const db = require("./models/index.js");

const listTodos = async () => {
  try {
    await db.Todo.showList();
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  await listTodos();
})();
