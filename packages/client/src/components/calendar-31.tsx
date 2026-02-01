"use client"

import * as React from "react"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/button"
import { Calendar } from "@/components/calendar"
import { Card, CardContent, CardFooter } from "@/components/card"

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

export default function Calendar31() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <Card className="w-fit py-4">
      <CardContent className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-transparent p-0"
          required
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 border-t px-4 !pt-4">
        <div className="flex w-full items-center justify-between px-1">
          <div className="text-sm font-medium">
            {date?.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-6"
            title="Add Event"
          >
            <PlusIcon />
            <span className="sr-only">Add Event</span>
          </Button>
        </div>
        <div className="flex w-full flex-col gap-2">
          {events.map((event) => (
            <div
              key={event.instructor}
              className="bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full"
            >
              <div className="font-medium">{event.instructor}</div>
              <div className="text-muted-foreground text-xs">
                {event.studio} {event.duration}min {event.type} ({event.level})
              </div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
