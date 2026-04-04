import { Component, input } from '@angular/core';
import { Survey } from '../../../../core/models/survey.model';

@Component({
  selector: 'app-ending-soon-section',
  templateUrl: './ending-soon-section.html',
  styleUrl: './ending-soon-section.scss',
})
export class EndingSoonSectionComponent {
  surveys = input.required<Survey[]>();

  getDaysLabel(endDate: string): string {
    const today = new Date();
    const end = new Date(endDate);
    const diff = Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff === 1 ? 'Ends in 1 Day' : `Ends in ${diff} Days`;
  }
}
