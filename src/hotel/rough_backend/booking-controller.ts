import type RoomTypeWithAvailableRooms;

class BookingController {
    createBooking: (req, res)=> { 
        const userId = req.userId;
        const {hotelId, checkInDate, checkOutDate, roomSelections } = req.body;
        if(! any of them) res.error
        const availableRoomsTypes: RoomTypeWithAvailableRooms[] = availabilityService.getAvailability({hotelId, checkInDate, checkOutDate,});
        //schema validation would be at the base 
        const roomSelectionErrors = 
        for(const roomSelection of roomSelections){
            const {roomTypeId, count} = roomSelection;
            const realRoomType = availableRoomsTypes.find(rt => rt.id === roomTypeId )
            if(realRoomType.availableRooms >= count){
                console.log('this roomType can be selected');
            }
            else{
                console.log('this roomType cannot be selected');
            }

        }
    }
}