const random = Rand(0);

const roomba = extend(UnitType, "roomba", {

});

roomba.constructor = () => extend(MechUnit, {

});

roomba.defaultController = () => extend(AIController, {
    updateUnit() {
        if(random.chance(1)){
            let x = random.range(1);
            let y = random.range(1);
            this.vec.set(x, y);
            this.vec.setLength(this.unit.realSpeed());
            this.vec.set(this.unit.x + this.vec.x, this.unit.y + this.vec.y);
            this.unit.lookAt(this.vec);
        }
        if(random.chance(0.2)){
            this.vec.set(Mathf.cosDeg(this.unit.rotation), Mathf.sinDeg(this.unit.rotation));
            this.vec.setLength(this.unit.realSpeed());
            this.unit.moveAt(this.vec);
        }
    },
});