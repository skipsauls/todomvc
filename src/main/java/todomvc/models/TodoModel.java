package todomvc.models;

import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import java.math.BigDecimal;

import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Key;
import org.auraframework.system.Annotations.Model;
import org.auraframework.util.json.Json;
import org.auraframework.util.json.JsonSerializable;

@Model
public class TodoModel implements JsonSerializable {
	
	private long id;
	private String value;
	private Boolean completed = false;
	
	public TodoModel() {
		id = 55555;
		this.value = "asdasdfasdf";
		this.completed = false;
	}
	
	public TodoModel(String value) {
		this.id = 1234567890;
		this.value = value;
	}
	
	public TodoModel(long id, String value) {
		this.id = id;
		this.value = value;
	}
	
	@AuraEnabled
	public long getId() {
		return this.id;
	}
	
	public void setId(long id) {
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
	
	@Override
	public void serialize(Json json) throws IOException {
		json.writeMapBegin();
		json.writeMapEntry("id", getId());
		json.writeMapEntry("value", getValue());
		json.writeMapEntry("completed", getCompleted());
		json.writeMapEnd();
		
	}

	
}
