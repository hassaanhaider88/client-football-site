export default async function getUserByToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const response = await fetch("/api/getbytoken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  const data = await response.json();
  if (data.success) {
    return data;
  } else {
    return null;
  }
}
