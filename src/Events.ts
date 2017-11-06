const magik = magikcraft.io;
const log = magik.dixit;

declare const Java: any;
const HandlerList = Java.type("org.bukkit.event.HandlerList");
const Listener = Java.type("org.bukkit.event");
const EventPriority = Java.type("org.bukkit.event.EventPriority");
const EventCallback = Java.type("io.magikcraft.EventCallback");

const eventTypes = {
	PlayerMoveEvent: 'org.bukkit.event.player.PlayerMoveEvent',
};

const Listeners: any = {};

const Events = {

	registerAll: () => {
		// const handlerList = new HandlerList();
		for (let type in eventTypes) {
			const javaType = eventTypes[type];
			log('registering event: ' + type);
			log('javaType: ' + javaType);
			Listeners[type] = new Listener();

			magik.getPlugin().registerEvent(
				Java.type(javaType).class,
				Listeners[type],
				EventPriority.MONITOR,
				true,
				new EventCallback({
					callback: function (event: any) {
						log('event: ' + type);
						// Emitter.emit(type, event);
					}
				})
			);
		}
	},

	unregisterAll: () => {
		// for (let type in Listeners) {
		// 	log('unregistering: ' + type);
		// 	const listener = Listeners[type];
		// 	HandlerList.unregister(listener);
		// 	// const javaType = eventTypes[type];
		// 	// const eventClass = Java.type(javaType).class;
		// 	// eventClass.getHandlerList().unregister(1);
		// }
	}
};

export default Events;