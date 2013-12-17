<aura:application template="todomvc:template" useAppCache="false" model="java://todomvc.models.TodoAppModel">
  <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
  <aura:handler event="todomvc:todoModified" action="{!c.handleTodoModifiedEvent}"/>
  <aura:attribute name="remainingCount" type="Long" default="0"/>
  <div>todos: {!m.todos.length}</div>
  <div>remainingCount: {!v.remainingCount}</div>
  <section id="todoapp">
    <header id="header">
      <h1>todos</h1>
      <input aura:id="new-todo" id="new-todo" value="" onchange="{!c.newTodo}" placeholder="What needs to be done?" />
    </header>
    <section id="main">
      <input id="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      
      <!--
      <todomvc:todoList aura:id="todo-list" todos="{!m.todos}"/>
      -->
      
      <ul aura:id="todo-list" id="todo-list">
        <aura:iteration items="{!m.todos}" var="todo" indexVar="index">
          <todomvc:todoListItem aura:id="new-todo" id="{!todo.id}" value="{!todo.value}" completed="{!todo.completed}"/>
        </aura:iteration>     
      </ul>
      
      
    </section>
    <aura:renderIf isTrue="{!m.todos.length > 0}">
      <footer id="footer">
        <todomvc:todoFooter aura:id="todo-footer" count="{!m.todos.length}" remainingCount="{!v.remainingCount}"/>
      </footer>
    </aura:renderIf>
  </section>
  <footer id="info">
    <p>Double-click to edit a todo</p>
    <p>
      Created by
      <a href="https://github.com/skipsauls">Skip Sauls</a>
    </p>
    <p>
      Part of
      <a href="http://todomvc.com">TodoMVC</a>
    </p>
  </footer>

</aura:application>
