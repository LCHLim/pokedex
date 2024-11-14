import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import type { InfoCardProps } from "@/lib/definitions";
import Link from "next/link";

export default function InfoCard({ name, id, imageUrl }: InfoCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4 text-center">
        <div className="flex justify-center">
          <Link href={id.toString()}>
            <Image
              src={imageUrl}
              width={80}
              height={80}
              alt={`Picture of ${name}`}
              priority
            />
          </Link>
        </div>
        <p className="text-sm text-gray-500">#{id}</p>
        <Link href={id.toString()}>
          <p className="font-bold capitalize text-blue-800 hover:text-red-800 hover:underline">
            {name}
          </p>
        </Link>
      </CardContent>
    </Card>
  );
}
