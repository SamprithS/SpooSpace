package com.app.SpooSpace.service;

import com.app.SpooSpace.dto.QuoteDTO;
import com.app.SpooSpace.entity.enums.Mood;

public interface QuoteService {
    QuoteDTO getRandomQuoteByMood(Mood mood);
}
