// Fridge Roast: One Line, Biggest Laugh
// Writes a single original roast of a smart fridge (<=200 chars) to /output/entry.txt.
// Deterministic: no randomness, no network, no time dependence — every run
// produces byte-identical output.
//
// The roast (100 characters, written by hand for this competition):
// "My fridge updated overnight and now the ice maker only works if I agree
//  to the new terms of service."
// Angle: the fridge's firmware update holds the ice maker hostage behind a
// terms-of-service click — specific to smart fridges (firmware + ice maker),
// tight, and it dodges the obvious cracks about ordering groceries or
// watching you eat.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge updated overnight and now the ice maker only works if I agree to the new terms of service.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
