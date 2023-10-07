import { NextRequest, NextResponse } from 'next/server';

// class CustomNextRequest extends NextRequest {
//   name: string;
//   password: string;

//   constructor(
//     input: URL | RequestInfo,
//     name: string,
//     password: string,
//     init?: RequestInit
//   ) {
//     init = init || undefined;
//     super(input, init as any);
//     this.name = name;
//     this.password = password;
//   }
// }

export type TRouteHandler = (req: NextRequest, res: NextResponse) => void;
