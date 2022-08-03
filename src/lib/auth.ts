
import { getAPI, APIConfig, postApi } from "./api";
import { UserIf } from "../models/UserIf";

export async function login(params: any) : Promise<UserIf>{
    const config : APIConfig = {
        params: params,
        authorization: "",
    }
    const {data} = await getAPI<UserIf>("/authen", config);

    return data;
}

export async function signup(body: any) : Promise<UserIf>{
    const config : APIConfig = {
        authorization: "",
    }

    const {data} = await postApi<UserIf>("/authen", body, config);
    
    return data;
}