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
import type { UsersPermissionsPermissionRequestData } from './UsersPermissionsPermissionRequestData';
import {
    UsersPermissionsPermissionRequestDataFromJSON,
    UsersPermissionsPermissionRequestDataFromJSONTyped,
    UsersPermissionsPermissionRequestDataToJSON,
} from './UsersPermissionsPermissionRequestData';

/**
 * 
 * @export
 * @interface UsersPermissionsPermissionRequest
 */
export interface UsersPermissionsPermissionRequest {
    /**
     * 
     * @type {UsersPermissionsPermissionRequestData}
     * @memberof UsersPermissionsPermissionRequest
     */
    data: UsersPermissionsPermissionRequestData;
}

/**
 * Check if a given object implements the UsersPermissionsPermissionRequest interface.
 */
export function instanceOfUsersPermissionsPermissionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function UsersPermissionsPermissionRequestFromJSON(json: any): UsersPermissionsPermissionRequest {
    return UsersPermissionsPermissionRequestFromJSONTyped(json, false);
}

export function UsersPermissionsPermissionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsPermissionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': UsersPermissionsPermissionRequestDataFromJSON(json['data']),
    };
}

export function UsersPermissionsPermissionRequestToJSON(value?: UsersPermissionsPermissionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UsersPermissionsPermissionRequestDataToJSON(value.data),
    };
}
