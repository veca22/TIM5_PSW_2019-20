import {ExaminationKind} from './examinationKind';
import {ExaminationStatus} from './examinationStatus';
import {ExaminationType} from './examinationType';
import {Doctor} from './doctor';
import {Nurse} from './nurse';
import {Clinic} from './clinic';
import {Patient} from './patient';
import {Interval} from './interval';

export class Examination {

  kind: ExaminationKind;
  status: ExaminationStatus;
  examinationType: ExaminationType;
  discount: number;
  doctorRating: number;
  clinicRating: number;
  doctors: Array<Doctor> = new Array<Doctor>();
  nurse: Nurse;
  clinic: Clinic;
  patient: Patient;
  id: number;
  interval: Interval;
  constructor(kind: ExaminationKind, status: ExaminationStatus, examinationType: ExaminationType, discount: number,
              doctorRating: number, clinicRating: number, nurse: Nurse,
              clinic: Clinic, patient: Patient, doctors: Array<Doctor>, id: number, interval?: Interval) {
    this.kind = kind;
    this.status = status;
    this.examinationType = examinationType;
    this.discount = discount;
    this.doctorRating = doctorRating;
    this.clinicRating = clinicRating;
    this.nurse = nurse;
    this.clinic = clinic;
    this.patient = patient;
    this.doctors = doctors;
    this.id = id;
    this.interval = interval;
  }

}
