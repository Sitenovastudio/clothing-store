const SUPABASE_URL = "https://irsdulqoedvfthsdqoob.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc2R1bHFvZWR2ZnRoc2Rxb29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MjQ2OTYsImV4cCI6MjA5NzEwMDY5Nn0.6ci19F8osVGEhpNcCq1xb_1da7WObaLVfOT3wT32Eps";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
