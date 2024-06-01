import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        export interface User {
            id?: string;
            name?: string;
            role?: string;
            mail?: string;
            city?: string;
        }
    }
}
declare namespace Paths {
    namespace ApiUsers {
        namespace Post {
            export interface RequestBody {
                id?: string;
                name?: string;
                role?: string;
                mail?: string;
                city?: string;
            }
            namespace Responses {
                export interface $201 {
                    id?: string;
                    name?: string;
                    role?: string;
                    mail?: string;
                    city?: string;
                }
                export interface $400 {
                }
                export interface $500 {
                }
            }
        }
    }
    namespace ApiUsers$Id {
        namespace Get {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export interface $200 {
                    id?: string;
                    name?: string;
                    role?: string;
                    mail?: string;
                    city?: string;
                }
                export interface $404 {
                }
                export interface $500 {
                }
            }
        }
    }
}

export interface OperationMethods {
}

export interface PathsDictionary {
  ['/api/users/{id}']: {
  }
  ['/api/users']: {
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

