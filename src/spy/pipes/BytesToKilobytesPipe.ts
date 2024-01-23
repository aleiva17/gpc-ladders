
export class BytesToKilobytesPipe {
  static transform(bytes: number): string {
    const kb = (bytes / 1024).toFixed(0);
    return `${kb} KB`;
  }
}