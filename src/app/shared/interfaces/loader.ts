import { Observable } from "rxjs";

export interface Loader {
    isLoading$: Observable<boolean>;
    start(): void;
    finish(): void; 
}
