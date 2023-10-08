import { NextRequest, NextResponse } from 'next/server';

export type TRouteHandler = (req: NextRequest, res: NextResponse) => void;
