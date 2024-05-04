import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { LiaListUlSolid } from "react-icons/lia";

const SideBar = () => {
  return (
    <main className=" md:block md:w-[150px] min-h-screen bg-copy text-white py-5">
      <div className="w-full h-full min-h-screen flex flex-col justify-start items-center gap-6">
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard"
        >
          <FaHome size={25} />
          <p className="hidden md:block">Home</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/plans"
        >
          <LiaListUlSolid size={25} />
          <p className="hidden md:block">Plans</p>
        </Link>
      </div>
    </main>
  );
};

export default SideBar;
