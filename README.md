# Pitch Deck Practice Platform - Smart India Hackathon 2024

Welcome to the **Pitch Deck Practice Platform**, a web application designed for students to hone their pitching skills. This project was developed as part of the **Smart India Hackathon 2024**, evolving from an LMS to meet the judges' requirements.

## 🚀 Features

- **Pitch Practice Environment**: A dedicated space for students to create, refine, and present their pitch decks.
- **Personalized Profiles**: Manage your pitch deck history and track improvement.
- **Secure Authentication**: Powered by **Clerk** to ensure safe and seamless access.
- **Robust Backend**: Built with **Next.js** and **Prisma** for optimal performance and scalability.
- **Data Storage**: **MongoDB** ensures efficient and secure data handling.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)  
- **Backend**: [Prisma](https://www.prisma.io/)  
- **Database**: [MongoDB](https://www.mongodb.com/)  
- **Authentication**: [Clerk](https://clerk.dev/)  


## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **MongoDB** (Local or Atlas instance)
- **Clerk Account** for authentication

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pitch-deck-practice.git
   cd pitch-deck-practice
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Running the project

   During development
   ```bash
   npm run dev (development)
   ```
   
   During production
   ```bash
   npm run build
   npm start
   ```
4. Configure environment variables: Create a .env file in the root directory and add the following:
.env
  ```env
  DATABASE_URL="your_mongodb_connection_string"
  NEXT_PUBLIC_CLERK_FRONTEND_API="your_clerk_frontend_api"
  CLERK_API_KEY="your_clerk_api_key"
  ```

5. 💡 Acknowledgments
Smart India Hackathon 2024 for inspiring this project
The amazing team at Next.js, Prisma, MongoDB, and Clerk for their incredible tools
All students who use this platform to excel in their pitching skills!


Developed with ❤️ by Krithik Srinivas


   
   
