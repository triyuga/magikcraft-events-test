"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magik = magikcraft.io;
var log = magik.dixit;
var HandlerList = Java.type("org.bukkit.event.HandlerList");
var Listener = Java.type("org.bukkit.event").class;
var EventPriority = Java.type("org.bukkit.event.EventPriority");
var EventCallback = Java.type("io.magikcraft.EventCallback");
var eventTypes = {
    PlayerMoveEvent: 'org.bukkit.event.player.PlayerMoveEvent',
};
var Listeners = {};
var Events = {
    registerAll: function () {
        var _loop_1 = function (type) {
            var javaType = eventTypes[type];
            log('registering event: ' + type);
            log('javaType: ' + javaType);
            Listeners[type] = new Listener();
            magik.getPlugin().registerEvent(Java.type(javaType).class, 
            // Listeners[type],
            EventPriority.MONITOR, true, new EventCallback({
                callback: function (event) {
                    log('event: ' + type);
                    // Emitter.emit(type, event);
                }
            }));
        };
        // const handlerList = new HandlerList();
        for (var type in eventTypes) {
            _loop_1(type);
        }
    },
    unregisterAll: function () {
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
exports.default = Events;
