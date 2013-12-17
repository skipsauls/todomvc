package todomvc.models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.auraframework.system.Annotations.Model;
import org.auraframework.system.Annotations.AuraEnabled;

@Model
public class TodoAppModel {
	private List<TodoModel> todos;
	
	public TodoAppModel() {
		todos = new ArrayList<TodoModel>();
	}
	
	@AuraEnabled
	public List<TodoModel> getTodos() {
		return todos;
	}
}