import { describe, expect, it } from "vitest";

describe("X API Bearer Token Validation", () => {
  it("should have a valid bearer token configured", async () => {
    const bearerToken = process.env.X_BEARER_TOKEN;
    
    expect(bearerToken).toBeDefined();
    expect(bearerToken).not.toBe("");
    expect(bearerToken!.length).toBeGreaterThan(50); // Bearer tokens are typically long
  });

  it("should successfully authenticate with X API (or be rate limited)", async () => {
    const bearerToken = process.env.X_BEARER_TOKEN;
    
    // Test the token by fetching user info for a known account
    const response = await fetch(
      "https://api.twitter.com/2/users/by/username/RH_Youth_",
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    
    // Accept either success (200) or rate limited (429) as valid responses
    // Both indicate the token is properly configured
    expect([200, 429]).toContain(response.status);
    
    if (response.status === 200) {
      const data = await response.json();
      expect(data.data).toBeDefined();
      expect(data.data.username.toLowerCase()).toBe("rh_youth_");
    } else if (response.status === 429) {
      // Rate limited is acceptable - it means the token is valid but we've hit limits
      console.log("X API rate limited - token is valid but rate limit exceeded");
    }
  });
});
