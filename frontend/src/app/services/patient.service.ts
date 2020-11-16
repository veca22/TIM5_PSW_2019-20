import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Patient} from '../model/patient';
import {UserServiceService} from './user-service.service';
import {PatientStatus} from '../model/patientStatus';
import {Examination} from '../model/examination';
import {ExaminationKind} from '../model/examinationKind';
import {ExaminationStatus} from '../model/examinationStatus';
import {Clinic} from '../model/clinic';
import {Doctor} from '../model/doctor';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  urlPatient = environment.baseUrl + environment.patient;
  listPatients: Array<Patient> = new Array<Patient>();
  patientWithDoctor: Array<Patient> = new Array<Patient>();
  patients: Array<Patient> = new Array<Patient>();
  patient: Patient;
  patient1: Patient;
  editP: Patient;
  tmp: Array<Patient>;
  listExaminations: Array<Examination>;
  examination: Examination;

  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {
    this.getAllPatients();
    this.getAllRequests();
  }

  public newPatient(patient) {
    return this.http.post(this.urlPatient + '/register', patient);
  }

  public loginPatient(patient) {
    this.userService.setToken(patient);
    return this.http.post(environment.baseUrl + '/login', patient, {responseType: 'text'});
  }

  public activatePatient(id: number) {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.put(this.urlPatient + '/activatePatient', id, {headers});
  }

  public editPatient(patient) {
    return this.http.post(this.urlPatient + '/edit', patient, {responseType: 'text'});
  }

  public addPatient(p: Patient) {
    if (this.getPatient(p.email) === null) {
      this.listPatients.push(p);
    }
  }

  public getPatient(email: string) {
    if ( this.listPatients.length === 0) {
      return null;
    }
    for (const u of this.listPatients) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }

  public setPatient(p: Patient) {

    for (const p1 of this.listPatients) {
      if (p1.email === p.email) {
        p1.name = p.name;
        p1.number = p.number;
        p1.country = p.country;
        p1.address = p.address;
        p1.surname = p.surname;
        p1.city = p.city;
        p1.password = p.password;
        return;
      }
    }
  }

  public whichStatus(status: string) {
    if (status === 'AWAITING_APPROVAL') {
      return PatientStatus.AWAITING_APPROVAL;
    } else if (status === 'APPROVED') {
      return PatientStatus.APPROVED;
    } else {
      return PatientStatus.ACTIVATED;
    }


  }

  public getAllPatients(): Array<Patient> {
    this.http.get(this.urlPatient + '/all').subscribe((data: Patient[]) => {
        for (const c of data) {
          this.patient = new Patient(c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, this.whichStatus(c.status.toString()));
          this.addPatient(this.patient);
        }
      },
      error => {
        console.log(error);
      }
    );

    return this.listPatients;
  }

  public getAllRequests(): Array<Patient> {
    this.http.get(this.urlPatient + '/requests').subscribe((data: Patient[]) => {
        this.tmp = new Array<Patient>();
        for (const c of data) {
            this.patient = new Patient(c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, PatientStatus.AWAITING_APPROVAL);
            this.tmp.push(this.patient);
            console.log(this.patient);
          }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.tmp);
    return this.tmp;
  }

  public getPatientsForDoctor(email: string): Array<Patient> {

    let params = new HttpParams();
    params = params.append('email', email);
    this.patientWithDoctor = new Array<Patient>();
    this.http.get(this.urlPatient + '/allPatientsForDoctor', {params}).subscribe((data: Patient[]) => {
        for (const c of data) {
          this.patient = new Patient(c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country , c.insuranceID, c.status);
          this.patientWithDoctor.push(this.patient);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log('Ispod');
    console.log(this.patientWithDoctor);
    return this.patientWithDoctor;
  }

  public getPatientForDoctors() {
    return this.patientWithDoctor;
  }

  public getPatient1() {
    return this.patient1;
  }

  public setPatient1(pat: Patient) {
    console.log('setPatient');
    this.patient1 = pat;
  }

}
