interface ItemFooterProps {
  title: string;
  className?: string;
  data?: string[];
}

export function ItemFooter({ title, className, data }: ItemFooterProps) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <nav>
        {data.map((e) => (
          <a href="#" key={e}>
            {e}
          </a>
        ))}
      </nav>
    </div>
  );
}
