export interface RoomType {
  id: number;
  hotelId: number;
  name: string;
  description: string | null;
  basePrice: number;
  isActive: boolean;
  adults: number;
  children: number;
  createdAt: string;
  updatedAt: string;
  // Optional nested associations
  hotel?: Hotel;
}

export type RoomTypeWithAvailableRooms = RoomType &  {  availableRooms?: number;}
export type RoomTypesWithAvailableRooms= RoomTypeWithAvailableRooms[]; //note the 's'; this is RoomTypes..


/**
 * Hotel image entity
 */
export interface HotelImage {
  id: number;
  hotelId: number;
  imageUrl: string;
  isPrimary: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Hotel entity
 */
export interface Hotel {
  id: number;
  name: string;
  description: string | null;
  street: string;
  city: string;
  country: string;
  amenities: string[] | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  // Optional nested associations
  images?: HotelImage[];
  roomTypes: RoomType[]
}

/**
 * Hotel list item (minimal fields for list views)
 */
export interface HotelListItem {
  id: number;
  name: string;
  description: string | null;
  street: string;
  city: string;
  country: string;
  image: string | null; // primary image URL or null
}

export type CurrentlySelectedRooms = { 
  [roomType: string] : number
}