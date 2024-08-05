import PrimaryButton from "@/components/common/PrimaryButton";
import React from "react";
import { BiPlus } from "react-icons/bi";

const BoardLists = () => {
  return (
    <>
      <div>
        {/* board name */}
        <h4 className="py-4">test</h4>
        <div>
          <PrimaryButton className="flex items-center gap-1 text-sm">
            <BiPlus />
            Add a list
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default BoardLists;
