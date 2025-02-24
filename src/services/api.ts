import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
export const fetchData = async ({ pageParam = 0 }: { pageParam: number }) => {
    const response = await axios.get(`${API_URL}?offset=${pageParam}&limit=10`);
    const results = response.data.results;

    const items = results.map(async (result: any) => {
        return {
            name: result.name,
            detailsURL: result.url,
        };
    });

    return {
        items,
        nextPage: pageParam + 10,
        hasMore: response.data.next !== null,
    };
};

export const fetchItemDetails = async (detailsURL: string) => {
  const details = await axios.get(detailsURL);
  return {
    id: details.data.id,
    name: details.data.name,
    types: details.data.types.map((typeInfo: any) => typeInfo.type.name),
    powers: details.data.stats.map((statInfo: any) => {
      return { name: statInfo.stat.name, value: statInfo.base_stat };
    }),
    abilities: details.data.abilities.map(
      (abilityInfo: any) => abilityInfo.ability.name
    ),
    experience: details.data.base_experience,
    imageUrl: details.data.sprites.front_default,
  };
};
