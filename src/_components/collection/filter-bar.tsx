"use client";

import { Button, Select } from "@headlessui/react";
import { useState } from "react";
import { VscListFilter } from "react-icons/vsc";
export const FilterBar = () => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <div className="flex justify-end sticky top-0 bg-slate-100 z-10 p-1 -mx-2">
      <Button>
        <VscListFilter size={20} onClick={() => setShowSelect(true)} />
      </Button>
      {showSelect && (
        <Select onChange={() => setShowSelect(false)}>
          <option value="date-added-forward">Date Added: Newest-Oldest</option>
          <option value="date-added-forward">Date Added: Oldest-Newest</option>
          <option value="alphabet-forward">Alphabetically A-Z</option>
          <option value="alphabet-backward">Alphabetically Z-A</option>
        </Select>
      )}
    </div>
  );
};
