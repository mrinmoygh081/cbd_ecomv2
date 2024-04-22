import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.floor(Date.now() / 10000);
    const uniqueNum = Math.floor(Math.random() * 100);
    cb(null, uniqueSuffix + uniqueNum + "_" + file.originalname);
  },
});

// Specify file format that can be saved
function fileFilter(req, file, cb) {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only pdf, jpeg, jpg and png files are allowed!"), false);
  }
}

// multer configuration
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  // limits: { fileSize: 1000 * 1000 },
});
