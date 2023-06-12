// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {
    tracker.track({
        projectName: "mw-project-vercel",
        serviceName: "mw-service-vercel",
         accountKey: "erqorzulkqdjgdrptjcwrrzacohsousghiqk",
        target: "vercel",
    });
     tracker.info("Info Sample");
        tracker.warn("Warn Sample", {
            "tester": "Jagrut",
        });
        tracker.debug("Debug Sample");
        tracker.error("Error Sample");
}