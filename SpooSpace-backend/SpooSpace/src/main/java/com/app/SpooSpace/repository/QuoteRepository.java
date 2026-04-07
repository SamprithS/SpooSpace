package com.app.SpooSpace.repository;

import com.app.SpooSpace.entity.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, Long> {
    @Query(value = "SELECT * FROM quotes WHERE mood = :mood ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Optional<Quote> findRandomByMood(@Param("mood") String mood);
}
