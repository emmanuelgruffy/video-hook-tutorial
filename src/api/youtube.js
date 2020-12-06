import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyAt-Yh94O4g7_yEFyvqd1PCd-acdNnMqR4",
  },
});
