import axios from "axios"

export default axios.create({
    baseURL: "http://192.168.99.100:8080/wp-json/acf/v3"
})