import type { Tool } from "sanity";
import { PublishToSiteAction } from "@/sanity/tools/PublishToSiteAction";

export function publishToSiteTool(): Tool {
    return {
        name: "publish-to-site",
        title: "Publish to site",
        component: PublishToSiteAction,
    };
}
