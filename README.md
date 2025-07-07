
## 📁 Folder Structure

### `app/dashboard/`
- Contains the main **Dashboard Page**.
- Includes a dedicated **Sass module** for styling.

### `app/auth/`
- Contains the **Login Page**.
- Uses a **custom style module** for styling.
- Includes a `validations/` folder with **Zod schemas** for form validation.

### `app/components/`
- Houses all reusable components.

#### `components/ui/`
- Contains UI primitives:
  - `Button`
  - `Input`

#### `components/QueryClientProviderWrapper.tsx`
- A **client-side component** that wraps the app with a configured **React Query client**.

### `types/`
- Contains **TypeScript type definitions** for API responses and other shared types.

### `services/`
- Includes **HTTP methods** and **Axios configuration** for API communication.

### `configs/`
- Stores **global configuration files**, such as the base **API URL**.

### `lib/`
- Contains utility classes.
- Includes `TokenManager`, a class responsible for managing tokens and other data in **localStorage**.

---

## 🧩 Tech Stack

- **React** (with App Router)
- **TypeScript**
- **Sass Modules**
- **Zod** (for schema validation)
- **React Query**
- **Axios**
- **LocalStorage** (via custom `TokenManager`)

---