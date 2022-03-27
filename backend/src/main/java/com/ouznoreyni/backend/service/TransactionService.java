package com.ouznoreyni.backend.service;

import com.ouznoreyni.backend.model.Transaction;
import com.ouznoreyni.backend.repository.TransactionRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Optional<Transaction> getTransaction(Long id) {
        return transactionRepository.findById(id);
    }

    @Transactional
    public Transaction saveTransaction(Transaction transaction) {
        System.out.println("+++++++++");
        System.out.println( transaction);
        return transactionRepository.save(transaction);
    }
}

