"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function NavigationButton({
  text,
  url,
  disabled,
}: {
  text: string;
  url: string;
  disabled: boolean;
}) {
  const router = useRouter();

  return (
    <Button
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={disabled ? "pointer-events-none opacity-50" : undefined}
      onClick={() => router.push(url)}
    >
      {text}
    </Button>
  );
}
