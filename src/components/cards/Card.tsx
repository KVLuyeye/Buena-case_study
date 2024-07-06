interface CardProps {
  children: React.ReactNode;
}
const CardHeader: React.FC<CardProps> = ({ children }) => (
  <header className="text-gray-500 font-semibold text-2xl py-2">
    {children}
  </header>
);

const CardBody: React.FC<CardProps> = ({ children }) => (
  <div className="flex flex-col">{children}</div>
);

const CardActions: React.FC<CardProps> = ({ children }) => (
  <footer className="grid grid-cols-3 grid-rows-1 justify-center items-center justify-items-center p-2">
    {children}
  </footer>
);

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Actions: typeof CardActions;
} = ({ children }) => (
  <div className="flex flex-col gap-8 py-4 px-4 md:px-6 shadow-xl rounded-lg md:min-w-[660px]">
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;
