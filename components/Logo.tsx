import Image from "next/image";

export default function Logo({
  className = "w-32 h-32",
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logo.png"
        alt="Tee Scents Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}