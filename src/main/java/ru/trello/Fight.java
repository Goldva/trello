package ru.trello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class Fight {
    @Autowired
    private RezoRepository rezoRepository;
    @Autowired
    private InfoInterfaceRepository infoInterfaceRepository;
    @Autowired
    private InfoRepository infoRepository;
    @Autowired
    private PersonRepository infoTestRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public void getKnight() {
        System.out.println("111");
//        InfoTest infoTest = new InfoTest();
//        infoTest.setEmail("InfoEmail5");
//        infoTest.setId("5dd43f12a5cfd243cf0807f4");
//        infoTestRepository.save(infoTest);

        Info info = new Info();
        info.setAge(44);
        info.setName("Alex");
        info.setCity("Samara");
        infoRepository.save(info);

        System.out.println("222");
    }
}
