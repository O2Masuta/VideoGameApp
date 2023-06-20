import { Injectable } from '@angular/core';
import {createClient} from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  const supabaseUrl = 'https://tdjmilytuoulmbsjaege.supabase.co'
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  constructor() { }
}
