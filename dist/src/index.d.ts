import { Options, Variables } from './types';
export { ClientError } from './types';
import 'isomorphic-fetch';
export declare function request<T extends any>(url: string, query: string, variables?: Variables): Promise<T>;
export default request;
export declare class GraphQLClient {
    private url;
    private options;
    constructor(url: string, options?: Options);
    request<T extends any>(query: string, variables?: Variables): Promise<T>;
}
