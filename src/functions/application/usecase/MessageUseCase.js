const Message = require('../../domain/model/Message');

class MessageUseCase {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }

    async addMessage(description) {
        const message = new Message(null, description);
        return this.messageRepository.addMessage(message);
    }

    async getMessage(id) {
        return this.messageRepository.getMessage(id);
    }
}

module.exports = MessageUseCase;