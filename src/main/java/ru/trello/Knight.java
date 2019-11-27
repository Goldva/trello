package ru.trello;

import org.springframework.stereotype.Component;

@Component
public class Knight {
    private String name = "Hello";

    public String getName() {
        return name;
    }
}
