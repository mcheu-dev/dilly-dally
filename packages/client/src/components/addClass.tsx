import { 
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogHeader,
    DialogFooter
     } from "./dialog";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupTextarea
} from "./input-group";
import {
    Field,
    FieldDescription,
    FieldLabel,
    FieldGroup
} from "./field";
import { Input } from "./input";
import { Button } from "./button";
import { Building2, UserRound, Clock } from "lucide-react";


export function AddClassDialog() {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button>Add New Class</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add New Class</DialogTitle>
                <DialogDescription>
                Fill out the details below to add a new class to your schedule.
                </DialogDescription>
            </DialogHeader>
            <FieldGroup>
                <Field>
                    <FieldLabel>Class Name</FieldLabel>
                    <Input/>
                    <FieldDescription>(Example: House, Choreography, Lite Feet)</FieldDescription>
                </Field>
                <Field>
                    <FieldLabel>Instructor</FieldLabel>
                    <InputGroup>
                    <InputGroupAddon><UserRound></UserRound></InputGroupAddon>
                    <InputGroupInput/>
                </InputGroup>
                </Field>
                <Field>
                    <FieldLabel>Studio</FieldLabel>
                    <InputGroup>
                    <InputGroupAddon><Building2></Building2></InputGroupAddon>
                    <InputGroupInput/>
                </InputGroup>
                </Field>
                <Field>
                    <FieldLabel>Class Duration</FieldLabel>
                    <InputGroup>
                    <InputGroupAddon><Clock></Clock></InputGroupAddon>
                    <InputGroupInput/>
                </InputGroup>
                </Field>
                <Field>
                    <FieldLabel>Class Notes</FieldLabel>
                    <InputGroup>
                    <InputGroupTextarea placeholder="Write a note..."></InputGroupTextarea>
                </InputGroup>
                </Field>
            </FieldGroup>
            <DialogFooter>
                <Button type="submit">Add Class</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
  );
}