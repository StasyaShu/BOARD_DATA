import {HOT, EXTRA_COLD, WARM_EXTRA, WARM, NORMAL_WARM, NORMAL, NORMAL_COOL, COOL, COLD} from './data.js';

const getTemp = () => {

  const tempItems = document.querySelectorAll('.temp');
  const temperature = [];
  tempItems.forEach((el) => {
    const temp = el.textContent;
    temperature.push(temp);
  })

  const chipTemps = document.querySelectorAll('.chip-temp');
  const temperatureChipCells = [];
  chipTemps.forEach((el) => {
    const cellTemp = el.textContent;
    temperatureChipCells.push(cellTemp);
  })


  for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > HOT) {
      tempItems[i].classList.add('temp--hot');
    } else if (temperature[i] < EXTRA_COLD) {
      tempItems[i].classList.add('temp--cold-extra');
    } else {
      for (let j = 0; j <= WARM_EXTRA.length; j++) {
        if (temperature[i] == WARM_EXTRA[j]) {
          tempItems[i].classList.add('temp--warm-extra');
        }
      }

      for (let j = 0; j <= WARM.length; j++) {
        if (WARM[j] == temperature[i]) {
          tempItems[i].classList.add('temp--warm');
        }
      }

      for (let j = 0; j <= NORMAL_WARM.length; j++) {
        if (NORMAL_WARM[j] == temperature[i]) {
          tempItems[i].classList.add('temp--normal-warm');
        }
      }

      for (let j = 0; j <= NORMAL.length; j++) {
        if (NORMAL[j] == temperature[i]) {
          tempItems[i].classList.add('temp--normal');
        }
      }

      for (let j = 0; j <= NORMAL_COOL.length; j++) {
        if (NORMAL_COOL[j] == temperature[i]) {
          tempItems[i].classList.add('temp--normal-cool');
        }
      }

      for (let j = 0; j <= COOL.length; j++) {
        if (COOL[j] == temperature[i]) {
          tempItems[i].classList.add('temp--cool');
        }
      }

      for (let j = 0; j <= COLD.length; j++) {
        if (COLD[j] == temperature[i]) {
          tempItems[i].classList.add('temp--cold');
        }
      }
    }
  }

  for (let i = 0; i < temperatureChipCells.length; i++) {
    if (temperatureChipCells[i] > HOT) {
      chipTemps[i].parentNode.classList.add('temp--hot');
    } else if (temperatureChipCells[i] < EXTRA_COLD) {
      chipTemps[i].parentNode.classList.add('temp--cold-extra');
    } else {
      for (let j = 0; j <= WARM_EXTRA.length; j++) {
        if (WARM_EXTRA[j] == temperatureChipCells[i]) {
          chipTemps[i].parentNode.classList.add('temp--warm-extra');
        }
      }

      for (let j = 0; j <= WARM.length; j++) {
        if (WARM[j] == temperatureChipCells[i]) {
          chipTemps[i].parentNode.classList.add('temp--warm');
        }
      }

      for (let j = 0; j <= NORMAL_WARM.length; j++) {
        if (NORMAL_WARM[j] == temperatureChipCells[i]) {
          chipTemps[i].parentNode.classList.add('temp--normal-warm');
        }
      }

      for (let j = 0; j <= NORMAL.length; j++) {
        if (NORMAL[j] == temperatureChipCells[i]) {
          chipTemps[i].parentNode.classList.add('temp--normal');
        }
      }

      for (let j = 0; j <= NORMAL_COOL.length; j++) {
        if (NORMAL_COOL[j] == temperatureChipCells[i]) {
          chipTemps[i].parentNode.classList.add('temp--normal-cool');
        }
      }

      for (let j = 0; j <= COOL.length; j++) {
        if (COOL[j] == temperatureChipCells[i]) {
          chipTemps[i].parentNode.classList.add('temp--cool');
        }
      }

      for (let j = 0; j <= COLD.length; j++) {
        if (COLD[j] == temperatureChipCells[i]) {
          chipTemps[i].parentNode.classList.add('temp--cold');
        }
      }
    }
  }
}

getTemp();
