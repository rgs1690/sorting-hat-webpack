const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortHat = houses[Math.floor(Math.random() * houses.length)];
  return sortHat;
};

export default sortingHat;
