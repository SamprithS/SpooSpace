package com.app.SpooSpace.dto;

import com.app.SpooSpace.entity.enums.Mood;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuoteDTO {
    private Long id;
    private String quoteText;
    private String memberName;
    private String groupName;
    private Mood mood;
    private String imageUrl;
}
