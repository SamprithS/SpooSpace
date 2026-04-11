package com.app.SpooSpace.controller;

import com.app.SpooSpace.dto.QuoteDTO;
import com.app.SpooSpace.entity.enums.Mood;
import com.app.SpooSpace.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/quotes")
@CrossOrigin(origins = "${cors.allowed-origins}")
public class QuoteController {

    private final QuoteService quoteService;

    @Autowired
    public QuoteController(QuoteService quoteService) {
        this.quoteService = quoteService;
    }

    @GetMapping("/random")
    public ResponseEntity<QuoteDTO> getRandomQuote(@RequestParam Mood mood) {
        QuoteDTO quoteDTO = quoteService.getRandomQuoteByMood(mood);
        return ResponseEntity.ok(quoteDTO);
    }

    // New endpoint
    @GetMapping("/all")
    public ResponseEntity<List<QuoteDTO>> getAllQuotes(@RequestParam Mood mood) {
        List<QuoteDTO> quotes = quoteService.getAllQuotesByMood(mood);
        return ResponseEntity.ok(quotes);
    }
}
