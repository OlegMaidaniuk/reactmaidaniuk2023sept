import {spaceXAPISevice} from "./spaceXAPISevice";
import {urls} from "../constants/urls";

const launchService ={
    getAll:()=>spaceXAPISevice.get(urls.launches)
}

export {
    launchService
}