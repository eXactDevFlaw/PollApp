import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { Survey } from '../models/survey.model';

@Injectable({ providedIn: 'root' })
export class SurveyService {
  private supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);

  async getAllSurveys(): Promise<Survey[]> {
    const { data, error } = await this.supabase.from('surveys').select('*');

    if (error) console.error(error);
    return data ?? [];
  }
}
