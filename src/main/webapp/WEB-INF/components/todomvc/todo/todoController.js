({
  edit: function(component) {
    console.warn('todoControoler.edit for: ', component);
    var attributes = component.getAttributes();
    console.warn('attributes: ', attributes);
    var mode = attributes.getRawValue("mode");
    aura.log("mode: " + mode);
    attributes.setValue("mode", "edit");
    // Wait and then set focus and move cursor to end
    setTimeout(function() {
      var editor = component.find("new-todo").getElement();
      editor.focus();   
      editor.selectionStart = editor.selectionEnd = editor.value.length;
    }, 100);
  },
  
  save: function(component, evt) {
    console.warn('todoController.save for: ', component, evt);

    if (evt.getName() == 'keyup' && evt.getParams().keyCode != 13) {
      
    } else {

      console.warn('asdfasdfasdfasdfasdf');
      var attributes = component.getAttributes();
      console.warn('attributes: ', attributes);

      var mode = attributes.getRawValue("mode");
      console.warn("mode: ", mode);

      var item = component.get("v.item");
      console.warn("item: ", item);
      
      var action = component.get("c.saveTodo");
      console.warn("action: ", action);
      
      var editor = component.find("new-todo").getElement();
      console.warn("editor: ", editor);
      console.warn("editor.value: ", editor.value);
      
      var storage = $A.storageService.getStorage("todos");
      console.warn('storage: ', storage);
      
      
      /*
      action.setParams({
        id : note.get("title"),
        body : note.get("body"),
        latitude : note.get("latitude"),
        longitude : note.get("longitude"),
        id : note.get("id"),
        sort : sort
    });

    action.setCallback(this, function(a){
      
    }
      */
      
      var attributes = component.getAttributes();
      var mode = attributes.getRawValue("mode");
      aura.log("mode: " + mode);
      attributes.setValue("mode", "view");
    }
  },
  
  complete: function(component, evt) {
    console.warn("todoController.complete for: ", component);
    console.warn("evt: ", evt);
    var checked = evt.getSource().getElement().checked;
    var attributes = component.getAttributes();
    attributes.setValue("complete", checked);
  }
})