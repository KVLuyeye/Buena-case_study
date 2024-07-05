interface CardProps {
  children: React.ReactNode;
}
const CardHeader: React.FC<CardProps> = ({ children }) => (
  <header className="text-gray-500 font-semibold text-2xl">{children}</header>
);

const CardBody: React.FC<CardProps> = ({ children }) => <div>{children}</div>;

const CardActions: React.FC<CardProps> = ({ children }) => (
  <footer className="flex justify-end">{children}</footer>
);

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Actions: typeof CardActions;
} = ({ children }) => (
  <div className="flex flex-col gap-8 py-4 px-6 shadow-xl rounded-lg min-w-[660px]">
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;
