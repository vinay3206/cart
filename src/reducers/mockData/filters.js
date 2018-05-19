const filters = [
  {
    category: 'Brands',
    id: 10001,
    options: [
      {
        label: 'Mangolia',
        id: 1,
      },
      {
        label: 'Meiji',
        id: 2,
      }
    ],
  },
  {
    category: 'Price',
    id: 10002,
    options: [
      {
        label: '0-5',
        id: 3,
        min: 0,
        max: 5,
      },
      {
        label: '5-10',
        id: 4,
        min: 5,
        max: 10,
      }
    ],
  }
];

export default filters;
