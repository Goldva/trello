package ru.trello.model;

import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@TypeAlias("column")
public class Column  extends BaseDocument {
}
