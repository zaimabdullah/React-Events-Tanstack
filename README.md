# React Events WebApp
Welcome to React Events WebApp! This is Events web application project that utilized the [Tanstack React Query](https://tanstack.com/query/latest).

### Weblink: [Live Website](#)

## Table of Contents
- [Introduction](#introduction)
- [Web Pages](#web-pages)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Introduction
The project is a React-based Events web application, leveraging the power of Tanstack Query(React Query) for efficient data fetching, and caching. It includes functionalities like data fetching, caching, mutations, form submissions, error handling, and integration with React Router for smooth navigation.

## Web Pages
|  Home                             |
|-----------------------------------------|
| ![home](https://github.com/zaimabdullah/React-Events-Tanstack/assets/36534973/013fc777-cf9c-4590-ac69-7a11d4ec31fb) |

|  Search Events                              |
|-----------------------------------------|
| ![search](https://github.com/zaimabdullah/React-Events-Tanstack/assets/36534973/c23d1c78-c5be-4122-b1ab-5cb89d7df608) |

|  Create new event                                                            |
|----------------------------------------------------------------------------------|
| ![create new event](https://github.com/zaimabdullah/React-Events-Tanstack/assets/36534973/6060b8bf-96fc-4f12-b151-83dc51fc92e4) |


|  Event Details                              |
|-----------------------------------------|
| ![event detail](https://github.com/zaimabdullah/React-Events-Tanstack/assets/36534973/7be39a80-8d2c-4506-9791-3faf067b686e) |

|  Edit Event                              |
|-----------------------------------------|
| ![edit](https://github.com/zaimabdullah/React-Events-Tanstack/assets/36534973/a838582e-6abb-4e60-bef2-595e8401d078) |


|  Delete Event                              |
|-----------------------------------------|
| ![delete](https://github.com/zaimabdullah/React-Events-Tanstack/assets/36534973/ce198f9c-c506-4ec3-bcc2-09d77fbb0184) |

## Features
- Data Fetching & Caching:
  - Utilizing Tanstack Query for efficient data fetching and caching.
  - Configuring query behaviors for stale time and garbage collection.
  - Implementing dynamic query functions and query keys for different components.

- Mutations & Optimistic Updating:
  - Handling mutations for creating, updating, and deleting events.
  - Implementing optimistic updating to reflect changes instantly and handle rollbacks in case of failures.
  - Managing mutations with onSuccess, onError, and onSettled properties.

- React Router Integration:
  - Integrating React Router for client-side routing.
  - Leveraging React Router's capabilities for data fetching and mutations with loaders and actions.
  - Ensuring efficient data fetching by avoiding redundant HTTP requests when used in conjunction with React Query.

- Form Submission & Validation:
  - Implementing form submissions for creating and editing events.
  - Performing client-side validation to ensure data integrity.
  - Provided user feedback for invalid form submissions, such as displaying error messages.

- UI Enhancements:
  - Implemented UI components such as modals for confirmation dialogs and progress bars for indicating loading states.
  - Added field validation to prevent submitting forms with empty input fields.
  - Provided feedback to users during data submission and mutation operations.

## Technologies Used
- React: JavaScript library for building user interfaces.
- React Query (Tanstack): Efficient data fetching and caching library.
- React Router: Declarative routing library for React applications.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
