import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class AxiosClient {
  private axiosClient: AxiosInstance;

  protected createAxiosClient(
    apiConfiguration: Pick<AxiosRequestConfig, 'baseURL' | 'responseType'>,
  ): AxiosInstance {
    return axios.create({
      baseURL: apiConfiguration.baseURL,
      responseType: apiConfiguration.responseType,
    });
  }

  constructor(
    apiConfiguration: Pick<AxiosRequestConfig, 'baseURL' | 'responseType'> = {},
  ) {
    this.axiosClient = this.createAxiosClient(apiConfiguration);
  }

  async get<TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const { data } = await this.axiosClient.get<TResponse>(url, config);

    return data;
  }

  // add other HTTP method like post, patch etc as required
}

export default AxiosClient;
