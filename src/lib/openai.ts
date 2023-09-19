import 'dotenv/config'
import { OpenAI } from "openai";

export const openai = new OpenAI({
  organization: "org-MQh88ZkNuug6Mc85GUVbAIyD",
  apiKey: process.env.OPENAI_KEY,
})