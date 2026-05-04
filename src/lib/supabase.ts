import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  phone: string;
  issue: string;
  image_url?: string;
}

export async function submitContact(data: ContactSubmission) {
  const { error } = await supabase.from('contact_submissions').insert([data]);
  if (error) throw error;
}
