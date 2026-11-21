import { z } from 'zod';

export const TrackSchema = z.object({
  code: z.string(),
  slug: z.string(),
  title: z.string(),
  icon: z.string(),
  summary: z.string(),
  brief: z.string(),
});
export type Track = z.infer<typeof TrackSchema>;

export const PrizeSchema = z.object({
  rank: z.enum(['Winner', 'First Runner-up', 'Second Runner-up', 'Special Prize']),
  title: z.string(),
  amount: z.string().optional(),
  perks: z.array(z.string()),
  colorClass: z.string(),
});
export type Prize = z.infer<typeof PrizeSchema>;

export const RuleSchema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
});
export type Rule = z.infer<typeof RuleSchema>;

export const TimelineItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  date: z.string(),
  mode: z.enum(['online', 'offline']),
  description: z.string(),
});
export type TimelineItem = z.infer<typeof TimelineItemSchema>;

export const FaqItemSchema = z.object({
  q: z.string(),
  a: z.string(),
});
export type FaqItem = z.infer<typeof FaqItemSchema>;
