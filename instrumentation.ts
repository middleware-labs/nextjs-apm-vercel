// @ts-ignore
import { track } from '@middleware.io/agent-apm-nextjs';

export function register() {
    track({
        projectName: "mw-project-vercel",
        serviceName: "mw-service-vercel",
        target: "vercel",
    });
}