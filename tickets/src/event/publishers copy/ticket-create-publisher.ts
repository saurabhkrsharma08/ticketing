import { Publisher, Subjects, TicketCreatedEvent } from "@ssticketes/common";


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
