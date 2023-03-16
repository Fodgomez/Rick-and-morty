const {Router} = require("express")
const {postFav, getFavs} =require("..controllers/favs")
const {getCharById} = require("../controlers/getCharById")
const {getCharDetails} = require("../controlers/getCharDetails")

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetails);

router.post("/favs", postFav);
router.get("/favs", getFavs);
router.delete("/favs/:id", deleteFav);


module.exports = router;