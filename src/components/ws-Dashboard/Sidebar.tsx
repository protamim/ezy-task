"use client";
import Link from "next/link";
import { BiHome, BiPlus } from "react-icons/bi";
import PrimaryButton from "../common/PrimaryButton";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLeaderboard, MdOutlineSettings } from "react-icons/md";
import { WORKSPACES } from "@/data/data";
import React, { ReactNode, useContext, useState } from "react";
import { Workspace } from "@/types/t";
import { useParams } from "next/navigation";

const Sidebar = () => {
  const data = WORKSPACES;
  const isWorkspaces = data.length > 0;

  let createWorkspace = (
    <div>
      <PrimaryButton className="flex items-center gap-1 text-sm">
        <BiPlus />
        Create a Workspace
      </PrimaryButton>
    </div>
  );

  let wsLists: ReactNode[] = [];
  let boardSlug = "";
  data.forEach((ws) => {
    boardSlug = ws.title.toLowerCase().replace(/[' ']/g, "-");
    wsLists.push(<WorkspaceList workspaces={ws} boardSlug={boardSlug} />);
  });

  return (
    <>
      <div className="p-4 pt-0 min-w-[260px]">
        {/* navigations */}
        <ul className="pb-2 border-b border-b-gray-400">
          <li>
            <Link href="/">
              <PrimaryButton className="flex items-center gap-2 text-sm">
                <BiHome />
                Home
              </PrimaryButton>
            </Link>
          </li>
        </ul>
        {/* workspace */}
        <div className="mt-6">
          <h6 className="text-xs text-gray-400 select-none my-3">workspaces</h6>
          {isWorkspaces ? wsLists : createWorkspace}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

interface WorkspaceListProps {
  workspaces: Workspace;
  boardSlug: string;
}

const WorkspaceList = ({ workspaces, boardSlug }: WorkspaceListProps) => {
  const param = useParams();
  const [ws, setWs] = useState("");
 
  const handleWorkspaceCollapse = (title: string) => {
    if (ws === title) {
      setWs("");
    } else {
      setWs(title);
    }
  };

  return (
    <ul>
      {/* workspace name */}
      <li className="w-full mb-3">
        <PrimaryButton
          onClick={() => handleWorkspaceCollapse(workspaces.title)}
          className="flex items-center justify-between"
        >
          <span>{workspaces.title}</span>
          <IoIosArrowDown className={`ezy-transition ${ws === workspaces.title ? 'rotate-0' : 'rotate-180'}`} />
        </PrimaryButton>
      </li>
      <div className={`w-full mb-6 ${ws === workspaces.title ? "hidden" : "block"}`}>
        {/* workspace options */}
        <ul className="flex items-start gap-2 flex-col">
          <li className="w-full">
            <Link href={`/${boardSlug}`}>
              <PrimaryButton
                className={`text-sm pl-6 text-left flex items-center gap-2 ${
                  boardSlug === param.ws && "bg-lime-300"
                }`}
              >
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
    </ul>
  );
};
