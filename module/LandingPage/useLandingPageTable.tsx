import { useState, useEffect } from "react";

import { FaRegEdit } from "react-icons/fa";
import { GridColDef } from "@mui/x-data-grid";
import { UsersDataModel } from "@/model/enity/users/users.model";
import Image from "next/image";

const useLandingPageTable = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [rowList, setRowList] = useState<UsersDataModel[]>([]);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "id",
      flex: 0.1,
      renderCell: ({ value }) => <span className="font-medium">{value}</span>,
    },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
      renderCell: ({ value }) => <span className="font-medium">{value}</span>,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
      renderCell: ({ value }) => <span className="font-medium">{value}</span>,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      renderCell: ({ value }) => <span className="font-medium">{value}</span>,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      flex: 1,
      renderCell: ({ value }) => (
        <div className="rounded-full overflow-hidden">
          <Image
            src={value}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
      ),
    },
    {
      field: "edit",
      headerName: "",
      flex: 0.1,
      renderCell: ({ id }) => (
        <div
          className="font-medium cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FaRegEdit />
        </div>
      ),
    },
  ];

  return {
    isOpen,
    columns,
    rowList,
    setIsOpen,
    setRowList,
  };
};

export default useLandingPageTable;
