import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api.ts";
import { BUTTON_SIZES } from "../../components/atoms/Button/constants.ts";
import "./Home.scss";
import pokeball from "../../assets/images/pokeball.png";
import { Page, ListItem } from "./types.ts";
import { Button, List } from "../../components/index.ts";

const Home: React.FC = () => {
  const [sortedListItems, setSortedListItems] = useState<ListItem[]>([]);
  const {
    data: listItems,
    error,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["listItems"],
    queryFn: ({ pageParam = 0 }: { pageParam: number }) =>
      fetchData({ pageParam }),
    getNextPageParam: (lastPage: Page): number | undefined =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
    initialPageParam: 0,
  });

  const loadMore = () => {
    fetchNextPage();
  };

  useEffect(() => {
    const resolveAndSortData = async () => {
      if (!listItems?.pages) return;

      const allItems = listItems.pages.flatMap((page) => page.items || []);

      const resolvedItems = await Promise.all(
        allItems.map(async (item) => {
          return item instanceof Promise ? await item : item;
        })
      );
      const sortedData = resolvedItems
        .filter((item) => item?.name)
        .sort((a, b) => a.name.localeCompare(b.name));

      setSortedListItems(sortedData);
    };

    resolveAndSortData();
  }, [listItems]);

  return (
    <div className='home'>
      <h1 className='home__header'>Catch a Pokemon!</h1>
      {error && (
        <div>
          <img src={pokeball} alt='Pokeball' />
          An error happened while gathering the pokemons, try to reload the
          page!
        </div>
      )}
      {!error && (
        <List listItems={sortedListItems || []} isLoading={isLoading} />
      )}
      <Button size={BUTTON_SIZES.LARGE} onClick={loadMore}>
        Load More
      </Button>
    </div>
  );
};

export default Home;
