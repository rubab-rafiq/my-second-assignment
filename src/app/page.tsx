
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#252B42] w-full text-white">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="w-[187px] h-[58px] p-3 ">  
          <h3 className=" pl-20 font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left">
            BrandName
          </h3>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-5 font-bold text-white pl-10">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/" className="hover:text-gray-400">Product</Link>
          <Link href="/" className="hover:text-gray-400">Pricing</Link>
          <Link href="/" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Buttons */}
        <div className=" flex items-center gap-4 pr-10 mr-12">
          <button className="font-bold text-sm leading-5 hover:text-gray-400">Login</button>
          <button className="bg-[#23A6F0] text-white font-bold rounded-l-[4px] w-28 h-10 mr-10 ">
            JOIN US
          </button>
        </div>
      </nav>

      {/* Text Section */}
      <div className="w-[1046px] h-[1028px] py-[80px] mx-auto flex flex-col justify-center items-center">
        <section className="w-[701px] flex flex-col items-center text-center">
          <h5 className="font-bold text-[16px] leading-6 tracking-[0.1px] my-10 text-[#23A6F0]">Welcome</h5>
          
          <h1 className="text-[58px] font-bold leading-[80px] text-white">
            Selling on the<br/> internet like a pro
          </h1>
          
          <h4 className="text-[20px] font-normal leading-[30px] mt-4">
            We know how large objects will act, but things on a<br/> small scale just do not act that way.
          </h4>
          
          <div className="flex gap-4 mt-6">
            <button className="bg-[#23A6F0] text-white font-bold py-3 px-6 rounded-md">Get Quote Now</button>
            <button className="border border-[#23A6F0] text-[#23A6F0] font-bold py-3 px-6 rounded-md">Learn More</button>
          </div>
        </section>
        <br/>
        {/* Card Section */}
        <section className="w-[1046px] h-[292px] gap-[30px] flex mt-10 pt-10">
          {/* Card 1 */}
          <div className="w-[328px] h-[292px]">
            <div className="w-[328px] h-[292px] gap-[20px] bg-[#FFFFFF] px-[35px] py-[40px]">
              <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] bg-[#FFDCD1]"></div>
              <h3 className="mt-4 font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Training Courses</h3>
              <div className="bg-[#E74040] w-[50px] h-[2px] mt-2 mb-4"></div>
              <p className="w-[222px] leading-[20px] tracking-[0.2px] text-[14px] text-[#737373]">
                The gradual accumulation of information about atomic and small-scale behavior...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[328px] h-[292px]">
            <div className="w-[328px] h-[292px] gap-[20px] bg-[#FFFFFF] px-[35px] py-[40px]">
              <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] bg-[#B9EAA8]"></div>
              <h3 className="mt-4 font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">2,769 Online Courses</h3>
              <div className="bg-[#E74040] w-[50px] h-[2px] mt-2 mb-4"></div>
              <p className="w-[222px] leading-[20px] tracking-[0.2px] text-[14px] text-[#737373]">
                The gradual accumulation of information about atomic and small-scale behavior...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[328px] h-[292px]">
            <div className="w-[328px] h-[292px] gap-[20px] bg-[#23A6F0] px-[35px] py-[40px]">
              <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] bg-[#FFFFFF]"></div>
              <h3 className="mt-4 font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#FFFFFF]">Training Courses</h3>
              <div className="bg-[#FFFFFF] w-[50px] h-[2px] mt-2 mb-4"></div>
              <p className="w-[222px] leading-[20px] tracking-[0.2px] text-[14px] text-[#FFFFFF]">
                The gradual accumulation of information about atomic and small-scale behavior...
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
