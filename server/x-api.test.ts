import { describe, expect, it } from "vitest";

describe("X API Bearer Token Validation", () => {
  it("should successfully authenticate with X API", async () => {
    const bearerToken = process.env.X_BEARER_TOKEN;
    
    expect(bearerToken).toBeDefined();
    expect(bearerToken).not.toBe("");
    
    // Test the token by fetching user info for a known account
    const response = await fetch(
      "https://api.twitter.com/2/users/by/username/RH_Youth_",
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    
    expect(response.status).toBe(200);
    
    const data = await response.json();
    expect(data.data).toBeDefined();
    expect(data.data.username.toLowerCase()).toBe("rh_youth_");
  });
});
