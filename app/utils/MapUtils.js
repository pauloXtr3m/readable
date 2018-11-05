export const getMapSorted = (map, factor) => {
  const arrayObj = [];

  Object.keys(map).forEach(key => arrayObj.push(map[key]));

  arrayObj.sort((a, b) => {
    if (a[factor] < b[factor]) {
      return -1;
    }

    if (a[factor] > b[factor]) {
      return 1;
    }

    return 0;
  });

  return arrayObj;
};

export const toArray = map => {
  const arrayObj = [];

  Object.keys(map).forEach(key => arrayObj.push(map[key]));

  return arrayObj;
};
