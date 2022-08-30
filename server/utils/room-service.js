const RoomModel = require('./../models/sessionRoom');
class RoomService {
    async create(payload) {
        const { name, roomType, ownerId } = payload;
        const room = await RoomModel.create({
            name,
            roomType,
            ownerId,
            participants: [ownerId],
        });
        return room;
    }

    async getAllRooms(types) {
        const rooms = await RoomModel.find({ roomType: { $in: types } })
            .populate('participants')
            .populate('ownerId')
            .exec();
        return rooms;
    }

    async getRoom(roomId) {
        const room = await RoomModel.findOne({ _id: roomId });
        return room;
    }
}
module.exports = new RoomService();