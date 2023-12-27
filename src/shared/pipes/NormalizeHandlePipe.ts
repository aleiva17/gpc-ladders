
export class NormalizeHandlePipe {
  static transform(handle: string): string {
    return handle
      .replaceAll("_", " ")
      .replaceAll("-", " ");
  }
}