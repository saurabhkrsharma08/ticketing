import { Publisher, OrderCreatedEvent, Subjects } from '@ssticketes/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
