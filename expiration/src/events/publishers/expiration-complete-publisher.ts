import { Subjects, Publisher, ExpirationCompleteEvent } from "@ssticketes/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete; 
}