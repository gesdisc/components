import { ApolloClient } from '@apollo/client/core';
export declare function purgeGraphQLCache(): Promise<void>;
export declare function getGraphQLClient(clientKey?: string): Promise<ApolloClient<any>>;
