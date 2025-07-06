import { NextRequest, NextResponse } from 'next/server';

// This would typically integrate with your email service (SendGrid, Mailgun, etc.)
// For now, we'll simulate the email sending process

interface EmailRequest {
  email: string;
  pathway: string;
}

const pathwayData = {
  fullstack: {
    title: 'Full Stack Development Pathway',
    description: 'Complete roadmap to becoming a full stack developer',
    pdfUrl: '/pdfs/fullstack-pathway.pdf' // This would be your actual PDF URL
  },
  design: {
    title: 'UI/UX Design Pathway',
    description: 'Complete roadmap to becoming a UI/UX designer',
    pdfUrl: '/pdfs/design-pathway.pdf'
  },
  marketing: {
    title: 'Digital Marketing Pathway',
    description: 'Complete roadmap to becoming a digital marketer',
    pdfUrl: '/pdfs/marketing-pathway.pdf'
  }
};

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json();
    const { email, pathway } = body;

    // Validate input
    if (!email || !pathway) {
      return NextResponse.json(
        { error: 'Email and pathway are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate pathway
    if (!pathwayData[pathway as keyof typeof pathwayData]) {
      return NextResponse.json(
        { error: 'Invalid pathway selected' },
        { status: 400 }
      );
    }

    const selectedPathway = pathwayData[pathway as keyof typeof pathwayData];

    // Here you would integrate with your email service
    // Example with a hypothetical email service:
    
    /*
    await emailService.send({
      to: email,
      subject: `Your ${selectedPathway.title} is Ready!`,
      template: 'pathway-pdf',
      data: {
        pathwayTitle: selectedPathway.title,
        pathwayDescription: selectedPathway.description,
        pdfUrl: selectedPathway.pdfUrl,
        userEmail: email
      },
      attachments: [
        {
          filename: `${pathway}-pathway.pdf`,
          path: selectedPathway.pdfUrl
        }
      ]
    });
    */

    // For demonstration, we'll just log the email details
    console.log('Email would be sent to:', email);
    console.log('Pathway:', selectedPathway.title);
    console.log('PDF URL:', selectedPathway.pdfUrl);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real implementation, you might also:
    // 1. Save the email to your database/CRM
    // 2. Add them to your email marketing list
    // 3. Track the conversion for analytics
    // 4. Send a welcome email sequence

    return NextResponse.json({
      success: true,
      message: 'PDF sent successfully',
      pathway: selectedPathway.title
    });

  } catch (error) {
    console.error('Error sending pathway PDF:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}