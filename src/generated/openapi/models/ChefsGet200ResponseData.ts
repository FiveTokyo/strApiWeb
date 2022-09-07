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
import type { Model1Inner } from './Model1Inner';
import {
    Model1InnerFromJSON,
    Model1InnerFromJSONTyped,
    Model1InnerToJSON,
} from './Model1Inner';

/**
 * 
 * @export
 * @interface ChefsGet200ResponseData
 */
export interface ChefsGet200ResponseData {
    /**
     * 
     * @type {Array<Model1Inner>}
     * @memberof ChefsGet200ResponseData
     */
    items: Array<Model1Inner>;
}

/**
 * Check if a given object implements the ChefsGet200ResponseData interface.
 */
export function instanceOfChefsGet200ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function ChefsGet200ResponseDataFromJSON(json: any): ChefsGet200ResponseData {
    return ChefsGet200ResponseDataFromJSONTyped(json, false);
}

export function ChefsGet200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChefsGet200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(Model1InnerFromJSON)),
    };
}

export function ChefsGet200ResponseDataToJSON(value?: ChefsGet200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(Model1InnerToJSON)),
    };
}

