# Conference Website Project

This is a collaborative Next.js project for a conference website. The project is structured to allow multiple team members to work on different sections simultaneously.

## Project Structure

The website consists of 5 main sections:

1. **Hero Section** (`components/sections/Hero.tsx`)
   - Main landing section
   - Assigned to: Team Member 1

2. **Agenda Section** (`components/sections/Agenda.tsx`)
   - Conference schedule and timeline
   - Assigned to: Team Member 2

3. **Slider Section** (`components/sections/Slider.tsx`)
   - Image carousel or featured content
   - Assigned to: Team Member 3

4. **Speakers Section** (`components/sections/Speakers.tsx`)
   - Speaker profiles and information
   - Assigned to: Team Member 4

5. **Footer Section** (`components/sections/Footer.tsx`)
   - Website footer with additional information
   - Assigned to: Team Member 5

## Custom Fonts Setup

To add the custom fonts to the project:

1. Create a `public/fonts` directory
2. Add the following font files:
   - Photograph-Signature.ttf
   - FuturaMdBT.ttf
   - NoContinue.ttf
   - Futura-Bold.ttf

3. Update the `app/layout.tsx` file with the font configurations (example provided in the file)

Currently, the project is using Inter font as a placeholder until the custom fonts are added.

## Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Guidelines

1. Each team member should work on their assigned section only
2. Create a new branch for your section:
   ```bash
   git checkout -b feature/section-name
   ```
3. Make your changes and commit regularly
4. Push your changes and create a pull request
5. Use the existing styling system (Tailwind CSS)
6. Maintain component-based architecture

## Technologies Used

- Next.js 13
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Custom Fonts (to be added)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT