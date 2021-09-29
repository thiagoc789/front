import http from "../http-common";

class UsuarioDataService {

  create(data) {
    return http.post("/tiempo", data);
  }
}

export default new UsuarioDataService();