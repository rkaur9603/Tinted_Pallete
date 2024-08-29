import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

// productData 
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
//         image: 'https://thooviarts.com/cdn/shop/files/48_set_copy_1191x1067_2a1656d5-2c47-4ac1-b679-50f744c54da7.jpg?v=1723608660&width=800',
//         title: 'Himi - Gouache Paint Twin Cup Set - 12 G x 48 Colours',
//         desc: 'This set contains upgraded jelly cups in twin cup design. Each cup contains 12g of paint. This set contains 48 colours ',
//         price: 1699,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 3,
//         image: 'https://thooviarts.com/cdn/shop/files/716RAQ26bpL._AC_UF894_1000_QL80_FMwebp.webp?v=1723604899&width=800',
//         title: 'Himi - Gouache Paint Twin Cup Set - 12 G x 36 colours + Himi Little Bird 3 Pcs Mini Brush Set',
//         desc: 'This set contains upgraded jelly cups in twin cup design. Each cup contains 12g of paint. This set contains 36 colours along with Himi Little Bird 3 Pcs Mini Brush Set ',
//         price: 1549,
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
//         id: 5,
//         image: 'https://thooviarts.com/cdn/shop/files/18gouachesetShopifyproduct.png?v=1705567036&width=800',
//         title: 'HIMI-Gouache Paint - 30ml jelly cups x 18 colours set',
//         desc: 'he set consists of 18 vibrant colours and has 30 ml of paint in it. Available in 4 colour cases: Blue case, Green case, Yellow case and Pink case',
//         price: 1199,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 6,
//         image: 'https://thooviarts.com/cdn/shop/files/24gouacheShopify.png?v=1706599542&width=800',
//         title: 'HIMI-Gouache Paint - 30ml jelly cups x 24 colours set',
//         desc: 'The set consists of 24 vibrant colours and has 30 ml of paint in it. Available in 4 colour cases: Blue case, Green case, Pink case and Ice Blue case',
//         price: 1569,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 7,
//         image: 'https://thooviarts.com/cdn/shop/files/56gouacheshopifywhite.png?v=1708409456&width=800',
//         title: 'MIYA - Gouache Paint - 30ml jelly cups x 56 colours set',
//         desc: 'The set consists of 56 vibrant colours. Each jelly cup has 30 ml of gouache paint in it.',
//         price: 3299,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 8,
//         image: 'https://thooviarts.com/cdn/shop/files/56black.jpg?v=1704774131&width=800',
//         title: 'HIMI - Gouache Paint - 30ml jelly cups x 56 colours (42 std + 6 neon + 8 metallic colours) set',
//         desc: 'The set consists of 42 standard colours, 6 neon colours and 8 metallic colours. Each cup contains 30 ml of paint in it.',
//         price: 3299,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 9,
//         image: 'https://thooviarts.com/cdn/shop/files/Gouache12forwebsite_73f3c243-7e46-4059-97f0-f9482b224f61.png?v=1706546963&width=800',
//         title: 'HIMI - Gouache Paint - 12ml tube sets Set of 12 colours',
//         desc: 'The New generation gouache tube set comes with an upgraded packaging. The paints are available in tubes and each tube has 12 ml paint in it. Artists who prefer to use freshly squeezed paint for their artworks will prefer tubes over jelly cups.',
//         price: 499,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 10,
//         image: 'https://thooviarts.com/cdn/shop/files/Gouache18forwebsite_4db9f293-7283-4921-8d86-bff2e860e8b5.png?v=1706546963&width=800',
//         title: 'HIMI - Gouache Paint - 12ml tube set of 18 colours',
//         desc: 'The New generation gouache tube set comes with an upgraded packaging. The paints are available in tubes and each tube has 12 ml paint in it. Artists who prefer to use freshly squeezed paint for their artworks will prefer tubes over jelly cups.',
//         price: 699,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 11,
//         image: 'https://thooviarts.com/cdn/shop/files/24forwebsite_13ceebbd-a25b-4d95-85be-7600c358e056.png?v=1706546963&width=800',
//         title: 'HIMI - Gouache Paint - 12ml tube set of 24 colours',
//         desc: 'The New generation gouache tube set comes with an upgraded packaging. The paints are available in tubes and each tube has 12 ml paint in it. Artists who prefer to use freshly squeezed paint for their artworks will prefer tubes over jelly cups.',
//         price: 849,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 12,
//         image: 'https://thooviarts.com/cdn/shop/files/36forwebsite_9f55a0dc-7108-4a90-8469-7dd80e9ace30.png?v=1706546963&width=800',
//         title: 'HIMI - Gouache Paint - 12ml tube set of 18 colours',
//         desc: 'The New generation gouache tube set comes with an upgraded packaging. The paints are available in tubes and each tube has 12 ml paint in it. Artists who prefer to use freshly squeezed paint for their artworks will prefer tubes over jelly cups.',
//         price: 1129,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 13,
//         image: 'https://thooviarts.com/cdn/shop/files/Acrylic12updated.png?v=1710751931&width=800',
//         title: 'HIMI - Acrylic Paint - 12ml tube set of 12 colours',
//         desc: 'Acrylic paint is a versatile and widely-used medium in the world of art. It consists of pigments suspended in a water-based acrylic polymer emulsion, which dries quickly and forms a durable, flexible, and water-resistant layer. Each tube contains 12 ml of paint in it.',
//         price: 499,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 14,
//         image: 'https://s.alicdn.com/@sc04/kf/H2ca700d8dca249f0972cc5bea4824ec3o.jpg_720x720q50.jpg',
//         title: 'HIMI - Acrylic Paint - 12ml tube set of 18 colours',
//         desc: 'Acrylic paint is a versatile and widely-used medium in the world of art. It consists of pigments suspended in a water-based acrylic polymer emulsion, which dries quickly and forms a durable, flexible, and water-resistant layer. Each tube contains 12 ml of paint in it.',
//         price: 699,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 15,
//         image: 'https://thooviarts.com/cdn/shop/files/IMG_8818.png?v=1710751931&width=800',
//         title: 'HIMI - Acrylic Paint - 12ml tube set of 24 colours',
//         des: 'Acrylic paint is a versatile and widely-used medium in the world of art. It consists of pigments suspended in a water-based acrylic polymer emulsion, which dries quickly and forms a durable, flexible, and water-resistant layer. Each tube contains 12 ml of paint in it.',
//         price: 849,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 16,
//         image: 'https://thooviarts.com/cdn/shop/files/Acrylic36updated1.png?v=1710751931&width=800',
//         title: 'HIMI - Acrylic Paint - 12ml tube set of 36 colours',
//         desc: 'The set consists of 18 beautiful pastel colours. Each jelly cup has 30 ml of gouache paint in it.',
//         price: 1129,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 17,
//         image: 'https://m.media-amazon.com/images/I/61dGfex7yhL._AC_UF1000,1000_QL80_.jpg',
//         title: 'HIMI - Gouache Pastel paints - 30ml jelly cups x 18 colours set',
//         desc: 'Acrylic paint is a versatile and widely-used medium in the world of art. It consists of pigments suspended in a water-based acrylic polymer emulsion, which dries quickly and forms a durable, flexible, and water-resistant layer. Each tube contains 12 ml of paint in it.',
//         price: 1199,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 18,
//         image: 'https://m.media-amazon.com/images/I/71qCFNIXUqL.jpg',
//         title: 'HIMI - Metallic Gouache Paints - 30 ml jelly cups x 18 colours - Yellow Case',
//         desc: 'The set contains 18 metallic colours in 30 ml jelly cups, yellow case.',
//         price: 1429,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 19,
//         image: 'https://global.ohuhu.com/cdn/shop/products/15614538681222.jpg?v=1665983168&width=1100',
//         title: 'Ohuhu 24 Colors Watercolor Paint Set',
//         desc: 'Vivid colors, waterproof, and long-lasting. Art paints use on many surfaces. Non-toxic acrylic painting kits. Nylon brushes included',
//         price: 1500,
//         brand: 'Ohuhu',
//         quantity: 1,
//     },
//     {
//         id: 20,
//         image: 'https://global.ohuhu.com/cdn/shop/products/20190625090018407.jpg?v=1665983184&width=1100',
//         title: 'Ohuhu Oil Paint Set',
//         desc: '24 vibrant oil-based colors. Portable oil painting tubes. Non-toxic oil paiting kits. Great oil painting set for beginners',
//         price: 1300,
//         brand: 'Ohuhu',
//         quantity: 1,
//     },
//     {
//         id: 21,
//         image: 'https://m.media-amazon.com/images/I/717N+-EPQIL._SX522_.jpg',
//         title: 'Touch Twin Head Dual Tip Alcohol based Art Markers Set of 60 Colour Markers',
//         desc: 'Highest quality ink ideal for designers, architects and illustrators. Optimum ink flow and drying rates allow for seamless execution of even the most detailed artwork.. Permanent and quick drying opaque paint. Ink is waterproof, fade proof and acid free.',
//         price: 426,
//         brand: 'Touch Cool',
//         quantity: 1,
//     },
//     {
//         id: 22,
//         image: 'https://m.media-amazon.com/images/I/61htuLhf6PL._AC_UF1000,1000_QL80_.jpg',
//         title: 'Touch Twin Head Dual Tip Alcohol based Art Markers Set of 36 Colour Markers',
//         desc: 'Highest quality ink ideal for designers, architects and illustrators. Optimum ink flow and drying rates allow for seamless execution of even the most detailed artwork.. Permanent and quick drying opaque paint. Ink is waterproof, fade proof and acid free.',
//         price: 549,
//         brand: 'Touch Cool',
//         quantity: 1,
//     },
//     {
//         id: 23,
//         image: 'https://artikate.com/cdn/shop/files/81wl6gwcadl._sl1500_600x.jpg?v=1711175072',
//         title: 'Touch Twin Head Dual Tip Alcohol based Art Markers Set of 48 Colour Markers',
//         desc: 'Highest quality ink ideal for designers, architects and illustrators. Optimum ink flow and drying rates allow for seamless execution of even the most detailed artwork.. Permanent and quick drying opaque paint. Ink is waterproof, fade proof and acid free.',
//         price: 589,
//         brand: 'Touch Cool',
//         quantity: 1,
//     },
//     {
//         id: 24,
//         image: 'https://m.media-amazon.com/images/I/71eV6dccNCL._SX522_.jpg',
//         title: 'Touch Twin Head Dual Tip Alcohol based Art Markers Set of 60 Colour Markers',
//         desc: 'Highest quality ink ideal for designers, architects and illustrators. Optimum ink flow and drying rates allow for seamless execution of even the most detailed artwork.. Permanent and quick drying opaque paint. Ink is waterproof, fade proof and acid free.',
//         price: 774,
//         brand: 'Touch Cool',
//         quantity: 1,
//     },
//     {
//         id: 25,
//         image: 'https://m.media-amazon.com/images/I/71eFusbalwL.jpg',
//         title: 'Acrylic markers Paint Marker Pens, Permanent Paint Art Marker Medium Pen Set of 12',
//         desc: 'The acrylic marker is made of high-quality acrylic material, which is durable and can be used for a long time. Enjoy creating art projects on a variety of surfaces like rocks, stone, metal, pottery, treated smooth wood, plastic, canvas, fabric, paper, card stock, terra-cotta, polymer clay, and more. Our pens are vivid, water-resistant, fade-resistant and quick-drying, the premium ink ensure your beautiful creations get to last for longer.',
//         price: 664,
//         brand: 'Jupai',
//         quantity: 1,
//     },
//     {
//         id: 26,
//         image: 'https://m.media-amazon.com/images/I/51UZ6-U3lRL.jpg',
//         title: 'Acrylic markers Paint Marker Pens, Permanent Paint Art Marker Medium Pen Set of 24',
//         desc: 'The acrylic marker is made of high-quality acrylic material, which is durable and can be used for a long time. Enjoy creating art projects on a variety of surfaces like rocks, stone, metal, pottery, treated smooth wood, plastic, canvas, fabric, paper, card stock, terra-cotta, polymer clay, and more. Our pens are vivid, water-resistant, fade-resistant and quick-drying, the premium ink ensure your beautiful creations get to last for longer.',
//         price: 2250,
//         brand: 'Jupai',
//         quantity: 1,
//     },
//     {
//         id: 27,
//         image: 'https://global.ohuhu.com/cdn/shop/files/60-1_7da8061e-97a7-45ea-bffb-495d312aba09.jpg?v=1685087685&width=1500',
//         title: 'Ohuhu Maui 60 Colors Dual Tips Water Based Art Markers, Brush & Fineliner',
//         desc: 'Vibrant colors with colored code. Smooth, sturdy dual tips. Versatile, multi-functional',
//         price: 1800,
//         brand: 'Ohuhu',
//         quantity: 1,
//     },
//     {
//         id: 28,
//         image: 'https://global.ohuhu.com/cdn/shop/files/ohuhu_markers.jpg?v=1685092660&width=1500',
//         title: 'Ohuhu Maui 100 Colors Dual Tips Water Based Art Markers, Brush & Fineliner',
//         desc: 'Highest quality ink ideal for designers, architects and illustrators. Optimum ink flow and drying rates allow for seamless execution of even the most detailed artwork.. Permanent and quick drying opaque paint. Ink is waterproof, fade proof and acid free.',
//         price: 2600,
//         brand: 'Ohuhu',
//         quantity: 1,
//     },
//     {
//         id: 29,
//         image: 'https://zensangam.com/cdn/shop/products/PolaroidWatercolourImage1.jpg?v=1685794786&width=1478',
//         title: 'Polaroid Watercolour Sheets | Round Corners | 300 GSM',
//         desc: 'Polaroid Size Paper Sketchpad made of 24 Sheets of 300 GSM, Watercolor Sheets made of 100% Cellulose, Cold Pressed paper. This is a A6, A7 Pack of 2 Sizes.',
//         price: 250,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     }, 
//     {
//         id: 30,
//         image: 'https://zensangam.com/cdn/shop/files/PolaroidAcrylicImage1_18cccd2d-ca04-4b06-a107-e54a945f54e1.jpg?v=1685788801&width=1478',
//         title: 'Polaroid Acrylic Sheets | Round Corners | 300 GSM',
//         desc: '300 GSM Cold Pressed, Acrylic Sheets made of Cold Pressed paper with Canvas Texture which is suitable in Particular for Acrylic Paintings. This is a A6, A7 Pack of 2 - 24 Sheets Sizes ',
//         price: 250,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     },
//     {
//         id: 31,
//         image: 'https://zensangam.com/cdn/shop/products/PolaroidGouacheImage1.jpg?v=1685792937&width=1478',
//         title: 'Polaroid Gouache Sheets | Round Corners | 300 GSM',
//         desc: '300 GSM Cold Pressed, Gouache Sheets made of 100% Lignin-Free Cellulose, Cold Pressed paper which is suitable in Particular for Gouache Paintings. This is a A6, A7 Pack of 2 - 24 Sheets Sizes ',
//         price: 250,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     },
//     {
//         id: 32,
//         image: 'https://zensangam.com/cdn/shop/products/Canvaspanel4x4PACK6.jpg?v=1704179526&width=1500',
//         title: '4 x 4 Premium Canvas Board',
//         desc: 'Canvas Panel with a sturdy 3mm MDF Board Backing that is perfect for Acrylic and Oil Paintings. AVAILABLE SIZES - 4x4 inch, 5x5 inch, 6x8 inch, 8x10 inch, 10x12 inch, 12x16 inch and 10 inch Circular',
//         price: 300,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     },
//     {
//         id: 33,
//         image: 'https://images-eu.ssl-images-amazon.com/images/I/61-BIWjqimL._AC_UL600_SR600,600_.jpg',
//         title: 'Watercolour Bookmark Pad - Glued Sketchpad - 300 GSM 60% cotton',
//         desc: 'This is a Glued Sketchpad with 24 Sheets of Bookmark, 300 GSM, Watercolor Paper made of 60% Cotton, Cold Pressed paper which is suitable for fine art techniques such as Watercolors, Gouache, Acrylics, Inks, Tempera and other Wet media. Can be Brush Washed and Scratched for corrections easily. ',
//         price: 160,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     }, 
//     {
//         id: 34,
//         image: 'https://zensangam.com/cdn/shop/products/Acrylic_Pad_Bookmark_1.jpg?v=1647676879&width=1500',
//         title: 'Acrylic Bookmark Pad - Glued Sketchpad - 300 GSM 60% cotton',
//         desc: 'This is a Glued Sketchpad with 24 Sheets of Bookmark, 300 GSM, Watercolor Paper made of 60% Cotton, Cold Pressed paper which is suitable for fine art techniques such as Watercolors, Gouache, Acrylics, Inks, Tempera and other Wet media. Can be Brush Washed and Scratched for corrections easily. ',
//         price: 160,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     },
//     {
//         id: 35,
//         image: 'https://zensangam.com/cdn/shop/products/Gouache_Sketch_pad_Cover_Bookmark_1_IMAGE1.jpg?v=1637835575&width=1200',
//         title: 'Gouache Bookmark Pad - Glued Sketchpad - 300 GSM 60% cotton',
//         desc: 'This is a Glued Sketchpad with 24 Sheets of Bookmark, 300 GSM, Watercolor Paper made of 60% Cotton, Cold Pressed paper which is suitable for fine art techniques such as Watercolors, Gouache, Acrylics, Inks, Tempera and other Wet media. Can be Brush Washed and Scratched for corrections easily. ',
//         price: 160,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     },
//     {
//         id: 36,
//         image: 'https://zensangam.com/cdn/shop/products/CanvasPAD6x6Image1.jpg?v=1683024540&width=5000',
//         title: 'Canvas Pad - 100% Cotton / Premium Canvas Board',
//         desc: '100% Cotton Canvas Pad with backing that is ideal for Acrylics and Oil Paints, Gouache - Premium Finish - 10 Sheets. Durable Surface with Medium Grain texture that is Ideal for heavy media like Acrylics and Poster Colour Paintings. Compact and sturdy to use. AVAILABLE SIZES - 6x6 inch, 6x8 inch, 8x10 inch, 10x12 inch, 12x16 inch.',
//         price: 210,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     },
//     {
//         id: 37,
//         image: 'https://m.media-amazon.com/images/I/815M6utnCVL.jpg',
//         title: 'Brush Set Of 12 Artist Paintbrush Kit For Canvas,Gouache-Supplies For Water,Oil & Acrylic Painting',
//         desc: 'ALL THE PAINT BRUSHES YOU NEED- Whether you are a hobbyist or a professional, this artist paint brush set will help you make gorgeous art! The many shapes and sizes give you plenty of options.',
//         price: 600,
//         brand: 'Benicci',
//         quantity: 1,
//     }, 
//     {
//         id: 38,
//         image: 'https://m.media-amazon.com/images/I/81B-cZ4Ni1L._SX679_.jpg',
//         title: '12 pcs Paint Brush with Wooden Painting Board',
//         desc: 'Wide Range of Paint Brush Set- FunBlast artist brush set of 12 pcs with wooden borad comes with different shapes and sizes for professional art work',
//         price: 370,
//         brand: 'FunBlast',
//         quantity: 1,
//     },
//     {
//         id: 39,
//         image: 'https://m.media-amazon.com/images/I/81VPRpJl63L._AC_UF894,1000_QL80_.jpg',
//         title: '18 Pack Oil Paint Brushes- 15 Sizes Brush 1 Standing Organizer 1 Mixing Knife 1 Watercolor Sponge',
//         desc: 'Contains 15 sizes of paint brushes with all kinds of tip forms. With flat, angular, filbert, round, fan, liner, comb, everything you need, we got it considered. Also you can get a watercolor sponge, a plette knife and nice art brushes case for standing. Our versatile set is a must-have and makes a fantastic surprise for painter lover.',
//         price: 700,
//         brand: 'Mluchee ',
//         quantity: 1,
//     },
//     {
//         id: 40,
//         image: 'https://thooviarts.com/cdn/shop/files/Variantpg1.png?v=1709812980&width=800',
//         title: 'MIYA - Anti-fungal Mildew - Gouache Spray',
//         desc: 'After the jelly cup gouache paint is opened, it can become dry & molds (mildew) can form on the paints. Gouache spray is specifically made to reactivate the gouache paints and it also protects the paints from drying.Gouache spray helps to keep the gouache moisturized and protects from fungus growth.',
//         price: 299,
//         brand: 'Himi Miya- Thoovi Arts',
//         quantity: 1,
//     },
//     {
//         id: 41,
//         image: 'https://m.media-amazon.com/images/I/612tdy9Qd+S.jpg',
//         title: 'DOMS 14 Shades Brush Pen Box Pack',
//         desc: '14 Shades Brush Pen Box Pack. Super Soft Tip With Brilliant Colors. Water Based Ink Which Gives Water Color Effect',
//         price: 200,
//         brand: 'DOMS',
//         quantity: 1,
//     }, 
//     {
//         id: 42,
//         image: 'https://m.media-amazon.com/images/I/91zhq28cjwL._SX522_.jpg',
//         title: 'Sakura Pigma Micron Fine Line pens - Set - A (with 04 nib added) - Pack of 8 assorted nibs in Black colour (003,005,01,02,03, 04, 05 & 08 tip)',
//         desc: 'Sakura Pigma ink is special designed not to bleed through paper and is lightfast, making them perfect for hand-drawn artwork. This set contains 8 pens in the sizes- 003,005,01,02,03, 04, 05 & 08 tip',
//         price: 900,
//         brand: 'Zen Sangam',
//         quantity: 1,
//     },
//     {
//         id: 43,
//         image: 'https://m.media-amazon.com/images/I/81Ln71VhHqS.jpg',
//         title: 'Sakura Pigma Micron - Pigment Fineliner Pens - 01/03/05/08/10/12 - Wallet of 6 - Black Ink',
//         desc: 'Sakura Pigma ink is special designed not to bleed through paper and is lightfast, making them perfect for hand-drawn artwork. This set contains six pens in the sizes; 01 (0.25mm), 03 (0.35mm), 05 (0.45mm), 08 (0.50mm), 10 (0.60mm) and 12 (0.70mm)',
//         price: 750,
//         brand: 'Sakura',
//         quantity: 1,
//     },
//     {
//         id: 44,
//         image: 'https://m.media-amazon.com/images/I/81qFmklUAPL._SL1500_.jpg',
//         title: 'Sakura Pigma Micron 10 Fineliner pens Black Inks(003, 005, 01, 02, 03, 04, 05, 08), Graphic 1 & Brush Pen Set',
//         desc: 'Sakura Pigma ink is special designed not to bleed through paper and is lightfast, making them perfect for hand-drawn artwork. This set contains six pens in the sizes; 01 (0.25mm), 03 (0.35mm), 05 (0.45mm), 08 (0.50mm), 10 (0.60mm) and 12 (0.70mm)',
//         price: 1100,
//         brand: 'Sakura',
//         quantity: 1,
//     },
//     {
//         id: 45,
//         image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/art-set/b/n/e/pastel-brush-pen-14-shades-tip-nib-sketch-pens-set-of-1-original-imagpb5rwdxfyseh.jpeg?q=20&crop=false',
//         title: 'Doms Super Soft Tip Pastel Shades Brush Pen Set | 12 Pastel Shades + 1 Silver Shade + 1 Blender ',
//         desc: 'Super Smooth Tip to Create Thin, Medium & Bold Strokes. The inks are water based and do not dry out easily. Pen-style makes it convenient for students and early learners to go hassel free and not worrying about getting their hands and clothes dirty. Available in 13 Pastel Shades and comes with 1 Colourless Blender Pen to blend 2 or more Shades creating an Ombre Effect. These Brush Pens are Ideal for Illustraions, Doodling, Calligraphy and much more.',
//         price: 200,
//         brand: 'Doms',
//         quantity: 1,
//     }, 
//     {
//         id: 46,
//         image: 'https://m.media-amazon.com/images/I/61TM5hRR1kL._AC_UF894,1000_QL80_.jpg',
//         title: 'Fevicryl Mould It, 50 g, Clay Set for Modelling and Sculpting (Pack of 2)',
//         desc: 'Clay Set for Modelling and Sculpting, Air Dry Clay for Art and Craft, Gift for Artists, Students, Children with Free Key Ring (Pack of 2)',
//         price: 120,
//         brand: 'Fevicryl',
//         quantity: 1,
//     },
//     {
//         id: 47,
//         image: 'https://m.media-amazon.com/images/I/41qrpsCcG6L._SX300_SY300_QL70_FMwebp_.jpg',
//         title: 'Fevicryl Mould It, 900 g, Clay Set',
//         desc: 'Clay Set for Modelling and Sculpting, Air Dry Clay for Art and Craft, Gift for Artists, Students, Children',
//         price: 300,
//         brand: 'Fevicryl',
//         quantity: 1,
//     },
//     {
//         id: 48,
//         image: 'https://m.media-amazon.com/images/I/610HEOVXJ9S._SX679_.jpg',
//         title: 'Pehrovin Ventures Fevicryl Mouldit/Shilpkar Clay Set + Tools',
//         desc: 'Pehrovin Ventures Fevicryl Mouldit/Shilpkar Clay (5 Packets of 50 gm Each) + Dotting Tools/Clay Modelling Tools (Set of 5 Double Ended Tools) for DIY Art and Craft',
//         price: 700,
//         brand: 'Pehrovin Ventures',
//         quantity: 1,
//     }
// ]

const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const {getAllProduct} = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <Layout>
    <div className="py-8">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0 py-5 mx-auto">
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
                                                {title.substring(0, 25)}
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
                                                    Delete To Cart
                                                </button>

                                                : 

                                                <button
                                                    onClick={() => addCart(item)}
                                                    className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
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
        </Layout>
    );
}

export default AllProduct;