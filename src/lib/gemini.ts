import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Function to encode an image to base64
async function encodeImageToBase64(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString('base64');
  return `data:${response.headers.get('content-type') || 'image/jpeg'};base64,${base64}`;
}

// Main function to analyze video frame
export async function analyzeVideoFrame(imageUrl: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

    const prompt = `
      Analyze this video frame for the following:
      1. Prohibited objects (e.g., weapons, drugs)
      2. Violence or aggressive behavior
      3. Explicit or inappropriate content
      4. Emotional state of individuals (e.g., distress, anger)

      Provide a concise summary of any issues found, or state 'No issues detected' if the frame appears safe.
      Format the response as a JSON object with the following structure:
      {
        "issues": ["issue1", "issue2"],
        "summary": "Brief description of findings",
        "severity": "low|medium|high"
      }
    `;

    const base64Image = await encodeImageToBase64(imageUrl);

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Image,
          mimeType: 'image/jpeg'
        }
      }
    ]);

    const response = result.response.text();
    return response;
  } catch (error) {
    console.error('Error analyzing video frame:', error);
    return JSON.stringify({
      issues: ['Error analyzing frame'],
      summary: 'An error occurred during analysis',
      severity: 'high'
    });
  }
}

