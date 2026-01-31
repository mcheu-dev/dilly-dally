import { Calendar } from "@/components/calendar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { createFileRoute } from "@tanstack/react-router";
import { Building2, UserRound, Clock } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { AddClassDialog } from "@/components/addClass";
import React from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const events = [
  {
    instructor: "Teacher A",
    date: "2026-01-28",
    studio: "Modega",
    duration: "85",
    type: "Choreography",
    level: "Intermediate"
  },
  {
    instructor: "Teacher B",
    date: "2026-01-29",
    studio: "Peridance",
    duration: "85",
    type: "House",
    level: "Beginner",
  },
  {
    instructor: "Teacher C",
    date: "2026-01-30",
    studio: "ILD (Manhattan)",
    duration: "85",
    type: "Choreography",
    level: "Intermediate"
  },
]

function Index() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const dateTitle = date
  ? format(date, "yyyy-MM-dd")
    : null;

  const formattedDisplayDate = date
  ? format(date, "MMMM d, yyyy")
  : null;

  const filteredClasses = events.filter(
    (event) => event.date === dateTitle
  );

  const modifiers = React.useMemo(() => ({
      hasEvents: (day: Date) => {
      return events.some((event) => {
        const d = new Date(event.date);
        return (
          d.getFullYear() === day.getFullYear() &&
          d.getMonth() === day.getMonth() &&
          d.getDate() + 1 === day.getDate()
        );
      });
    }
  }), [events]);
  const modifiersClass = {
    hasEvents: 'my-booked-class',
  }
  const classCount = filteredClasses.length

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
          modifiers={modifiers}
          modifiersClassNames={modifiersClass}
        ></Calendar>
        <div className="flex flex-row justify-between">
          <div className="text-m font-medium p-2">{formattedDisplayDate}</div>
          <div className="text-m font-medium p-2">{classCount} Classes</div>
        </div>
        <div>
          {filteredClasses.map((event) => (
            <Card className ="my-2">
              <CardHeader>
                <CardTitle>{event.type}</CardTitle>
                <CardDescription>
                  <div className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full inline-block mt-1 mb-8">{event.level}</div>
                  <div className="flex items-center gap-2"><Building2></Building2>{event.studio}</div>
                  <div className="flex items-center gap-2"><UserRound></UserRound>{event.instructor}</div>
                  <div className="flex items-center gap-2"><Clock></Clock>{event.duration} mins</div>
                </CardDescription>
                </CardHeader>
            </Card>
          ))}
        </div>
        <AddClassDialog></AddClassDialog>
      </div>
    </div>
  );
}