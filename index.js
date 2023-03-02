const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
const chatGPT = async (prompt) => {
    const response = await openai.createChatCompletion( {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
    });
    console.log(response['data']['choices'][0]['message']['content']);
}
chatGPT('Give me a joke.')
