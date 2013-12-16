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
    
    createTodo: function(component, value) {
        console.warn('todoListController.createTodo: ', component, value);
        
        var storage = window.localStorage;
        console.warn('storage: ', storage);

        var items = component.getValue("m.items");
        console.warn("items: ", items);

        var todos = storage.getItem("todos");
        todos = todos ? JSON.parse(todos) : {};
        
        var todo = {
            id: Date.now(),
            value: value,
            completed: false
        }
        
        todos["" + todo.id] = todo;

        console.warn("todos: ", todos);
        storage.setItem("todos", JSON.stringify(todos));

        items.push(todo);

    }
})