export const getVillagers = async () => {
  const results = await fetch('https://ac-vill.herokuapp.com/villagers');
  const res = await results.json();
  return res;
};

export const mungeVillagers = (villagers) => {
  return villagers.map(villager => (
    {
      id: villager.id,
      image: villager.image,
      japaneseName: villager.japaneseName,
      quote: villager.quote
    }
  ));
};
