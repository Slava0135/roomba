const random = Rand(0);

const roomba = extend(UnitType, "roomba", {

});

roomba.constructor = () => extend(MechUnit, {

});

roomba.defaultController = () => extend(AIController, {
    updateUnit() {
        if(random.chance(0.01)){
            let x = random.range(1);
            let y = random.range(1);
            this.vec.set(x, y);
            this.vec.setLength(this.unit.realSpeed());
            this.unit.lookAt(this.vec);
        }
        vec.set(Mathf.cosDeg(this.unit.rotation), Mathf.sinDeg(this.unit.rotation))
        this.unit.moveAt(vec);
    },
});