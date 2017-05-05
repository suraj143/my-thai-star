export interface DishView {
    orderName: string;
    orderDescription: string;
    price: number;
    image: string;
    options: ExtraView[];
    likes: number;
    favourite: boolean;
}

export interface OrderView {
    orderName: string;
    price: number;
    options: ExtraView[];
    number: number;
    comment: string;
}

interface ImageView {
    name: string;
    content: string;
    type: ImageType;
    extension: string;
}

enum ImageType { BINARY, URL }

export interface ExtraView {
    name: string;
    price: number;
    selected: boolean;
}

export interface ReservationView {
    event: Event;
    adults: number;
    kids: number;
}

export interface InvitationView {
    event: Event;
    friends: string[];
}

export interface Event {
    date: string;
    hour: string;
    nameOwner: string;
    emailOwner: string;
    tableId: number;
}
