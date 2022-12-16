import { Notification } from '@app/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface GetRecipientRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientRecipientNotificationRequest,
  ): Promise<GetRecipientRecipientNotificationResponse> {
    const { recipientId } = request;
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);
    return {
      notifications,
    };
  }
}
