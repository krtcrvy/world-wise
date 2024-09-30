# WorldWise Project Documentation

## Table of Contents

1. Introduction
2. [Project Structure](#project-structure)
3. Installation
4. [Running the Project](#running-the-project)
5. [Available Scripts](#available-scripts)
6. Configuration
7. Dependencies
8. Components
9. Contexts
10. Pages
11. Routing
12. Styling
13. API
14. License

## Introduction

WorldWise is a React application built with Vite. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules. The project includes various components, contexts, and pages to manage and display city and country information.

## Project Structure

```
.env.local
.eslintrc.json
.gitignore
biome.json
data/
	cities.json
index.html
package.json
public/
README.md
src/
	App.jsx
	components/
		AppNav.jsx
		AppNav.module.css
		BackButton.jsx
		Button.jsx
		Button.module.css
		City.jsx
		City.module.css
		CityItem.jsx
		CityItem.module.css
		CityList.jsx
		CityList.module.css
		CityMap.jsx
		CityMap.module.css
		CountryItem.jsx
		CountryItem.module.css
		CountryList.jsx
		...
	contexts/
	hooks/
	index.css
	main.jsx
	pages/
vercel.json
vite.config.js
```

## Installation

To install the project dependencies, run:

```sh
npm install
```

## Running the Project

To start the development server, run:

```sh
npm run dev
```

## Available Scripts

- [`dev`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A3%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A18%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): Starts the Vite development server.
- [`build`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A7%2C%22character%22%3A3%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): Builds the project for production.
- [`preview`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A3%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): Previews the production build.
- [`server`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A3%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): Starts a JSON server to serve the [`data/cities.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fdata%2Fcities.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\data\cities.json") file.

## Configuration

The project uses Vite for configuration. The Vite configuration file is located at [`vite.config.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\vite.config.js").

## Dependencies

### Main Dependencies

- [`react`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A7%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A3%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A18%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A32%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^18.2.0
- [`react-dom`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A7%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^18.2.0
- [`react-router-dom`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A56%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^6.9.0
- `json-server`: ^0.17.3
- [`leaflet`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A3%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^1.9.3
- [`react-leaflet`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A7%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^4.2.1
- [`react-datepicker`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A7%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^4.11.0

### Development Dependencies

- [`@vitejs/plugin-react`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A19%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^3.1.0
- [`eslint`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A26%2C%22character%22%3A3%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^8.36.0
- `eslint-config-react-app`: ^7.0.1
- [`vite`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A10%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A51%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A20%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): ^4.2.0
- `vite-plugin-eslint`: ^1.8.1
- `@types/react`: ^18.0.28
- `@types/react-dom`: ^18.0.11
- `@babel/plugin-proposal-private-property-in-object`: ^7.21.11
- `@biomejs/biome`: 1.9.2

## Components

The components are located in the [`src/components`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fcomponents%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\components") directory. Some key components include:

- [`City`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fcomponents%2FCity.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22City%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\components\City.jsx")
- [`CityList`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fcomponents%2FCityList.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22CityList%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\components\CityList.jsx")
- [`CountryList`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fcomponents%2FCountryList.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22CountryList%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\components\CountryList.jsx")
- [`Form`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fcomponents%2FForm.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22Form%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\components\Form.jsx")
- [`SpinnerFullPage`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fcomponents%2FSpinnerFullPage.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22SpinnerFullPage%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\components\SpinnerFullPage.jsx")

## Contexts

The contexts are located in the [`src/contexts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fcontexts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\contexts") directory. Key contexts include:

- `CitiesContext`
- `FakeAuthContext`

## Pages

The pages are located in the [`src/pages`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fpages%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\pages") directory. Key pages include:

- [`Homepage`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fpages%2FHomepage.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22Homepage%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\pages\Homepage.jsx")
- [`Product`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fpages%2FProduct.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22Product%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\pages\Product.jsx")
- [`Pricing`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fpages%2FPricing.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22Pricing%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\pages\Pricing.jsx")
- [`Login`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fpages%2FLogin.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22Login%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\pages\Login.jsx")
- [`AppLayout`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fpages%2FAppLayout.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22AppLayout%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\pages\AppLayout.jsx")
- [`PageNotFound`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fpages%2FPageNotFound.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22PageNotFound%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\pages\PageNotFound.jsx")
- [`ProtectedRoute`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fpages%2FProtectedRoute.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22ProtectedRoute%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\pages\ProtectedRoute.jsx")

## Routing

The routing is managed using [`react-router-dom`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A56%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition") and is defined in the [`App`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22App%22%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\App.jsx") component. Key routes include:

- [`/`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A33%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fvite.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A26%7D%7D%5D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "Go to definition"): Homepage
- `/product`: Product page
- `/pricing`: Pricing page
- `/login`: Login page
- `/app`: Protected route with nested routes for cities, countries, and forms.

## Styling

The project uses CSS modules for styling. The styles are located alongside their respective components in the [`src/components`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fsrc%2Fcomponents%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\src\components") directory.

## API

The project uses a JSON server to serve city data from the [`data/cities.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fworld-wise%2Fdata%2Fcities.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ec8e07e-5a72-4371-b0a8-accef7ad6acc%22%5D "c:\\Users\karbi\Documents\GitHub\world-wise\data\cities.json") file. To start the JSON server, run:

```sh
npm run server
```

## License

This project is licensed under the MIT License.
