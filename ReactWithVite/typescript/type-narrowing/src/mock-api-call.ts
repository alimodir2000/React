export interface RequestDto {
  name: string;
  email: string;
  password: string;
}

// export function mockFetch(url: string): Promise<Response> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() < 0.7; // 70% chance

//       if (success) {
//         resolve(new Response(JSON.stringify({ message: "Success", url }), {
//           status: 200,
//           headers: { 'Content-Type': 'application/json' }
//         }));
//       } else {
//         reject(new Error("Mock fetch failed"));
//       }
//     }, 3000); // Simulate network delay
//   });
// };


export function mockFetch(url: string, data: RequestDto): Promise<Response> {
  return new Promise<Response>((resolve, rejec) => {
    const success = Math.random() < 0.8;
    setTimeout(() => {
      if (success) {
        resolve(new Response(JSON.stringify({ message: "Account Created Successfully!", url }), {
          status: 200, headers: { 'Content-Type': 'application/json' }
        }));
      }
      else {
        rejec(new Error("Something Wrong, Try agian later"));
      }
    }, 3000);
  });
}
