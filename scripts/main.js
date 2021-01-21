Vars.enableConsole = true

const roomba = Vars.content.getByName(ContentType.unit, "roomba-roomba");
const random = Rand(0);

Events.run(Trigger.update, () => {
    for (let team in Vars.state.teams.present) {
        for (let core in team.cores) {
            let x = 8 * (core.x + random.range(10));
            let y = 8 * (core.y + random.range(10));
            Fx.unitSpawn.at(x, y, 0, roomba);
            roomba.spawn(team, x, y);
        }
    }
});