import { Card, CardContent } from "@/components/ui/card";

export default function InfoCard() {
  return (
    <Card className="w-full">
      <CardContent className="p-4 text-center">
        <div className="flex justify-center">
          <div className="mb-4 h-20 w-20 bg-black"></div>
        </div>
        <p>#001</p>
        <p>name</p>
        <p>type</p>
      </CardContent>
    </Card>
  );
}
