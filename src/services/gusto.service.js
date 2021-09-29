import http from "../http-common";

class UsuarioDataService {

  create(data) {
    return http.post("/gusto", data);
  }
}

export default new UsuarioDataService();