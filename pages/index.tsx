import { useEffect } from "react";

import { DataGrid, Modal } from "@/components";
import useLandingPage from "@/module/LandingPage/useLandingPage";
import useLandingPageTable from "@/module/LandingPage/useLandingPageTable";

const Home = () => {
  const { allUsersList } = useLandingPage();
  const { rowList, setRowList, columns, isOpen, setIsOpen } =
    useLandingPageTable();

  useEffect(() => {
    if (allUsersList?.data?.length) {
      setRowList(allUsersList.data);
    }
  }, [allUsersList]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        closed
      </Modal>

      <DataGrid
        loading={false}
        rows={rowList}
        columns={columns}
        className="w-[852px] mt-6"
        // pageSize={2}
      />
    </main>
  );
};

export default Home;
