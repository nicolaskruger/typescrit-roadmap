type Pet = {
  name?: string;
};

type Fish = Pet & {
  swim: () => void;
};

type Bird = Pet & {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const getSmallPet = (): Fish | Bird => {
  if (Math.random() > 0.5) {
    return {
      fly: () => console.log("fly"),
    };
  }
  return {
    swim: () => console.log("swim"),
  };
};

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
