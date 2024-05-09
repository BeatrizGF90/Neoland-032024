import axios from 'axios';
import { updateToken } from '../utils';

const APIHeaders = {
    Accept: 'application/json',
    "Content-Type": 'application/json',
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${updateToken()}`
}

export const APIUser = axios.create({
    baseURL: `https://node-user-production.up.railway.app/api/v1`,
    headers: APIHeaders,
    timeout: 60000,
})

/** en vuestro caso, si abrís el proyecto de node user en local
 * tendréis que poner de baseURL --> http://localhost:8080
 * seguido de la extensión de vuestra api
 */