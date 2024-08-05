'use client';
import Link from "next/link";
import { WORKSPACES } from "@/data/data";
import WorkspaceHome from "./WorkspaceHome";
import { ReactNode } from "react";
import { useParams } from "next/navigation";

const Dashboard = () => {
  const param = useParams();

  const data = WORKSPACES;
  const isWorkspaces = data.length > 0;

  let WSdetail: ReactNode = '';
  data.forEach((ws) => {
    let currentWS = ws.title.toLowerCase().replace(/[" "]/g, "-");
    if (currentWS === param.ws) {
        WSdetail = <WorkspaceHome workspace={ws} />
    }
  });

  let notCreate = (
    <div>
      <p>
        It seems like you did not create any workspaces yet.{" "}
        <Link href="#" className="text-blue-700">
          Create a workspace
        </Link>{" "}
      </p>
    </div>
  );

  return <>{isWorkspaces ? WSdetail : notCreate}</>;
};

export default Dashboard;
