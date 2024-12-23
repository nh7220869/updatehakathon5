import Image from "next/image";
import Link from "next/link";

function Details() {
    return ( 
        <div className="grid grid-cols-2 gap-8 p-6 rounded-lg">
  <div className="flex justify-center items-center">
    <Image src="/shoe3.png" alt="Nike Air Force 1 Image" width={400} height={400} className="rounded-lg shadow-lg" />
  </div>
  <div className="flex flex-col justify-center space-y-6">
    <h1 className="font-bold text-4xl text-gray-800">
      Nike Air Force 1 PLT.AF.ORM
    </h1>
    <p className="text-gray-600">
      Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
    </p>
    <p className="text-xl font-semibold text-gray-800">₹ 8,695.00</p>
    
    <button className=" text-white bg-black p-4 w-[174.42px] rounded-2xl font-medium shadow-md ">
    <Link href={'/Order'}> Add To Cart</Link>
    </button>
  </div>
</div>

     );
}

export default Details;