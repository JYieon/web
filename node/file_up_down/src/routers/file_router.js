const router = require("express").Router()
const ctrl = require("../controller/file_controller")
const multer = require("multer")
// const upload = multer({dest : "upload_file"}) //파일 저장 경로 설정

const stg = multer.diskStorage({
    destination : (req, file, cb) => {
        console.log("req.body : ", req.body)
        console.log("fild : ", file)
        console.log("cb : ", cb)
        cb(null, "upload_file")
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname) 
    }
})
const f_filter = (req, file, cb) => {
    const type = file.mimetype.split("/")
    // console.log("request : ", req)
    if(type[0] == 'image'){
        cb(null, true)
    }else{ 
        req.fileValidation = "이미지만 저장하세요"
        cb(null, false) //img가 아니면 저장안함
    }
}
const upload = multer({storage : stg, fileFilter : f_filter})

router.get("/", ctrl.views.index)
// router.get("/", (req, res) => 
//     res.send("file index"+ctrl.views.num))
router.post("/upload", upload.single("file_name"), ctrl.process.upload) //signle은 하나의 파일을 등록
router.get("/list", ctrl.views.list)
router.get("/download/:fileName", ctrl.views.download)
router.get("/del/:fileName", ctrl.process.del)
router.get("/modify_form/:fileName", ctrl.views.modifyForm)
router.post("/modify", upload.single("newFileName"), ctrl.process.modify)

module.exports = router