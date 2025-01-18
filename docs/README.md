backend/
    prisma/
        schema.prisma // Defines database schema using Prisma ORM.
    src/
        controllers/
            authController.js // Handles user authentication and JWT logic.
            profileController.js // Manages user profile operations and social linking.
            campaignController.js // Manages campaign CRUD operations.
            matchmakingController.js // Handles manual matchmaking functionality.
            chatController.js // Handles chat messages and encryption.
        middleware/
            authMiddleware.js // Verifies JWT tokens for protected routes.
            validationMiddleware.js // Validates incoming data for endpoints.
            encryptionMiddleware.js // Encrypts/decrypts data when needed.
        models/
            userModel.js // Defines logic related to user data.
            linkedProfileModel.js // Handles linked social profiles.
            campaignModel.js // Manages campaign data interactions.
            matchModel.js // Manages matchmaking records.
            chatModel.js // Handles chat data.
        routes/
            authRoutes.js // Defines routes for authentication.
            profileRoutes.js // Routes for user profile and social linking.
            campaignRoutes.js // Routes for campaign management.
            matchmakingRoutes.js // Routes for matchmaking operations.
            chatRoutes.js // Routes for chat interactions.
        services/
            encryptionService.js // Provides AES-256 encryption for tokens.
            jwtService.js // Handles JWT creation and validation.
            oauthService.js // Manages OAuth integrations for platforms.
            rsaService.js // Provides RSA encryption for chat messages.
        utils/
            validators.js // Custom validation utilities.
            constants.js // Defines shared constants like roles or status values.
            errorHandler.js // Centralized error handling logic.
        app.js // Main Express app setup with routes and middleware.
        server.js // Initializes and starts the backend server.
    .env

frontend/
    prisma/ // Shared Prisma client instance.
    public/
    src/
        components/
            Auth/
                LoginForm.tsx // Component for user login.
                RegisterForm.tsx // Component for user registration.
            Profile/
                UserProfile.tsx // Component for displaying/editing user profile.
                LinkSocial.tsx // Component for linking social profiles.
            Campaign/
                CampaignList.tsx // Displays advertiser’s campaigns.
                CampaignForm.tsx // Form for creating/editing campaigns.
                CampaignDetails.tsx // Shows detailed view of a campaign.
            Matchmaking/
                CreatorList.tsx // Lists creators for advertisers to browse.
                MatchRequestForm.tsx // Allows advertisers to request matches.
            Chat/
                ChatWindow.tsx // Main chat interface.
                MessageBubble.tsx // Displays individual messages.
        pages/
            index.tsx // Landing page.
            login.tsx // Login page.
            register.tsx // Registration page.
            profile.tsx // User profile page.
            campaigns.tsx // Campaigns overview page.
            matchmaking.tsx // Manual matchmaking interface.
            chat.tsx // Chat interface page.
        styles/
            globals.css
        utils
            api.ts // Axios setup for API requests.
            validators.ts // Validation utilities for forms.
            constants.ts // Shared constants for frontend.
    .env.local
