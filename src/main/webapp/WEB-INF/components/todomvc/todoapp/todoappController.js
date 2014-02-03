({
  doInit: function(component, evt, helper) {
    var location = $A.historyService.get().token;
    location = location === "" ? "/" : location;
    $A.historyService.set(location);
    helper.loadTodos(component);
  },

  handleLocationChangeEvent: function(component, evt, helper) {
    var attributes = component.getAttributes();
    var location = evt.getParam("token");
    attributes.setValue("location", location);
    helper.filter(component);
  },
  
  toggleAll: function(component, evt, helper) {
    var checked = evt.getSource().getElement().checked;
    var todos = component.getValue("m.todos");
    for (var i = 0; i < todos.getLength(); i++) {
      todos.getValue(i).getValue("completed").setValue(checked);
    }
    helper.saveTodos(component, todos);
  },
  
  clearCompletedTodos: function(component, evt, helper) {
    var todos = component.getValue("m.todos");
    var items = [];
    todos.each(function(t) {
      if (!t.unwrap().completed) {
        items.push(t.unwrap())
      }
    });
    todos.setValue(items);
    helper.saveTodos(component, todos);
  },
  
  newTodo: function(component, evt, helper) {
    helper.createTodo(component, {
      id: null,
      value: evt.target.value,
      completed: false
    });
    evt.target.value = "";
    var todos = component.getValue("m.todos");
  },

  handleupdateTodoEvent: function(component, event, helper) {
    helper.updateTodo(component, event.getParams());
  },

  handledeleteTodoEvent: function(component, event, helper) {
    helper.deleteTodo(component, event.getParams());
  }
});