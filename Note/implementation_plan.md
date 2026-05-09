# Build Frontend for LumiNex using Angular and Bootstrap

This plan outlines the steps to build the frontend application for LumiNex based on the provided directory structure, using Angular, Bootstrap for styling, and `json-server` (`db.json`) as a mock backend.

## User Review Required

> [!IMPORTANT]
> The Angular application is currently bootstrapped using the modern Standalone approach (`bootstrapApplication` in `main.ts`). Your folder structure references `*-module.ts` (e.g. `admin-module.ts`). 
> **Decision**: I propose we use Angular's modern Standalone Components and transform those `*-module.ts` and `*-routing-module.ts` files into routing configuration files (e.g., `admin.routes.ts`) for cleaner code, OR I can strictly follow the NgModule pattern you provided and adjust the bootstrap process. For now, the plan assumes we will build components as Standalone (default in Angular 21) and use the module/routing files to group the routes, which aligns with modern best practices while respecting your structure.

> [!IMPORTANT]
> **Bootstrap Installation**: The project does not currently have Bootstrap installed. The plan includes installing `bootstrap` and `bootstrap-icons` via npm and configuring them in `angular.json`.

## Open Questions

1. **Routing Strategy**: Should the shared layout (Navbar + Sidebar) be present for Admin, Client, and Staff routes, while the Auth routes (Login, Register) have a blank layout?
2. **Color Scheme/Aesthetics**: Do you have a preferred color palette for the LumiNex application, or should I proceed with a modern, premium dark/light theme with a primary brand color (e.g., deep blue or vibrant purple)?
3. **Mock Data**: Is there any specific mock data you want pre-populated in `db.json` for the services, requests, or users?

## Proposed Changes

### 1. Dependencies and Configuration

#### [MODIFY] `package.json`
- Add `bootstrap` and `bootstrap-icons` to dependencies.

#### [MODIFY] `angular.json`
- Add Bootstrap CSS and JS files to the `styles` and `scripts` arrays.

#### [MODIFY] `src/app/app.config.ts`
- Ensure `provideHttpClient(withInterceptors([jwtInterceptor]))` is configured for API calls.

---

### 2. Core & Shared Layer

#### [NEW] `src/app/core/models/*.ts`
- Define models for `user.ts`, `tenant.ts`, `service.ts`, `service-request.ts`, `payment.ts`, `notification.ts`.

#### [NEW] `src/app/core/services/*.ts`
- Implement `auth.services.ts`, `notification.service.ts`, `request.service.ts`, `service-catalogue.ts` to communicate with the `http://localhost:3000` (json-server).

#### [NEW] `src/app/shared/components/*`
- Build `navbar`, `sidebar`, `notification-bell`, `request-timeline`, `status-badge`. These will use Bootstrap components (Navbar, Offcanvas/Sidebar, Badges).

---

### 3. Authentication Module

#### [NEW] `src/app/auth/*`
- Build beautiful, modern `login` and `register` pages using Bootstrap forms and cards.
- Wire up to `auth.services.ts` to mock login/registration.

---

### 4. Client Module

#### [NEW] `src/app/client/*`
- Implement Client routing.
- **dashboard**: Overview of active requests and recent activities.
- **catalogue**: Grid of services offered.
- **request-form**: Bootstrap form for submitting a new service request.
- **my-requests** & **request-detail**: Data tables and detailed views with the `request-timeline` component.
- **plans**, **payments**, **profile**: Respective management pages.

---

### 5. Admin & Staff Modules

#### [NEW] `src/app/admin/*`
- Implement Admin routing.
- **dashboard**: High-level metrics.
- **client-management**, **service-management**, **staff-management**: CRUD data tables with Bootstrap Modals for editing.

#### [NEW] `src/app/staff/*`
- Implement Staff routing.
- **my-tasks**, **task-detail**: Kan-ban style or list view of assigned tasks.

---

### 6. App Level

#### [MODIFY] `src/app/app.routes.ts`
- Set up lazy loading for `/admin`, `/client`, `/staff`, and `/auth` routes.
- Integrate the `RoleGuard` to protect routes.

## Verification Plan

### Automated Tests
- Build the application using `ng build` to ensure no TypeScript or template errors exist.

### Manual Verification
1. Run `npm run server` to start `json-server`.
2. Run `npm start` to start the Angular dev server.
3. Verify visual aesthetics, ensuring Bootstrap is working correctly.
4. Test login flow and role-based redirects.
5. Verify that API requests are successfully hitting `localhost:3000` and rendering in the components.
