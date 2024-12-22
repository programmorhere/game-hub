import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'd0c5a4ff6bdc47c69388ded3ae05b9ce'
    }
})