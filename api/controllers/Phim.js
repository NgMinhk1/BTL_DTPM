import { db } from "../db/index.js";

export const createFilm = async (req, res) => {
    const q = "Insert into Phim(`MaHang`,`MaLP`,`TenPhim`,`ThoiLuong`,`GioiHanTuoi`,`NgayCongChieu`,`NgonNgu`,`DienVien`,`QuocGia`,`NhaSanXuat`,`TomTat`,`TrangThai`,`HinhAnh`) VALUES(?)";
    const values = [req.body.MaHang, req.body.MaLP, req.body.TenPhim, req.body.ThoiLuong, req.body.GioiHanTuoi, req.body.NgayCongChieu, req.body.NgonNgu,
    req.body.DienVien, req.body.QuocGia, req.body.NhaSanXuat, req.body.TomTat, req.body.TrangThai, req.body.HinhAnh];

    await db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Film has been created");
    })
}

// export const createFilm = async (req, res) => {
//     const q = "Insert into Hang(`TenHang`,`GioiThieu`,`HinhAnh`) VALUES(?)";
//     const values = [req.body.TenHang, req.body.GioiThieu, req.body.HinhAnh];

//     await db.query(q, [values], (err, data) => {
//         if (err) return res.status(500).json(err);
//         return res.status(200).json("Film has been created");
//     })
// }

export const updateFilm = async (req, res) => {
    const q = "SELECT * FROM Phim WHERE MaPhim = ?";

    await db.query(q, [req.params.id], (err, data) => {
        if (err) throw err;
        if (data.length === 0) return res.send("Film not already exist");

        const q = "UPDATE Phim SET MaHang=?,MaLP=?,TenPhim=?,ThoiLuong=?,GioiHanTuoi=?,NgayCongChieu=?,NgonNgu=?,DienVien=?,QuocGia=?,NhaSanXuat=?,TomTat=?,TrangThai=?,HinhAnh=? where MaPhim=?";
        const values = [req.body.MaHang, req.body.MaLP, req.body.TenPhim, req.body.ThoiLuong, req.body.GioiHanTuoi, req.body.NgayCongChieu, req.body.NgonNgu,
        req.body.DienVien, req.body.QuocGia, req.body.NhaSanXuat, req.body.TomTat, req.body.TrangThai, req.body.HinhAnh, req.params.id];

        db.query(q, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Film has been updated");
        });
    })
}

export const deleteFilm = async (req, res) => {
    const q = "SELECT * FROM Phim WHERE MaPhim = ?";

    await db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.send("Film not already exist");

        const q = "DELETE FROM Phim WHERE MaPhim=?";
        db.query(q, [req.params.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Film has been deleted");
        })
    });
}

export const getFilm = async (req, res) => {
    const q = "SELECT * FROM Phim where MaPhim = ?"

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

export const getFilms = async (req, res) => {
    const q = "SELECT * FROM Phim"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}