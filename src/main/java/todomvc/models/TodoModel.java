package todomvc.models;

import org.auraframework.system.Annotations.Model;
import org.auraframework.system.Annotations.AuraEnabled;

@Model
public class TodoModel {
	private Long id;
	private String value;
	private Boolean completed;
	
	public TodoModel() {
	}

	@AuraEnabled
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@AuraEnabled
	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@AuraEnabled
	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}
}