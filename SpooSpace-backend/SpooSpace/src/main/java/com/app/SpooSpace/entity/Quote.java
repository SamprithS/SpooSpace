package com.app.SpooSpace.entity;

import com.app.SpooSpace.entity.enums.Mood;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "quotes")
@Data
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String quoteText;
    String memberName;
    String groupName;

    @Enumerated(EnumType.STRING)
    Mood mood;

    String imageUrl;
}
