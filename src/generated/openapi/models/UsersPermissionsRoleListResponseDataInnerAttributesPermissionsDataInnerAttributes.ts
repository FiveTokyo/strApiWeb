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
import type { ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy } from './ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy';
import {
    ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByFromJSON,
    ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByFromJSONTyped,
    ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByToJSON,
} from './ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy';

/**
 * 
 * @export
 * @interface UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes
 */
export interface UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes
     */
    action?: string;
    /**
     * 
     * @type {ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy}
     * @memberof UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes
     */
    role?: ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy}
     * @memberof UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes
     */
    createdBy?: ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy;
    /**
     * 
     * @type {ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy}
     * @memberof UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes
     */
    updatedBy?: ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedBy;
}

/**
 * Check if a given object implements the UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes interface.
 */
export function instanceOfUsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributesFromJSON(json: any): UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes {
    return UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributesFromJSONTyped(json, false);
}

export function UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'role': !exists(json, 'role') ? undefined : ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByFromJSON(json['role']),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByFromJSON(json['createdBy']),
        'updatedBy': !exists(json, 'updatedBy') ? undefined : ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByFromJSON(json['updatedBy']),
    };
}

export function UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributesToJSON(value?: UsersPermissionsRoleListResponseDataInnerAttributesPermissionsDataInnerAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'role': ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByToJSON(value.role),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'createdBy': ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByToJSON(value.createdBy),
        'updatedBy': ChefListResponseDataInnerAttributesDingniRoomsDataInnerAttributesCreatedByToJSON(value.updatedBy),
    };
}
