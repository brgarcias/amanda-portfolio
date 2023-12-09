type PriceItem = {
  name: string;
  price: {
    value: string;
    after: string;
  };
  list: {
    active: 0 | 1;
    value: string;
  }[];
  button: {
    label: string;
    link: string;
  };
};

type PriceData = {
  title: string;
  items: PriceItem[];
};

const priceData: PriceData = {
  title: 'Price',
  items: [
    {
      name: 'Hourly payment',
      price: {
        value: '$17',
        after: '/ho',
      },
      list: [
        {
          active: 1,
          value: 'Dolorum sed doloribus',
        },
        {
          active: 1,
          value: 'Consectetur adipisicing elit',
        },
        {
          active: 1,
          value: 'Maxime libero',
        },
        {
          active: 0,
          value: 'Atque esse odit',
        },
        {
          active: 0,
          value: 'Laboriosam corporis',
        },
      ],
      button: {
        label: 'Visit website',
        link: '/contact',
      },
    },
    {
      name: 'Monthly payment',
      price: {
        value: '$2900',
        after: '/mo',
      },
      list: [
        {
          active: 1,
          value: 'Dolorum sed doloribus',
        },
        {
          active: 1,
          value: 'Consectetur adipisicing elit',
        },
        {
          active: 1,
          value: 'Maxime libero',
        },
        {
          active: 1,
          value: 'Atque esse odit',
        },
        {
          active: 1,
          value: 'Laboriosam corporis',
        },
      ],
      button: {
        label: 'Visit website',
        link: '/contact',
      },
    },
  ],
};

export default priceData;
