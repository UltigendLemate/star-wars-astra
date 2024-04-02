import React from 'react'



const FilmCardSkeleton= () => {
  return (
    <div className="rounded-md border-dashed border border-primary p-4 space-y-2">
        <div className="flex justify-between gap-2 items-center">
        <h4 className="w-2/3 h-7 animate-pulse bg-gray-300"></h4>
        <p className="text-xs bg-gray-300 p-1 animate-pulse h-6 w-16"></p>
        </div>
        <div className="line-clamp-2 space-y-1">
    <p className='w-full h-4 animate-pulse bg-gray-300 rounded-md'></p>
    <p className='w-full h-4 animate-pulse bg-gray-300 rounded-md'></p>
        </div>

        <div className="space-y-1">
            <h4 className='w-1/2 h-4 animate-pulse bg-gray-300 rounded-md'></h4>
            <h4 className='w-1/2 h-4 animate-pulse bg-gray-300 rounded-md'> </h4>
        </div>

    </div>
  )
}

export default FilmCardSkeleton