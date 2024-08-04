export interface Storage<T> {
  set(value: T): void;
  get(): T | null;
}

export class SessionStorage<T> implements Storage<T> {
  constructor(private key: string) {}

  set(value: T): void {
    sessionStorage.setItem(this.key, JSON.stringify(value));
  }

  get(): T {
    const result: string | null = sessionStorage.getItem(this.key);
    return result ? JSON.parse(result) : null;
  }
}

export class LocalStorage<T> implements Storage<T> {
  constructor(private key: string) {}

  set(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  get(): T {
    const result: string | null = localStorage.getItem(this.key);
    return result ? JSON.parse(result) : null;
  }
}
