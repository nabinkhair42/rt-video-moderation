import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function analyzeVideoFrame(imageData: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Analyze this video frame for the following:
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
    }`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: imageData.split(',')[1],
          mimeType: 'image/jpeg',
        },
      },
    ]);

    // Clean up the response
    let responseText = result.response.text();
    responseText = responseText.replace(/```json|```/g, '').trim(); // Remove Markdown-style code fences

    return responseText;
  } catch (error) {
    console.error('Error analyzing video frame:', error);
    return JSON.stringify({
      issues: ['Error analyzing frame'],
      summary: 'An error occurred during analysis',
      severity: 'high',
    });
  }
}

