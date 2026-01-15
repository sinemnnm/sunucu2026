const express = require("express");
const router = express.Router();
const controller = require("../controllers/siparisController");

router.post("/", controller.ekle);
router.get("/", controller.listele);
router.put("/:id", controller.guncelle);
router.delete("/:id", controller.sil);

module.exports = router;
