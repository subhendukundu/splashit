const sortData = [
  {
    label: 'Sort by',
    id: 'sortBy',
    options: [
      {
        label: 'Relevance',
        id: 'relevant',
        name: 'order_by',
        value: 'relevant'
      },
      {
        label: 'Newest',
        id: 'latest',
        name: 'order_by',
        value: 'latest'
      }
    ]
  },
  {
    label: 'Color',
    id: 'color',
    options: [
      {
        label: 'Any Color',
        id: 'any',
        name: 'color',
        value: 'any'
      },
      {
        label: 'Black and White',
        id: 'black_and_white',
        name: 'color',
        value: 'black_and_white'
      }
    ]
  },
  {
    label: 'Orientation',
    id: 'orientation',
    options: [
      {
        label: 'Any',
        id: 'any',
        name: 'orientation',
        value: 'any'
      },
      {
        label: 'Portrait',
        id: 'portrait',
        name: 'orientation',
        value: 'portrait'
      },
      {
        label: 'Landscape',
        id: 'landscape',
        name: 'orientation',
        value: 'landscape'
      },
      {
        label: 'Square',
        id: 'squarish',
        name: 'orientation',
        value: 'squarish'
      }
    ]
  }
]
export default sortData
