type AlertProps = {
  children: React.ReactNode;
  type?: "success" | "error" | "warning" | "info";
};

export default function Alert({
  children,
  type = "info",
}: AlertProps) {
  const styles = {
    success: "bg-green-50 border-green-500 text-green-700",
    error: "bg-red-50 border-red-500 text-red-700",
    warning: "bg-yellow-50 border-yellow-500 text-yellow-700",
    info: "bg-blue-50 border-blue-500 text-blue-700",
  };

  return (
    <div
      className={`border-l-4 rounded-xl p-4 ${styles[type]}`}
    >
      {children}
    </div>
  );
}