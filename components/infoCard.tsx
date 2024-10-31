import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface InfoCardProps {
  name: string;
  id: number;
  imageUrl: string;
}

export default function InfoCard({ name, id, imageUrl }: InfoCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4 text-center">
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            width={80}
            height={80}
            alt={`Picture of ${name}`}
          />
          {/* <div className="mb-4 h-20 w-20 bg-black"></div> */}
        </div>
        <p>#{id}</p>
        <p className="capitalize">{name}</p>
        <p>type</p>
      </CardContent>
    </Card>
  );
}
