# SEOWala AI - AI-Powered SEO Assistant

## 1. Title and Description

**SEOWala AI** is a comprehensive web application designed to empower individuals and businesses with advanced AI-driven SEO tools. This platform streamlines the process of optimizing digital content for higher search engine rankings, offering specialized features for YouTube videos, website meta tags, social media posts, and keyword research. With a user-friendly interface, personalized dashboards, and a tiered subscription model, SEOWala AI helps users boost their online visibility and achieve smarter growth.

## 2. Tech Stack

The SEOWala AI platform is built with a modern and robust tech stack, ensuring high performance, scalability, and an excellent developer experience.

*   **Frontend**:
    *   [Next.js](https://nextjs.org/) (v16.1.1 - React Framework)
    *   [React](https://react.dev/) (v19.2.3)
    *   [Tailwind CSS](https://tailwindcss.com/) (for rapid UI development and styling)
    *   [React Icons](https://react-icons.github.io/react-icons/) (for a wide range of customizable icons)
    *   [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview) & [react-markdown](https://github.com/remarkjs/react-markdown) (for rendering markdown content)

*   **Backend**:
    *   [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) (Node.js runtime)
    *   [MongoDB](https://www.mongodb.com/) (NoSQL Database)
    *   [Mongoose](https://mongoosejs.com/) (v9.1.4 - MongoDB object data modeling for Node.js)
    *   [JSON Web Tokens (JWT)](https://jwt.io/) (v9.0.3 - for secure user authentication)
    *   [bcryptjs](https://github.com/dcodeIO/bcrypt.js) (v3.0.3 - for password hashing)

*   **AI Integration**:
    *   [Google Gemini AI](https://ai.google.dev/) (via `@google/genai` v1.39.0 - for AI content generation)

## 3. Project Structure

The project follows a well-organized structure, primarily leveraging Next.js's App Router conventions for logical grouping of routes and components.

```
.
├── app/
│   ├── (Auth)/                  # Authentication pages (Login, Signup)
│   │   ├── login/
│   │   └── signup/
│   ├── (Pages)/                 # Main application pages
│   │   ├── about/               # About Us page
│   │   ├── dashboard/           # User dashboard
│   │   ├── support/             # Support contact page
│   │   ├── upgrade/             # Pro upgrade page (QR payment)
│   │   └── use-ai/              # AI chat interface
│   ├── api/                     # Next.js API Routes for backend logic
│   │   ├── (auth)/              # Authentication-related API endpoints
│   │   │   ├── getbytoken/      # Fetch user by token
│   │   │   ├── login/           # User login
│   │   │   └── signup/          # User registration
│   │   ├── query/               # Submit user support queries
│   │   └── use-ai/              # AI interaction and chat management APIs
│   │       ├── DeleteChat/      # Delete chat history
│   │       ├── new-chat/        # Create new chat or add messages
│   │       └── [chatId]/        # Fetch messages for a specific chat
│   ├── components/              # Reusable React components
│   │   ├── ChatSutructure/      # Components to format AI responses for specific services
│   │   │   ├── KeywordGens.jsx
│   │   │   ├── MediaPost.jsx
│   │   │   ├── WebsiteMetaTags.jsx
│   │   │   └── YtVideoSeo.jsx
│   │   ├── ... (General UI components like NavBar, Footer, HeroSection, PriceSection, etc.)
│   ├── Data/                    # Static data used across the application (FAQs, pricing, testimonials)
│   │   ├── faq.js
│   │   ├── Price.js
│   │   └── Testimonial.js
│   ├── lib/                     # Utility functions and helpers
│   │   ├── AIResponse.js        # Integrates with Google Gemini AI
│   │   ├── dbConnect.js         # MongoDB connection utility
│   │   ├── getHeadingFromAI.js  # Generates chat headings using AI
│   │   ├── getUserByToken.js    # Client-side helper to fetch user data
│   │   └── systemPrompts.js     # Defines AI system prompts for different services
│   ├── modals/                  # Mongoose schemas for MongoDB collections
│   │   ├── Chat.js
│   │   ├── Message.js
│   │   ├── Queries.js
│   │   ├── Room.js              # (Potentially unused or placeholder)
│   │   └── User.js
│   ├── store/                   # React Context for global state management
│   │   ├── UseChatData.js
│   │   └── UserDataContext.js
│   ├── public/                  # Static assets (images, fonts, etc.)
│   ├── HomePage.jsx             # Aggregates sections for the landing page
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout for the application
│   ├── loading.jsx              # Loading fallback UI
│   ├── not-found.jsx            # Custom 404 page
│   └── page.js                  # Root page component (renders HomePage)
├── package.json                 # Project dependencies and scripts
├── jsconfig.json                # JavaScript configuration
└── tsconfig.json                # TypeScript configuration (even though project is JS, Next.js generates this)
```

## 4. Key Features

*   **AI-Powered SEO Tools**: Leverage Google Gemini AI to generate optimized content for various digital marketing needs:
    *   **YouTube Video SEO**: Craft compelling video titles, descriptions, tags, and hashtags to maximize discoverability and watch time.
    *   **Website Meta Tags**: Generate SEO-friendly meta titles, descriptions, primary, and secondary keywords for web pages.
    *   **Social Media Posts**: Create engaging captions, strong calls-to-action, relevant hashtags, and define the appropriate tone for social media content.
    *   **Keyword Research**: Discover primary, long-tail, and low-competition keywords along with search intent analysis to target the right audience.
*   **Secure User Authentication**: Robust user signup and login system using JWT for secure, personalized access.
*   **Interactive AI Chat Interface**: Engage directly with the AI assistant, submit queries, and receive structured, actionable SEO recommendations.
*   **Personalized User Dashboard**: A dedicated dashboard providing a quick overview for authenticated users, including status and access to AI tools.
*   **Comprehensive Chat History**: Easily access and manage past AI conversations, with the ability to delete old chats.
*   **Pro Subscription Model**: Unlock advanced, premium SEO tools (e.g., specific YouTube and Social Media post optimizations) with a "Pro" plan.
*   **Integrated Support System**: A dedicated contact form for users to submit queries and receive assistance.
*   **Informative & Engaging Landing Page**: Features sections for Hero, About Us, Pricing, Testimonials, FAQs, and trusted brands.
*   **Responsive and Modern UI**: Built with Tailwind CSS, ensuring a seamless user experience across all devices.

## 5. API Endpoints

### Authentication & User Management

*   **`POST /api/signup`**
    *   **Description**: Registers a new user with name, email, and password.
    *   **Request Body**:
        ```json
        {
          "name": "string",
          "email": "string",
          "password": "string"
        }
        ```
    *   **Response**: Returns success status, a message, user details (name, email, isPro, chats), and a JWT token.
        ```json
        {
          "success": true,
          "message": "Signup successful",
          "user": { "name": "string", "email": "string", "isPro": false, "chats": [] },
          "token": "string"
        }
        ```
*   **`POST /api/login`**
    *   **Description**: Authenticates an existing user with email and password.
    *   **Request Body**:
        ```json
        {
          "email": "string",
          "password": "string"
        }
        ```
    *   **Response**: Returns success status, a message, user details (name, email, isPro, chats), and a JWT token upon successful login.
        ```json
        {
          "sucess": true,
          "message": "User Log in sucessfully",
          "user": { "name": "string", "email": "string", "isPro": false, "chats": [] },
          "token": "string"
        }
        ```
*   **`POST /api/getbytoken`**
    *   **Description**: Retrieves user information based on a provided JWT token.
    *   **Request Body**:
        ```json
        {
          "token": "string"
        }
        ```
    *   **Response**: Returns success status, a message, user details (name, email, isPro, chats), and the validated token.
        ```json
        {
          "success": true,
          "user": { "name": "string", "email": "string", "isPro": false, "chats": [...] },
          "token": "string",
          "message": "User found"
        }
        ```

### AI Chat & Content Generation

*   **`POST /api/use-ai/new-chat`**
    *   **Description**: Initiates a new AI chat session or adds a message to an ongoing one, generating an AI response based on the specified service.
    *   **Request Body**:
        ```json
        {
          "userToken": "string",
          "chatId": "string | null", // Optional: if continuing an existing chat
          "userMessage": "string",
          "serviceUsed": "YtVideoSeo | MetaTags | MediaPost | KeywordGens"
        }
        ```
    *   **Response**: Returns success status, a message, and the ID of the active chat.
        ```json
        {
          "success": true,
          "chatId": "string"
        }
        ```
*   **`GET /api/use-ai/<chatId>`**
    *   **Description**: Fetches all messages belonging to a specific chat ID, ordered chronologically.
    *   **Request Path Parameter**: `<chatId>` (e.g., `/api/use-ai/65c3e03d4b68e7b3a9c7d42e`)
    *   **Response**: An array of message objects.
        ```json
        [
          {
            "_id": "string",
            "chatId": { "_id": "string", "userId": "string", ... },
            "role": "user | ai",
            "content": "string",
            "serviceUsed": "string",
            "createdAt": "Date",
            "updatedAt": "Date",
            "__v": 0
          }
          // ... more message objects
        ]
        ```
*   **`POST /api/use-ai/DeleteChat`**
    *   **Description**: Deletes a specific chat conversation and its associated messages.
    *   **Request Body**:
        ```json
        {
          "chatId": "string"
        }
        ```
    *   **Response**: Returns success status and a confirmation message.
        ```json
        {
          "success": true,
          "message": "Chat deleted successfully."
        }
        ```

### Support & Queries

*   **`POST /api/query`**
    *   **Description**: Allows users to submit support queries through a contact form.
    *   **Request Body**:
        ```json
        {
          "name": "string",
          "email": "string",
          "message": "string"
        }
        ```
    *   **Response**: Returns success status and a message indicating whether the query was submitted successfully.
        ```json
        {
          "success": true,
          "message": "Query submitted successfully"
        }
        ```

## 6. Setup Instructions

To get SEOWala AI up and running on your local machine, follow these steps:

### Prerequisites

*   **Node.js**: Ensure you have Node.js (v18 or higher recommended) installed. You can download it from [nodejs.org](https://nodejs.org/).
*   **MongoDB**: A running instance of MongoDB. You can either install it locally, use a Docker container, or set up a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
*   **Git**: For cloning the repository.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url> # Replace <repository-url> with the actual URL
    cd seo-wala
    ```

2.  **Install Dependencies**:
    Navigate to the project directory and install all required Node.js packages.
    ```bash
    npm install
    # or if you prefer Yarn
    yarn install
    ```

3.  **Environment Variables**:
    Create a file named `.env.local` in the root directory of the project. This file will store your sensitive environment variables.

    ```
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/<dbname>?retryWrites=true&w=majority
    JWT_SECRET=YOUR_VERY_STRONG_SECRET_KEY_FOR_JWT
    GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
    ```

    *   **`MONGODB_URI`**: Your MongoDB connection string. If using MongoDB Atlas, copy the "Connect your application" string. Replace `<username>`, `<password>`, and `<dbname>` with your actual database credentials and desired database name.
    *   **`JWT_SECRET`**: A strong, random string that will be used to sign and verify JSON Web Tokens. You can generate one using an online tool or programmatically.
    *   **`GEMINI_API_KEY`**: Obtain your API key from [Google AI Studio](https://makersuite.google.com/dashboard) (formerly Google Cloud Console for Gemini API).

4.  **Run the Development Server**:
    Start the Next.js development server.
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  **Access the Application**:
    Open your web browser and navigate to `http://localhost:3000`. The application should now be running locally.
