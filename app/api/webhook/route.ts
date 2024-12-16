import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Future-proof webhook handler for other payment gateways
export async function POST(req: Request) {
  try {
    const body = await req.text();
    // Replace with a generic webhook processing logic if needed

    // Placeholder for other event types from a future payment system
    // Example:
    // const event = someOtherPaymentSystem.webhooks.constructEvent(body);
    
    // Logic to handle different types of events
    // if (event.type === "payment_success") {
    //   const { userId, courseId } = event.data;
    //   if (!userId || !courseId) {
    //     return new NextResponse(`Error: Missing data`, { status: 400 });
    //   }

    //   // Process payment and enroll user in the course
    //   await db.purchase.create({
    //     data: {
    //       courseId,
    //       userId,
    //     }
    //   });
    // }
    
    return new NextResponse("Webhook received", { status: 200 });
  } catch (error) {
    console.log("[WEBHOOK_ERROR]", error);
    return new NextResponse("Error processing webhook", { status: 500 });
  }
}
