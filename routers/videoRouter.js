import express from "express";
import routes from "../routes";
// import { editProfile } from "../controllers/userController";
import { deleteVideo, editVideo, getUpload, postaUpload, videoDetail } from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postaUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;