package todomvc.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Key;
import org.auraframework.system.Annotations.Model;

@Model
public class TodoListModel {

	private Map<Long, TodoModel> itemMap;
	
	public TodoListModel() {
		/*
		items = new ArrayList<TodoModel>();
		items.add(new TodoModel("uno"));
		items.add(new TodoModel("dos"));
		items.add(new TodoModel("tres"));
		*/
		itemMap = new HashMap<Long, TodoModel>();
		/*
		TodoModel item = null;
		item = new TodoModel(10001, "uno");
		itemMap.put(item.getId(), item);
		item = new TodoModel(10002, "dos");
		itemMap.put(item.getId(), item);
		item = new TodoModel(10003, "tres");
		itemMap.put(item.getId(), item);
		*/
	}
	
	@AuraEnabled
	public List<TodoModel> getItems() {
		List<TodoModel> items = new ArrayList<TodoModel>(itemMap.values());
		return items;
	}
		
/*
	public TodoListModel() {
		
	}
	
	@AuraEnabled
	public List<String> getTodos() {
		List<String> todos = new ArrayList<String>();
		todos.add("uno");
		todos.add("dos");
		todos.add("tres");
		return todos;
	}
*/
}