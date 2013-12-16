({
  edit: function(component) {
    console.warn('todoListItemController.edit for: ', component);
    var attributes = component.getAttributes();
    console.warn('attributes: ', attributes);
    var mode = attributes.getRawValue("mode");
    console.warn("mode: " + mode);
    attributes.setValue("mode", "edit");
    var editor = component.find("new-todo").getElement();
    console.warn("editor: ", editor);
    // Wait and then set focus and move cursor to end
    setTimeout(function() {
      editor.focus();   
      editor.selectionStart = editor.selectionEnd = editor.value.length;
    }, 100);
  },
  
  save: function(component) {
      console.warn('todoListItemController.save for: ', component);
      
      var item = component.get("v.item");
      console.warn("item: ", item);
      
      var storage = window.localStorage;
      console.warn('storage: ', storage);
      var todos = storage.getItem("todos");
      todos = todos ? JSON.parse(todos) : {};
      todos["" + item.id] = item;
      storage.setItem("todos", JSON.stringify(todos));
      
/*      
      var storage = $A.storageService.getStorage("todomvc");
      console.warn('storage: ', storage, storage.getSize());
      
      storage.get("todos", function(todos) {
          console.warn("get returned: ", todos);
          todos = todos ? todos : {};
          todos["" + item.id] = item;
          storage.put("todos", todos);
      });
*/      
  },
  
  handleChange: function(component, evt) {
      console.warn('todomvcController.handleChange for: ', component, evt);
      var target = evt.target;
      var value = target.value;
      var todoList = $A.getRoot().find("todo-list");
      var a = todoList.get("c.createTodo");
        
      // Not working, or not understood?
      /*
      a.setParams({
          value: value
      });
      $A.enqueueAction(a);
      */
      
      a.run(value);
      target.value = "";
  },
  
  complete: function(component, evt) {
    console.warn("todoListItemController.complete for: ", component);
    console.warn("evt: ", evt);
    var checked = evt.getSource().getElement().checked;
    var attributes = component.getAttributes();
    attributes.setValue("complete", checked);
  }
})