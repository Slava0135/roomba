const random = Rand(0);

const roomba = extend(UnitType, "roomba", {

});

roomba.constructor = () => extend(MechUnit, {

});

roomba.defaultController = () => extend(AIController, {
    updateUnit() {
        this.vec.set(Position(random.range(1), random.range(1)));
        this.vec.setLength(this.unit.realSpeed());
        this.unit.moveAt(this.vec)
    },
});