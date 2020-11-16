import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Doctor} from '../model/doctor';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {Clinic} from '../model/clinic';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  urlDoctor = environment.baseUrl + environment.doctor;
  listDoctors: Array<Doctor> = new Array<Doctor>();
  doctor: Doctor;
  editD: Doctor;
  doctorss: Array<Doctor> = new Array<Doctor>();
  termins: Array<string> = new Array<string>();
  doctorsWithSearch: Array<Doctor> = new Array<Doctor>();
  termin: string;
  date: string;
  doctorForMake: Doctor;
  intervals: Array<string[]> = new Array<string[]>();
  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {
    this.getAllDoctors();
  }

  public loginDoctor(doctor) {
    this.userService.setToken(doctor);
    return this.http.post(environment.baseUrl + '/login', doctor, {responseType: 'text'});
  }

  public editDoctor(doctor) {
    return this.http.post(this.urlDoctor + '/edit', doctor, {responseType: 'text'});
  }

  public getDoctor(email: string) {
    if ( this.listDoctors.length === 0) {
      return null;
    }
    for (const u of this.listDoctors) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }

  public addDoctor(d: Doctor) {
    if (this.getDoctor(d.email) === null) {
      this.listDoctors.push(d);
    }
  }

  public setDoctor(d: Doctor) {
    for (const d1 of this.listDoctors) {
      if (d1.email === d.email) {
        d1.password = d.password;
        d1.name = d.name;
        d1.surname = d.surname;
        d1.phone = d.phone;
        d1.workHoursFrom = d.workHoursFrom;
        d1.workHoursTo = d.workHoursTo;
      }
    }
  }

  public getAllDoctors(): Array<Doctor> {
    this.http.get(this.urlDoctor + '/all').subscribe((data: Doctor[]) => {
        for (const c of data) {
          this.doctor = new Doctor(c.email, c.password, c.name, c.surname, c.phone, c.workHoursFrom, c.workHoursTo, c.specialized, c.doctorRating, c.clinic);
          this.addDoctor(this.doctor);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listDoctors;
  }

  public getDoctorsTermins(date: string, email: string): Array<string> {
    let params = new HttpParams();
    params = params.append('date', date);
    params = params.append('email', email);
    console.log(params)
    this.http.get(this.urlDoctor + '/terminString', {params}).subscribe((data: string[]) => {
        this.termins = new Array<string>();
        console.log('Ispod ovde');
        console.log(data);
        this.termins = data;
        this.intervals.push(this.termins);

      },
      error => {
        console.log(error);
      }
    );

    return this.termins;
  }

  public getDoctorss() {
    return this.doctorss;
  }

  public setDoctorss(doctorss: Array<Doctor>) {
    this.doctorss = doctorss;
  }

  public getDoctrosWithSearch(name: string, surname: string, rating: string): Array<Doctor> {

    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('surname', surname);
    params = params.append('rating', rating);
    this.doctorsWithSearch = new Array<Doctor>();
    this.http.get(this.urlDoctor + '/allWithSearch', {params}).subscribe((data: Doctor[]) => {
        console.log(data)
        for (const c of data) {
          this.doctor = new Doctor(c.email, c.password, c.name, c.surname, c.phone, c.workHoursFrom, c.workHoursTo,
            c.specialized, c.doctorRating, c.clinic);
          this.doctorsWithSearch.push(this.doctor);
          console.log(this.doctor);
        }
      },
      error => {
        console.log(error);
      }
      );

    return this.doctorsWithSearch;
  }

  public setExaminationsInterval(intervals: Array<string[]>) {
    this.intervals = intervals;
    console.log('ISPOD INTERVALI');
    console.log(this.intervals);
  }

  public getExaminationsInterval() {
    return this.intervals;
  }

  public setDate(date) {
    this.date = date;
  }

  public getDate() {
    return this.date;
  }

  public setDoctorForMake(doctor: Doctor) {
    this.doctorForMake = doctor;
  }

  public getDoctorForMake() {
    return this.doctorForMake;
  }

}
