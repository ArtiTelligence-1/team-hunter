export interface Event {
    eventId: number;
    title: string;
    typeOfEvent: number;
    numOfPeople: number;
    ageInterval: string;
    timeOfEvent: Date;
    location: string;
    description: string;
    tags: number[];
    currentNumOfPeople: number;
    chatId: number
}