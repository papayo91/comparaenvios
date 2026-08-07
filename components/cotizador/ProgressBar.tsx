type ProgressBarProps = {
  paso: number;
  total: number;
};

export default function ProgressBar({
  paso,
  total,
}: ProgressBarProps) {
  const porcentaje = (paso / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">
          Paso {paso} de {total}
        </span>

        <span>{Math.round(porcentaje)}%</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${porcentaje}%` }}
        />
      </div>
    </div>
  );
}