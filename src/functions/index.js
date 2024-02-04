const { app } = require('@azure/functions');
const { messageUseCase } = require('./application/config/Configuration')

app.http('index', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        //const name = request.query.get('name') || await request.text() || 'world';

        const savedMessage = await messageUseCase.addMessage("Mensaje enviado exitosamente.");

        return { body: `Message : ${savedMessage.description}` };
        
    }
});
