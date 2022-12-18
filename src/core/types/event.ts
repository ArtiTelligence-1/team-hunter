import { Discussion } from "./discussion";
import { EventLocation } from "./location";

export interface Event {
  id: string;
  owner: any;
  title: string;
  type: string;
  participantsLimit: number;
  participants: any[];
  ageLimitGap: {
    from: number;
    to: number;
  }
  holdingTime: Date;
  location: EventLocation;
  description: string;
  posterUrl: string;
  discussion: Discussion[];
};
