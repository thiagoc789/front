import http from "../http-common";

class UsuarioDataService {

  create(data) {
    return http.post("/dinero", data);
  }
}

export default new UsuarioDataService();