({

  render: function(component, helper) {
    var editor = component.find("editor");
    if (editor && editor.getElement()) {
      editor.getElement().focus();
    }
    return this.superRender();
  },
  
  afterRender : function(component) {
    component.find("new-todo").getElement().focus();
    this.superAfterRender();
  }
})