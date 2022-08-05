export const colorizedCategory = (category) => {

    const categoryColorsData = [
      {
        categoryColor: '#FF7DDB',
        categoryName: 'Education',
      },
      {
        categoryColor: '#FF6E41',
        categoryName: 'House',
      },
      {
        categoryColor: '#F422FF',
        categoryName: 'Children',
      },
      {
        categoryColor: '#FF1EA1',
        categoryName: 'Development',
      },
      {
        categoryColor: '#BE6C31',
        categoryName: 'Auto',
      },
      {
        categoryColor: '#75D7B4',
        categoryName: 'Food',
      },
      {
        categoryColor: '#FED057',
        categoryName: 'Basic',
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
        categoryName: 'Health',
      },
      {
        categoryColor: '#6E78E8',
        categoryName: 'Kids',
      },
      {
        categoryColor: '#4A56E2',
        categoryName: 'Home',
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
        categoryName: 'Other',
      }
    ]
    const findedItem = categoryColorsData.find(item => item.categoryName === category);
    return findedItem.categoryColor;
  }