const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  it("has a base temperature of 20", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("increased the temp by 1", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("decrease the temp by 1", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("has a min temp of 10", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });

  it("has a max temp of 25 if PSM is on", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 8; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("has a max temp of 32 if PSM is off", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it("resets the temp to 20", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns energy usage depending on temp", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUsage()).toBe("Low Energy Usage");
  });
});
