import { onRequestPost as __api_debug_js_onRequestPost } from "C:\\Users\\USER\\.kiro\\Hyperchain Project\\hyperchain-landing\\functions\\api\\debug.js"
import { onRequestPost as __api_project_js_onRequestPost } from "C:\\Users\\USER\\.kiro\\Hyperchain Project\\hyperchain-landing\\functions\\api\\project.js"
import { onRequestPost as __api_subscribe_js_onRequestPost } from "C:\\Users\\USER\\.kiro\\Hyperchain Project\\hyperchain-landing\\functions\\api\\subscribe.js"
import { onRequestPost as __api_talent_js_onRequestPost } from "C:\\Users\\USER\\.kiro\\Hyperchain Project\\hyperchain-landing\\functions\\api\\talent.js"

export const routes = [
    {
      routePath: "/api/debug",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_debug_js_onRequestPost],
    },
  {
      routePath: "/api/project",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_project_js_onRequestPost],
    },
  {
      routePath: "/api/subscribe",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_subscribe_js_onRequestPost],
    },
  {
      routePath: "/api/talent",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_talent_js_onRequestPost],
    },
  ]