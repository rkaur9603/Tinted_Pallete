import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

// const productData = [
//     {
//         id: 1,
//         image: 'https://thooviarts.com/cdn/shop/files/Resize_4.jpg?v=1723611751&width=600',
//         title: 'Himi - Gouache Paint Twin Cup Set - 12 G x 36 colours ',
//         desc: 'This set contains upgraded jelly cups in twin cup design. Each cup contains 12g of paint. This set contains 36 colours',
//         price: 1299,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 2,
//         image: 'https://thooviarts.com/cdn/shop/files/24gouacheShopify.png?v=1706599542&width=800',
//         title: 'HIMI-Gouache Paint - 30ml jelly cups x 24 colours set',
//         desc: 'The set consists of 24 vibrant colours and has 30 ml of paint in it. Available in 4 colour cases: Blue case, Green case, Pink case and Ice Blue case',
//         price: 1569,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 3,
//         image: 'https://thooviarts.com/cdn/shop/files/56gouacheshopifywhite.png?v=1708409456&width=800',
//         title: 'MIYA - Gouache Paint - 30ml jelly cups x 56 colours set',
//         desc: 'The set consists of 56 vibrant colours. Each jelly cup has 30 ml of gouache paint in it.',
//         price: 3299,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 4,
//         image: 'https://m.media-amazon.com/images/I/819oOnrq7RL.jpg',
//         title: 'HIMI - Twin cup Gouache Paint - 12 g x 112 colours',
//         desc: 'This set contains upgraded jelly cups in twin cup design. Each cup contains 12g of paint.This set contains 112 colours (and also available in 36 and 48 colour shades)',
//         price: 4199,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 1,
//         image: 'https://m.media-amazon.com/images/I/71CvCuRL7oL._AC_UF894,1000_QL80_.jpg',
//         title: 'Ohuhu 80 Colors Dual Tips Alcohol Art Markers, Fine & Chisel',
//         desc: '80 vibrant colors + 1 colorless blender. Dual tips, fine and chisel ends. Alcohol-based ink, fast drying',
//         price: 4300,
//         brand: 'Ohunu',
//         quantity: 1,
//     },
//     {
//         id: 2,
//         image: 'https://m.media-amazon.com/images/I/81Ln71VhHqS.jpg',
//         title: 'Sakura Pigma Micron - Pigment Fineliner Pens - 01/03/05/08/10/12 - Wallet of 6 - Black Ink',
//         desc: 'Sakura Pigma ink is special designed not to bleed through paper and is lightfast, making them perfect for hand-drawn artwork. This set contains six pens in the sizes; 01 (0.25mm), 03 (0.35mm), 05 (0.45mm), 08 (0.50mm), 10 (0.60mm) and 12 (0.70mm)',
//         price: 750,
//         brand: 'Sakura',
//         quantity: 1,
//     },
//     {
//         id: 3,
//         image: 'https://zensangam.com/cdn/shop/products/PolaroidGouacheImage1.jpg?v=1685792937&width=1478',
//         title: 'Polaroid Gouache Sheets | Round Corners | 300 GSM',
//         desc: '300 GSM Cold Pressed, Gouache Sheets made of 100% Lignin-Free Cellulose, Cold Pressed paper which is suitable in Particular for Gouache Paintings. This is a A6, A7 Pack of 2 - 24 Sheets Sizes ',
//         price: 250,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     },
//     {
//         id: 4,
//         image: 'https://zensangam.com/cdn/shop/products/Canvaspanel4x4PACK6.jpg?v=1704179526&width=1500',
//         title: '4 x 4 Premium Canvas Board',
//         desc: 'Canvas Panel with a sturdy 3mm MDF Board Backing that is perfect for Acrylic and Oil Paintings. AVAILABLE SIZES - 4x4 inch, 5x5 inch, 6x8 inch, 8x10 inch, 10x12 inch, 12x16 inch and 10 inch Circular',
//         price: 300,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     }
// ]

const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>
            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.map((item, index) => {
                            const { id, title, price, productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-80  h-96 w-full"
                                            src={productImageUrl}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                Tinted Pallete
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 400)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>
                                            <div
                                                className="flex justify-center ">
                                                {cartItems.some((p)=> p.id === item.id) 
                                                
                                                ?
                                                <button
                                                    onClick={() => deleteCart(item)}
                                                    className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Delete from Cart
                                                </button>

                                                : 

                                                <button
                                                    onClick={() => addCart(item)}
                                                    className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add to Cart
                                                </button>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;
