import { Dashboard } from "@/components/ws-Dashboard";
import React from "react";

const WorkspaceDetail = () => {
  const isLoggedIn = true;
  let homepage = (
    <main className="px-5 mb-5 mt-14 flex flex-col">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h4 className="text-3xl">
          Welcome to the Homepage <br /> that is under construction!
        </h4>
        <p>We&apos;re working on it and really sorry for it.</p>
        <p>But you can manage your daily tasks easily here</p>
      </div>
    </main>
  );

  return <>{isLoggedIn ? <Dashboard /> : homepage}</>;
};

export default WorkspaceDetail;
