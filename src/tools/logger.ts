export class Logger {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    log(...args: any[]): void {
        const now = new Date();
        const timestamp = `${now.getHours()}:${now.getMinutes()}`;
        console.log(`${timestamp} [${this.name}]`, ...args);
    }
}