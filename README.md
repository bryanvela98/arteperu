# ArtePeru

**ArtePeru** is an e-commerce platform focused on selling artisanal products from Peru. This project was developed using modern technologies such as **React**, **Firebase** for data management, and **Material UI** for the user interface.

## Features

- **Modern User Interface**: Designed with Material UI and custom styles for an attractive and user-friendly experience.
- **Checkout Form**: Users can complete their information to finalize purchases.
- **Thank You Message**: A confirmation screen with a "Thank you for your purchase" message and a unique order number upon completing checkout.
- **Day/Night Mode**: Includes a button to toggle between day and night themes, a feature built from scratch to enhance user experience.
- **Dynamic Routing**: Navigation between different pages using React Router.
- **Notifications**: Implemented notifications using `sweetalert2` for alerts and `sonner` for key event notifications.

## Technologies Used

- **React**: Library for building user interfaces.
- **Firebase**: Backend for authentication and real-time database.
- **Material UI**: Ready-to-use UI components.
- **React Router**: Manages navigation between pages.
- **React Icons**: For easy icon addition.
- **SweetAlert2**: For visually attractive alerts.
- **Sonner**: For subtle in-app notifications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bryanvela98/arteperu.git
   cd arteperu
   ```

2. Clone the repository:

   ```bash
   npm install
   ```

3. Set up Firebase:

   ```bash
   npm install
   ```

- Create a Firebase project and add a web application.
- Get your Firebase configuration (API key, authDomain, etc.) and add it to a .env file in the root of the project:

  ```env
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  ```

4. Run the application in development mode:

   ```bash
   npm run dev
   ```

## Day/Night Mode Development

The Day/Night toggle button was manually created from scratch, without using additional libraries. This component allows users to switch between light and dark themes, offering better accessibility and a visually adaptable experience in various lighting conditions.
