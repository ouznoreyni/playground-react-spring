package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Transaction;
import com.ouznoreyni.backend.service.TransactionService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/transactions")
@AllArgsConstructor
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<Transaction>> listTransactions(){
        var transactions = transactionService.getAllTransactions();
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionDetails(@PathVariable long id){
        var transaction = transactionService.getTransaction(id).orElse(null);
        return ResponseEntity.ok(transaction);
    }

    @PostMapping
    public ResponseEntity<Transaction> postTransaction(@RequestBody @Validated Transaction transaction){
        System.out.println(transaction);
    /*  try {
          var Createdtransction=  transactionService.saveTransaction(transaction);
          return ResponseEntity.ok().body(Createdtransction);
      }catch (Exception e){
          System.out.println(e);
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
      }

     */
        var Createdtransction=  transactionService.saveTransaction(transaction);
        return ResponseEntity.ok().body(Createdtransction);
    }
}
