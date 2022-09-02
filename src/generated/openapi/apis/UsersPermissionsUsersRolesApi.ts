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


import * as runtime from '../runtime';
import type {
  UsersGet201Response,
  UsersGetRequest,
  UsersIdDelete200Response,
  UsersPermissionsPermissionsGet200Response,
  UsersPermissionsRolesGet200Response,
  UsersPermissionsRolesGet200Response1,
  UsersPermissionsRolesGetRequest,
  UsersPermissionsRolesIdGet200Response,
  UsersPermissionsUser,
} from '../models';
import {
    UsersGet201ResponseFromJSON,
    UsersGet201ResponseToJSON,
    UsersGetRequestFromJSON,
    UsersGetRequestToJSON,
    UsersIdDelete200ResponseFromJSON,
    UsersIdDelete200ResponseToJSON,
    UsersPermissionsPermissionsGet200ResponseFromJSON,
    UsersPermissionsPermissionsGet200ResponseToJSON,
    UsersPermissionsRolesGet200ResponseFromJSON,
    UsersPermissionsRolesGet200ResponseToJSON,
    UsersPermissionsRolesGet200Response1FromJSON,
    UsersPermissionsRolesGet200Response1ToJSON,
    UsersPermissionsRolesGetRequestFromJSON,
    UsersPermissionsRolesGetRequestToJSON,
    UsersPermissionsRolesIdGet200ResponseFromJSON,
    UsersPermissionsRolesIdGet200ResponseToJSON,
    UsersPermissionsUserFromJSON,
    UsersPermissionsUserToJSON,
} from '../models';

export interface UsersIdDeleteRequest {
    id: string;
}

export interface UsersIdGetRequest {
    id: string;
}

export interface UsersIdPutRequest {
    id: string;
    usersGetRequest: UsersGetRequest;
}

export interface UsersPermissionsRolesIdGetRequest {
    id: string;
}

export interface UsersPermissionsRolesPostRequest {
    usersPermissionsRolesGetRequest: UsersPermissionsRolesGetRequest;
}

export interface UsersPermissionsRolesRoleDeleteRequest {
    role: string;
}

export interface UsersPermissionsRolesRolePutRequest {
    role: string;
    usersPermissionsRolesGetRequest: UsersPermissionsRolesGetRequest;
}

export interface UsersPostRequest {
    usersGetRequest: UsersGetRequest;
}

/**
 * 
 */
export class UsersPermissionsUsersRolesApi extends runtime.BaseAPI {

