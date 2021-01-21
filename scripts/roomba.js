const random = Rand(0);

const roomba = extend(UnitType, "roomba", {

});

roomba.constructor = () => extend(MechUnit, {

});

roomba.defaultController = () => extend(AIController, {
    updateUnit() {
        vec.set(Position(random.range(1), random.range(1)));
        vec.setLength(unit.realSpeed());
        unit.moveAt(vec)
    },
});