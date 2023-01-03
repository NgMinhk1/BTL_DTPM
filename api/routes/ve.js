import express from "express"
import { bookTickets, getTicket, add, updateVe } from "../controllers/ve.js";

const router = express.Router()

router.post("/booktickets", bookTickets);
router.get("/", getTicket);
router.post("/add", add);
router.put("/:id", updateVe);

export default router