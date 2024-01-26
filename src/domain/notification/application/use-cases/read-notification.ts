import { left, right } from '@/core/either'
import {
  IReadNotificationUseCaseRequest,
  IReadNotificationUseCaseResponse,
} from './interfaces/IReadNotificationUseCase'
import { INotificationsRepository } from '../repositories/interfaces/notifications-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'

export class ReadNotificationUseCase {
  constructor(private notificationsRepository: INotificationsRepository) {}

  async execute({
    recipientId,
    notificationId,
  }: IReadNotificationUseCaseRequest): Promise<IReadNotificationUseCaseResponse> {
    const notification =
      await this.notificationsRepository.findById(notificationId)

    if (!notification) {
      return left(new ResourceNotFoundError())
    }

    if (recipientId !== notification.recipientId.toString()) {
      return left(new NotAllowedError())
    }

    notification.read()

    await this.notificationsRepository.save(notification)

    return right({
      notification,
    })
  }
}
