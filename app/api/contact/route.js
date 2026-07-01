import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email and message are required." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact request received successfully.",
        data: {
          name,
          email,
          company,
          message,
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 500 }
    );
  }
}