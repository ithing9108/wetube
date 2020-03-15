import {videos} from "../db"
export const home = (req, res) => {
  res.render("home", {pageTitle: "Home", videos});
}
export const search = (req, res) => {
    const{          
      query: {term:searchingBy}
    } = req;    //const searchingBy = req.query.term;
    res.render("search", {pageTitle: "Search", searchingBy});   //searchingBy:searchingBy
};
// export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"}); 
export const upload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const videoDetail = (req, res) => res.render("video detail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});