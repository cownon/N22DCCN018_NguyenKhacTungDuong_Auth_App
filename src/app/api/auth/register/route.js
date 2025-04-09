import { NextResponse } from 'next/server';
import { registerUser } from '../../../../lib/auth';


export async function POST(req) {
    const { email, password } = await req.json();
    const success = await registerUser(email, password);
    return NextResponse.json({ success });
}
