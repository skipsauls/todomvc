({
  save: function(component) {
    var todoUpdateEvent = $A.get("e.todomvc:todoUpdate");
    var model = component.getModel();
    mo = model;
    todoUpdateEvent.setParams(model.unwrap());
    todoUpdateEvent.fire();
  }
})