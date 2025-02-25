# Kahoot Challenge

This project is a **React application** for displaying a list of **Pokémon** and their details. It uses **React Query** for data fetching, **React Router** for routing, and **SCSS** for styling.

## 📜 Table of Contents
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
- [Testing](#testing)
- [Code Splitting](#code-splitting)
- [Styling](#styling)
- [Media Queries](#media-queries)

---

## 🚀 Installation
To install the project dependencies, run:
```sh
npm install
```

---

## 📌 Available Scripts
In the project directory, you can run:

### **Run the development server**
```sh
npm start
```
This will start the app in development mode. Open **[http://localhost:3000](http://localhost:3000)** to view it in your browser.

### **Run tests**
```sh
npm test
```
Launches the test runner in interactive watch mode.

### **Build the app**
```sh
npm run build
```
Creates an optimized production build in the `build/` folder.

---

## 📂 Project Structure
```
```
kahoot-challenge/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   │         └── pokeball.png
│   │   └── styles/
│   │         ├── variables.scss
│   │         └── media-queries.scss
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Loader/
│   │   │   │   ├── Loader.tsx
│   │   │   │   └── Loader.scss
│   │   │   │   └── index.ts
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.scss
│   │   │   │   └── index.ts
│   │   │   ├── Image/
│   │   │   │   ├── Image.tsx
│   │   │   │   └── Image.scss
│   │   │   │   └── index.ts
│   │   ├── molecules/
│   │   │   ├── Chip/
│   │   │   │   ├── Chip.tsx
│   │   │   │   └── Chip.scss
│   │   │   │   └── index.ts
│   │   │   ├── ItemStats/
│   │   │   │   ├── ItemStats.tsx
│   │   │   │   └── ItemStats.scss
│   │   │   │   └── index.ts
│   │   ├── organisms/
│   │   │   ├── ListItem/
│   │   │   │   ├── ListItem.tsx
│   │   │   │   └── ListItem.scss
│   │   │   │   └── index.ts
│   │   │   ├── ListItemDetails/
│   │   │   │   ├── ListItemDetails.tsx
│   │   │   │   └── ListItemDetails.scss
│   │   │   │   └── index.ts
│   │   │   ├── ListItemInfo/
│   │   │   │   ├── ListItemInfo.tsx
│   │   │   │   └── ListItemInfo.scss
│   │   │   │   └── index.ts
│   │   ├── templates/
│   │   │   ├── ListItemsTable/
│   │   │   │   ├── ListItemsTable.tsx
│   │   │   │   └── ListItemsTable.scss
│   │   │   │   └── index.ts
│   │   ├── index.ts
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.scss
│   │   ├── Details/
│   │   │   ├── Details.tsx
│   │   │   └── Details.scss
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── types.ts
│   ├── App.tsx
│   ├── Routes.ts
│   ├── index.tsx
│   ├── index.scss
│   ├── reportWebVitals.js
│   ├── images.d.ts
├── package.json
├── tsconfig.json
├── webpack.config.ts
├── jest.config.js
└── .babelrc
```
```

---

## 🎨 Components
### **Atoms**
- **Loader**: A loading spinner component.
- **Button**: A button component with various styles and sizes.
- **Image**: A component to display images.

### **Molecules**
- **Chip**: A small label-like component with colors.
- **ItemStats**: Displays item statistics.

### **Organisms**
- **ListItem**: Displays a list item with details.
- **ListItemDetails**: Shows detailed information about an item.
- **ListItemInfo**: Additional information for an item.

### **Templates**
- **ListItemsTable**: A table for displaying multiple list items.

### **Pages**
- **Home**: Displays a list of Pokémon.
- **Details**: Displays detailed information about a Pokémon.

---

## 🧪 Testing
This project uses **Jest** and **React Testing Library**. Test files are located alongside their respective components.

To run the tests:
```sh
npm test
```

---

## ✂️ Code Splitting
This project uses **React.lazy** and **Suspense** for code splitting. The `Home` and `Details` components are dynamically imported to enhance performance.

---

## 🎨 Styling
- **SCSS** is used for styling.
- Variables are defined in `variables.scss` for consistency.

---

## 📱 Media Queries
Breakpoints are defined in `media-queries.scss`:

| Device  | Width Range |
|---------|------------|
| 📱 Mobile  | 0 - 480px |
| 📲 Tablet  | 480px - 768px |
| 💻 Laptop  | 768px and above |

### **Example usage:**
```scss
@import './assets/styles/media-queries.scss';

.component {
  @include mobile {
    // Styles for mobile
  }
  @include tablet {
    // Styles for tablet
  }
  @include laptop {
    // Styles for laptop
  }
}
```

---

**Enjoy coding! 🚀**

