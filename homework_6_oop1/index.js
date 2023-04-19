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

class Firefly extends Survivor {
  constructor(name, age, abilities, role) {
    super(name, age, abilities);
    this.role = role;
  }

  communicateWithGroup() {
    console.log(`...${this.name} sends a message to the group...`);
  }
}

class Smuggler extends Survivor {
  constructor(name, age, abilities, cargo) {
    super(name, age, abilities);
    this.cargo = cargo;
  }

  negotiate() {
    console.log(`...${this.name} asks for higher price...`);
  }

  showCargo() {
    console.log(`Smuggling ${this.cargo}`);
  }
}

class Clicker extends Infected {
  constructor(infectionStage, abilities, isActiveFlag) {
    super(infectionStage, abilities);
    this.isActiveFlag = isActiveFlag;
  }

  echolocate() {
    if (this.isActiveFlag) {
      console.log('kkkk...aarrrkkkk...kkrrrkkk');
      return;
    }
    console.log('This clicker is quietly standing');
  }

  isActive() {
    console.log(
      this.isActiveFlag ? 'Clicker is walking' : 'Clicker is standing still'
    );
  }
}

class Bloater extends Infected {
  #sporesCloud = false;
  #sporesTimer = 5000;

  constructor(infectionStage, abilities, weight) {
    super(infectionStage, abilities);
    this.weight = weight;
  }

  launchSporeCloud() {
    console.log('...Explodes and releases spores...');
    this.#sporesCloud = true;
    setTimeout(() => {
      this.#sporesCloud = false;
      console.log('...Spores vanished...');
    }, this.#sporesTimer);
  }
}

const ellie = new Firefly(
  'Ellie',
  14,
  [
    'immune to Cordyceps',
    'attack with switchblade',
    'ride a horse',
    'squeeze in tight entrance',
  ],
  'hope of humanity'
);

const joel = new Smuggler(
  'Joel',
  51,
  [
    'can smuggle anything',
    'fierce fist-fighting',
    'expert at wielding a wide range of weapons',
    'ride a horse',
    'swim',
  ],
  'Ellie'
);

const clicker = new Clicker(
  'three',
  ['echolocation by rapid clicking and croaking sounds', 'enhanced strength'],
  true
);

const bloater = new Bloater(
  'four',
  [
    'can withstand multiple hits from weapons',
    'spraying the target with the toxin',
    'releases spores',
  ],
  250
);

ellie.introduce();
ellie.showAbilities();
ellie.communicateWithGroup();

joel.introduce();
joel.showAbilities();
joel.negotiate();
joel.showCargo();

clicker.showAbilities();
clicker.showInfectionStage();
clicker.echolocate();
clicker.isActive();

bloater.showAbilities();
bloater.showInfectionStage();
bloater.launchSporeCloud();
