import axios from "axios";
const baseurl = import.meta.env.VITE_BASE_URL;
const link = `${baseurl}/?page=1`
const sidebarlink = `${baseurl}/sidebar`;
let loadhead

const homeLoader = async () => {
    if (!loadhead){
        let head = [];
        try {
            const base_response = await axios.get(link);
            head.push(base_response.data);
            const sidebar_response = await axios.get(sidebarlink);
            head.push(sidebar_response.data);

        } catch (error) {
            new Error("Error fetching data:", error);
        }
        console.log(link)
        loadhead = head
        return head;
    }
    else{
        return loadhead
    }
};

export default homeLoader;