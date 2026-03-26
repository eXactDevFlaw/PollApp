export interface Survey {
  id: string;
  name: string;
  description: string;
  category: string;
  end_date: string;
  status: 'draft' | 'published';
  created_at: string;
}
