const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const imageController = require("../controllers/imageController");

// Definisikan rute dan hubungkan ke controllerrrrrrssdd
router.post("/upload", upload.single("image"), imageController.uploadImage);
router.get("/images", imageController.getAllImages);
router.get("/images/:id", imageController.getImageDetails);
router.delete("/images/:id", imageController.deleteImage);
router.put("/images/:id", imageController.updateImage);

module.exports = router;
