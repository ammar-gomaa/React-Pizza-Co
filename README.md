# 🍕 Fast React Pizza Co.

A pizza ordering app built with **React**, **Redux Toolkit** and **React Router data APIs**. Users browse the menu, build a cart, place an order (with optional priority delivery), autofill their address from geolocation, and track the order by its ID.

**[🔗 Live Demo](https://react-pizza-co-seven.vercel.app)**

![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_6.4+-CA4245?style=flat&logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

---

## ✨ Features

- **Menu**: fetched with a React Router **loader** before the page renders.
- **Cart**: add and remove items and update quantities, managed in a Redux Toolkit `cartSlice`.
- **Place orders**: submitted with a React Router **action**, with form validation such as phone number checks.
- **Priority orders**: optionally pay extra for faster delivery, and upgrade an existing order to priority.
- **Geolocation**: fills in the user's address automatically with the browser Geolocation API plus reverse geocoding, using a `createAsyncThunk`.
- **Order tracking**: search any order by its ID to see status and estimated delivery.
- **Responsive UI**: mobile-first layout with Tailwind CSS.

## 🧱 Tech Stack

| Area | Tools |
|------|-------|
| Core | React 18, Vite |
| State | Redux Toolkit (`cartSlice`, `userSlice`, async thunks) |
| Routing / data | React Router 6.4+ (`createBrowserRouter`, loaders, actions, `useFetcher`) |
| Styling | Tailwind CSS, Prettier Tailwind plugin |

## 📂 Project Structure

Feature-based organisation:

```
src/
├── features/
│   ├── cart/     # cartSlice, Cart, CartItem, UpdateItemQuantity ...
│   ├── menu/     # Menu, MenuItem
│   ├── order/    # CreateOrder, Order, SearchOrder, UpdateOrder
│   └── user/     # userSlice, CreateUser, Username
├── services/     # apiRestaurant, apiGeocoding
├── ui/           # AppLayout, Header, Button, Loader, Error ...
└── store.js
```

## 🚀 Getting Started

```bash
git clone https://github.com/ammar-gomaa/React-Pizza-Co.git
cd React-Pizza-Co
npm install
npm run dev
```

## 🙏 Credits

I built this project while following Jonas Schmedtmann's *The Ultimate React Course*. The restaurant API is provided by the course.

---

Built by **[Ammar Gomaa](https://github.com/ammar-gomaa)**
