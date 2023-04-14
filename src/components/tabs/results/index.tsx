import ListResult from "./ListResult"

interface Result {
  id: number,
  date: string,
  type: string,
  model: string,
  images: string[]
}

const Results = () => {

  const listResults: Result[] = [
    { id: 1, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: new Array(5).fill('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU') },
    { id: 2, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: new Array(5).fill('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU') },
    { id: 3, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: new Array(5).fill('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU') },
    { id: 4, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: new Array(5).fill('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU') },
    { id: 5, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: new Array(5).fill('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU') },
  ]

  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>Your Results</p>
      <ul className='grid grid-cols-4 mt-12 gap-8'>
        {listResults.map((item: Result) => <ListResult key={item.id} data={item} />)}
      </ul>
    </div>
  )
}

export default Results