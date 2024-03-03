
export class WebStorageCache {
  private readonly id: string = "web-cache";
  private static instance: WebStorageCache | undefined = undefined;
  private readonly cache: Record<string, { createdAt: number, payload: unknown }>;
  private readonly ttl: number = 8 * 24 * 60 * 60;

  private constructor() {
    const existingData = localStorage.getItem(this.id);
    this.cache = existingData ? JSON.parse(existingData) : {};
  }

  public static getInstance(): WebStorageCache {
    if (this.instance === undefined) {
      this.instance = new WebStorageCache();
    }
    return this.instance;
  }

  public set(key: string, value: unknown): void {
    this.cache[key] = { createdAt: Math.floor(Date.now() / 1000), payload: value };
    localStorage.setItem(this.id, JSON.stringify(this.cache));
  }

  public get(key: string): unknown {
    const storedData = this.cache[key];

    if (storedData === undefined) {
      return undefined;
    }

    const now = Math.floor(Date.now() / 1000);

    if (storedData.createdAt + this.ttl < now) {
      delete this.cache[key];
      localStorage.setItem(this.id, JSON.stringify(this.cache));
      return undefined;
    }

    return storedData.payload;
  }
}