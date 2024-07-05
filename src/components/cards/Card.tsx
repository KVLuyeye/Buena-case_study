interface CardProps {
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-8 py-4 px-6 shadow-xl rounded-lg min-w-[660px]">
      <h1 className="text-gray-500 font-semibold text-2xl">{title}</h1>
      <div>{children}</div>
    </div>
  );
};