    /**
     * Get user count
     */
    async usersCountGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get user count
     */
    async usersCountGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.usersCountGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get list of users
     */
    async usersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UsersPermissionsUser>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UsersPermissionsUserFromJSON));
    }

    /**
     * Get list of users
     */
    async usersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UsersPermissionsUser>> {
        const response = await this.usersGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Delete a user
     */
    async usersIdDeleteRaw(requestParameters: UsersIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersIdDelete200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersIdDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete a user
     */
    async usersIdDelete(requestParameters: UsersIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersIdDelete200Response> {
        const response = await this.usersIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a user
     */
    async usersIdGetRaw(requestParameters: UsersIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsUserFromJSON(jsonValue));
    }

    /**
     * Get a user
     */
    async usersIdGet(requestParameters: UsersIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsUser> {
        const response = await this.usersIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user
     */
    async usersIdPutRaw(requestParameters: UsersIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersGet201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdPut.');
        }

        if (requestParameters.usersGetRequest === null || requestParameters.usersGetRequest === undefined) {
            throw new runtime.RequiredError('usersGetRequest','Required parameter requestParameters.usersGetRequest was null or undefined when calling usersIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UsersGetRequestToJSON(requestParameters.usersGetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersGet201ResponseFromJSON(jsonValue));
    }

    /**
     * Update a user
     */
    async usersIdPut(requestParameters: UsersIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersGet201Response> {
        const response = await this.usersIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get authenticated user info
     */
    async usersMeGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsUser>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsUserFromJSON(jsonValue));
    }

    /**
     * Get authenticated user info
     */
    async usersMeGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsUser> {
        const response = await this.usersMeGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get default generated permissions
     */
    async usersPermissionsPermissionsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsPermissionsGet200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users-permissions/permissions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsPermissionsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get default generated permissions
     */
    async usersPermissionsPermissionsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsPermissionsGet200Response> {
        const response = await this.usersPermissionsPermissionsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * List roles
     */
    async usersPermissionsRolesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsRolesGet200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users-permissions/roles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsRolesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * List roles
     */
    async usersPermissionsRolesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsRolesGet200Response> {
        const response = await this.usersPermissionsRolesGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get a role
     */
    async usersPermissionsRolesIdGetRaw(requestParameters: UsersPermissionsRolesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsRolesIdGet200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersPermissionsRolesIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users-permissions/roles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsRolesIdGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get a role
     */
    async usersPermissionsRolesIdGet(requestParameters: UsersPermissionsRolesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsRolesIdGet200Response> {
        const response = await this.usersPermissionsRolesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a role
     */
    async usersPermissionsRolesPostRaw(requestParameters: UsersPermissionsRolesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsRolesGet200Response1>> {
        if (requestParameters.usersPermissionsRolesGetRequest === null || requestParameters.usersPermissionsRolesGetRequest === undefined) {
            throw new runtime.RequiredError('usersPermissionsRolesGetRequest','Required parameter requestParameters.usersPermissionsRolesGetRequest was null or undefined when calling usersPermissionsRolesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users-permissions/roles`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UsersPermissionsRolesGetRequestToJSON(requestParameters.usersPermissionsRolesGetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsRolesGet200Response1FromJSON(jsonValue));
    }

    /**
     * Create a role
     */
    async usersPermissionsRolesPost(requestParameters: UsersPermissionsRolesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsRolesGet200Response1> {
        const response = await this.usersPermissionsRolesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a role
     */
    async usersPermissionsRolesRoleDeleteRaw(requestParameters: UsersPermissionsRolesRoleDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsRolesGet200Response1>> {
        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling usersPermissionsRolesRoleDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users-permissions/roles/{role}`.replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsRolesGet200Response1FromJSON(jsonValue));
    }

    /**
     * Delete a role
     */
    async usersPermissionsRolesRoleDelete(requestParameters: UsersPermissionsRolesRoleDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsRolesGet200Response1> {
        const response = await this.usersPermissionsRolesRoleDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a role
     */
    async usersPermissionsRolesRolePutRaw(requestParameters: UsersPermissionsRolesRolePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsRolesGet200Response1>> {
        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling usersPermissionsRolesRolePut.');
        }

        if (requestParameters.usersPermissionsRolesGetRequest === null || requestParameters.usersPermissionsRolesGetRequest === undefined) {
            throw new runtime.RequiredError('usersPermissionsRolesGetRequest','Required parameter requestParameters.usersPermissionsRolesGetRequest was null or undefined when calling usersPermissionsRolesRolePut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users-permissions/roles/{role}`.replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UsersPermissionsRolesGetRequestToJSON(requestParameters.usersPermissionsRolesGetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsRolesGet200Response1FromJSON(jsonValue));
    }

    /**
     * Update a role
     */
    async usersPermissionsRolesRolePut(requestParameters: UsersPermissionsRolesRolePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsRolesGet200Response1> {
        const response = await this.usersPermissionsRolesRolePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a user
     */
    async usersPostRaw(requestParameters: UsersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersGet201Response>> {
        if (requestParameters.usersGetRequest === null || requestParameters.usersGetRequest === undefined) {
            throw new runtime.RequiredError('usersGetRequest','Required parameter requestParameters.usersGetRequest was null or undefined when calling usersPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UsersGetRequestToJSON(requestParameters.usersGetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersGet201ResponseFromJSON(jsonValue));
    }

    /**
     * Create a user
     */
    async usersPost(requestParameters: UsersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersGet201Response> {
        const response = await this.usersPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}