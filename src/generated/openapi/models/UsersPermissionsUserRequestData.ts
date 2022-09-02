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
import type { ChefRequestDataDingniRoomsInner } from './ChefRequestDataDingniRoomsInner';
import {
    ChefRequestDataDingniRoomsInnerFromJSON,
    ChefRequestDataDingniRoomsInnerFromJSONTyped,
    ChefRequestDataDingniRoomsInnerToJSON,
} from './ChefRequestDataDingniRoomsInner';

/**
 * 
 * @export
 * @interface UsersPermissionsUserRequestData
 */
export interface UsersPermissionsUserRequestData {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserRequestData
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserRequestData
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserRequestData
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserRequestData
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserRequestData
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserRequestData
     */
    confirmationToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUserRequestData
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUserRequestData
     */
    blocked?: boolean;
    /**
     * 
     * @type {ChefRequestDataDingniRoomsInner}
     * @memberof UsersPermissionsUserRequestData
     */
    role?: ChefRequestDataDingniRoomsInner;
}

/**
 * Check if a given object implements the UsersPermissionsUserRequestData interface.
 */
export function instanceOfUsersPermissionsUserRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function UsersPermissionsUserRequestDataFromJSON(json: any): UsersPermissionsUserRequestData {
    return UsersPermissionsUserRequestDataFromJSONTyped(json, false);
}

export function UsersPermissionsUserRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsUserRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'email': json['email'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'resetPasswordToken': !exists(json, 'resetPasswordToken') ? undefined : json['resetPasswordToken'],
        'confirmationToken': !exists(json, 'confirmationToken') ? undefined : json['confirmationToken'],
        'confirmed': !exists(json, 'confirmed') ? undefined : json['confirmed'],
        'blocked': !exists(json, 'blocked') ? undefined : json['blocked'],
        'role': !exists(json, 'role') ? undefined : ChefRequestDataDingniRoomsInnerFromJSON(json['role']),
    };
}

export function UsersPermissionsUserRequestDataToJSON(value?: UsersPermissionsUserRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'email': value.email,
        'provider': value.provider,
        'password': value.password,
        'resetPasswordToken': value.resetPasswordToken,
        'confirmationToken': value.confirmationToken,
        'confirmed': value.confirmed,
        'blocked': value.blocked,
        'role': ChefRequestDataDingniRoomsInnerToJSON(value.role),
    };
}
