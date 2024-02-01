import axios from "axios";
const baseurl = import.meta.env.VITE_BASE_URL;
const main_link = `${baseurl}/?page=${1}`
const sidebar_link = `${baseurl}/sidebar`;
const cat_link = `${baseurl}/categories`
const loader = async()=>{
    let header = []
    try{
        const header_response = await axios.get(baseurl)
        header.push(header_response.data)

        const main_response = await axios.get(main_link)
        header.push(main_response.data)

        const sidebar_response = await axios.get(sidebar_link)
        header.push(sidebar_response.data)
        
        const cat_response = await axios.get(cat_link)
        header.push(cat_response.data)
    }catch{
        throw Error("Could not load data");
    }
    return header
}
 export default loader
