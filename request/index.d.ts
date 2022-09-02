import { AxiosRequestConfig } from 'axios';

declare const removeAllPendingRequestsRecord: () => void;

/**
 *
 * @returns [request, token, tokenValidity]
 */
declare function useRequest(): [
    (<T>(url: string, options: AxiosRequestConfig, _ns?: string) => Promise<T>),
    string,
    boolean
];

export { removeAllPendingRequestsRecord, useRequest };
