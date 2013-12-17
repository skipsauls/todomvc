({
  doInit: function(component) {
    var items = component.getValue("m.items");
    var storage = window.localStorage;
    var todos = storage.getItem("todos");

    if (todos) {
      todos = JSON.parse(todos);
    } else {
      todos = {};
      storage.setItem("todos", JSON.stringify(todos));
    }
    var todo = null;
    for ( var id in todos) {
      todo = todos[id];
      items.push(todo);
    }
  },

  saveTodo: function(component, todo) {
    var items = component.getValue("m.items");
    var storage = window.localStorage;
    var todos = storage.getItem("todos");

    todos = todos ? JSON.parse(todos) : {};
    todos["" + todo.id] = todo;

    storage.setItem("todos", JSON.stringify(todos));
  },

  destroyTodo: function(component, todo) {
    
    var items = component.getValue("m.items");
    var storage = window.localStorage;
    var todos = storage.getItem("todos");

    todos = todos ? JSON.parse(todos) : {};

    delete todos["" + todo.id];

    storage.setItem("todos", JSON.stringify(todos));

    var item = null;
    for (var i = 0; i < items.getLength(); i++) {
      item = items.get(i);
      if (item.id == todo.id) {
        items.remove(i);
      }
    }  
  },
  
  handleTodoModifiedEvent: function(component, event) {
    var params = event.getParams();
    var action = params["action"];
    var actionName = action === "delete" ? "c.destroyTodo" : "c.saveTodo";
    var a = component.get(actionName);
    a.run(params);
  },

  createTodo: function(component, value) {
    var items = component.getValue("m.items");

    var todo = {
      id: Date.now(),
      value: value,
      completed: false
    }

    items.push(todo);

    var a = component.get("c.saveTodo");
    a.run(todo);
  }
})