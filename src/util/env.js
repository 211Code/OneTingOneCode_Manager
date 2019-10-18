// 用于配置Token，上下文路径，Target等，为开发环境提供支持
// 开发环境需要手动配置以下变量，生产环境由后台传入页面
//if (process.env.NODE_ENV === "development") {
    window.localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRDb2RlIjoiODAwIiwiaXNzIjoiTUlORyIsImV4cCI6MTU2OTAzNDgyNywiaWF0IjoxNTY4OTQ4NDI3LCJ1c2VyQ29kZSI6ImFkbWluIn0.q2YSdLMfVapuzHRhAxh0Zt2a9UTDzbtYY2YJWJbvitA");
    //window.localStorage.setItem("target", "");
    //window.localStorage.setItem("project", "console");
    // 根路径(baseURL)
    rootCtx = "http://192.168.1.24:8802";
    //permissions = JSON.parse("{\"add\":true,\"edit\":true,\"update\":true,\"delete\":false}");
    // 页面设计器上下文路径
    remoteCtx = rootCtx + "/console" + window.localStorage.getItem("target");
    // 页面ID，如果开发时需要保存配置到某一个页面
     //pageId = "185228701430976512";
     //pageId = "";
//}