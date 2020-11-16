package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project_backend.model.Nurse;
import project_backend.repository.NurseRepo;

import java.util.List;

@Service
public class NurseService {
    @Autowired
    private NurseRepo repo;

    public List<Nurse> findall(){return repo.findAll();}

    public List<Nurse> findAllByEmail(String email){
        return repo.findAllByEmail(email);
    }

    public Page<Nurse> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public boolean addNurse(Nurse p){
        List<Nurse> tmp = findall();
        if(tmp.size() == 0)
        {
            repo.save(p);
            return true;
        }
        for(Nurse p1 : tmp)
            if(p1.getEmail().equals(p.getEmail()))
            {
                return  false;
            }
            else
            {
                repo.save(p);
                return true;
            }

        return false;

    }

    public Nurse getNurse(String email){
        List<Nurse> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Nurse p : tmp)
        {
            if(p.getEmail().equals(email))
                return p;
        }

        return null;
    }

    public boolean editNurse(Nurse p) {
        List<Nurse> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Nurse p1 : tmp)
        {
            if(p.getEmail().equals(p1.getEmail())) {
                p1 = p;
                repo.save(p1);
                return true;
            }
        }

        return false;
    }
}
