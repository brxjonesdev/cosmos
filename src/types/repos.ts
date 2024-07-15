export type SimpleRepo = {
    name: string;
    description: string;
    url: string;
    lastUpdate: {
        timestamp: number;
        type: "commit" | "release" | "issue" | "pull_request";
        description: string;
    };
}