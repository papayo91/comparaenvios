import Link from "next/link";
import Card from "@/components/ui/Card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  buttonText,
  buttonColor,
  href,
}: ServiceCardProps) {
  return (
    <Card
      hover
      padding="lg"
      className="flex h-full flex-col rounded-3xl"
    >
      <div className="text-6xl">
        {icon}
      </div>

      <h3 className="mt-6 text-3xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {description}
      </p>

      <ul className="mt-8 space-y-3">

        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-slate-700"
          >
            <span className="text-green-600 font-bold">
              ✓
            </span>

            {feature}
          </li>
        ))}

      </ul>

      <Link
        href={href}
        className={`mt-10 rounded-xl py-4 text-center font-semibold text-white transition ${buttonColor}`}
      >
        {buttonText}
      </Link>
    </Card>
  );
}