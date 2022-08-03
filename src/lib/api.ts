import axios from 'axios';

export interface ResponseIf<T> {
    status: string;
    data : T;
}

export type APIConfig = {
    params? : any,
    authorization : string,
}

export async function getAPI<T>(
    path: string,
    {params, authorization} : APIConfig
){
    const param = params ?? undefined;
    
    if(authorization){
        console.log("Okay")
        const {data} : {data: ResponseIf<T>} = await axios.get(
            `${process.env.REACT_APP_BACKEND_SERVER}${path}/`, 
            {
                headers:{
                    Authorization : `Bearer ${authorization}`
                },
                params: param,
            }
            );
            
            return data;
        }
        
    const {data} : {data: ResponseIf<T>} = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER}${path}/`, 
        {
            params: param
        }
    );

    return data;
}


export async function postApi<T>(
    path: string,
    body: any,
    {params, authorization} : APIConfig
){
    const param = params ?? undefined;

    if(authorization){
        const {data} : {data: ResponseIf<T>} = await axios.post(
            `${process.env.REACT_APP_BACKEND_SERVER}${path}/`, 
            body,
            {
                headers:{
                    Authorization : `Bearer ${authorization}`
                },
                params: param,
            }
        );

        return data;
    }

    const {data} : {data: ResponseIf<T>} = await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}${path}/`, 
        body,
        {
            params: param,
        }
    );

    return data;
}

export async function patchApi<T>(
    path: string,
    body: any,
    {params, authorization} : APIConfig
){
    const param = params ?? undefined;

    if(authorization){
        const {data} : {data: ResponseIf<T>} = await axios.patch(
            `${process.env.REACT_APP_BACKEND_SERVER}${path}/`, 
            body,
            {
                headers:{
                    Authorization : `Bearer ${authorization}`
                },
                params: param,
            }
        );

        return data;
    }

    const {data} : {data: ResponseIf<T>} = await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}${path}/`, 
        body,
        {
            params: param,
        }
    );

    return data;
}