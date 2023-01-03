import express from "express"
import { createFilm, updateFilm, deleteFilm, getFilms, getFilm } from "../controllers/Phim.js";

const router = express.Router()

router.post("/createFilm", createFilm);
router.put("/:id", updateFilm);
router.delete("/:id", deleteFilm);
router.get("/", getFilms);
router.get("/:id", getFilm);

export default router