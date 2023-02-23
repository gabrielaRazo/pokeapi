import axios from "axios";

const endpoint = "";

export function testEventCall() {
    return axios({
        method: "get",
        url: endpoint,
        headers: { "Content-Type": "application/json", Authorization: null },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response.data;
        });
}
