interface DescribeProps {
  title: string;
  paragraph: string;
}

export function Describe({ title, paragraph }: DescribeProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
