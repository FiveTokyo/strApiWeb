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
import type { ChefListResponseMeta } from './ChefListResponseMeta';
import {
    ChefListResponseMetaFromJSON,
    ChefListResponseMetaFromJSONTyped,
    ChefListResponseMetaToJSON,
} from './ChefListResponseMeta';
import type { UsersPermissionsPermissionListResponseDataInner } from './UsersPermissionsPermissionListResponseDataInner';
import {
    UsersPermissionsPermissionListResponseDataInnerFromJSON,
    UsersPermissionsPermissionListResponseDataInnerFromJSONTyped,
    UsersPermissionsPermissionListResponseDataInnerToJSON,
} from './UsersPermissionsPermissionListResponseDataInner';

/**
 * 
 * @export
 * @interface UsersPermissionsPermissionListResponse
 */
export interface UsersPermissionsPermissionListResponse {
    /**
     * 
     * @type {Array<UsersPermissionsPermissionListResponseDataInner>}
     * @memberof UsersPermissionsPermissionListResponse
     */
    data?: Array<UsersPermissionsPermissionListResponseDataInner>;
    /**
     * 
     * @type {ChefListResponseMeta}
     * @memberof UsersPermissionsPermissionListResponse
     */
    meta?: ChefListResponseMeta;
}

/**
 * Check if a given object implements the UsersPermissionsPermissionListResponse interface.
 */
export function instanceOfUsersPermissionsPermissionListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsPermissionListResponseFromJSON(json: any): UsersPermissionsPermissionListResponse {
    return UsersPermissionsPermissionListResponseFromJSONTyped(json, false);
}

export function UsersPermissionsPermissionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsPermissionListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(UsersPermissionsPermissionListResponseDataInnerFromJSON)),
        'meta': !exists(json, 'meta') ? undefined : ChefListResponseMetaFromJSON(json['meta']),
    };
}

export function UsersPermissionsPermissionListResponseToJSON(value?: UsersPermissionsPermissionListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(UsersPermissionsPermissionListResponseDataInnerToJSON)),
        'meta': ChefListResponseMetaToJSON(value.meta),
    };
}
