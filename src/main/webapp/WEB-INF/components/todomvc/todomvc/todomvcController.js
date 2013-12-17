({
  doInit: function(component) {
    console.warn("todomvcController.doInit");
    var items = component.getValue("m.todos");
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
      todo.mode = "view";
      items.push(todo);
    }
    
    bork = component.getValue("v.remainingCount");

  },
  
  updateCounts: function(component) {
    console.warn("todomcdController.updateCounts: ", component);
    var items = component.getValue("m.todos");
    console.warn("items: ", items, items.getLength());
    var item = null;
    var remainingCount = 0;
    for (var i = 0; i < items.getLength(); i++) {
      console.warn("item: ", item);
      item = items.get(i);
      remainingCount += !(item.completed) ? 1 : 0;
    }
    console.warn("remainingCount: ", remainingCount);
  },
    
  saveTodo: function(component, todo) {
    var items = component.getValue("m.items");
    var storage = window.localStorage;
    var todos = storage.getItem("todos");

    todos = todos ? JSON.parse(todos) : {};
    todos["" + todo.id] = todo;

    storage.setItem("todos", JSON.stringify(todos));
    
    var a = component.get("c.updateCounts");
    a.run();
  },
  
  newTodo: function(component, evt) {
    var app = $A.getRoot().find("todo-app");
    var items = component.getValue("m.todos");
    var target = evt.target;
    var value = target.value;
    
    var todo = {
      id: Date.now(),
      value: value,
      completed: false
    }

    items.push(todo);

    var a = component.get("c.saveTodo");
    a.run(todo);
    
    target.value = "";
    
    var a = component.get("c.updateCounts");
    a.run();
  },

  removeTodo: function(component, todo) {
    
    var items = component.getValue("m.todos");
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
    
    component.getValue("v.remainingCount");
    
    var a = component.get("c.updateCounts");
    a.run();
  },  
  
  handleTodoModifiedEvent: function(component, event) {
    var params = event.getParams();
    var action = params["action"];
    var actionName = action === "remove" ? "c.removeTodo" : "c.saveTodo";
    var a = component.get(actionName);
    a.run(params);
  }
})