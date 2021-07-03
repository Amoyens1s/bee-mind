import axios from 'axios'
/**
 * http method module
 * @description Rewrite the axios module to dependency injection mode
 */
class HTTP {
  /**
   * http get method
   * @param url api url
   * @returns Promise<AxiosResponse<any>>
   */
  public get (url: string) {
    return axios.get(url)
  }
}

export const http = new HTTP()
