package com.app.SpooSpace.service;

import com.app.SpooSpace.dto.QuoteDTO;
import com.app.SpooSpace.entity.Quote;
import com.app.SpooSpace.entity.enums.Mood;
import com.app.SpooSpace.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuoteServiceImpl implements QuoteService {

    private final QuoteRepository quoteRepository;

    @Autowired
    public QuoteServiceImpl(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    // Existing method — keep this exactly as is
    @Override
    public QuoteDTO getRandomQuoteByMood(Mood mood) {
        Quote quote = quoteRepository.findRandomByMood(mood.name())
                .orElseThrow(() -> new RuntimeException("No quotes found for mood: " + mood));
        return toDTO(quote);
    }

    @Override
    public List<QuoteDTO> getAllQuotesByMood(Mood mood) {
        List<Quote> quotes = quoteRepository.findAllByMood(mood.name());
        if (quotes.isEmpty()) {
            throw new RuntimeException("No quotes found for mood: " + mood);
        }
        return quotes.stream().map(this::toDTO).collect(Collectors.toList());
    }

    private QuoteDTO toDTO(Quote quote) {
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