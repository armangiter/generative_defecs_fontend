import ListResult from "./ListResult"
import { Result } from "../../../models"
import i18next from 'i18next';

const Results = () => {

  const { t } = i18next;
  const listResults: Result[] = [
    { id: 1, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU', 'https://cdn-eeflh.nitrocdn.com/LxfwuleIxAJkqaCFojUcvZkaaUdRjWME/assets/static/optimized/rev-1a67ce8/wp-content/uploads/curves-road-with-guardrails.jpg', 'https://d33wubrfki0l68.cloudfront.net/29776bee994799463b8156755b835d4d9a5a55ec/2c26a/blog/assets/naomi-august-138145-unsplash.jpg', 'https://images02.military.com/sites/default/files/styles/full/public/2022-07/stock-road-guardrails-1800.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PgtWocTltnog_Gb2vVhULw_9Lw24ySkaqw&usqp=CAU'] },
    { id: 2, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU', 'https://cdn-eeflh.nitrocdn.com/LxfwuleIxAJkqaCFojUcvZkaaUdRjWME/assets/static/optimized/rev-1a67ce8/wp-content/uploads/curves-road-with-guardrails.jpg', 'https://d33wubrfki0l68.cloudfront.net/29776bee994799463b8156755b835d4d9a5a55ec/2c26a/blog/assets/naomi-august-138145-unsplash.jpg', 'https://images02.military.com/sites/default/files/styles/full/public/2022-07/stock-road-guardrails-1800.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PgtWocTltnog_Gb2vVhULw_9Lw24ySkaqw&usqp=CAU'] },
    { id: 3, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU', 'https://cdn-eeflh.nitrocdn.com/LxfwuleIxAJkqaCFojUcvZkaaUdRjWME/assets/static/optimized/rev-1a67ce8/wp-content/uploads/curves-road-with-guardrails.jpg', 'https://d33wubrfki0l68.cloudfront.net/29776bee994799463b8156755b835d4d9a5a55ec/2c26a/blog/assets/naomi-august-138145-unsplash.jpg', 'https://images02.military.com/sites/default/files/styles/full/public/2022-07/stock-road-guardrails-1800.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PgtWocTltnog_Gb2vVhULw_9Lw24ySkaqw&usqp=CAU'] },
    { id: 4, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU', 'https://cdn-eeflh.nitrocdn.com/LxfwuleIxAJkqaCFojUcvZkaaUdRjWME/assets/static/optimized/rev-1a67ce8/wp-content/uploads/curves-road-with-guardrails.jpg', 'https://d33wubrfki0l68.cloudfront.net/29776bee994799463b8156755b835d4d9a5a55ec/2c26a/blog/assets/naomi-august-138145-unsplash.jpg', 'https://images02.military.com/sites/default/files/styles/full/public/2022-07/stock-road-guardrails-1800.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PgtWocTltnog_Gb2vVhULw_9Lw24ySkaqw&usqp=CAU'] },
    { id: 5, date: '2023-02-02', type: 'Scratch', model: 'Scratch-1', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMeDcOxKJN8L6mfYcGq2qqZb6BqtPRXnZ-qQ88z2MtKmnpvXYnb7SNdFFo2EBoNxopjQ&usqp=CAU', 'https://cdn-eeflh.nitrocdn.com/LxfwuleIxAJkqaCFojUcvZkaaUdRjWME/assets/static/optimized/rev-1a67ce8/wp-content/uploads/curves-road-with-guardrails.jpg', 'https://d33wubrfki0l68.cloudfront.net/29776bee994799463b8156755b835d4d9a5a55ec/2c26a/blog/assets/naomi-august-138145-unsplash.jpg', 'https://images02.military.com/sites/default/files/styles/full/public/2022-07/stock-road-guardrails-1800.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PgtWocTltnog_Gb2vVhULw_9Lw24ySkaqw&usqp=CAU'] },
  ]

  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>{t('your_Results')}</p>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-8'>
        {listResults.map((item: Result) => <ListResult key={item.id} data={item} />)}
      </ul>
    </div>
  )
}

export default Results