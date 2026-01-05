@mavetic/mavetic-fe-form
=========================

FE form wrapper library that pairs TanStack React Form with MUI components to help build consistent, type‑safe forms quickly.

- Framework: React 19
- Form engine: @tanstack/react-form
- UI: MUI v7 (Material UI)
- TypeScript first

Features
--------
- Ready‑made field wrappers: TextField, Checkbox, Datepicker, Autocomplete, SubmitButton
- Simple form scaffold via `useAppForm` and `<Form />`
- Lazy‑loaded field components wired to a common form context
- Typed props and export paths for clean tree‑shaking

Installation
------------
Using pnpm (recommended):

```
pnpm add @mavetic/mavetic-fe-form
```

You must also install the peer dependencies in your app:

```
pnpm add react@19 react-dom@19 @tanstack/react-form @mui/material @mui/system @mui/x-date-pickers @emotion/react @emotion/styled @emotion/cache date-fns
```

Peer versions used in this library (minimums):
- react: 19.2.0
- react-dom: 19.2.0
- @tanstack/react-form: ^1.14.1
- @mui/material, @mui/system: ^7.2.0
- @mui/x-date-pickers: ^8.7.0
- @emotion/react, @emotion/styled, @emotion/cache: ^11.14.x
- date-fns: ^4.1.0

If you use npm or yarn:

```
npm i @mavetic/mavetic-fe-form # then add the peers above
# or
yarn add @mavetic/mavetic-fe-form
```

Quick start
-----------
The library exposes a `Form` component and a `useAppForm` hook from the root entry, and component‑level subpath exports for fields.

```tsx
import React from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { cs } from "date-fns/locale/cs";
import { Form, useAppForm, type UseAppForm } from '@mavetic/mavetic-fe-form';
import TextField from '@mavetic/mavetic-fe-form/components/TextField';
import Checkbox from '@mavetic/mavetic-fe-form/components/Checkbox';
import Datepicker from '@mavetic/mavetic-fe-form/components/Datepicker';
import Autocomplete from '@mavetic/mavetic-fe-form/components/Autocomplete';
import SubmitButton from '@mavetic/mavetic-fe-form/components/SubmitButton';

export default function ExampleForm() {
  const form = useAppForm({
    defaultValues: {
      name: '',
      accept: false,
      date: null as Date | null,
      city: null as string | null,
    },
    onSubmit: async ({ value }) => {
      console.log('Submit', value);
    },
  }) as UseAppForm;

  const cityOptions = [
    { label: 'New York', value: 'nyc' },
    { label: 'San Francisco', value: 'sfo' },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={cs}>
      <Form form={form}>
        <TextField
          formFieldProps={{ name: 'name' }}
          textFieldProps={{ label: 'Full name' }}
        />
  
        <Checkbox
          formFieldProps={{ name: 'accept' }}
          checkboxProps={{ label: 'Accept terms' }}
        />
  
        <Datepicker
          formFieldProps={{ name: 'date' }}
          datepickerProps={{ label: 'Date' }}
        />
  
        <Autocomplete
          formFieldProps={{ name: 'city' }}
          autocompleteProps={{ label: 'City', options: cityOptions }}
        />
  
        <SubmitButton label="Submit" />
      </Form>
    </LocalizationProvider>
  );
}
```

Notes:
- Each field component accepts two prop objects:
  - `formFieldProps`: props passed to the underlying `AppField` (at minimum, `name`).
  - `*Props` (e.g., `textFieldProps`, `checkboxProps`, `datepickerProps`, `autocompleteProps`): props forwarded to the specific MUI‑based field component.
- `SubmitButton` takes `{ label: string }`.

Exports
-------
- Root entry: `@mavetic/mavetic-fe-form`
  - `Form` (named export)
  - `useAppForm` (named export)
  - `context`, `hooks`, `utils` (named exports)
- Per‑component subpaths (tree‑shake friendly):
  - `@mavetic/mavetic-fe-form/components/TextField`
  - `@mavetic/mavetic-fe-form/components/Checkbox`
  - `@mavetic/mavetic-fe-form/components/Datepicker`
  - `@mavetic/mavetic-fe-form/components/Autocomplete`
  - `@mavetic/mavetic-fe-form/components/SubmitButton`

Theming
-------
Components are built on MUI v7. Ensure your app wraps UI with `ThemeProvider` and uses the required Emotion cache/provider when needed (per MUI docs).
You can use `@mavetic/mavetic-fe-gui`'s `GuiProvider` to wrap the app with MUI theme (contains a cache provider for NextJS).

Datepicker relies on `@mui/x-date-pickers` and supports `date-fns`.
App using date pickers needs to be wrapped in `LocalizationProvider` with `AdapterDateFns` and preferred locale.

Local development
-----------------
- Storybook alternative (Ladle):
  ```
  pnpm story
  ```
- Build the library:
  ```
  pnpm build
  ```
- Lint & format (Biome):
  ```
  pnpm lint
  ```
- Run tests (Vitest + Testing Library):
  ```
  pnpm test
  ```

Publishing
----------
Build artifacts are emitted to `dist/` via `tsdown` and are the only files included in the package.

License
-------
This project is licensed under MIT license (see LICENSE file)
