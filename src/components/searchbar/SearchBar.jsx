import { useState } from "react";

// Search Data
const searchData = [
  {
      name: 'Paints',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNjIf9FSnhbJIj0dPwaB5PsGLDoTB8gD92E4lSO8Be9Lt99guGEts4eUgt7X7cr8LK2Y&usqp=CAU'
  },
  {
      name: 'Markers',
      image: 'https://mmtoyworld.com/cdn/shop/files/MMTOYSColorBlendPackof18ColorsAlcoholBrushPaintMarkersDualTipPermanentArtMarkerSet_3.jpg?v=1709813199&width=1946'
  },
  {
      name: 'Painting essentials',
      image: 'https://image.made-in-china.com/202f0j00BWJhlIuKEFUg/Complete-35-Piece-Acrylic-Painting-Art-Set-for-Beginners-and-Advanced-Artists.webp'
  },
  {
      name: 'Colours',
      image: 'https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-85129070/85129070.jpg'
  },
  {
      name: 'Diaries and Sheets',
      image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7rbmp-lm70jebrzm1lb8'
  },
  {
      name: 'Clay materials',
      image: 'https://m.media-amazon.com/images/I/51m3o0adSPL._AC_UF894,1000_QL80_.jpg'
  },
  {
      name: 'Pens and Pencils',
      image: 'https://www.artsupplies.co.uk/blog/wp-content/uploads/2020/10/Winsor-Newton-drawing-ink-eraser-pencil-pen-and-dip-pen-on-a-pad-of-cartridge-paper.jpg'
  },
]

const SearchBar = () => {
   // Search State 
   const [search, setSearch] = useState("");

   // Filter Search Data
   const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search)).slice(0, 8)
  return (
    <div className="">
    {/* search input  */}
    <div className="input flex justify-center">
        <input
            type="text"
            placeholder='Search here'
            onChange={(e) => setSearch(e.target.value)}
            className=' bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black '
        />
    </div>

    {/* search drop-down  */}
    <div className=" flex justify-center">
        {search && <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ?
                <>
                    {filterSearchData.map((item, index) => {
                        return (
                            <div key={index} className="py-2 px-2">
                                <div className="flex items-center gap-2">
                                    <img className="w-10" src={item.image} alt="" />
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </>
                :

                <>
                    <div className="flex justify-center">
                        <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                    </div>
                </>}
        </div>
        }
    </div>
</div>
  );
}

export default SearchBar;