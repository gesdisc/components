import { Task } from '@lit/task';
import type { StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import { type AuthState } from './auth.service.js';
export declare class AuthController<C> {
    #private;
    task: Task<[], AuthState>;
    private unsubscribe?;
    constructor(host: ReactiveControllerHost & C);
    get state(): AuthState;
    login(): void;
    logout(): void;
    render(renderFunctions: StatusRenderer<AuthState>): unknown;
    disconnectedCallback(): void;
}
