import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRecipientsRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientsRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientsRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientsRecipientNotificationRequest,
  ): Promise<CountRecipientsRecipientNotificationResponse> {
    const { recipientId } = request;
    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );
    return {
      count,
    };
  }
}
