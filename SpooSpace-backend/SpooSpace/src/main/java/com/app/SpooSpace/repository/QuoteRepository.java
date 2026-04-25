package com.app.SpooSpace.repository;

import com.app.SpooSpace.entity.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, Long> {
    @Query(value = "SELECT * FROM quotes WHERE mood = :mood ORDER BY RANDOM() LIMIT 1", nativeQuery = true)
    Optional<Quote> findRandomByMood(@Param("mood") String mood);

    @Query(value = "SELECT * FROM quotes WHERE mood = :mood", nativeQuery = true)
    List<Quote> findAllByMood(@Param("mood") String mood);
}
