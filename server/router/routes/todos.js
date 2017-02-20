'use strict';

module.exports = (app, db) => {

  // GET all todos
  app.get('/todos', (req, res) => {
    db.todos.findAll({
      order: 'id DESC'
    })
      .then(todos => {
        res.json(todos);
      });
  });

  // GET one todo by id
  app.get('/todo/:id', (req, res) => {
    const id = req.params.id;
    db.todos.find({
      where: { id: id }
    })
      .then(todo => {
        res.json(todo);
      });
  });

  // POST search route
  app.post('/todos', (req, res) => {
    const query = req.body.query;
    db.todos.findAll({
      where: query
    })
      .then(todos => {
        res.json(todos);
      });
  });

  // POST single todo
  app.post('/todo', (req, res) => {
    console.log(req.body)
    const task = req.body.task;
    const urgency = req.body.urgency ? req.body.urgency : 'low';
    db.todos.create({
      task: task,
      urgency: urgency
    })
      .then(newTodo => {
        res.json(newTodo);
      })
  });

  // POST multiple todos
  app.post('/todos/bulk', (req, res) => {
    const todoList = req.body.todos;
    db.todos.bulkCreate(todoList)
      .then(newTodos => {
        res.json(newTodos);
      })
  });

  // PATCH single todo
  app.patch('/todo/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.todos.find({
      where: { id: id }
    })
      .then(todo => {
        return todo.updateAttributes(updates)
      })
      .then(updatedTodo => {
        res.json(updatedTodo);
      });
  });

  // PATCH multiple todos
  app.patch('/todos/bulk', (req, res) => {
    const ids = req.body.ids;
    const updates = req.body.updates;
    db.todos.findAll({
      where: { id: { $in: ids } }
    })
      .then(todos => {
        const updatePromises = todos.map(todo => {
         return todo.updateAttributes(updates);
        });
        return db.Sequelize.Promise.all(updatePromises)
      })
      .then(updatedTodos => {
        res.json(updatedTodos);
      });
  });

  // DELETE single todo
  app.delete('/todo/:id', (req, res) => {
    const id = req.params.id;
    db.todos.destroy({
      where: { id: id }
    })
      .then(deletedTodo => {
        res.json(deletedTodo);
      });
  });

  // DELETE multiple todos
  app.delete('/todos/bulk', (req, res) => {
    const ids = req.body.ids;
    db.todos.findAll({
      where: { id: { $in: ids } }
    })
      .then(todos => {
        const deletePromises = todos.map(todo => {
          return todo.destroy();
        });
        return db.Sequelize.Promise.all(deletePromises)
      })
      .then(deletedTodos => {
        res.json(deletedTodos);
      });
  });
};
