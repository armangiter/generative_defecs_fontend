import DefectType from "./DefectType"
import UploadImage from "./UploadImage"

const FineTune = () => {
  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>Fine Tune Defect Types</p>
      <div className='flex flex-col md:flex-row items-start justify-center md:gap-8 mt-12'>
        <UploadImage />
        <DefectType />
      </div>
    </div>
  )
}

export default FineTune