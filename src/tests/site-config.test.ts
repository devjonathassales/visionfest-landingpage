import { describe, expect, it } from "vitest";
import { siteConfig } from "@/lib/site-config";

describe("siteConfig", () => {
  it("should define the VisionFest site name", () => {
    expect(siteConfig.name).toBe("VisionFest");
  });

  it("should define a valid title", () => {
    expect(siteConfig.title).toContain("VisionFest");
  });

  it("should define a base description", () => {
    expect(siteConfig.description.length).toBeGreaterThan(10);
  });
});
