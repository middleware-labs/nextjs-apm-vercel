// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {
    tracker.track({
        projectName: "mw-project-vercel",
        serviceName: "mw-service-vercel",
        accountKey: "erqorzulkqdjgdrptjcwrrzacohsousghiqk",
        target: "vercel",
    });
    tracker.info("Instrumentation Done please check now.");
}