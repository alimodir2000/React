export interface RequestDto {
  name: string;
  email: string;
  password: string;
}

export function mockFetch(url: string): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.7; // 70% chance

      if (success) {
        resolve(new Response(JSON.stringify({ message: "Success", url }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }));
      } else {
        reject(new Error("Mock fetch failed"));
      }
    }, 1000); // Simulate network delay
  });
};
