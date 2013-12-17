({
  edit: function(component) {
    var attributes = component.getAttributes();
    var mode = attributes.getRawValue("mode");
    attributes.setValue("mode", "edit");
    var editor = component.find("new-todo").getElement();

    // Wait and then set focus and move cursor to end
    setTimeout(function() {
      editor.focus();
      editor.selectionStart = editor.selectionEnd = editor.value.length;
    }, 100);
  },

  save: function(component) {
    var attributes = component.getAttributes();
    var todoModifiedEvent = $A.get("e.todomvc:todoModified");
    
    todoModifiedEvent.setParams({
      "action": "update",
      "id": attributes.getRawValue("id"),
      "value": attributes.getRawValue("value"),
      "completed": attributes.getRawValue("completed")
    });

    todoModifiedEvent.fire();    
  },

  remove: function(component, evt) {
    var attributes = component.getAttributes();
    var todoModifiedEvent = $A.get("e.todomvc:todoModified");
    
    todoModifiedEvent.setParams({
      "action": "remove",
      "id": attributes.getRawValue("id")
    });

    todoModifiedEvent.fire();    
  },

  update: function(component, evt) {
    var attributes = component.getAttributes();
    var mode = attributes.getRawValue("mode");
    attributes.setValue("mode", "view");
    var a = component.get("c.save");
    $A.enqueueAction(a);
  },

  complete: function(component, evt) {
    var checked = evt.getSource().getElement().checked;
    var attributes = component.getAttributes();
    attributes.setValue("completed", checked);
    var a = component.get("c.save");
    $A.enqueueAction(a);
  }
})