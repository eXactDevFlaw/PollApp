import { Component, inject, OnInit, signal } from '@angular/core';
import { SurveyService } from '../../core/services/survey.service';
import { Survey } from '../../core/models/survey.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
})
export class HomeComponent implements OnInit {
  private surveyService = inject(SurveyService);

  surveys = signal<Survey[]>([]);
  isLoading = signal(true);

  async ngOnInit() {
    const data = await this.surveyService.getAllSurveys();
    this.surveys.set(data);
    this.isLoading.set(false);
  }
}
