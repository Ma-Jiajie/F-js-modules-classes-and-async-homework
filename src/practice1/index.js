import * as constant from "./constant";
import getURL from "./utils";

const url = getURL(constant.ADDRESS, constant.PORT, constant.PATH);
const region = constant.REGION;

export { url, region };
