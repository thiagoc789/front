import http from "../http-common";

class UsuarioDataService {

  create(data) {
    return http.post("/evento", data);
  }
}

export default new UsuarioDataService();