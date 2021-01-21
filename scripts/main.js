Vars.enableConsole = true

const roomba = Vars.content.getByName(ContentType.unit, "roomba-roomba");
const random = Rand(0);

Events.run(Trigger.update, () => {
    for (let team of Vars.state.teams.present) {
        for (let core of team.cores) {
            let x = core.x + random.range(64);
            let y = core.y + random.range(64);
            Fx.unitSpawn.at(x, y, 0, roomba);
            roomba.spawn(team, x, y);
        }
    }
});