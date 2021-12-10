import React from 'react';
import MediaGrid from "./MediaGrid";

const MediaImages = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center py-7 px-2 md:px-6">
        <div className="md:col-span-2">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80"
            alt="media"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
          <MediaGrid imgUrl="https://images.unsplash.com/photo-1609831647099-baaadf7dd44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          <MediaGrid imgUrl="https://images.unsplash.com/photo-1576765608622-067973a79f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" />
          <MediaGrid imgUrl="https://images.unsplash.com/photo-1576091358783-a212ec293ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" />
          <MediaGrid imgUrl="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
          <MediaGrid imgUrl="https://images.unsplash.com/photo-1612776572997-76cc42e058c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" />
          <MediaGrid imgUrl="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <MediaGrid imgUrl="https://images.pexels.com/photos/4989186/pexels-photo-4989186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <MediaGrid imgUrl="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>
        <div className="md:col-span-2">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="media"
          />
        </div>
        
      </div>
    )
}

export default MediaImages
