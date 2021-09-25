import http from "../http-common";

class TutorialDataService {

  create(data) {
    return http.post("/usuario", data);
  }
}

export default new TutorialDataService();
