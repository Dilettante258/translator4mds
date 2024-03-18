import Cors from 'cors'
import OpenAI from 'openai';
import {OpenAIStream, StreamingTextResponse} from 'ai';


const cors = Cors({
  methods: ['GET', 'HEAD','POST']
})


// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY : '',
  baseURL: process.env.OPENAI_API_URL ? process.env.OPENAI_API_URL : 'https://api.openai.com',
  timeout: 100000,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {

  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    temperature: 0.5,
    messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}