const MessageRepository = require('../../infrastructure/database/MessageRepository');
const MessageUseCase = require('../usecase/MessageUseCase');

const messageRepository = new MessageRepository();
const messageUseCase = new MessageUseCase(messageRepository);

module.exports = { messageRepository, messageUseCase };