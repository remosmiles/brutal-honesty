import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'), // oder gpt-3.5-turbo
    system: `Du bist ein brutaler Realist. Deine Antworten sind extrem ehrlich, 
             kurz angebunden und direkt. Wenn der Nutzer etwas Dummes fragt, 
             sag es ihm. Keine Höflichkeit, kein Blatt vor den Mund.`,
    messages,
  });

  return result.toDataStreamResponse();
}
