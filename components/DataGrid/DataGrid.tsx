import { ForwardedRef, forwardRef } from "react";
import cs from "classnames";
import { styled } from "@mui/material/styles";
import { DataGrid, GridAlignment } from "@mui/x-data-grid";

import CustomPagination from "./Pagination";
import { dataGridTypes } from "@/model/components/data-grid-model";

interface IProp {
  className?: string;
  loading: boolean;
}

const CustomDataGrid = forwardRef(
  (props: dataGridTypes & IProp, ref: ForwardedRef<HTMLDivElement> | null) => {
    const { rows, columns, pageSize, rowsPerPageOptions, className, loading } =
      props;

    //// disable sort
    const cols = columns.map((cl: any) => ({
      ...cl,
      sortable: false,
      cellClassName:
        "bg-transparent backdrop-blur font-bold border-x border-hoverBg flex justify-center",
      headerClassName:
        "bg-primary text-PureWhite  border-none flex text-center  border-x",
      headerAlign: "center" as GridAlignment,
    }));

    const handlePageChange = () => {
      // Handle page changes here
    };

    return (
      <StyledDataGrid
        ref={ref}
        rowHeight={60}
        {...props}
        columns={cols}
        rows={rows}
        className={cs(className, "font-sans")}
        // disableColumnFilter
        // disableColumnMenu
        // disableColumnSelector
        // disableDensitySelector
        // disableSelectionOnClick
        // disableIgnoreModificationsIfProcessingProps
        // pageSize={pageSize}
        // rowsPerPageOptions={rowsPerPageOptions}
        // components={{
        //   Pagination: CustomPagination,
        //   LoadingOverlay: LinearProgress,
        // }}
        pagination
        pageSize={10}
        rowCount={rows.length}
        onPageChange={handlePageChange}
        autoHeight
        loading={loading}
      />
    );
  }
);

const StyledDataGrid: any = styled(DataGrid)(({ theme }) => ({
  border: 0,
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
}));

CustomDataGrid.displayName = "DataGrid";

export default CustomDataGrid;
