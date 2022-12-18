import { Discussion } from "./discussion";

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
  location: {
    lat: number;
    lng: number;
    label: string;
  };
  description: string;
  posterUrl: string;
  discussion: Discussion[];
};
