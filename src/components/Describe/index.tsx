interface DescribeProps {
  title: string;
  paragraph: string;
  className?: string;
}

export function Describe({ title, paragraph, className }: DescribeProps) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
