export const colorizedCategory = (category) => {

    const categoryColorsData = [
      {
        categoryColor: '#B5B88F',
        categoryName: 'Main',
      },
      {
        categoryColor: '#FF7A7A',
        categoryName: 'House',
      },
      {
        categoryColor: '#FFF1CB',
        categoryName: 'Children',
      },
      {
        categoryColor: '#F0F1AB',
        categoryName: 'Development',
      },
      {
        categoryColor: '#F6ACF8',
        categoryName: 'Auto',
      },
      {
        categoryColor: '#75D7B4',
        categoryName: 'Food',
      },
      {
        categoryColor: '#FED057',
        categoryName: 'Basic expenses',
      },
      {
        categoryColor: '#FFD8D0',
        categoryName: 'Products',
      },
      {
        categoryColor: '#FD9498',
        categoryName: 'Car',
      },
      {
        categoryColor: '#C5BAFF',
        categoryName: 'Self care',
      },
      {
        categoryColor: '#6E78E8',
        categoryName: 'Child care',
      },
      {
        categoryColor: '#4A56E2',
        categoryName: 'Household products',
      },
      {
        categoryColor: '#81E1FF',
        categoryName: 'Education',
      },
      {
        categoryColor: '#24CCA7',
        categoryName: 'Leisure',
      },
      {
        categoryColor: '#00AD84',
        categoryName: 'Other expenses',
      }
    ]
    const findedItem = categoryColorsData.find(item => item.categoryName === category);
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return findedItem !== undefined ? findedItem.categoryColor : randomColor;
  }