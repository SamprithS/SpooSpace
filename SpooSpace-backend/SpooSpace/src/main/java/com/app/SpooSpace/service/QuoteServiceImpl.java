package com.app.SpooSpace.service;

import com.app.SpooSpace.dto.QuoteDTO;
import com.app.SpooSpace.entity.Quote;
import com.app.SpooSpace.entity.enums.Mood;
import com.app.SpooSpace.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuoteServiceImpl implements QuoteService{

    private final QuoteRepository quoteRepository;

    @Autowired
    public QuoteServiceImpl(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    @Override
    public QuoteDTO getRandomQuoteByMood(Mood mood) {
        Quote quote = quoteRepository.findRandomByMood(mood.name())
                .orElseThrow(() -> new RuntimeException("No quotes found for mood: " + mood));

        return QuoteDTO.builder()
                .id(quote.getId())
                .quoteText(quote.getQuoteText())
                .memberName(quote.getMemberName())
                .groupName(quote.getGroupName())
                .mood(quote.getMood())
                .imageUrl(quote.getImageUrl())
                .build();
    }
}
