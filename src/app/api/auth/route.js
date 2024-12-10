import dbConnect from "@/db/dbConnection";
import { User } from "@/modals/userModal";
import { hashPassword } from "@/lib/password"; //

export async function POST(req, res) {
  const { email, password, name } =  await req.json();

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User Already Exist' },
        { status: 400 }
      )}

    const hashedPassword = await hashPassword(password);

    const user = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      { success: 'User Created Successfully' },
      { status: 200 }
    )  } catch (error) {
    console.error("Error during sign-up:", error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )  }
}
