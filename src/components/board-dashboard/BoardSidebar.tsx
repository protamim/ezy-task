"use client";
import { IoIosArrowBack } from "react-icons/io";
import PrimaryButton from "../common/PrimaryButton";
import { MdOutlineLeaderboard, MdOutlineSettings } from "react-icons/md";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import { WORKSPACES } from "@/data/data";
import { usePathname } from "next/navigation";

const BoardSidebar = () => {
  const data = WORKSPACES;
  const currentSlug = usePathname();
  const idFromSlug = currentSlug.split("/")[2];

  console.log(idFromSlug);

  let wsName = "";
  let boards: any[] = [];
  data.forEach((ws) => {
    if (ws.id !== idFromSlug) {
      return;
    }
    wsName = ws.title;
    boards = ws.boards;
  });

  console.log(boards);

  return (
    <div className="w-[240px] bg-slate-100 h-[calc(100vh-69px)] shadow-xl">
      {/* workspace name */}
      <div className="border-b border-b-gray-300 flex items-center justify-between gap-2 py-3 px-2">
        <h5>{wsName}</h5>
        <span>
          <IoIosArrowBack />
        </span>
      </div>
      <div className="mt-4">
        {/* workspace options */}
        <ul className="flex items-start gap-2 flex-col">
          <li className="w-full">
            <Link href="#">
              <PrimaryButton className="text-sm pl-6 text-left flex items-center gap-2">
                <MdOutlineLeaderboard />
                Boards
              </PrimaryButton>
            </Link>
          </li>
          <li className="w-full">
            <Link href="#">
              <PrimaryButton className="text-sm pl-6 text-left flex items-center gap-2">
                <MdOutlineSettings />
                Settings
              </PrimaryButton>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        {/* board title */}
        <div className="flex items-center gap-2 justify-between px-2 mb-2 mt-6">
          <h4 className="text-sm font-normal">Your Boards</h4>
          <span>
            <BiPlus />
          </span>
        </div>
        {/* All boards */}
        <ul>
          {boards.map((b, i) => (
            <li key={i} className="w-full">
              <Link href="#">
                <PrimaryButton className="text-sm pl-6 text-left flex items-center gap-2">
                  {b.name}
                </PrimaryButton>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoardSidebar;
