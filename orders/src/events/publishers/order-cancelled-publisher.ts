import { Subjects, Publisher, OrderCancelledEvent } from '@ssticketes/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
