package com.app.SpooSpace.service;

import com.app.SpooSpace.dto.QuoteDTO;
import com.app.SpooSpace.entity.enums.Mood;

import java.util.List;

public interface QuoteService {
    QuoteDTO getRandomQuoteByMood(Mood mood);
    List<QuoteDTO> getAllQuotesByMood(Mood mood);
}
