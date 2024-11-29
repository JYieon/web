const router = require("express").Router()
const ctrl = require("../../controller/board/board_ctrl")
const multer = require("multer")

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

router.get("/list", ctrl.list)
router.get("/write_form", ctrl.writeForm)
router.post("/write", upload.single("file_name"), ctrl.write)
router.get("/index", ctrl.index)
router.get("/file_down", ctrl.fileDownload)
router.get("/del", ctrl.del)
router.get("/modify_form", ctrl.modifyForm)
router.post("/modify", upload.single("file_name"), ctrl.modify)

module.exports = router