"use server";

import { type RequestDemoForm } from "../schemas";

export async function submitRequestDemo(data: RequestDemoForm) {
  const coreApiUrl = process.env.CORE_API_URL;
  const clientKey = process.env.CLIENT_KEY;

  const res = await fetch(
    `${coreApiUrl}/v2/internal/notification/website/mail/send`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Client: clientKey ?? "",
      },
      body: JSON.stringify(data),
    },
  );

  if (!res.ok) {
    console.error("API Error:", res);
    throw new Error(res.statusText);
  }

  return res.json();
}
