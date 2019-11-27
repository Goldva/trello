package ru.trello;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Main {
    @Value(value = "spring.data.mongodb.host")
    private String host;
    @Value(value = "spring.data.mongodb.port")
    private String port;
    @Value(value = "spring.data.mongodb.database")
    private String dbName;

    public static void main(String[] args) {
        ApplicationContext applicationContext = SpringApplication.run(Main.class, args);
        Fight fight = (Fight) applicationContext.getBean("fightBrave");
        fight.getKnight();
    }

    @Bean
    public Fight fightBrave() {
        return new Fight();
    }
}
