import axios from "axios";

/* The `export interface HttpAdapter` in the TypeScript code snippet is defining an interface named `HttpAdapter`. This interface specifies a method `get<T>(url: string): Promise<T>;` that must be implemented by any class that implements the `HttpAdapter` interface. */
export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

/* The code defines two classes, `PokeApiFetchAdapter` and `PokeApiAdapter`, implementing an HTTP adapter interface with methods for fetching data using `fetch` and `axios` respectively. */
export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    console.log('retrieving data with fetch');
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {

  private readonly axios = axios;
  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    console.log('retrieving data with axios');
    return data;
  }

  async post(url: string, payload: any) {
    return;
  }

  async patch(url: string, payload: any) {
    return;
  }

  async delete(url: string, payload: any) {
    return;
  }
}