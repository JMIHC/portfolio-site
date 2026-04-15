# Scaffold Site

Scaffolds a new React Router website project using the Netlify template, installs dependencies, enforces SPA mode, and starts the dev server.

---

## Steps

1. Run the scaffolding command:

```
npx create-react-router@latest --template netlify/react-router-template
```

Follow the prompts and accept defaults.

2. Move into the project directory and install dependencies:

```
cd <project-name>
npm install
```

3. Ensure SPA mode is enabled. Open `react-router.config.ts` and confirm it contains:

```ts
export default {
  ssr: false,
};
```

If `ssr` is not set to `false`, update the file.

4. Start the dev server:

```
npm run dev
```

5. Confirm the default page loads at http://localhost:5173.

Tell the user to keep the dev server running and open a second terminal tab for further work.
