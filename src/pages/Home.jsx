import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState(0);

  console.log(categoryId);

  React.useEffect(() => {
    setIsLoading(true);
    const getData = () => {
      if (categoryId === 0) {
        return fetch("https://64de99a3825d19d9bfb2bcac.mockapi.io/vue-pizza");
      } else {
        return fetch(
          "https://64de99a3825d19d9bfb2bcac.mockapi.io/vue-pizza?category=" +
            categoryId
        );
      }
    };
    getData()
      .then((res) => res.json())
      .then((arr) => {
        setData(arr);
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <React.Fragment>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCatigoriy={(id) => setCategoryId(id)}
        />
        <Sort 
          value={activeSort}
          onClickSort={(id) => setActiveSort(id)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading === false
          ? data.map((item) => <PizzaBlock {...item} key={item.id} />)
          : [...new Array(8)].map(() => <Skeleton key={Math.random()} />)}
      </div>
    </React.Fragment>
  );
};

export default Home;
