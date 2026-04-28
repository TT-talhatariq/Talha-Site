import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const ocrFormData = new FormData();
    ocrFormData.append('file', formData.get('file') as Blob);
    ocrFormData.append('apikey', process.env.OCR_API_KEY!);
    ocrFormData.append('language', 'eng');
    ocrFormData.append('isOverlayRequired', 'false');

    const response = await fetch('https://api.ocr.space/parse/image', {
      method: 'POST',
      body: ocrFormData,
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('OCR proxy error:', error);
    return NextResponse.json({ error: 'OCR request failed' }, { status: 500 });
  }
}
