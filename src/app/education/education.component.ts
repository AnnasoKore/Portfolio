import { Component, OnInit } from '@angular/core';
import { faGraduationCap, faLandmark, faCity, faPercentage, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
degreeIcon=faGraduationCap;
universityIcon=faCity;
collegeIcon=faLandmark;
marksIcon=faPercentage;
dateIcon=faCalendarAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
