export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="p-4 md:px-24 lg:px-40 mx-auto">{children}</div>;
}
