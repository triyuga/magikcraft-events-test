import Events from './Events';

export const spells = {
    _default: () => Events.registerAll(), // This is all that is required to run MCT1

    // Below: Utility functions only, not required for MCT1 operation.
    registerAll: () => Events.registerAll(),
    unregisterAll: () => Events.unregisterAll(),
}
