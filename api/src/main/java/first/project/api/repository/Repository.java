package first.project.api.repository;

import org.springframework.data.repository.CrudRepository;
import first.project.api.model.Client;

public interface Repository extends CrudRepository<Client, Long>{
    
}
