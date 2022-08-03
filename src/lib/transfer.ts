import { APIConfig, getAPI, postApi } from "./api";
import { TransferIf } from "../models/TransferIf";

export async function transfer(body: any, token : string) : Promise<TransferIf>{
    const config: APIConfig = {
        authorization: `${token}`,
    }

    const {data} = await postApi<TransferIf>("/mutasi/transfer", body, config);
    return data;

}

export async function currency() : Promise<string[]>{
    const config: APIConfig = {
        authorization: "",
    }

    const {data} = await getAPI<string[]>("/mutasi", config);
    return data;
}   