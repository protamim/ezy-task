import Link from "next/link";
import { FaPlus, FaRegQuestionCircle, FaRegUserCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";

const NavigationBar = () => {
  return (
    <>
      <nav className="border-b border-b-gray-400">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between gap-8 h-min py-4">
            {/* logo */}
            <div className="flex items-center gap-8">
              <Link href="/">
                <h5 className="text-xl font-bold text-black">Ezy Task</h5>
              </Link>

              <ul className="flex items-center gap-5">
                <li className="flex items-center gap-2  py-1 px-3 rounded-md ezy-transition hover:bg-lime-300 hover:cursor-pointer">
                  Workspaces <IoIosArrowDown />
                </li>
                <li className="py-1 px-3 rounded-md bg-lime-300 text-2xl text-black ezy-transition hover:cursor-pointer hover:bg-lime-400">
                  <GoPlus />
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <span
                title="notifications"
                className="text-xl p-2 ezy-transition rounded-full hover:cursor-pointer hover:bg-lime-300"
              >
                <IoIosNotifications />
              </span>
              <span
                title="information"
                className="text-xl p-2 ezy-transition rounded-full hover:cursor-pointer hover:bg-lime-300"
              >
                <FaRegQuestionCircle />
              </span>
              <span
                title="account"
                className="text-xl p-2 ezy-transition rounded-full hover:cursor-pointer hover:bg-lime-300"
              >
                <FaRegUserCircle />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
