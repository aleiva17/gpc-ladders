
export class NormalizeProgrammingLanguagePipe {
  static transform(language: string): string {
    if (language.startsWith("GNU G++") || language.startsWith("Clang") || language.includes("C++")) return "C++";
    if (language.startsWith("Python 3") || language.startsWith("PyPy 3")) return "Python 3";
    if (language.startsWith("GNU GCC")) return "C";
    if (language.startsWith("Python 2") || language.startsWith("PyPy 2")) return "Python 2";
    if (language.startsWith("JavaScript") || language.startsWith("Node.js")) return "JavaScript";
    if (language.startsWith("Microsoft Q#")) return "Q#";
    if (language.startsWith("Free P") || language.startsWith("Pascal")) return "Pascal";
    if (language.startsWith("OpenCobol")) return "Cobol";
    if (language.startsWith("Ada GNAT 4")) return "GNAT 4";
    if (language === "Mysterious Language" || language === "Secret 2021") return language;
    return language.split(" ").at(0) ?? "undefined";
  }
}