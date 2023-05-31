import axiosClient from "../../helpers/axiosClient";

export const getToken = async () => {

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('scope', 'ADOAPIs');

    const headers = {
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
            "Authorization": "Basic NjhmMjMwOTdiOWZjNDJiNzgxZGQ2NDQ5OWE0YTYwOWM6NDY2MTkyMDEtMmY5Yi00NDRhLWEwM2EtOGUxZGNiMjI1MzBh",
        }
    };

    try {
        const { data } = await axiosClient.post("/1.0.0/usuarios/1.0.0/invitado", params, headers);

        if(data?.access_token) {
            return data?.access_token
        }

    } catch (error) {
        console.log("[getToken] ", error)
    }
};

const getTerminals = callback => async (dispatch) => {
    try {

        const token = await getToken();

        if(!token) return

        const { data } = await axiosClient.get("/2.0.0/terminales?filtro=destinos&idPoblacion=53", {
            headers: { "Authorization": `Bearer ${token}`}
        });

        if(data?.contenido) callback(data?.contenido)
        else callback(false)

    } catch (error) {
        callback(false)
        console.log("[getTerminals] ", error)
    }
};

const getPassengerType = callback => async (dispatch) => {
    try {

        const token = await getToken();

        if(!token) return

        const { data } = await axiosClient.get("/1.0.0/tipoPasajero", {
            headers: { "Authorization": `Bearer ${token}`}
        });

        console.log(data);

        // if(data?.contenido) callback(data?.contenido)
        // else callback(false)

    } catch (error) {
        callback(false)
        console.log("[getPassenferType] ", error)
    }
};

const SearchBarServices = {
    getTerminals,
    getPassengerType,
};

export default SearchBarServices;