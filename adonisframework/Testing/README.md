# AdonisJS Framework Testing Demo

This directory contains an **AdonisJS** backend project, specifically focused on **Testing**.

## 📌 Overview

**AdonisJS** is a TypeScript-first web framework for Node.js. This project explores its testing suite and how to perform unit and functional testing on an AdonisJS application.

## 🛠 Project Structure

- **`/app`**: Core application logic (Models, Controllers, Services).
- **`/config`**: Application configuration files.
- **`/start`**: Boot scripts and route definitions.
- **`/tests`**: The testing suite!
  - `functional/`: Functional tests that simulate HTTP requests.
  - `unit/`: Unit tests for individual classes or functions.
- **`/bin`**: Entry point for starting the application.

## 🚀 Key Commands

1.  **Run Development Server**: `node ace serve --watch`
2.  **Run Tests**: `node ace test`
3.  **Run Migrations**: `node ace migration:run`
4.  **Create a New Test**: `node ace make:test <name>`

## 🎯 Testing in AdonisJS

AdonisJS uses **Japa** as its primary testing framework. Check the `/tests` folder for examples of how we've tested our controllers and business logic!
