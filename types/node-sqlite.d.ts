// Minimal typings for Node's built-in SQLite (the installed @types/node predates it).
declare module "node:sqlite" {
  export type SQLValue = string | number | bigint | null | Uint8Array;
  export class StatementSync {
    all(...params: SQLValue[]): Record<string, SQLValue>[];
    get(...params: SQLValue[]): Record<string, SQLValue> | undefined;
    run(...params: SQLValue[]): { changes: number | bigint };
  }
  export class DatabaseSync {
    constructor(path: string);
    exec(sql: string): void;
    prepare(sql: string): StatementSync;
    close(): void;
  }
}
