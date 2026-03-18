class kilowattHour {
    constructor(type, watts) {
        this.type = type;
        this.watts = watts;
    }
    intro() {
        console.log(`Kilowatt-hours are a common billing unit for electrical energy supplied by electrical utilities`);
    }
    explain() {
        console.log(`${this.type}(s) consume about ${this.watts}W of power`);
    }
}

let appliance1 = new kilowattHour("asic miner", 3500);
console.log(appliance1.intro());
console.log(appliance1.explain());

let appliance2 = new kilowattHour("household microwave", 1200);
console.log(appliance2.explain());
