
import { getAPI, APIConfig, ResponseIf } from "./api";
import { UserIf } from "../models/UserIf";

export async function login(params: any) : Promise<UserIf>{
    const config : APIConfig = {
        params: params,
        authorization: "",
    }
    const {data} = await getAPI<UserIf>("/authen", config);

    return data;
}
