/* eslint-disable max-classes-per-file */
class Human {
  constructor(abilities) {
    this.abilities = abilities;
  }

  showAbilities() {
    console.log(`Abilities: ${this.abilities}`);
  }
}

class Survivor extends Human {
  constructor(name, age, abilities) {
    super(abilities);
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Infected extends Human {
  constructor(infectionStage, abilities) {
    super(abilities);
    this.infectionStage = infectionStage;
  }

  showInfectionStage() {
    console.log(`Infected stage ${this.infectionStage}.`);
  }
}

class Clicker extends Infected {
  echolocate() {
    console.log('kkkk...aarrrkkkk...kkrrrkkk');
  }
}

const ellie = new Survivor('Ellie', 14, [
  'immune to Cordyceps',
  'attack with switchblade',
  'ride a horse',
  'squeeze in tight entrance',
]);

const clicker = new Clicker('three', [
  'echolocation by rapid clicking and croaking sounds',
  'enhanced strength',
]);

ellie.introduce();
ellie.showAbilities();

clicker.showAbilities();
clicker.echolocate();
