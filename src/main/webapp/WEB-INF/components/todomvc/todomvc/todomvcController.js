({
    doInit: function(component) {
        console.warn("todomvcController.doInit");

        var location = $A.historyService.get().token;
        location = location == "" ? "/" : location;
        $A.historyService.set(location);

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

        var a = component.get("c.updateCounts");
        a.run();
    },

    handleLocationChangeEvent: function(component, evt) {
        var attributes = component.getAttributes();
        attributes.setValue("location", evt.getParam("token"));
    },

    updateCounts: function(component) {
        var items = component.getValue("m.todos");
        var item = null;
        var remainingCount = 0;
        for ( var i = 0; i < items.getLength(); i++) {
            console.warn("item: ", item);
            item = items.get(i);
            remainingCount += !(item.completed) ? 1 : 0;
        }
        component.setValue("v.remainingCount", remainingCount);
    },

    toggleAll: function(component, evt) {
        var target = evt.getSource();
        var checked = target.getElement().checked;
        
        var items = component.getValue("m.todos");

        // This seems like too much effort...
        var todos = [];
        var item = null;
        for ( var i = 0; i < items.getLength(); i++) {
            item = items.get(i);
            todos.push(item);
        }
        items.clear();

        for ( var i = 0; i < todos.length; i++) {
            todos[i].completed = checked;
            items.push(todos[i]);
        }

        var storage = window.localStorage;
        var todos = storage.getItem("todos");
        
        todos = todos ? JSON.parse(todos) : {};
        
        var item = null;
        for ( var i = 0; i < items.getLength(); i++) {
            item = items.get(i);
            todos["" + item.id] = item;
        }

        storage.setItem("todos", JSON.stringify(todos));

        var a = component.get("c.updateCounts");
        a.run();
    },

    saveAll: function(component) {
        var items = component.getValue("m.items");
        console.warn("items: ", items);
        var storage = window.localStorage;
        var todos = storage.getItem("todos");

        todos = todos ? JSON.parse(todos) : {};
        
        var item = null;
        for ( var i = 0; i < items.getLength(); i++) {
            item = items.get(i);
            todos["" + item.id] = item;
        }

        storage.setItem("todos", JSON.stringify(todos));

        var a = component.get("c.updateCounts");
        a.run();
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
        var items = component.getValue("m.todos");
        var target = evt.target;
        var value = target.value;

        var todo = {
            id: Date.now(),
            value: value,
            completed: false
        }

        items.push(todo);

        target.value = "";

        var a = component.get("c.saveTodo");
        a.run(todo);
    },

    removeTodo: function(component, todo) {

        var items = component.getValue("m.todos");
        var storage = window.localStorage;
        var todos = storage.getItem("todos");

        todos = todos ? JSON.parse(todos) : {};

        delete todos["" + todo.id];

        storage.setItem("todos", JSON.stringify(todos));

        var item = null;
        for ( var i = 0; i < items.getLength(); i++) {
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