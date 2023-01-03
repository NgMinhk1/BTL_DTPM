import { db } from "../db/index.js";

export const bookTickets = async (req, res) => {
    const q = "INSERT INTO Ve(`MaBuoiChieu`,`MaGhe`,`MaDonDat`,`TenVe`,`TinhTrang`) VALUES(?)";
    const values = [req.body.MaBuoiChieu, req.body.MaGhe, req.body.MaDonDat, req.body.TenVe, req.body.TinhTrang];

    await db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Room has been created");
    })
}

export const getTicket = async (req, res) => {
    const q = "select MaVe, TenVe, DonGia, Vitriday, Vitricot, Ve.TinhTrang from ve join ghe on ve.MaGhe = ghe.MaGhe";

    await db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const add = async (req, res) => {
    const q = "insert into DonDat(`Email`, `NgayGio`,`Sove`, `TongTien`, `TrangThai`, `TThaiTToan`) values (?)";
    const values = [req.body.Email, req.body.NgayGio, req.body.Sove, req.body.TongTien, req.body.TrangThai, req.body.TThaiTToan];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

export const updateVe = async (req, res) => {
    const q = "update Ve set TinhTrang=0 where MaVe=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}