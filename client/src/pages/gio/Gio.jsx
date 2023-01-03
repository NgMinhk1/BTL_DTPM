import "./gio.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Gio = ({ columns }) => {
    const location = useLocation();
    // const path = location.pathname.split("/");
    const [list, setList] = useState([]);
    const { data, loading, error } = useFetch(`/ticket/1`);

    console.log(list)

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        Số lượng
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <DataGrid
                className="datagrid"
                rows={list}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row) => row.MaVe}
            />
        </div>
    );
};

export default Gio;
