# One-Line Office Jokes

[![make.fun · u-markk-st-one-line-office-jokes-a51f2bcc](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/zavonlame/u-markk-st-one-line-office-jokes-a51f2bcc/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/zavonlame/u-markk-st-one-line-office-jokes-a51f2bcc/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)

Entry for the make.fun bounty **One-Line Office Jokes** ($2, top 5 paid, free to enter).

## The line

> Someone hit reply-all to ask everyone to stop replying all, and seventeen people replied all to agree.

102 characters, one line. A real office detail (the reply-all chain) with the laugh landing on the final beat: the cure becomes the disease.

## Run

```sh
MAKEFUN_OUTPUT_DIR=<out> node main.ts
```

Writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR`. Node 22 stdlib only, no network, no file reads — the line is embedded as a literal and gate-checked (1–199 chars, single line, non-blank) before writing.
