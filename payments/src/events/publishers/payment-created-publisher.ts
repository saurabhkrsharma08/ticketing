import { Subjects, Publisher, PaymentCreatedEvent } from '@ssticketes/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
