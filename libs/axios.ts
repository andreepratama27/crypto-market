import { indodaxBaseUrl } from "@/constants/url";
import axiosService from "axios";

const axios = axiosService.create({
	baseURL: indodaxBaseUrl,
});

export default axios;
