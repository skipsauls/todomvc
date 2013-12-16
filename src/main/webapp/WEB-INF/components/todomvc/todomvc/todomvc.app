<aura:application template="todomvc:template" useAppCache="false">

	<section id="todoapp">
		<header id="header">
			<h1>todos</h1>
			<!--
			<todomvc:todo aura:id="new-todo" editClass="edit new-todo" mode="view"/>
			-->
			<input aura:id="new-todo" id="new-todo" value="" onchange="{!c.handleChange}" placeholder="What needs to be done?"/>
			<!--
			<ui:inputText aura:id="new-todo" class="edit" value="{!v.item.value}" change="{!c.handleChange}" blur="{!c.handleChange}" placeholder="{!v.placeholder}" />
			-->            
		</header>
		<section id="main">
			<input id="toggle-all" type="checkbox"/>
			<label for="toggle-all">Mark all as complete</label>
			<todomvc:todoList aura:id="todo-list" />
		</section>
		<footer id="footer"></footer>
	</section>
	<footer id="info">
		<p>Double-click to edit a todo</p>
		<p>Created by
		<a href="https://github.com/skipsauls">Skip Sauls</a>
		</p>
		<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
	</footer>

</aura:application>
