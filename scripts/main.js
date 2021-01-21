Vars.enableConsole = true

let roomba = Vars.content.getByName(ContentType.unit, "roomba-roomba");
let random = Rand(0);

Events.run(Trigger.update, () => {
    Vars.state.teams.present.each((team) => {
        team.cores.each((core) => {
            let x = core.x + random.range(64);
            let y = core.y + random.range(64);
            Fx.unitSpawn.at(x, y, 0, roomba);
            roomba.spawn(team, x, y);
        });
    });
});