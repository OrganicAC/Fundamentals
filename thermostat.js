class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode === true && this.temperature >= 25) {
      this.temperature = 25;
    } else if (this.powerSavingMode === false && this.temperature >= 32) {
      this.temperature = 32;
    } else {
      this.temperature += 1;
    }
  }

  down() {
    this.temperature <= 10 ? (this.temperature = 10) : (this.temperature -= 1);
  }

  reset() {
    this.temperature = 20;
  }

  setPowerSavingMode(input) {
    if (input == false) {
      this.powerSavingMode = false;
    } else if (input == true) {
      this.powerSavingMode = true;
    }
  }

  energyUsage() {
    if (this.temperature > 25) {
      return "High Energy Usage";
    } else if (this.temperature < 18) {
      return "Low Energy Usage";
    } else {
      return "Medium Energy Usage";
    }
  }
}

module.exports = Thermostat;
