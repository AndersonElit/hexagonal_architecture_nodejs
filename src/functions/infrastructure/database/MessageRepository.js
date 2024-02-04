class MessageRepository {
    constructor() {
        this.messages = [];
        this.nextId = 1;
    }

    async addMessage(message) {
        message.id = this.nextId++;
        this.messages.push(message);
        return message;
    }

    async getMessage(id) {
        return this.messages.find(message => message.id === id);
    }

}

module.exports = MessageRepository;