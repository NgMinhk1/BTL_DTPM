import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewHotel = () => {
  const [info, setInfo] = useState([]);
  const [file, setFile] = useState("");
  const [maH, setMaH] = useState("");
  const [maLP, setMaLP] = useState();
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [age, setAge] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [actor, setActor] = useState("");
  const [country, setCountry] = useState("");
  const [nsx, setNSX] = useState("");
  const [tt, setTT] = useState("");
  const [trangthai, setTrangthai] = useState("");

  const params = window.location.pathname.split('/')[2];

  console.log(params)
  const { data, loading, error } = useFetch(`/film/${params}`);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("/film/getFilm");
  //       setInfo(res.data);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log(data)
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
      const res = await axios.put(`/film/${params}`, {
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
        HinhAnh: url,
      });

      res && window.location.replace('/film');
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>UPDATE FILM</h1>
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

            {
              data.map((m) => (
                <form onSubmit={handleClick}>
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
                      placeholder={m.MaHang}
                      onChange={(e) => setMaH(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Mã Loại Phim</label>
                    <input
                      type="number"
                      placeholder={m.MaLP}
                      onChange={(e) => setMaLP(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Tên Phim</label>
                    <input
                      type="text"
                      placeholder={m.TenPhim}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Thời lượng</label>
                    <input
                      type="number"
                      placeholder={m.ThoiLuong}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Giới hạn tuổi</label>
                    <input
                      type="number"
                      placeholder={m.GioiHanTuoi}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Ngày công chiếu</label>
                    <input
                      type="text"
                      placeholder={m.NgayCongChieu}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Ngôn ngữ</label>
                    <input
                      type="text"
                      placeholder={m.NgonNgu}
                      onChange={(e) => setLanguage(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Diễn viên</label>
                    <input
                      type="text"
                      placeholder={m.DienVien}
                      onChange={(e) => setActor(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Quốc gia</label>
                    <input
                      type="text"
                      placeholder={m.QuocGia}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Nhà sản xuất</label>
                    <input
                      type="text"
                      placeholder={m.NhaSanXuat}
                      onChange={(e) => setNSX(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Tóm tắt</label>
                    <input
                      type="text"
                      placeholder={m.TomTat}
                      onChange={(e) => setTT(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label>Trạng thái</label>
                    <input
                      type="number"
                      placeholder={m.TrangThai.data}
                      onChange={(e) => setTrangthai(e.target.value)}
                    />
                  </div>
                  <button type="submit">Send</button>
                </form>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
