interface WelcomeEmailProps {
  firstName: string;
}

export const WelcomEmailTemplate = ({ firstName }: WelcomeEmailProps) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);