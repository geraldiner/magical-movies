import React from 'react'

const Movie = () => {
  return (
    <div className="bg-white shadow-md px-5 py-5 my-7">
      <div className="flex justify-around">
        <div className="rankNumber text-5xl font-bold">1</div>
        <div className="poster w-2/12"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zXLXaepIBvFVLU25DH3wv4IPSbe.jpg" alt="" /></div>
        <div className="movieInfo w-8/12 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl my-3">Movie Title</h3>
            <p className="text-base my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolores! Doloremque, magnam, magni voluptatibus reiciendis ut odio aperiam repudiandae beatae quis aspernatur error nobis fuga. Quo quasi tenetur expedita molestiae.</p>
          </div>

          <div className="flex justify-self-end bg-red-50">
            <span className="mr-5">Reddit Score</span>
            <span className="mr-5">Average Score</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
