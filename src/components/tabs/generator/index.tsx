import UploadImage from "./UploadImage"
import DefectType from "./DefectType"

const Generator = () => {
  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>Generate New Images</p>
      <div className='flex flex-col md:flex-row items-start justify-center gap-8 mt-12'>
        <UploadImage />
        <DefectType />
      </div>
    </div>
  )
}

export default Generator