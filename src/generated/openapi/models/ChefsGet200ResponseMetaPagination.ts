/* tslint:disable */
/* eslint-disable */
/**
 * test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChefsGet200ResponseMetaPagination
 */
export interface ChefsGet200ResponseMetaPagination {
    /**
     * 
     * @type {number}
     * @memberof ChefsGet200ResponseMetaPagination
     */
    pageCount: number;
    /**
     * 
     * @type {number}
     * @memberof ChefsGet200ResponseMetaPagination
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ChefsGet200ResponseMetaPagination
     */
    pageSize: number;
    /**
     * 
     * @type {number}
     * @memberof ChefsGet200ResponseMetaPagination
     */
    total: number;
}

/**
 * Check if a given object implements the ChefsGet200ResponseMetaPagination interface.
 */
export function instanceOfChefsGet200ResponseMetaPagination(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pageCount" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "pageSize" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function ChefsGet200ResponseMetaPaginationFromJSON(json: any): ChefsGet200ResponseMetaPagination {
    return ChefsGet200ResponseMetaPaginationFromJSONTyped(json, false);
}

export function ChefsGet200ResponseMetaPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChefsGet200ResponseMetaPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pageCount': json['pageCount'],
        'page': json['page'],
        'pageSize': json['pageSize'],
        'total': json['total'],
    };
}

export function ChefsGet200ResponseMetaPaginationToJSON(value?: ChefsGet200ResponseMetaPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pageCount': value.pageCount,
        'page': value.page,
        'pageSize': value.pageSize,
        'total': value.total,
    };
}

