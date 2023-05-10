interface Filters {
  id: number,
  day: number | null,
  title: string
}

const ListFilter = () => {

  const listFilter: Filters[] = [
    { id: 1, day: 7, title: 'Last 7 days' },
    { id: 2, day: 14, title: 'Last 14 days' },
    { id: 3, day: 30, title: 'Last 30 days' },
    { id: 4, day: 90, title: 'Last 3 months' },
    { id: 5, day: 364, title: 'Last 12 months' },
    { id: 6, day: null, title: 'Month to date' },
    { id: 7, day: null, title: 'Quarter to date' },
    { id: 8, day: null, title: 'All time' },
    { id: 9, day: null, title: 'Custom' }
  ]

  return (
    <div>
      {listFilter.map(item => )}
    </div>
  )
}

export default ListFilter