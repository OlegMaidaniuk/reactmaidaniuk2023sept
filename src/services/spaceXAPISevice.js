import axios from "axios";

import {spaceXBaseUrl} from "../constants/urls";

const spaceXAPISevice = axios.create({baseURL:spaceXBaseUrl})

export {spaceXAPISevice};