import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import {DemoMaterialModule} from './material-module';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePagePatientComponent } from './components/home-page-patient/home-page-patient.component';
import { ClinicsListComponent } from './components/clinics-list-patient/clinics-list.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import {HomePageDoctorComponent} from './components/home-page-doctor/home-page-doctor.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { NurseProfileComponent } from './components/nurse-profile/nurse-profile.component';
import { HomePageNurseComponent } from './components/home-page-nurse/home-page-nurse.component';
import { HomePageAdminClinicComponent } from './components/home-page-admin-clinic/home-page-admin-clinic.component';
import { AdminClinicProfileComponent } from './components/admin-clinic-profile/admin-clinic-profile.component';
import { HomePageClinicalCentreAdministratorComponent } from './components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component';
import { HomeComponent } from './components/home/home.component';
import { AddClinicComponent } from './components/add-clinic/add-clinic.component';
import { RegisterRequestsComponent } from './components/register-requests/register-requests.component';
import { MedicalHistoryPatientComponent } from './components/medical-history-patient/medical-history-patient.component';
import { MedicalRecordPatientComponent } from './components/medical-record-patient/medical-record-patient.component';
import {AddClinicAdministratorComponent} from './components/add-clinic-administrator/add-clinic-administrator.component';
import { ClinicSearchDialogComponent } from './components/clinic-search-dialog/clinic-search-dialog.component';
import { DoctorListPatientComponent } from './components/doctor-list-patient/doctor-list-patient.component';
import {NurseDatePickerComponent} from './components/nurse-date-picker/nurse-date-picker.component';
import { NurseListPatientComponent } from './components/nurse-list-patient/nurse-list-patient.component';
import { NurseVacationRequestComponent } from './components/nurse-vacation-request/nurse-vacation-request.component';
import { VacationRequestRegisterComponent } from './components/vacation-request-register/vacation-request-register.component';
import { DoctorVacationRequestComponent } from './components/doctor-vacation-request/doctor-vacation-request.component';
import { DoctorSearchDialogComponent } from './components/doctor-search-dialog/doctor-search-dialog.component';
import { DoctorMedicalRecordComponent } from './components/doctor-medical-record/doctor-medical-record.component';
import { MedicalRecordDialogComponent } from './components/medical-record-dialog/medical-record-dialog.component';
import {PredefExaminationDialogComponent} from './components/predef-examination-dialog/predef-examination-dialog.component';
import { PatientMakeExaminationComponent } from './components/patient-make-examination/patient-make-examination.component';
import { ActivatedAccountPatientComponent } from './components/activated-account-patient/activated-account-patient.component';
import { DiagnoseComponent } from './components/diagnose/diagnose.component';
import { MedicamentsComponent } from './components/medicaments/medicaments.component';
import { ListOfRoomsComponent } from './components/list-of-rooms/list-of-rooms.component';
import { OperationListComponent } from './components/operation-list/operation-list.component';


import { RateDoctorAndClinicPatientComponent } from './components/rate-doctor-and-clinic-patient/rate-doctor-and-clinic-patient.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    RegistrationComponent,

    HomePagePatientComponent,

    ClinicsListComponent,

    PatientProfileComponent,

    HomePageDoctorComponent,

    DoctorProfileComponent,

    NurseProfileComponent,

    HomePageNurseComponent,

    HomePageAdminClinicComponent,

    AdminClinicProfileComponent,

    HomePageClinicalCentreAdministratorComponent,

    HomeComponent,

    AddClinicComponent,

    RegisterRequestsComponent,

    MedicalHistoryPatientComponent,

    MedicalRecordPatientComponent,

    AddClinicAdministratorComponent,

    ClinicSearchDialogComponent,

    DoctorListPatientComponent,

    NurseDatePickerComponent,

    NurseListPatientComponent,

    NurseVacationRequestComponent,

    VacationRequestRegisterComponent,

    DoctorVacationRequestComponent,

    DoctorSearchDialogComponent,

    PredefExaminationDialogComponent,

    PatientMakeExaminationComponent,

    ActivatedAccountPatientComponent,

    DoctorMedicalRecordComponent,

    MedicalRecordDialogComponent,

    DiagnoseComponent,

    MedicamentsComponent,

    ListOfRoomsComponent,

    OperationListComponent,


    RateDoctorAndClinicPatientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    DemoMaterialModule,


  ],
  entryComponents: [
    ClinicSearchDialogComponent,
    DoctorListPatientComponent,
    DoctorSearchDialogComponent,
    PredefExaminationDialogComponent,
    PatientMakeExaminationComponent,
    MedicalRecordDialogComponent,
    OperationListComponent,
    RateDoctorAndClinicPatientComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
