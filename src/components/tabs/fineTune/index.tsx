import DefectType from "./DefectType"
import UploadImage from "./UploadImage"
import SaveDefect from "./modal/SaveDefect"

const FineTune = () => {
  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>Fine Tune Defect Types</p>
      <div className='flex flex-row items-start justify-center gap-8 mt-12'>
        <UploadImage />
        <DefectType />
      </div>
    </div>
  )
}

export default FineTune