import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user-service.service';
import {Role} from '../../model/role';
import {DoctorService} from '../../services/doctor.service';
import {ClinicService} from '../../services/clinic.service';
import {NurseServiceService} from '../../services/nurse-service.service';
import {AdminClinicService} from '../../services/admin-clinic.service';
import {ClinicalCentreAdministratorService} from '../../services/clinical-centre-administrator.service';
import {Patient} from '../../model/patient';
import {PatientStatus} from '../../model/patientStatus';
import {ExaminationService} from '../../services/examination.service';
import {MedicalRecordService} from '../../services/medical-record.service';
import {ExaminationsTypeService} from '../../services/examination-type.service';
import {MedicalRecord} from '../../model/medicalRecord';
import {Examination} from '../../model/examination';

export class LoginUser {
  constructor(
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private submitted = false;
  private user: User;
  private loginUser: LoginUser;
  private patient: Patient;
  private MRFR: MedicalRecord;
  private MHFP: Array<Examination>;

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserServiceService,
    private doctorService: DoctorService,
    private clinicalService: ClinicService,
    private nurseService: NurseServiceService,
    private adminClinicService: AdminClinicService,
    private clinicalCentreAdministratorService: ClinicalCentreAdministratorService,
    private examinationService: ExaminationService,
    private medicalRecordService: MedicalRecordService,
    private examinationsTypeService: ExaminationsTypeService,

  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  private onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loginUser = new LoginUser(
      this.f.email.value,
      this.f.password.value
    );

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));

    this.user = this.userService.getUser(this.f.email.value);
    this.patient = this.patientService.getPatient(this.f.email.value);
    this.attemptPatientLogin();
  }

  public attemptPatientLogin() {
    if (this.user.role === Role.PATIENT && this.loginUser.password === this.user.password && this.patient.status === PatientStatus.ACTIVATED) {
      this.patientService.loginPatient(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            this.userService.setLoggedUser(this.user);
            this.MRFR = this.medicalRecordService.getMRforP(this.user.email);
            this.medicalRecordService.setMRFP(this.MRFR);
            this.router.navigate(['/patient/home']);
          } else {
            alert('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );
    } else if (this.user.role === Role.DOCTOR && this.loginUser.password === this.user.password) {
      this.doctorService.loginDoctor(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            alert('Successful logged in');
            this.router.navigate(['/doctor/home']);
          } else {
            alert('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );
    } else if (this.user.role === Role.NURSE && this.loginUser.password === this.user.password) {
      console.log(this.user);
      this.nurseService.loginNurse(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            alert('Successful logged in');
            this.router.navigate(['/nurse/home']);
          } else {
            alert('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );
    } else if (this.user.role === Role.CLINIC_ADMINISTRATOR && this.loginUser.password === this.user.password) {
      console.log(this.user);
      this.adminClinicService.loginAdminClinic(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            alert('Successful logged in');
            this.router.navigate(['/admin_clinic/home']);
          } else {
            alert('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );

    } else if (this.user.role === Role.CLINICAL_CENTRE_ADMINISTRATOR && this.loginUser.password === this.user.password) {
      console.log(this.user);
      this.clinicalCentreAdministratorService.loginAdmin(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            alert('Successful logged in');
            this.router.navigate(['/clinical-centre-admin/home']);
          } else {
            alert('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
