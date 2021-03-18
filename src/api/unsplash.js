import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID eXVfCbI52xSXHtHQL33uINLXqR8zbnVm_ZTZthfMozE",
  },
});
