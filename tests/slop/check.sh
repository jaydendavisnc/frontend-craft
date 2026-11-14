#!/bin/sh
# Regression for slop.mjs: the sloppy poster must fail with at least 20 things to remove, the good poster must pass clean.
# usage: sh tests/slop/check.sh
cd "$(dirname "$0")/../.." || exit 2
bad=0
out=$(node scripts/slop.mjs tests/slop/sloppy-poster.html); code=$?
n=$(printf '%s\n' "$out" | head -1 | sed -E 's/.*, ([0-9]+) to remove.*/\1/')
if [ "$code" -eq 1 ] && [ "$n" -ge 20 ]; then echo "ok   sloppy poster: $n to remove"; else echo "FAIL sloppy poster: exit $code, $n to remove"; bad=1; fi
for want in "multi-hue gradient wash" "gradient text" "coloured glow" "emoji" "generated phrase" "paired-fragment headline" "accent word" "pill tag" "confetti" "web control" "centred stack"; do
  printf '%s\n' "$out" | grep -q "$want" || { echo "FAIL sloppy poster: missed $want"; bad=1; }
done
out=$(node scripts/slop.mjs tests/slop/good-poster.html); code=$?
if [ "$code" -eq 0 ] && printf '%s\n' "$out" | grep -q "0 to remove, 0 to change"; then echo "ok   good poster: clean"; else echo "FAIL good poster:"; printf '%s\n' "$out"; bad=1; fi
exit $bad
