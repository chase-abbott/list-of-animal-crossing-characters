export const getVillagers = async () => {
  const results = await fetch('https://ac-vill.herokuapp.com/villagers');
  const res = await results.json();
  return res;
};

export const getVillagerDetail = async (id) => {
  const results = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);
  const res = await results.json();
  return res;
};

export const mungeVillagers = (villagers) => {
  return villagers.map(villager => (
    {
      id: villager._id,
      image: villager.image,
      name: villager.name,
      japaneseName: villager.japaneseName,
      quote: villager.quote
    }
  ));
};
