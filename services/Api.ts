import axios from "axios";

import { config } from "@/configs/global-config";

// Set Axios base URL
axios.defaults.baseURL = config.base_randomuser_url;

// Set default headers for Axios
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export default {
  get: axios.get,
};
