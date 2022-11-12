import axios from 'axios'
import {base_url} from "./constants";

export default axios.create({
    baseUrl: base_url
})
