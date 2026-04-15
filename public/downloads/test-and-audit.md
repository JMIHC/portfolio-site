# Test and Audit

Installs Playwright, writes tests for all pages, runs an accessibility audit, and fixes any issues found.

---

## Prerequisites

- The dev server should be running (`npm run dev`)

## Steps

1. Install Playwright and its browsers:

```
npm install -D @playwright/test
npx playwright install
```

2. Install the accessibility testing library:

```
npm install -D @axe-core/playwright
```

3. Read the project's route definitions in `app/routes.ts` to identify all pages.

4. Write Playwright tests that verify:
   - Each page loads without errors
   - Navigation links between pages work correctly
   - Any forms have all expected fields
   - No pages return 404

5. Write an accessibility audit test using `@axe-core/playwright` that scans every page for WCAG violations.

6. Run all tests:

```
npx playwright test
```

7. If any tests fail, read the error output, fix the underlying issues in the code, and re-run until all tests pass.

8. Report the results to the user — what passed, what was fixed, and any remaining accessibility recommendations.
