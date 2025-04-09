import { NextResponse } from 'next/server';
import { loginUser } from '../../../../lib/auth';

export async function POST(req) {
    const { email, password } = await req.json();
    const user = await loginUser(email, password);
    if (user) {
        return NextResponse.json({ success: true, user });
    }
    return NextResponse.json({ success: false });
}