import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }) => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [list, setList] = useState([]);
    const { data, loading, error } = useFetch(`/${path}`);

    useEffect(() => {
        setList(data);
    }, [data]);

    console.log(list)

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/${path}/${id}`);
            setList(list.filter((item) => item.MaPhim !== id));
            window.location.reload();
        } catch (err) { }
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            // const res = await axios.post(`/ticket/add`, {
            //     Email: 'minh@gmail.com',
            //     NgayGio: '2022-12-30',
            //     Sove: 1,
            //     TongTien: 400,
            //     TrangThai: "Chap nhan",
            //     TTThanhToan: 'chua'
            // })
            const res = await axios.put(`/ticket/2`)
            res && window.location.reload();

            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        {path === 'film' ? (<>
                            <Link to={`/film/${params.row.MaPhim}`} style={{ textDecoration: "none" }}>
                                <div className="viewButton">Update</div>
                            </Link>
                            <div
                                className="deleteButton"
                                onClick={() => handleDelete(params.row.MaPhim)}
                            >
                                Delete
                            </div>
                        </>
                        ) : (
                            <>
                                {params.row.TinhTrang.data[0] === 0 ? "" : (
                                    <div className="viewButton" onClick={handleClick}>Đặt vé</div>
                                )}
                            </>
                        )}
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                {path === 'film' ? "Phim" : "Đặt vé"}
                {
                    path === 'film' ? (
                        <Link to={`/${path}/new`} className="link">
                            Thêm Mới
                        </Link>
                    ) : ""
                }
            </div>
            <DataGrid
                className="datagrid"
                rows={list}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row) => path === 'film' ? row.MaPhim : row.MaVe}
            />
        </div>
    );
};

export default Datatable;
