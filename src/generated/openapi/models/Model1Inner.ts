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
import type { Model1InnerAttributes } from './Model1InnerAttributes';
import {
    Model1InnerAttributesFromJSON,
    Model1InnerAttributesFromJSONTyped,
    Model1InnerAttributesToJSON,
} from './Model1InnerAttributes';

/**
 * 
 * @export
 * @interface Model1Inner
 */
export interface Model1Inner {
    /**
     * 
     * @type {Model1InnerAttributes}
     * @memberof Model1Inner
     */
    attributes: Model1InnerAttributes;
    /**
     * 
     * @type {string}
     * @memberof Model1Inner
     */
    id: string;
}

/**
 * Check if a given object implements the Model1Inner interface.
 */
export function instanceOfModel1Inner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function Model1InnerFromJSON(json: any): Model1Inner {
    return Model1InnerFromJSONTyped(json, false);
}

export function Model1InnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Model1Inner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': Model1InnerAttributesFromJSON(json['attributes']),
        'id': json['id'],
    };
}

export function Model1InnerToJSON(value?: Model1Inner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': Model1InnerAttributesToJSON(value.attributes),
        'id': value.id,
    };
}

