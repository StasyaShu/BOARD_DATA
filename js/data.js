const HOT = 120;
const EXTRA_COLD = 0;

const WARM_EXTRA = []
for (var i = 110; i <= 119; i++) {
  WARM_EXTRA.push(i)
}

const WARM = [];
for (var i = 100; i <= 109; i++) {
  WARM.push(i)
}

const NORMAL_WARM = [];
for (var i = 90; i <= 99; i++) {
  NORMAL_WARM.push(i)
}

const NORMAL = [];
for (var i = 80; i <= 89; i++) {
  NORMAL.push(i)
}

const NORMAL_COOL = [];
for (var i = 70; i <= 79; i++) {
  NORMAL_COOL.push(i)
}

const COOL = [];
for (var i = 50; i <= 69; i++) {
  COOL.push(i)
}

const COLD = [];
for (var i = 0; i <= 49; i++) {
  COLD.push(i)
}

export {HOT, EXTRA_COLD, WARM_EXTRA, WARM, NORMAL_WARM, NORMAL, NORMAL_COOL, COOL, COLD};


// $hot: >120°C
// $warm-extra: 110-120°C
// $warm: 100-110°C
// $normal-warm: 90-100°C
// $normal: 80-90°C
// $normal-cool: 70-80°C
// $cool: 50-70°C
// $cold: 0-50°C
// $cold-extra: <0°C
