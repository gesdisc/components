export type User = {
    uid: string;
    first_name: string;
    last_name: string;
};
export interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}
declare class AuthService {
    private authState;
    private listeners;
    private currentTask;
    constructor();
    exchangeCodeForToken(code: string): Promise<void>;
    subscribe(listener: (state: AuthState) => void, bearerToken?: string): () => void;
    private notifyListeners;
    private setState;
    authenticate(): Promise<User | null>;
    private getUserInfo;
    private getLoggedOutState;
    login(): void;
    logout(): void;
    getState(): AuthState;
}
export declare const authService: AuthService;
export {};
