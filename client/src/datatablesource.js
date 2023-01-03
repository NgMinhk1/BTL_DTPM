export const ticketColumns = [
  {
    field: "_id", headerName: "ID", width: 70, renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.MaVe}
        </div>
      );
    },
  },
  {
    field: "TenVe",
    headerName: "Tên vé",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.TenVe}
        </div>
      );
    },
  },
  {
    field: "dongia",
    headerName: "Đơn giá",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.DonGia}
        </div>
      );
    },
  },

  {
    field: "vitriday",
    headerName: "Vị trí dãy",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.Vitriday}
        </div>
      );
    },
  },
  {
    field: "vitricot",
    headerName: "Vị trí cột",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.Vitricot}
        </div>
      );
    },
  },
  {
    field: "tinhtrang",
    headerName: "Tình trạng",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.TinhTrang.data[0] === 0 ? "Hết vé" : "Còn vé"}
        </div>
      );
    },
  },
];

export const filmColumns = [
  {
    field: "_id", headerName: "ID", width: 50, renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.MaPhim}
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Tên Phim",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.TenPhim}
        </div>
      );
    },
  },
  {
    field: "time",
    headerName: "Thời lượng",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.ThoiLuong}
        </div>
      );
    },
  },
  {
    field: "age",
    headerName: "Giới hạn tuổi",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.GioiHanTuoi}
        </div>
      );
    },
  },
  {
    field: "day",
    headerName: "Ngày công chiếu",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.NgayCongChieu}
        </div>
      );
    },
  },
  {
    field: "languages",
    headerName: "Ngôn ngữ",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.NgonNgu}
        </div>
      );
    },
  },
  {
    field: "actor",
    headerName: "Diễn viên",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.DienVien}
        </div>
      );
    },
  },
  {
    field: "country",
    headerName: "Quốc gia",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.QuocGia}
        </div>
      );
    },
  },
  {
    field: "sx",
    headerName: "Nhà sản xuất",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.NhaSanXuat}
        </div>
      );
    },
  },
  {
    field: "tt",
    headerName: "Trạng thái",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.TrangThai === 0 ? "Ngừng Chiếu" : "Còn Chiếu"}
        </div>
      );
    },
  },
  {
    field: "image",
    headerName: "Hình ảnh",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.HinhAnh || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.Ten}
        </div>
      );
    },
  },
];
