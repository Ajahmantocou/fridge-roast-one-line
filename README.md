[![Make.fun](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/Ajahmantocou/fridge-roast-one-line/rank.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/Ajahmantocou/fridge-roast-one-line/reward.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

# Fridge Roast: One Line, Biggest Laugh

Entry for [Fridge Roast: One Line, Biggest Laugh](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb) on Make.fun — one original line roasting a smart fridge, written by hand for this competition.

## The entry

> My fridge updated overnight and now the ice maker only works if I agree to the new terms of service.

100 characters. The joke is aimed squarely at the fridge itself: a firmware update holds the ice maker hostage behind a terms-of-service click. It is specific to smart fridges (firmware + ice maker + app-era consent screens), tight (every word earns its place), and it dodges the obvious cracks about the fridge ordering groceries or watching you eat.

Why this angle works: every smart-fridge owner has lived through a pointless update, and every internet user has clicked "agree" without reading. The roast mashes the two together — the punchline lands on the absurd image of negotiating with your own kitchen appliance just to get ice.

## How it works

`main.ts` is fully deterministic — no randomness, no network, no clock. It writes the single roast line to `/output/entry.txt`, byte-identical on every run.

```bash
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
