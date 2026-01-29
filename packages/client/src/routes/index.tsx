import { Calendar } from "@/components/calendar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const events = [
  {
    instructor: "Teacher A",
    date: "2025-06-12",
    studio: "Modega",
    duration: "85",
    type: "Choreography",
    level: "Intermediate"
  },
  {
    instructor: "Teacher B",
    date: "2025-06-12",
    studio: "Peridance",
    duration: "85",
    type: "House",
    level: "Beginner"
  },
  {
    instructor: "Teacher C",
    date: "2025-06-12",
    studio: "ILD (Manhattan)",
    duration: "85",
    type: "Choreography",
    level: "Intermediate"
  },
]

function Index() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const dateTitle = date
  ? date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  : ""

  const classCount = events.length
  return (
    // Root container
    <div
      className={`
        bg-white p-2 text-black
        dark:bg-gray-800 dark:text-white
      `}
    >
      <h3 className="text-3xl font-bold">Dilly Dally Tracker</h3>
      <div className="m-6 w-fit">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm w-full max-w-sm"
          captionLayout="dropdown"
        ></Calendar>
        <div className="flex flex-row justify-between">
          <div className="text-m font-medium p-2">{dateTitle}</div>
          <div className="text-m font-medium p-2">{classCount} Classes</div>
        </div>
        <div>
          {events.map((event) => (
            <Card className="w-full max-w-sm m-2">
              <CardHeader>
                <CardTitle>{event.type}</CardTitle>
                <CardDescription>
                  <div class="mb-1">{event.level}</div>
                  <div>{event.instructor}</div>
                  <div>{event.studio} - {event.duration} mins</div>
                </CardDescription>
                </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}