import { Component, input } from '@angular/core';
import { Survey } from '../../../../core/models/survey.model';
import { SurveyCardComponent } from '../survey-card/survey-card';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.scss',
  imports: [SurveyCardComponent],
})
export class SurveyListComponent {
  surveys = input.required<Survey[]>();
}
