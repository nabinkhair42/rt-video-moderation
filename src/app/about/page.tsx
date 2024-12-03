"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 min-h-[90vh] max-w-xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            About StreamGuard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground text-justify">
            StreamGuard is a cutting-edge AI-powered video moderation tool
            designed to ensure safety on live streaming platforms. It analyzes
            video content in real-time, detecting harmful, inappropriate, or
            prohibited material, and provides moderators with actionable
            insights to act swiftly and protect the community.
          </p>
        </CardContent>
      </Card>

      {/* Developer Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Meet the Developer
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Image
              src="https://avatars.githubusercontent.com/u/139687168?"
              alt="Developer Image"
              className="rounded-full w-32 h-32 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">Nabin Khair</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer
            </p>
          </div>
          <p className="text-lg text-muted-foreground text-justify">
            I am passionate full-stack developer with a focus on building
            AI-powered applications that enhance user experience and safety on
            the web. With a strong background in both frontend and backend
            technologies, John strives to create intuitive and scalable
            solutions.
          </p>
          <div className="flex gap-4">
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link href="https://github.com/nabinkhair42">
                <Github className="h-5 w-5" />
                Nabin Khair
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
