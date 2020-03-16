export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  changeBenefitValue(drug, degradeMultiplier) {
    drug.benefit = drug.benefit - (degradeMultiplier * 1);
    if (drug.benefit < 0) {
      drug.benefit = 0;
    }
    if (drug.benefit > 50) {
      drug.benefit = 50;
    }
  }
  updateBenefitValue() {
    var degradeMultiplier = 1;
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      switch(this.drugs[i].name) {
        case "Dafalgam":
          var degradeMultiplier = 2;
          if (this.drugs[i].expiresIn < 0) {
            var degradeMultiplier = 4;
          }
          break;
        case "Magic Pill":
          var degradeMultiplier = 0;
          break;
        case "Herbal Tea":
          var degradeMultiplier = -1;
          if (this.drugs[i].expiresIn < 0) {
            var degradeMultiplier = -2;
          }
          break;
        case "Fervex":
          var degradeMultiplier = -1;
          if (this.drugs[i].expiresIn <= 10) {
            var degradeMultiplier = -2;
          }
          if (this.drugs[i].expiresIn <= 5) {
            var degradeMultiplier = -3;
          }
          if (this.drugs[i].expiresIn <0) {
            var degradeMultiplier = this.drugs[i].benefit;
          }
          break;
        default:
          var degradeMultiplier = 1;
          if (this.drugs[i].expiresIn < 0) {
            var degradeMultiplier = 2;
          }
          break;
        }
        this.changeBenefitValue(this.drugs[i], degradeMultiplier)
    }
    return this.drugs;
  }
}
