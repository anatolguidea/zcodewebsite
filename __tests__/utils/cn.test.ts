import { cn } from "@/lib/utils";

describe("cn utility", () => {
  it("should merge class names", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("should handle conditional classes", () => {
    expect(cn("class1", false && "class2", "class3")).toBe("class1 class3");
  });

  it("should handle undefined and null", () => {
    expect(cn("class1", undefined, null, "class2")).toBe("class1 class2");
  });

  it("should merge Tailwind classes correctly", () => {
    const result = cn("px-4 py-2", "px-6");
    // tailwind-merge may reorder classes, so check for both classes
    expect(result).toContain("px-6");
    expect(result).toContain("py-2");
    expect(result).not.toContain("px-4");
  });
});

