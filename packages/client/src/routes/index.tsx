import { Button } from "@/components/button";
import { Calendar } from "@/components/calendar";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const dateTitle = date
  ? date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  : ""
  return (
    <div
      className={`
        bg-white p-2 text-black
        dark:bg-gray-800 dark:text-white
      `}
    >
      <h3 className="text-3xl font-bold">Dilly Dally Tracker</h3>
      <div className="m-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm w-full max-w-sm"
          captionLayout="dropdown"
        ></Calendar>
      </div>

      <div className="m-6">
        <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{dateTitle}</CardTitle>
              <CardDescription>
                Dilly Dally Log
              </CardDescription>
            </CardHeader>
            <CardContent>
              sdsfd
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
