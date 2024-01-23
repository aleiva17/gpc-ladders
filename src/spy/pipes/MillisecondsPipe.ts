
export class MillisecondsPipe {
  static transform(milliseconds: number): string {
    return `${milliseconds} ms`;
  }
}