import { Publisher, Subjects, TicketUpdatedEvent } from '@ssticketes/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
