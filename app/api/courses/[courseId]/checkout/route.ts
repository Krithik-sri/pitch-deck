import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser();

    if (!user || !user.id || !user.emailAddresses[0]?.emailAddress) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        isPublished: true
      }
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: params.courseId
        }
      }
    });

    if (purchase) {
      return new NextResponse("Already purchased", { status: 400 });
    }

    // Directly enroll the user without payment
    await db.purchase.create({
      data: {
        userId: user.id,
        courseId: params.courseId
      }
    });

    return NextResponse.json({ message: "Successfully enrolled in the course!" });

  } catch (error) {
    console.log("[COURSE_ID_ENROLLMENT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
