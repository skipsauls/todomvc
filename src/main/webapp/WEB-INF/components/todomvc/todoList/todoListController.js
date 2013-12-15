({
    initStorage: function() {
        console.warn('initStorage: ', a, b, c);
    },

    doInit: function(component) {
        console.warn('todoListController.doInit: ', component);

        var storage = window.localStorage;
        console.warn('storage: ', storage);

        var items = component.getValue("m.items");
        console.warn("items: ", items);

        mockTodos = {
            "10001": {id: 10001, value: "uno", completed: false},
            "10002": {id: 10002, value: "dos", completed: false},
            "10003": {id: 10003, value: "tres", completed: false},
        };

        var todos = storage.getItem("todos");
        if (todos) {
            todos = JSON.parse(todos);
        } else {
            todos = mockTodos; //{};
            storage.setItem("todos", JSON.stringify(todos));
        }
        var todo = null;
        for (var id in todos) {
            todo = todos[id];
            console.warn("id: ", id, ", todo: ", todo);
            
            items.push(todo);
        }
    },
    
    refresh: function(component) {
        console.warn('todoListController.refresh: ', component);

        var storage = window.localStorage;
        console.warn('storage: ', storage);

        var items = component.getValue("m.items");
        console.warn("items: ", items);
        
        items.clear();
        
        var todos = storage.getItem("todos");
        console.warn("todos from storage: ", todos);
        todos = todos ? JSON.parse(todos) : {};
    
        var todo = null;
        for (var id in todos) {
            todo = todos[id];
            console.warn("id: ", id, ", todo: ", todo);
            
            items.push(todo);
        }
    }
    
/*
    doInit: function(component) {
        console.warn('todoListController.doInit: ', component);

        var storage = $A.storageService.getStorage("todomvc");
        console.warn('storage: ', storage, storage.getSize());
        foo = storage;
        var items = component.getValue("m.items");
        console.warn("items: ", items);

        mockTodos = {
            "10001": {id: 10001, value: "uno", completed: false},
            "10002": {id: 10002, value: "dos", completed: false},
            "10003": {id: 10003, value: "tres", completed: false},
        };

        console.warn("calling storage.get for todos");
        storage.get("todos", function(todos) {
            console.warn("get returned: ", todos);
            if (!todos) {
                todos = mockTodos; //{};
                storage.put("todos", todos);
            }
            var todo = null;
            for (var id in todos) {
                todo = todos[id];
                console.warn("id: ", id, ", todo: ", todo);
                
                items.push(todo);
            }
            
        });
    },
    
    refresh: function(component) {
        console.warn('todoListController.refresh: ', component);

        var storage = $A.storageService.getStorage("todomvc");
        console.warn('storage: ', storage, storage.getSize());
        foo = storage;
        var items = component.getValue("m.items");
        console.warn("items: ", items);
        items.clear();
        
        storage.get("todos", function(todos) {
            console.warn("get returned: ", todos);
            if (!todos) {
                todos = mockTodos; //{};
                storage.put("todos", todos);
            }
            var todo = null;
            for (var id in todos) {
                todo = todos[id];
                console.warn("id: ", id, ", todo: ", todo);
                
                items.push(todo);
            }
            
        });
        
    }
*/    
})