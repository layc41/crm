package com.crm.crm.model;

// imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// used to test data
// Demo script that will run when you start the application
@Component // decorator
public class DemoLoader implements CommandLineRunner {
    // running a command line and insert data into the server
    // database connection because of the crud respository
    private final ContactRepository repository;

    @Autowired
    public DemoLoader(ContactRepository repository) {
        this.repository = repository;
    }

    @Override 
    public void run(String... strings) throws Exception {
        this.repository.save(new Contact("Claudia", "Lay", "email@email.com"));
    }
}
