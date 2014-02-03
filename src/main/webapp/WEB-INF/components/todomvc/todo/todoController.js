({
  doInit: function(component, evt, helper) {
    var attributes = component.getAttributes();
    var todo = attributes.getValue("todo");
    todo.each(function(key, value) {
      attributes.getValue(key).setValue(todo.getRawValue(key));
    })
  },

  edit: function(component, evt, helper) {
    var attributes = component.getAttributes();
    attributes.setValue("mode", "edit");
    var editor = component.find("new-todo").getElement();
    editor.selectionStart = editor.selectionEnd = editor.value.length;

    // Wait and then set focus and move cursor to end
    setTimeout(function() {
      editor.focus();
    }, 10);
  },

  remove: function(component, evt, helper) {
    var attributes = component.getAttributes();
    var deleteTodoEvent = $A.get("e.todomvc:deleteTodo");
    deleteTodoEvent.setParams({
      "id": attributes.getRawValue("id")
    }).fire();
  },

  update: function(component, evt, helper) {
    var attributes = component.getAttributes();
    var evt = {
      id: attributes.getRawValue("id"),
      value: attributes.getRawValue("value"),
      completed: attributes.getRawValue("completed")
    };
    var updateTodoEvent = $A.get("e.todomvc:updateTodo");
    updateTodoEvent.setParams(evt).fire();
    //attributes.setValue("mode", "view");
  },

  complete: function(component, evt, helper) {
    var target = evt.getSource ? evt.getSource().getElement() : evt.target;
    var attributes = component.getAttributes();
    var evt = {
      id: attributes.getRawValue("id"),
      value: attributes.getRawValue("value"),
      completed: target.checked
    };
    var updateTodoEvent = $A.get("e.todomvc:updateTodo");
    updateTodoEvent.setParams(evt).fire();
  }
});