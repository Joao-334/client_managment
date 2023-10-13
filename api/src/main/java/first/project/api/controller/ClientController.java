package first.project.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import first.project.api.model.Client;
import first.project.api.repository.Repository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

    @Autowired
    private Repository action;

    @PostMapping("/")
    public Client saveClient(@RequestBody Client c) {
        return action.save(c);
    }

    @GetMapping("/")
    public Iterable<Client> getClients() {
        return action.findAll();
    }

    @PutMapping("/")
    public Client editClient(@RequestBody Client c) {
        return action.save(c);
    }

    @DeleteMapping("/{code}")
    public void removeClient(@PathVariable Long code) {
        action.deleteById(Long.valueOf(code));  
    }
}
