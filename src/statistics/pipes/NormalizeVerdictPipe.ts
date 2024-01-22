
export class NormalizeVerdictPipe {
  static transform(verdict: string): string {
    return verdict.replaceAll("_", " ");
  }
}