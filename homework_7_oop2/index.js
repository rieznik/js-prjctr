//* I level
function MagicalBeing(name, age, magicalAbility) {
  this.name = name;
  this.age = age;
  this.magicalAbility = magicalAbility;
}

MagicalBeing.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

MagicalBeing.prototype.castSpell = function (spell) {
  console.log(`${spell}!`);
};

//* II level
function Wizard(name, age, magicalAbility, wand, patronus) {
  MagicalBeing.call(this, name, age, magicalAbility);
  this.wand = wand;
  this.patronus = patronus;
}

Wizard.prototype = Object.create(MagicalBeing.prototype);
Wizard.prototype.brewPotion = function (potionName) {
  console.log(
    `${this.name} starts brewing ${potionName} potion. It will be ready soon.`
  );
  setTimeout(() => {
    console.log(`${potionName} 🍯 is ready, cheers!`);
  }, 3000);
};

function MagicalCreature(name, age, magicalAbility, species) {
  MagicalBeing.call(this, name, age, magicalAbility);
  this.species = species;
}

MagicalCreature.prototype = Object.create(MagicalBeing.prototype);
MagicalCreature.prototype.hide = function () {
  console.log(`${this.name} ran away`);
};

//* III level
function HogwartsStudent(
  name,
  age,
  magicalAbility,
  wand,
  patronus,
  house,
  year
) {
  Wizard.call(this, name, age, magicalAbility, wand, patronus);
  this.house = house;
  this.year = year;
}

HogwartsStudent.prototype = Object.create(Wizard.prototype);
HogwartsStudent.prototype.tellHouse = function () {
  console.log(`I am in ${this.house} house`);
};
HogwartsStudent.prototype.tellSchoolYear = function () {
  console.log(`I am ${this.year} year Hogwarts student`);
};

function HouseElf(name, age, magicalAbility, species, master) {
  MagicalCreature.call(this, name, age, magicalAbility, species);
  this.master = master;
}

HouseElf.prototype = Object.create(MagicalCreature.prototype);
HouseElf.prototype.clean = function () {
  console.log(`${this.name} cleans everything for ${this.master} 🧹🫧`);
};
//--------------------------------------------

const harry = new HogwartsStudent(
  'Harry Potter',
  14,
  'extremely powerful and talented wizard',
  '11", Holly, phoenix feather',
  'Stag',
  'Gryffindor',
  1
);

const dobby = new HouseElf(
  'Dobby',
  'many',
  'apparition, levitation, disarming',
  'house-elf',
  'Malfoy family'
);

harry.introduce();
harry.castSpell('Patronus');
harry.brewPotion('Polyjuice');
harry.tellHouse();
harry.tellSchoolYear();

dobby.introduce();
dobby.hide();
dobby.clean();
