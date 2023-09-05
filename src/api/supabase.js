import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hnnyotwjhikrytqynjyk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubnlvdHdqaGlrcnl0cXluanlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MjUxMTUsImV4cCI6MjAwOTUwMTExNX0.FeCoVdt_ZRnDREV207-AS3WX2E-mubw4XDSzK_FR3uc",
);

export { supabase };

export async function getAllRows() {
  let { data: scoringCriteria, error } = await supabase
    .from("scoringCriteria")
    .select("*");
  return scoringCriteria;
}
