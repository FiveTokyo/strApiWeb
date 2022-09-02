/* tslint:disable */
/* eslint-disable */
/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UsersPermissionsUserListResponseDataInnerAttributes } from './UsersPermissionsUserListResponseDataInnerAttributes';
import {
    UsersPermissionsUserListResponseDataInnerAttributesFromJSON,
    UsersPermissionsUserListResponseDataInnerAttributesFromJSONTyped,
    UsersPermissionsUserListResponseDataInnerAttributesToJSON,
} from './UsersPermissionsUserListResponseDataInnerAttributes';

/**
 * 
 * @export
 * @interface UsersPermissionsUserListResponseDataInner
 */
export interface UsersPermissionsUserListResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseDataInner
     */
    id?: string;
    /**
     * 
     * @type {UsersPermissionsUserListResponseDataInnerAttributes}
     * @memberof UsersPermissionsUserListResponseDataInner
     */
    attributes?: UsersPermissionsUserListResponseDataInnerAttributes;
}

/**
 * Check if a given object implements the UsersPermissionsUserListResponseDataInner interface.
 */
export function instanceOfUsersPermissionsUserListResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsUserListResponseDataInnerFromJSON(json: any): UsersPermissionsUserListResponseDataInner {
    return UsersPermissionsUserListResponseDataInnerFromJSONTyped(json, false);
}

export function UsersPermissionsUserListResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsUserListResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : UsersPermissionsUserListResponseDataInnerAttributesFromJSON(json['attributes']),
    };
}

export function UsersPermissionsUserListResponseDataInnerToJSON(value?: UsersPermissionsUserListResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'attributes': UsersPermissionsUserListResponseDataInnerAttributesToJSON(value.attributes),
    };
}
