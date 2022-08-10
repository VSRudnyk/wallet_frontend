export const colorizedCategory = category => {
  const categoryColorsData = [
    {
      categoryColor: '#B5B88F',
      categoryName: 'main',
    },
    {
      categoryColor: '#FF7A7A',
      categoryName: 'house',
    },
    {
      categoryColor: '#FFF1CB',
      categoryName: 'children',
    },
    {
      categoryColor: '#F0F1AB',
      categoryName: 'development',
    },
    {
      categoryColor: '#75D7B4',
      categoryName: 'food',
    },
    {
      categoryColor: '#FED057',
      categoryName: 'basic',
    },
    {
      categoryColor: '#FFD8D0',
      categoryName: 'products',
    },
    {
      categoryColor: '#FD9498',
      categoryName: 'car',
    },
    {
      categoryColor: '#C5BAFF',
      categoryName: 'health',
    },
    {
      categoryColor: '#6E78E8',
      categoryName: 'childrencare',
    },
    {
      categoryColor: '#4A56E2',
      categoryName: 'household',
    },
    {
      categoryColor: '#81E1FF',
      categoryName: 'education',
    },
    {
      categoryColor: '#24CCA7',
      categoryName: 'leisure',
    },
    {
      categoryColor: '#00AD84',
      categoryName: 'other',
    },
  ];
  const findedItem = categoryColorsData.find(
    item => item.categoryName === category
  );
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return findedItem !== undefined ? findedItem.categoryColor : randomColor;
};
