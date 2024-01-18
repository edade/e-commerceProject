export const setQueryString = (history, category, filter, sort) => {
  let categoryPath;

  const categoryMappings = {
    2: "kadin/ayakkabi",
    9: "erkek/ayakkabi",
    14: "erkek/tisort",
    1: "kadin/tisort",
    4: "kadin/elbise",
  };

  if (categoryMappings.hasOwnProperty(category)) {
    categoryPath = categoryMappings[category];
  } else {
    categoryPath = category?.title;
  }

  const url = `/${categoryPath}/?filter=${filter}&sort=${sort}`;
  console.log(category);
  history.push({ search: url });
};
