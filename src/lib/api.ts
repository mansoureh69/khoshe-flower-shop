/**
 * API client for connecting to the existing ASP.NET Core backend
 * Repository: https://github.com/mansoureh69/Flower-shop
 *
 * In development the Next.js rewrite proxies /api/* → your ASP.NET backend
 * Set NEXT_PUBLIC_API_URL in .env.local for production
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export type Product = {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category?: string;
  isAvailable?: boolean;
  // add more fields according to your ASP.NET Product DTO
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  fullName?: string;
};

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Attach JWT if available
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("khosheh_token");
    if (token) {
      (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
    }
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || `API error ${res.status}`);
  }

  // Some endpoints may return empty body
  const text = await res.text();
  return text ? JSON.parse(text) : ({} as T);
}

// ---------- Auth ----------
export async function login(data: LoginRequest) {
  return request<{ token: string; user?: any }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function register(data: RegisterRequest) {
  return request<{ token: string; user?: any }>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ---------- Products ----------
export async function getProducts(params?: {
  category?: string;
  search?: string;
}) {
  const query = new URLSearchParams();
  if (params?.category) query.set("category", params.category);
  if (params?.search) query.set("search", params.search);

  const qs = query.toString();
  return request<Product[]>(`/api/products${qs ? `?${qs}` : ""}`);
}

export async function getProduct(id: string | number) {
  return request<Product>(`/api/products/${id}`);
}

// ---------- Cart ----------
export async function addToCart(productId: string | number, quantity = 1) {
  return request("/api/carts/items", {
    method: "POST",
    body: JSON.stringify({ productId, quantity }),
  });
}

// ---------- Orders ----------
export async function createOrder(payload: any) {
  return request("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
