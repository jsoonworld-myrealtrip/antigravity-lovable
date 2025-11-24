// 러버블에서 안티그레비티로의 마이그레이션 예시
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseKey = 'public-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
