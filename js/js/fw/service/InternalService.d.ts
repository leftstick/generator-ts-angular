declare class InternalService {
    constructor();
    stopEvent(e: Event): void;
    getApi(path: string): string;
}
export = InternalService;
