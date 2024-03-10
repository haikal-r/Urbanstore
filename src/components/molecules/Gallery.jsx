import { Tab } from '@headlessui/react'
import GalleryTab from './GalleryTab'


const Gallery = ({ product }) => {

  return (
    <Tab.Group as='div' className='flex flex-col p-4 z-0'>
      <Tab.Panels className='w-full h-full flex justify-center '>
        <div className='relative w-[70%] h-[70%] rounded-lg  '>
          <img
            src={product.image}
            alt={product.title}
            className='object-cover object-center rounded-lg'
          />
        </div>
      </Tab.Panels>
      <div className='mt-6 w-full'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          <GalleryTab product={product.image} />
        </Tab.List>
      </div>
      </Tab.Group>

    

  )
}

export default Gallery
