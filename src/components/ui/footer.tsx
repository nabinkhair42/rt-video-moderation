"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" py-4 text-center border-t">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} StreamGuard. All rights reserved.
        </div>

        <div>
            <ul className="flex gap-4 mt-2">
                <Button asChild variant="link">
                    <Link href="/">Home</Link>
                </Button>
               <Button asChild variant="link">
                    <Link href="/about">About</Link>
                </Button>
            </ul>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-[1px] justify-center">
          <p className="text-sm">Made with ❤️ by</p>
          <Button asChild variant="link" className="flex items-center gap-2">
            <Link href="https://github.com/nabinkhair42">
              <Github className="h-5 w-5" />
              Nabin Khair
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
