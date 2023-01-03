import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

const New = () => {
  const [file, setFile] = useState("");
  const [maH, setMaH] = useState(null);
  const [maLP, setMaLP] = useState(null);
  const [name, setName] = useState("");
  const [time, setTime] = useState(null);
  const [age, setAge] = useState(null);
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [actor, setActor] = useState("");
  const [country, setCountry] = useState("");
  const [nsx, setNSX] = useState("");
  const [tt, setTT] = useState("");
  const [trangthai, setTrangthai] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/lamadev/image/upload",
        data
      );

      const { url } = uploadRes.data;
      await axios.post("/film/createFilm", {
        MaHang: maH,
        MaLP: maLP,
        TenPhim: name,
        ThoiLuong: time,
        GioiHanTuoi: age,
        NgayCongChieu: year,
        NgonNgu: language,
        DienVien: actor,
        QuocGia: country,
        NhaSanXuat: nsx,
        TomTat: tt,
        TrangThai: trangthai,
        HinhAnh: url
      });
      window.location.replace('/film');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Film</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Mã Hãng</label>
                <input
                  type="number"
                  placeholder="Nhập mã hãng"
                  onChange={(e) => setMaH(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Mã Loại Phim</label>
                <input
                  type="number"
                  placeholder="Nhập loại phim"
                  onChange={(e) => setMaLP(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Tên Phim</label>
                <input
                  type="text"
                  placeholder="Nhập tên phim"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Thời lượng</label>
                <input
                  type="number"
                  placeholder="Nhập thời lượng"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Giới hạn tuổi</label>
                <input
                  type="number"
                  placeholder="Nhập giới hạn tuổi"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Ngày công chiếu</label>
                <input
                  type="date"
                  // placeholder="Nhập ngày"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Ngôn ngữ</label>
                <input
                  type="text"
                  placeholder="Nhập ngôn ngữ"
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Diễn viên</label>
                <input
                  type="text"
                  placeholder="Nhập diễn viên"
                  onChange={(e) => setActor(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Quốc gia</label>
                <input
                  type="text"
                  placeholder="Nhập quốc gia"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Nhà sản xuất</label>
                <input
                  type="text"
                  placeholder="Nhập nhà sản xuất"
                  onChange={(e) => setNSX(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Tóm tắt</label>
                <input
                  type="text"
                  placeholder="Nhập tóm tắt"
                  onChange={(e) => setTT(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Trạng thái</label>
                <input
                  type="number"
                  placeholder="Nhập trạng thái"
                  onChange={(e) => setTrangthai(e.target.value)}
                />
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
