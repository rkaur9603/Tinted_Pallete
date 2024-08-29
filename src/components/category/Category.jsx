import { useNavigate } from "react-router-dom";

const category = [
    {
        name: 'Paints',
        image: 'https://illustoon.com/photo/8910.png'
    },
    {
        name: 'Markers',
        image: 'https://png.pngtree.com/png-clipart/20220603/original/pngtree-marker-cartoon-illustration-png-image_7901871.png'
    },
    {
        name: 'Painting Accessories',
        image: 'https://media.istockphoto.com/id/637747594/vector/isolated-artist-palette-with-three-long-different-brushes-inside-on.jpg?s=612x612&w=0&k=20&c=-6WeLlgResuqvqMlQjRmNovXgZVi3iQDzl2-Kmh_3kA='
    },
    {
        name: 'Sheets',
        image: 'https://www.shutterstock.com/image-vector/vector-single-cartoon-pink-diary-260nw-632065124.jpg'
    },
    {
        name: 'Clay materials',
        image: 'https://img.freepik.com/premium-vector/vector-set-clay-kid_60352-260.jpg'
    },
    {
        name: 'Pens',
        image: 'https://www.shutterstock.com/image-vector/vector-cartoon-luxury-black-pen-260nw-620638748.jpg'
    },
]

const Category = () => {
    const navigate= useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    <div className="flex ">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    <div 
                                    onClick={()=> navigate(`/category/${item.name}`)}
                                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default Category; 