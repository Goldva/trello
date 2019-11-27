package ru.trello;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Rezo")
public class Rezo {
    private String id;
    private String city;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
