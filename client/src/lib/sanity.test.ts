import { createClient } from '@sanity/client';
import { describe, it, expect } from 'vitest';

describe('Sanity Configuration', () => {
  it('should have valid Sanity configuration', async () => {
    const projectId = process.env.VITE_SANITY_PROJECT_ID;
    const dataset = process.env.VITE_SANITY_DATASET;

    expect(projectId).toBeDefined();
    expect(dataset).toBeDefined();

    const client = createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2023-05-03',
    });

    // Try to fetch a single document to verify connection
    // We use a query that should always return something or empty array, but not throw auth error
    try {
      await client.fetch('*[_type == "event"][0...1]');
    } catch (error: any) {
      // If it's an auth error or project not found, fail the test
      if (error.message?.includes('Project not found') || error.statusCode === 401) {
        throw new Error('Invalid Sanity credentials');
      }
      // Other errors might be due to schema not existing yet, which is fine for connectivity check
    }
  });
});
