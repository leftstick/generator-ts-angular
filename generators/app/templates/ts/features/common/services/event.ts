
export class EventUtil {
    stop(e: Event) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (e.preventDefault) {
            e.preventDefault();
        }
    }
};
