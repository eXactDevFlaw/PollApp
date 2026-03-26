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
  endingSoon = signal<Survey[]>([]);
  isLoading = signal(true);

  async ngOnInit() {
    const [allSurveys, endingSoon] = await Promise.all([
      this.surveyService.getAllSurveys(),
      this.surveyService.getEndingSoonSurveys(),
    ]);

    this.surveys.set(allSurveys);
    this.endingSoon.set(endingSoon);
    this.isLoading.set(false);
  }

  getDaysLeft(endDate: string): number {
    const today = new Date();
    const end = new Date(endDate);
    const diff = end.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
}
