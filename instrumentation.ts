// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {
    tracker.track({
        projectName: "mw-project-newvercel",
        serviceName: "mw-service-newvercel",
        accountKey: "erqorzulkqdjgdrptjcwrrzacohsousghiqk",
        target: "vercel",
    });
    tracker.info("Instrumentation Done please check now new vercel data.");
}