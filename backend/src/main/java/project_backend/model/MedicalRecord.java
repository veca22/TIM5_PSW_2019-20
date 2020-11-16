package project_backend.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class MedicalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Integer height;

    @Column
    private Integer weight;

    @Column(columnDefinition = "VARCHAR(3)")
    private String bloodType;

    @Column
    private String allergies;

    @OneToOne
    private Patient patient;

    @OneToMany(mappedBy = "medicalRecord", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<ExaminationReport> examinationReports = new HashSet<>();

    MedicalRecord()
    {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getAllergies() {
        return allergies;
    }

    public void setAllergies(String allergies) {
        this.allergies = allergies;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Set<ExaminationReport> getExaminationReports() {
        return examinationReports;
    }

    public void setExaminationReports(Set<ExaminationReport> examinationReports) {
        this.examinationReports = examinationReports;
    }
}
