"use client";
import React, { ReactNode, useContext } from "react";
import PrimaryButton from "../common/PrimaryButton";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Workspace } from "@/types/t";
import { AppContext } from "@/provider/AppContext";
import Link from "next/link";
import { useParams } from "next/navigation";

interface WorkspaceHomeProps {
  workspace: Workspace;
}

const WorkspaceHome = ({ workspace }: WorkspaceHomeProps) => {
  let lists: ReactNode[] = [];
  workspace.boards.forEach((board) => {
    lists.push(<BoardLists name={board.name} ws={workspace} id={workspace.id} />);
  });

  return (
    <div className="w-full px-5">
      {/* workspace profile */}
      <div className=" border-b border-b-gray-400 pb-10">
        <div className="flex items-center gap-3">
          <h4 className="text-lg">{workspace.title}</h4>
          <PrimaryButton className="max-w-max p-1">
            <MdOutlineModeEdit />
          </PrimaryButton>
        </div>
        {/* workspace description */}
        <div>
          <p className="text-xs">{workspace.description}</p>
        </div>
      </div>
      {/* board lists */}
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-base font-bold">
            <FaUser />
          </span>
          <h4 className="text-base font-medium text-black">Your Boards</h4>
        </div>
        {/* lists */}
        <ul className="flex items-center gap-6">
          {lists}
          <li className="w-[190px] h-[80px] p-2 bg-slate-100 text-sm flex items-center justify-center text-gray-700 rounded-sm ezy-transition hover:cursor-pointer hover:bg-slate-200">
            Create New Board
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkspaceHome;

const BoardLists = ({
  name,
  ws,
  id,
}: {
  name: string;
  ws: Workspace;
  id: string;
}) => {
  let { wsName } = useContext(AppContext);
  const param = useParams();

  return (
    <Link href={`b/${id}/${param.ws}`}>
      <li
        onClick={() => (wsName = ws.title)}
        className="relative z-10 w-[190px] h-[80px] p-2 bg-slate-100 text-sm flex items-center justify-center rounded-sm text-white before:absolute before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] before:top-0 before:left-0 before:-z-[1] ezy-transition hover:cursor-pointer hover:bg-slate-400"
      >
        {name}
      </li>
    </Link>
  );
};
