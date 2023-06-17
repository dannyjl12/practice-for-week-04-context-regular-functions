function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
 eat(); // undefined eats fish food - eat is defined in global space so does not take in any name, therefore it is undefined - correct


/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat(); // Nemo eats fish food - nemo is defined, therefore it allows this to be nemo - correct


/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // undefined eats fish food - eat is in the global space so redifining nemo.eat as eat doesn't change the global space - correct


/********************************* Scenario 4 *********************************/
nemo.swim(); // nemo swimming in the water - swim is a method so defining nemo as a new fish allows access to the swim method - correct


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // type error - defininig swim as nemo.swim does not allow it access to the swim method as it refers to the global space - correct
