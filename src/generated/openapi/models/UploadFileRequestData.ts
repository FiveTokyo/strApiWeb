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
 * @interface UploadFileRequestData
 */
export interface UploadFileRequestData {
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    alternativeText?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    caption?: string;
    /**
     * 
     * @type {number}
     * @memberof UploadFileRequestData
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof UploadFileRequestData
     */
    height?: number;
    /**
     * 
     * @type {any}
     * @memberof UploadFileRequestData
     */
    formats?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    ext?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    mime: string;
    /**
     * 
     * @type {number}
     * @memberof UploadFileRequestData
     */
    size: number;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    previewUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    provider: string;
    /**
     * 
     * @type {any}
     * @memberof UploadFileRequestData
     */
    providerMetadata?: any | null;
    /**
     * 
     * @type {Array<ChefRequestDataDingniRoomsInner>}
     * @memberof UploadFileRequestData
     */
    related?: Array<ChefRequestDataDingniRoomsInner>;
    /**
     * 
     * @type {ChefRequestDataDingniRoomsInner}
     * @memberof UploadFileRequestData
     */
    folder?: ChefRequestDataDingniRoomsInner;
    /**
     * 
     * @type {string}
     * @memberof UploadFileRequestData
     */
    folderPath: string;
}

/**
 * Check if a given object implements the UploadFileRequestData interface.
 */
export function instanceOfUploadFileRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "mime" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "provider" in value;
    isInstance = isInstance && "folderPath" in value;

    return isInstance;
}

export function UploadFileRequestDataFromJSON(json: any): UploadFileRequestData {
    return UploadFileRequestDataFromJSONTyped(json, false);
}

export function UploadFileRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFileRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'alternativeText': !exists(json, 'alternativeText') ? undefined : json['alternativeText'],
        'caption': !exists(json, 'caption') ? undefined : json['caption'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'formats': !exists(json, 'formats') ? undefined : json['formats'],
        'hash': json['hash'],
        'ext': !exists(json, 'ext') ? undefined : json['ext'],
        'mime': json['mime'],
        'size': json['size'],
        'url': json['url'],
        'previewUrl': !exists(json, 'previewUrl') ? undefined : json['previewUrl'],
        'provider': json['provider'],
        'providerMetadata': !exists(json, 'provider_metadata') ? undefined : json['provider_metadata'],
        'related': !exists(json, 'related') ? undefined : ((json['related'] as Array<any>).map(ChefRequestDataDingniRoomsInnerFromJSON)),
        'folder': !exists(json, 'folder') ? undefined : ChefRequestDataDingniRoomsInnerFromJSON(json['folder']),
        'folderPath': json['folderPath'],
    };
}

export function UploadFileRequestDataToJSON(value?: UploadFileRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'alternativeText': value.alternativeText,
        'caption': value.caption,
        'width': value.width,
        'height': value.height,
        'formats': value.formats,
        'hash': value.hash,
        'ext': value.ext,
        'mime': value.mime,
        'size': value.size,
        'url': value.url,
        'previewUrl': value.previewUrl,
        'provider': value.provider,
        'provider_metadata': value.providerMetadata,
        'related': value.related === undefined ? undefined : ((value.related as Array<any>).map(ChefRequestDataDingniRoomsInnerToJSON)),
        'folder': ChefRequestDataDingniRoomsInnerToJSON(value.folder),
        'folderPath': value.folderPath,
    };
}
