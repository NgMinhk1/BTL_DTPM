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
                <label>M?? H??ng</label>
                <input
                  type="number"
                  placeholder="Nh???p m?? h??ng"
                  onChange={(e) => setMaH(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>M?? Lo???i Phim</label>
                <input
                  type="number"
                  placeholder="Nh???p lo???i phim"
                  onChange={(e) => setMaLP(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>T??n Phim</label>
                <input
                  type="text"
                  placeholder="Nh???p t??n phim"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Th???i l?????ng</label>
                <input
                  type="number"
                  placeholder="Nh???p th???i l?????ng"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Gi???i h???n tu???i</label>
                <input
                  type="number"
                  placeholder="Nh???p gi???i h???n tu???i"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Ng??y c??ng chi???u</label>
                <input
                  type="date"
                  // placeholder="Nh???p ng??y"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Ng??n ng???</label>
                <input
                  type="text"
                  placeholder="Nh???p ng??n ng???"
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Di???n vi??n</label>
                <input
                  type="text"
                  placeholder="Nh???p di???n vi??n"
                  onChange={(e) => setActor(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Qu???c gia</label>
                <input
                  type="text"
                  placeholder="Nh???p qu???c gia"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Nh?? s???n xu???t</label>
                <input
                  type="text"
                  placeholder="Nh???p nh?? s???n xu???t"
                  onChange={(e) => setNSX(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>T??m t???t</label>
                <input
                  type="text"
                  placeholder="Nh???p t??m t???t"
                  onChange={(e) => setTT(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Tr???ng th??i</label>
                <input
                  type="number"
                  placeholder="Nh???p tr???ng th??i"
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
