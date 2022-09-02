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
import type { UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributes } from './UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributes';
import {
    UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributesFromJSON,
    UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributesFromJSONTyped,
    UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributesToJSON,
} from './UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributes';

/**
 * 
 * @export
 * @interface UsersPermissionsPermissionListResponseDataInnerAttributesRoleData
 */
export interface UsersPermissionsPermissionListResponseDataInnerAttributesRoleData {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseDataInnerAttributesRoleData
     */
    id?: string;
    /**
     * 
     * @type {UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributes}
     * @memberof UsersPermissionsPermissionListResponseDataInnerAttributesRoleData
     */
    attributes?: UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributes;
}

/**
 * Check if a given object implements the UsersPermissionsPermissionListResponseDataInnerAttributesRoleData interface.
 */
export function instanceOfUsersPermissionsPermissionListResponseDataInnerAttributesRoleData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataFromJSON(json: any): UsersPermissionsPermissionListResponseDataInnerAttributesRoleData {
    return UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataFromJSONTyped(json, false);
}

export function UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsPermissionListResponseDataInnerAttributesRoleData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributesFromJSON(json['attributes']),
    };
}

export function UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataToJSON(value?: UsersPermissionsPermissionListResponseDataInnerAttributesRoleData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'attributes': UsersPermissionsPermissionListResponseDataInnerAttributesRoleDataAttributesToJSON(value.attributes),
    };
}
