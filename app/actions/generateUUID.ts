"use server";

import { randomUUID } from "crypto";

export async function generateIngredientId(): Promise<string> {
  return `${Date.now()}-${randomUUID()}`;
}
