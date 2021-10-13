import axios from "axios";

class HttpService {
  public static getHeader(): any {
    return {
      Authorization: "Bearer " + window.localStorage.getItem("x-token"),
    };
  }

  public static get(url: string) {
    const xhr = axios({
      method: "GET",
      url: `/api/${url}`,
      headers: HttpService.getHeader(),
    }).then((res) => res.data);
    return xhr;
  }
}

export default HttpService;
