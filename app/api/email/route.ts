import { sendEmail } from "@/actions/mail";

export async function POST(req: Request) {
  try {
    const receipient = {
      name: "quincy Davis Ministries",
      address: "chatwithjohnjoseph@gmail.com",
    };

    const { sender, message, subject } = await req.json();

    const result = await sendEmail({ sender, receipient, message, subject });

    return Response.json({
      result,
    });
  } catch (error) {
    console.log("====================================");
    console.log("SEND EMAIL ERROR", error);
    console.log("====================================");

    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}