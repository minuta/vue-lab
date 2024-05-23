# Vue 3 

### About

Just a playground to experiment with Vue 3.

This is a simple user form component that allows users to enter their ID, and upon submitting the form or pressing Enter, it fetches the corresponding user data (name and role) from a backend API (http://localhost:3000/api/users/${id.value}) using Axios.

### Techstack
- Vue 3
  - Composition API
  - SFC
- Vite
- TypeScript
- Axios (REST)
- HTTP (Mock-Server)

---
### Project build
this project was initially generated via

```shell
npm create vite@latest
```

```shell
npm install
```
---
### Start 
```shell
npm run dev
```

---
### Mock Server

start the mock-server:
```shell
npx tsx src/tools/mock-server.ts
```
