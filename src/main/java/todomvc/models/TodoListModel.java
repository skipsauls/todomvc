package todomvc.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Model;

@Model
public class TodoListModel {
	
	private Map<Long, TodoModel> itemMap;
	
	public TodoListModel() {
		itemMap = new HashMap<Long, TodoModel>();
	}
	
	@AuraEnabled
	public List<TodoModel> getItems() {
		List<TodoModel> items = new ArrayList<TodoModel>(itemMap.values());
		return items;
	}
}