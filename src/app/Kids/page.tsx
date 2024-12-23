import Image from "next/image";
import Link from "next/link";


function Kids() {
   
      
       const Product: any[] = [
        {
            id: 38,
            img: "/shoe14.png",
            title: "Nike Air Max SYSTM",
            title2: "Older Kids' Shoes",
            price: "MRP : ₹ 6 495.00"
          },
          {
            id: 39,
            img: "/p13.png",
            title: "Nike Outdoor Play",
            title2: "Older Kids' Oversized Woven Jacket",
            price: "MRP : ₹ 3 895.00"
          },
       
          {
            id: 38,
            img: "/shoe14.png",
            title: "Nike Air Max SYSTM",
            title2: "Older Kids' Shoes",
            price: "MRP : ₹ 6 495.00"
          },
          {
            id: 39,
            img: "/p13.png",
            title: "Nike Outdoor Play",
            title2: "Older Kids' Oversized Woven Jacket",
            price: "MRP : ₹ 3 895.00"
          }
        
      ];
      
    
    return (
        <div className=" py-10">
            
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Kids Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {Product.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                         <div className=" bg-[#F5F5F5] aspect-square group p-0">
                 <Image src={item.img} alt={"shoes"} width={440} height={440}/>
                  </div>
                        <div className=" mx-2 mt-2">
                        
                    <h4 className="font-semibold text-[#9E3500] text-sm">Just In</h4>
                    <Link href={'/details'}>
                  <h1 className="font-semibold text-sm mt-2">{item.title}</h1>
                  <h3 className=" text-sm text-[#757575]">{item.title2}</h3>
                  <h4 className="text-sm text-[#757575]">1 Colour</h4>
                    <h2 className="font-medium text-sm mt-2">MRP : {item.price}</h2>
                </Link>
                </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Kids;